---
layout: page
title: "Q136255: Error Message: A Fatal Error Has Occurred in VxD VMCPD"
permalink: kb/136/Q136255/
---

## Q136255: Error Message: A Fatal Error Has Occurred in VxD VMCPD

	Article: Q136255
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows 95, you may see the following error message on a blue
	screen the first time the computer restarts:
	
	  Windows: A fatal error 0D has occurred at 0028:xxxxxxxx in VXD VMCPD(01) +
	  000026B. The current application will be terminated.
	
	If you press any key, you see the same error message. If you press CTRL+ALT+DEL
	to restart the computer, the same error message occurs.
	
	You can start Windows 95 using Safe mode.
	
	CAUSE
	=====
	
	This problem can occur on computers using a Cyrix 486DLC processor and a Cyrix
	FastMath coprocessor. Some computers with this processor and coprocessor are not
	compatible with Windows 95.
	
	RESOLUTION
	==========
	
	To work around this problem, disable support for the coprocessor in Windows 95.
	To do so, follow these steps:
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode from the Startup menu.
	
	2. Click the Start button, point to Settings, and then click Control Panel.
	
	3. Double-click the System icon.
	
	4. On the Device Manager tab, double-click the System Devices branch.
	
	5. Click Numeric Data Processor, and then click Properties.
	
	6. On the Settings tab, click the "Never use the numeric data processor" check
	  box to select it, and then click OK.
	
	7. When you are prompted to restart your computer, do so.
	
	MORE INFORMATION
	================
	
	Vmcpd.vxd controls the floating-point operations in Windows 95.
	
	
	Additional query words: exception
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
