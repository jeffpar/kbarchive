---
layout: page
title: "Q82407: Vistacom Problems When Switching COM Ports"
permalink: kb/082/Q82407/
---

## Q82407: Vistacom Problems When Switching COM Ports

	Article: Q82407
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Microsoft Windows, Vistacom and its associated terminate-and-stay-
	resident (TSR) program, DEVLOAD.EXE, can cause interrupt request line (IRQ)
	conflicts when running in 386 enhanced mode.
	
	Disabling the Combuff device in the Windows SYSTEM.INI file corrects this
	problem.
	
	MORE INFORMATION
	================
	
	Vistacom is a terminal emulator manufactured by Control Data. Vistacom can cause
	interrupt conflicts when you disconnect from a COM port and then try to use
	another COM port on the same IRQ while running in a Windows virtual machine. For
	example, disconnect from COM3 and then try to use COM1. Under the standard IBM
	serial port configuration, COM1 and COM3 use the same interrupt (IRQ 4).
	
	To correct this problem, disable the Combuff device in the Windows SYSTEM.INI
	file. In the [386enh] section of the SYSTEM.INI, either set the line
	"COMxBuffer=0" (where "x" is the COM port number) or remove the line
	"device=*combuff".
	
	Vistacom is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 3.10 3.1 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
