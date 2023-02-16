package main

import (
	"context"
	"fmt"
	"time"
	"syscall"

	"github.com/shirou/gopsutil/cpu"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) GetPercentCpu() float64 {
	percent, err := cpu.Percent(time.Second, false)
	if err != nil {
		return -1
	} else {
		return percent[0]
	}
}

func (a *App) GetSizeOfDisk() [2]uint64 {
	var stat syscall.Statfs_t
    var values[2] uint64

    err := syscall.Statfs("/", &stat)

    if err != nil {
        values[0] = 0
        values[1] = 0
        return values
    }
    total := stat.Blocks * uint64(stat.Bsize) / (1024 * 1024 )
    free := stat.Bavail * uint64(stat.Bsize) / (1024 * 1024 )
    values[0] = free
    values[1] = total

    return values
}