import tkinter as tk
from tkinter import ttk

# Funciones de conversión
def binary_to_decimal(binary):
    decimal = 0
    binary_str = str(binary)
    for i in range(len(binary_str)):
        decimal += int(binary_str[-1 - i]) * (2 ** i)
    return decimal

def octal_to_decimal(octal):
    decimal = 0
    octal_str = str(octal)
    for i in range(len(octal_str)):
        decimal += int(octal_str[-1 - i]) * (8 ** i)
    return decimal

def hexadecimal_to_decimal(hexadecimal):
    hex_digits = "0123456789ABCDEF"
    decimal = 0
    hex_str = str(hexadecimal).upper()
    for i in range(len(hex_str)):
        decimal += hex_digits.index(hex_str[-1 - i]) * (16 ** i)
    return decimal

def decimal_to_others(decimal):
    return {
        'decimal': decimal,
        'binary': bin(decimal)[2:],
        'octal': oct(decimal)[2:],
        'hexadecimal': hex(decimal)[2:].upper()
    }

def convert():
    value = entry_value.get()
    base = combo_base.get()
    
    try:
        if base == "decimal":
            result = decimal_to_others(int(value))
        elif base == "binary":
            decimal = binary_to_decimal(value)
            result = decimal_to_others(decimal)
        elif base == "octal":
            decimal = octal_to_decimal(value)
            result = decimal_to_others(decimal)
        elif base == "hexadecimal":
            decimal = hexadecimal_to_decimal(value)
            result = decimal_to_others(decimal)
        else:
            result = {}
        
        lbl_result.config(text=f"Decimal: {result.get('decimal', '')}\n"
                               f"Binario: {result.get('binary', '')}\n"
                               f"Octal: {result.get('octal', '')}\n"
                               f"Hexadecimal: {result.get('hexadecimal', '')}")
    except ValueError:
        lbl_result.config(text="Entrada no válida. Por favor, revisa los valores ingresados.")

# Crear la ventana principal
root = tk.Tk()
root.title("Convertidor de Sistemas Numéricos")

# Crear y colocar widgets
tk.Label(root, text="Ingresa el número:").grid(row=0, column=0, padx=10, pady=10)
entry_value = tk.Entry(root)
entry_value.grid(row=0, column=1, padx=10, pady=10)

tk.Label(root, text="Selecciona la base:").grid(row=1, column=0, padx=10, pady=10)
combo_base = ttk.Combobox(root, values=["decimal", "binary", "octal", "hexadecimal"])
combo_base.grid(row=1, column=1, padx=10, pady=10)
combo_base.set("decimal")

tk.Button(root, text="Convertir", command=convert).grid(row=2, column=0, columnspan=2, pady=10)

lbl_result = tk.Label(root, text="", justify=tk.LEFT)
lbl_result.grid(row=3, column=0, columnspan=2, padx=10, pady=10)

# Iniciar el bucle principal de la interfaz
root.mainloop()
