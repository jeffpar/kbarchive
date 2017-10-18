---
layout: page
title: "Q74496: MS-DOS Device Driver Names Cannot be Used as File Names"
permalink: kb/074/Q74496/
---

## Q74496: MS-DOS Device Driver Names Cannot be Used as File Names

	Article: Q74496
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft MS-DOS reserves certain names for system device drivers. If you try to
	name a file using one of these names, you will receive the following error
	message:
	
	  Write Fault Error Writing Device <FILENAME.EXT>
	  Abort, Retry, Ignore, Fail?
	
	The solution is to change the file name.
	
	MORE INFORMATION
	================
	
	Below is a list of default device driver names.
	
	  Name    Function
	  ----    --------
	  CON     Keyboard and display
	  PRN     System list device, usually a parallel port
	  AUX     Auxiliary device, usually a serial port
	  CLOCK$  System real-time clock
	  NUL     Bit-bucket device
	  A:-Z:   Drive letters
	  COM1    First serial communications port
	  LPT1    First parallel printer port
	  LPT2    Second parallel printer port
	  LPT3    Third parallel printer port
	  COM2    Second serial communications port
	  COM3    Third serial communications port
	  COM4    Fourth serial communications port
	
	To identify system device driver names, use one of the following two commands:
	
	- mem /d | more
	
	- debug d 0070:0000
	
	Additional query words: 6.22 2.x 3.x 4.x 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
