---
layout: page
title: "Q120940: Generic Way to Find a Computer BIOS Date Using Debug"
permalink: kb/120/Q120940/
---

## Q120940: Generic Way to Find a Computer BIOS Date Using Debug

	Article: Q120940
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are troubleshooting problems on a particular computer, you may need to
	determine the BIOS date of the computer. On most computers, you can view the
	BIOS date in MS-DOS Debug by "dumping" the contents of the computer's memory
	into the FFFF:0 range of memory.
	
	MORE INFORMATION
	================
	
	To dump the contents of the computer's memory into the FFFF:0 range, exit
	Windows and follow the steps below at the MS-DOS command prompt.
	
	1. Type "debug" (without the quotation marks) and press ENTER.
	
	2. At the Debug hyphen prompt, type "d FFFF:0" (without the quotation marks),
	  and then press ENTER. You receive a screen dump similar to the following:
	
	FFFF:0000  EA FF E1 00 F0 30 31 2F-32 35 2F 39 33 FF FC 00
	.....01/25/93..
	.
	FFFF:0010  00 00 00 56 44 49 53 4B-33 2E 33 80 00 01 01 00
	...VDISK3.3.....
	FFFF:0020  01 40 00 00 02 FE 06 00-08 00 01 00 00 00 40 04
	.@............@.
	FFFF:0030  70 00 2E 8E 06 30 00 BF-E0 06 B9 04 00 AB 47 47
	p....0........G
	G
	FFFF:0040  E2 FB CB 56 50 51 52 57-55 1E 06 53 8B EC 8B 76
	...VPQRWU..S...v
	
	FFFF:0050  12 2E 8E 1E 30 00 8B 44-02 A2 21 00 88 26 E7 04
	....0..D..!..&..
	FFFF:0060  8B 34 C4 1E 12 00 26 8A-47 01 26 8A 67 0D 26 8B
	.4....&.G.&.g.&
	.
	FFFF:0070  4F 12 26 8B 57 14 81 FE-A2 04 75 17 C7 06 2B 05
	O.&.W.....u...+.
	
	3. To exit MS-DOS Debug, press Q and then press ENTER.
	
	The information displayed to the right of the first row (FFFF:0000) may contain a
	date. If it does, this is very likely the BIOS date of your PC. However there
	are certain exceptions for some BIOS manufacturers. To verify if this PC may be
	an exception, query on the BIOS manufacturer's name and "BIOS" and "Date" in the
	Microsoft Knowledge Base.
	
	Additional query words: 4.0 5.0 5.0a 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20 debug.exe CMOS phoenix ami dtk alr ast award quadtel toshiba tandon wyse zenith peak/dm acer hp at att setup boot
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
