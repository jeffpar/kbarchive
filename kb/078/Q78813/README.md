---
layout: page
title: "Q78813: HIMEM.SYS Reports Loading A20 Handler X,Y"
permalink: kb/078/Q78813/
---

## Q78813: HIMEM.SYS Reports Loading A20 Handler X,Y

	Article: Q78813
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If two numbers appear on the A20 handler message when HIMEM.SYS starts, the
	second number refers to a delay that pertains to some IBM AT compatible
	computers. This number is determined by HIMEM.SYS, and you cannot change it.
	
	MORE INFORMATION
	================
	
	For example, if the following message is displayed when HIMEM.SYS starts
	
	  Installed A20 handler number 7,2.
	
	the first number, 7, refers to the machine number. You can change this number by
	including the /MACHINE switch on the DEVICE command for HIMEM.SYS in your
	CONFIG.SYS file.
	
	The second number, 2, refers to a delay number that is relevant for certain IBM
	AT compatible machines. You cannot specify the delay number; it is determined
	automatically by HIMEM.SYS.
	
	In the example above, the Toshiba A20 handler (machine number = 7) is installed
	using delay number 2.
	
	There are only three valid delay numbers: 0, 1, 2. Also, there are only specific
	valid combinations of machine and delay numbers. A delay number of 0 is never
	displayed; the absence of a delay number implies a delay number of 0.
	(Therefore, "1" is equivalent to "1,0".) The following list details the valid
	combinations of machine and delay numbers under MS-DOS 5.0. All machine numbers
	not listed here are not associated with delay numbers.
	
	Machine Code    Machine Number, Delay Number
	------------    ----------------------------
	
	at              1
	at              1,1
	at              1,2
	toshiba         7,2
	at1             11
	at2             12,1
	css             12,1
	at3             13,2
	philips         13,2
	
	The following combinations identify identical A20 handlers:
	
	11   = 1
	12,1 = 1,1
	13,2 = 1,2
	
	If you specify /MACHINE:1 as a HIMEM.SYS parameter, HIMEM will automatically
	attempt to determine which of the three delays is appropriate. However, if you
	specify /MACHINE number 11, 12, or 13, HIMEM.SYS will not attempt to determine
	the correct delay value. Instead, it will use the delay value as shown in the
	previous table. For example, if you specify /MACHINE:11, HIMEM.SYS will use
	machine number 1 ("at") with delay number 0.
	
	These alternative values for "at" are useful only if you cannot load HIMEM.SYS on
	an IBM AT compatible computer.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
