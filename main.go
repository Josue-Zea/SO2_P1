package main
import (
    "fmt"
    "github.com/shirou/gopsutil/cpu"
)

func getPercent() float64 {
    percent, err := cpu.Percent(1, false)
    if err != nil {
        fmt.Printf("Error al leer el porcentaje de uso de la CPU: %v\n", err)
        return -1
    }

    return percent[0]
}
func main() {
    fmt.Println(getPercent())
}