---
layout: page
title: "Q84197: Windows 3.1 Setup Hangs: Cannot Run Standard Mode Because..."
permalink: kb/084/Q84197/
---

## Q84197: Windows 3.1 Setup Hangs: Cannot Run Standard Mode Because...

	Article: Q84197
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During Setup, Microsoft Windows version 3.1 stops responding (hangs) at various
	stages and displays the following error message:
	
	  Cannot run standard mode because of a problem with your extended memory
	  manager. Reconfigure you memory manager or use HIMEM.SYS. If you are using
	  HIMEM.SYS, obtain a newer version of HIMEM.SYS.
	
	CAUSE
	=====
	
	This problem can occur when:
	
	- Your CMOS settings do not contain the correct values for the amount of RAM
	  your machine has installed.
	
	  -or-
	
	- Your physical memory chips are failing.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Restart your system and modify your CMOS settings using the correct values
	  for your system. For more information on how to do this, consult your
	  hardware reference manual, or call your hardware vendor.
	
	  -or-
	
	- Replace the failing memory chips.
	
	MORE INFORMATION
	================
	
	
	Additional query words: 386 Gateway2000 ISA EISA BIOS
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
