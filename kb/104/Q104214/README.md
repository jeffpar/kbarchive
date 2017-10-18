---
layout: page
title: "Q104214: MS-DOS Keywords Cannot Be Used in Multi-Config Menus"
permalink: kb/104/Q104214/
---

## Q104214: MS-DOS Keywords Cannot Be Used in Multi-Config Menus

	Article: Q104214
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS keywords can't be used in MS-DOS multiple-configuration menus. For
	example, MENUITEM=DOS produces the following error message:
	
	  Error in CONFIG.SYS line n
	
	In addition to the error message, your system may behave erratically. For
	example, your CONFIG.SYS file may not be processed.
	
	MORE INFORMATION
	================
	
	The following keywords cannot be used for menu items:
	
	  CON     Keyboard and display
	  PRN     System list device, usually a parallel port
	  AUX     Auxiliary device, usually a serial port
	  CLOCK$  System real-time clock
	  NUL     Bit-bucket device
	  A:-Z:   Drive letters
	  COM1    First serial communications port
	  COM2    Second serial communications port
	  COM3    Third serial communications port
	  COM4    Fourth serial communications port
	  LPT1    First parallel printer port
	  LPT2    Second parallel printer port
	  LPT3    Third parallel printer port
	
	Additional query words: 6.22 6.20 multiconfig multi-config
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
