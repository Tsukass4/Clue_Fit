import tkinter as tk
import random

# Datos
personajes = [
    "Max Powerlift",
    "Sofi FitQueen",
    "Elías CardioRush",
    "Bruno El Bulk",
    "Luna Pilates"
]

lugares = ["Cocina", "Sala", "Recámara", "Baño", "Patio"]

formas = [
    "Licuado proteico",
    "Galleta fitness",
    "Barrita proteica",
    "Helado proteico",
    "La tiró y la escondió"
]

# Casos
casos = {
    "El batido desaparecido": "Preparaste tu batido post-entreno… pero desapareció misteriosamente.",
    "La proteína fantasma": "Tu proteína estaba en el bote… pero ahora está vacío.",
    "El snack post-entreno": "Guardaste tu snack fitness… alguien lo encontró primero.",
    "El misterio del refri": "Abriste el refri… y tu proteína ya no estaba.",
    "La proteína prohibida": "Alguien decidió que tu proteína no era saludable… y actuó."
}

# Variables
intentos = 5
historial = []
caso_actual = ""

def nuevo_caso():
    global culpable, lugar_correcto, forma_correcta, intentos, historial, caso_actual

    culpable = random.choice(personajes)
    lugar_correcto = random.choice(lugares)
    forma_correcta = random.choice(formas)

    caso_actual = caso_var.get()

    intentos = 5
    historial = []

    resultado_label.config(text=casos[caso_actual])
    intentos_label.config(text=f"Intentos restantes: {intentos}")
    historial_label.config(text="Historial:\n")

# Historia dinámica
def generar_historia(p, l, f):
    historia = f"\n🔍 Investigas en la {l}...\n"

    if l == lugar_correcto:
        historia += "El lugar coincide con el crimen.\n"
    else:
        historia += "No hay señales claras aquí.\n"

    if f == forma_correcta:
        historia += f"Encuentras rastros de {f.lower()}.\n"
    else:
        historia += "No hay evidencia del consumo.\n"

    if p == culpable:
        historia += f"Las huellas coinciden con {p}.\n"
    else:
        historia += f"{p} parece inocente.\n"

    return historia

# Verificar
def verificar():
    global intentos

    if intentos <= 0:
        return

    p = personaje_var.get()
    l = lugar_var.get()
    f = forma_var.get()

    historia = generar_historia(p, l, f)

    historial.append(f"{p} - {l} - {f}")
    historial_label.config(text="Historial:\n" + "\n".join(historial))

    if p == culpable and l == lugar_correcto and f == forma_correcta:
        resultado_label.config(
            text=historia + "\n🔥 CASO RESUELTO 🔥",
            fg="#2ecc71"
        )
        intentos = 0
        intentos_label.config(text="🎉 Caso cerrado")
    else:
        intentos -= 1
        intentos_label.config(text=f"Intentos restantes: {intentos}")

        if intentos == 0:
            resultado_label.config(
                text=historia + f"\n💀 PERDISTE\nEra: {culpable} en {lugar_correcto} con {forma_correcta}",
                fg="#e74c3c"
            )
        else:
            resultado_label.config(text=historia + "\n❌ Sigue investigando", fg="white")

# UI
root = tk.Tk()
root.title("¿Quién se comió mi proteína?")
root.geometry("600x650")
root.config(bg="#121212")

tk.Label(root, text="💪 ¿Quién se comió mi proteína?",
         font=("Helvetica", 18, "bold"),
         bg="#121212", fg="white").pack(pady=10)

# Selector de caso
caso_var = tk.StringVar(value=list(casos.keys())[0])

tk.Label(root, text="Selecciona el caso:",
         bg="#121212", fg="white").pack()

tk.OptionMenu(root, caso_var, *casos.keys()).pack(pady=5)

# Variables juego
personaje_var = tk.StringVar(value=personajes[0])
lugar_var = tk.StringVar(value=lugares[0])
forma_var = tk.StringVar(value=formas[0])

frame = tk.Frame(root, bg="#1e1e1e", padx=15, pady=15)
frame.pack(padx=20, fill="x")

def selector(texto, var, opciones):
    tk.Label(frame, text=texto, bg="#1e1e1e", fg="white").pack(anchor="w")
    tk.OptionMenu(frame, var, *opciones).pack(pady=5)

selector("🕵️ Sospechoso", personaje_var, personajes)
selector("📍 Lugar", lugar_var, lugares)
selector("🍫 Forma", forma_var, formas)

tk.Button(root, text="Iniciar Caso",
          command=nuevo_caso,
          bg="#f39c12", fg="white").pack(pady=5)

tk.Button(root, text="Investigar",
          command=verificar,
          bg="#27ae60", fg="white").pack(pady=5)

intentos_label = tk.Label(root, text="Intentos restantes: 5",
                          bg="#121212", fg="white")
intentos_label.pack()

historial_label = tk.Label(root, text="Historial:\n",
                           bg="#121212", fg="white",
                           justify="left")
historial_label.pack(pady=10)

resultado_label = tk.Label(root,
                           text="Selecciona un caso y comienza...",
                           bg="#121212",
                           fg="white",
                           wraplength=550,
                           justify="left")
resultado_label.pack(pady=20)

root.mainloop()