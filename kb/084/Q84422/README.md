---
layout: page
title: "Q84422: Windows Err Msg: Unable to Enter Protected Mode"
permalink: kb/084/Q84422/
---

## Q84422: Windows Err Msg: Unable to Enter Protected Mode

	Article: Q84422
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear when you start Microsoft Windows version
	3.1 in 386 enhanced mode:
	
	  Unable to Enter Protected Mode
	
	CAUSE
	=====
	
	This message is displayed if 32-bit disk access is enabled and your hard disk
	controller is not 100-percent compatible with the Western Digital 1003
	controller card. If this is the case, the Western Digital driver does not load
	and the above error message is displayed.
	
	WORKAROUND
	==========
	
	To avoid this error message, start Windows 3.1 by typing "WIN /D:F" (without the
	quotation marks) at the MS-DOS command prompt. This command disables 32-bit disk
	access for the current Windows session. After Windows has loaded, you can
	permanently disable 32-bit disk access.
	
	To permanently disable 32-bit disk access, do the following:
	
	1. Run Control Panel.
	
	2. Choose the 386 Enhanced icon.
	
	3. Choose the Virtual Memory button.
	
	4. Choose the Change button.
	
	5. Clear the Use 32-Bit Disk Access check box.
	
	Additional query words: fastdisk 3.10 3.11 WDCTRL fast disk
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
