package main

import (
	"fmt"
	"time"

	"github.com/shirou/gopsutil/cpu"
)

func main() {
	percent, err := cpu.Percent(time.Second, false)
	if err != nil {
		fmt.Printf("Error")
	} else {
		fmt.Printf("%.2f%%\n", percent[0])
	}
}
