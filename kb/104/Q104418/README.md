---
layout: page
title: "Q104418: Direct Memory Access (DMA) Channels and Descriptions"
permalink: /kb/104/Q104418/
---

## Q104418: Direct Memory Access (DMA) Channels and Descriptions

	Article: Q104418
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
	
	A direct memory access (DMA) channel provides high speed data transfer between a
	peripheral device, such as a disk drive controller, and memory without
	intervention by the CPU. Listed below are the DMA channels for the IBM PC and XT
	class machines and the IBM AT and above class machines.
	
	  IBM PC and XT
	  -------------
	
	  DMA Channel        Description
	  ---------------------------------------------------
	
	  0               Dynamic RAM Refresh
	  1               Reserved
	  2               Floppy Disk Controller
	  3               Hard Disk Controller
	
	  IBM AT and Above
	  ----------------
	
	  DMA Channel        Description
	  ---------------------------------------------------
	
	  0               Reserved
	  1               SDLC Controller
	  2               Floppy Disk Controller
	  3               Hard Disk Controller
	  4               Cascade from DMA channels 0 - 3
	  5               Reserved
	  6               Reserved
	  7               Reserved
	
	REFERENCES
	==========
	
	"The Handbook For Microcomputer Technicians," by Peter N. Bernstock, ISBN
	0-89435-424-8
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 2.00 3.0 3.00 3.1 3.10 3.2 3.20 3.21 3.22 3.3 3.3a 3.30 3.30a 4.0 4.0a 4.00 4.00a 4.01 4.01a 5.0 5.00 5.0a 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
