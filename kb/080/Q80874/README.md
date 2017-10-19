---
layout: page
title: "Q80874: EMM386 May Not Provide LIM 3.2 Support"
permalink: /kb/080/Q80874/
---

## Q80874: EMM386 May Not Provide LIM 3.2 Support

	Article: Q80874
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When EMM386.EXE is installed using both the Pn= (where n is an integer between 0
	and 255, inclusive) and RAM options, the following warning message is
	displayed:
	
	  WARNING: EMM386 installed without a LIM 3.2 compatible Page Frame
	
	  Press any key when ready...
	
	This message indicates expanded memory is being provided in accordance with the
	Lotus/Intel/Microsoft (LIM) 4.0 Expanded Memory Specification (EMS), however,
	the inability to set a 64-kilobyte (K) contiguous page frame is preventing
	EMM386.EXE from providing LIM 3.2 compatible expanded memory.
	
	MORE INFORMATION
	================
	
	On some 80386 machines, the upper memory area (UMA) can become fragmented by the
	presence of ROM BIOS extensions, video RAM, and so forth. If EMM386.EXE cannot
	find 64K of available contiguous RAM in the UMA, it cannot establish a page
	frame. In such cases, the Pn= option can be used to allocate a partial and/or
	noncontiguous page frame in 16K segments.
	
	For example, EMM386.EXE can be used to install a noncontiguous, 64K page frame
	with four 16K segments at C800, CC00, D800, and DC00 by using the following
	command in the CONFIG.SYS file:
	
	  device=c:\dos\emm386.exe P0=C800 P1=CC00 P2=D800 P3=DC00 RAM
	
	Alternatively, a 16K segment, or partial page frame, can be installed at DC00
	using the following command in the CONFIG.SYS file:
	
	  device=c:\dos\emm386.exe P0=DC00 RAM
	
	Note that both of the above examples provide expanded memory in accordance with
	the LIM 4.0 EMS. Applications requiring LIM 3.2 EMS may not be able to recognize
	or use this EMS.
	
	REFERENCES
	==========
	
	Microsoft MS-DOS "User's Guide and Reference," version 5.0, pages 605-609
	
	"Lotus/Intel/Microsoft Expanded Memory Specification" (available free from Intel)
	
	Additional query words: 5.00 5.00a 5.0 5.0a LIM EMS 4.0 3.2 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
