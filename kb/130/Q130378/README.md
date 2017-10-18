---
layout: page
title: "Q130378: Mouse Connected to Disabled COM Port Functions Properly"
permalink: kb/130/Q130378/
---

## Q130378: Mouse Connected to Disabled COM Port Functions Properly

	Article: Q130378
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience either of the following situations:
	
	- Although the current hardware profile indicates that the PS/2-style or serial
	  port to which the mouse is attached is disabled, the mouse functions
	  properly.
	
	- Although the current hardware profile indicates that a particular serial port
	  is disabled, you can communicate with that port from an MS-DOS prompt.
	
	CAUSE
	=====
	
	When you start Windows 95 with a hardware profile in which the port that the
	mouse is connected to is disabled, the Windows 95 mouse driver searches all the
	appropriate ports for a mouse. If the driver locates a mouse, the driver loads
	and the mouse works correctly.
	
	Similarly, accessing a serial port from an MS-DOS prompt bypasses the virtual
	communications driver, accessing the port directly. Therefore, you can
	communicate with the port even if it is disabled in Device Manager.
	
	RESOLUTION
	==========
	
	If you do not want to use a mouse in Windows 95, remove the mouse in Device
	Manager and then disconnect the mouse from the computer.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: vm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
