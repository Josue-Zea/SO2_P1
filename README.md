Instalar una version de go 18+
https://levelup.gitconnected.com/installing-go-on-ubuntu-b443a8f0eb55
Reiniciar vm al final

Instalar node 15+
https://computingforgeeks.com/how-to-install-node-js-on-ubuntu-debian/

Instalar wails
go install github.com/wailsapp/wails/v2/cmd/wails@latest
Si se tiene problema de versiones ejecutar el siguiente comando
export PATH="${GOROOT}/bin:${PATH}"
o
export PATH=${GOROOT}/bin:$PATH
Luego de descargar wails ejecutar wails doctor, este verificará que dependendias faltan e indicará la forma de instalarlas
instalar las dependencias que necesita go
go get github.com/shirou/gopsutil/cpu

Si desean usar el modo de desarrollo es necesario tener git
Instalación de git en ubuntu:
sudo apt install git