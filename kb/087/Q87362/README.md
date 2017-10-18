---
layout: page
title: "Q87362: Windows Setup Hangs on AST Premium 386/386c"
permalink: kb/087/Q87362/
---

## Q87362: Windows Setup Hangs on AST Premium 386/386c

	Article: Q87362
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows 3.0 or 3.1 on an AST premium 386 or 386c computer, the
	Windows Setup program may stop responding (hang) when switching from MS-DOS mode
	setup to standard mode setup.
	
	CAUSE
	=====
	
	This problem can occur for either of the following reasons:
	
	- The CMOS settings are enabled for a math coprocessor (80387), but no physical
	  math coprocessor exists.
	
	- The system contains an older BIOS.
	
	RESOLUTION
	==========
	
	Incorrect CMOS Settings
	-----------------------
	
	To check or change the AST CMOS settings for a math coprocessor, follow these
	steps:
	
	1. Reboot your machine, and press CTRL+ALT+ESC at boot up.
	
	2. Note or change the math coprocessor setting (Enabled or Disabled). Assume
	  disabled unless it can be verified by physical i*dentification.
	
	3. Save your changes, and exit from the CMOS setup.
	
	Incorrect BIOS
	--------------
	
	According to AST technical support, if the BIOS is AST version 2.10 or early or
	dated earlier than 1988, the BIOS should be updated to AST version 3.01. Contact
	AST for a BIOS update; the part number for the BIOS is 500- 702-002.
	
	MORE INFORMATION
	================
	
	The AST products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 video memory error logo
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
