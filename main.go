package main

import (
	"syscall"
	"fmt"
)

func getDiskUsage() ([2]uint64) {
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

func main(){
	var size = getDiskUsage()
	fmt.Println(size[0])
	fmt.Println(size[1])
}
