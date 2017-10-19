---
layout: page
title: "Q83342: Mouse Doesn't Work in 386 Enhanced Mode"
permalink: /kb/083/Q83342/
---

## Q83342: Mouse Doesn't Work in 386 Enhanced Mode

	Article: Q83342
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you do not have a COM1 port, you may experience loss of mouse functionality
	in the COM2 port when running Microsoft Windows in 386 enhanced mode. The loss
	of mouse functionality is most likely to occur when an MS-DOS-based mouse driver
	is loaded.
	
	Another similar cause of mouse failure in 386 enhanced mode is incorrectly
	configured COM ports. The Logitech virtual mouse driver (LVMD.386) is hard coded
	for the standard base port addresses and interrupt requests (IRQs). The base
	address for COM1 and COM2 should be 3F8h and 2F8h, respectively. If the COM
	addresses are not configured correctly, or the IRQs are not standard, any
	Logitech series mouse will fail to work in 386 enhanced mode.
	
	MORE INFORMATION
	================
	
	One example of a computer that does not have a COM1 port is a system configured
	for a fax board on COM1, and the board is subsequently removed. If the COM1 port
	is removed, the BIOS searches for serial ports, and assigns the base address for
	COM1 (usually 03F8h) to the first serial port that it finds. If COM1 is missing,
	the BIOS assigns the base address for COM1 (03F8) to COM2 (or to the next
	available COM port in the machine).
	
	This problem can be worked around by reinstalling the fax board, or by changing
	the interrupt request line (IRQ) as well as the address of COM3 to COM1. If this
	change is carried out, it must be reversed when the fax board is reinstalled.
	
	Reassigning COM Ports
	---------------------
	
	To reassign COM3 to COM1:
	
	1. From Control Panel, choose the Ports icon.
	
	2. Choose the COM3 port.
	
	3. Choose the Settings button.
	
	4. Choose the Advanced button.
	
	5. Set the base I/O port address to 03F8 (the default for COM1).
	
	6. Set the IRQ to 4 (the default for COM1).
	
	7. Choose the OK button to return to the Settings dialog box.
	
	8. Choose the OK button to return to Control Panel.
	
	9. Choose the Close button.
	
	NOTE: This procedure does not work if you have a device on COM3, unless your
	machine is capable of IRQ sharing.
	
	Reassigning the COM port through the Ports section only works for the current
	Windows session. To make this change permanent, you need to write a debug script
	for COM port addresses and add a line in the AUTOEXEC.BAT file. For more
	information, query on the following here in the Microsoft Knowledge Base:
	
	  Debugging Serial Port Problems in Windows
	
	Additional query words: 3.10 3.11 COM COMM Gateway gate way mice
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
