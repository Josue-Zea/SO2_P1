package main
import (
    "fmt"
    "github.com/shirou/gopsutil/cpu"
)

func getPercent() {
    percent, err := cpu.Percent(0, false)
    if err != nil {
        fmt.Printf("Error al leer el porcentaje de uso de la CPU: %v\n", err)
        return
    }

    return fmt.Printf("%f%%\n", percent[0])
}
func main() {
    fmt.Println(getPercent())
}