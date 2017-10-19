---
layout: page
title: "Q61806: BIOS Equipment-List Word"
permalink: /kb/061/Q61806/
---

## Q61806: BIOS Equipment-List Word

	Article: Q61806
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes a quick way to determine how many floppy disk drives,
	serial ports, and parallel ports are connected to the machine on which your
	software is running.
	
	MORE INFORMATION
	================
	
	During the boot process, the ROM BIOS examines the computer's various connectors
	and sets an equipment-list word accordingly. This word is located at absolute
	address 410 hex or segment 0000, offset 0410 (hex). Interrupt 11 hex returns the
	word in the AX register. The bits of the word are defined as follows:
	
	  Bit       Description
	  ---------------------
	
	  0         Set if any floppy disk drives present
	
	  1         Set if math coprocessor installed
	
	  2         Set if pointing device attached (PS/2)
	
	  3-2       System board RAM size (only for original IBM PC, PCjr):
	
	                00 = 16K
	                01 = 32K
	                10 = 48K
	                11 = 64K
	
	  5-4        Initial video mode:
	
	                00 = reserved
	                01 = 40-column color
	                10 = 80-column color
	                11 = 80-column monochrome
	
	  7-6        Number of floppy disk drives (if bit 0 set):
	
	                00 = 1 drive
	                01 = 2 drives
	                10 = 3 drives
	                11 = 4 drives
	
	  8         Reserved
	
	  11-9      Number of serial ports
	
	  12        Set if game adapter installed
	
	  13        Set if serial printer attached (PCjr)
	            Set it internal modem installed (PC and XT only)
	
	  15-14     Number of parallel ports
	
	Additional query words: 3.20 3.21 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
