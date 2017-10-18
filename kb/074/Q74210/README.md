---
layout: page
title: "Q74210: Emulating Expanded Memory Using EMM386.EXE"
permalink: kb/074/Q74210/
---

## Q74210: Emulating Expanded Memory Using EMM386.EXE

	Article: Q74210
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use EMM386.EXE you must have an 80386 or 80486 microprocessor and at least
	105K of extended memory available under the Extended Memory Specification (XMS).
	Extended memory managers such as HIMEM.SYS provide XMS memory. EMM386.EXE uses
	the XMS memory to emulate expanded memory.
	
	EMM386.EXE places expanded memory pages in the upper memory area (UMA), which is
	the address range between 640K and 1024K. This range is normally reserved for
	the system ROM BIOS, as well as video, network, and other hardware adapters.
	
	MORE INFORMATION
	================
	
	LIM 3.2 Expanded Memory
	-----------------------
	
	To create a LIM 3.2 expanded memory page frame, you need to have a 64K contiguous
	block of memory available in the UMA. Using four-digit hex notation, a 64K block
	is equal to 1000h of memory (for example, E000h to EFFFh, or C800h to D7FFh). If
	you have a 64K block available in the UMA, the default values for EMM386.EXE
	will automatically create a LIM 3.2 page frame. Assuming that the HIMEM.SYS and
	EMM396.EXE files are located in the root folder, your CONFIG.SYS file should
	contain the following lines:
	
	  DEVICE=C:\HIMEM.SYS
	  DEVICE=C:\EMM386.EXE
	
	This will create a default of 256K of expanded memory. If you use the include or
	exclude switches (i=<mmmm-nnnn>, or x=<mmmm-nnnn), you may also need to
	specify the starting location of the page frame using the m<n>,
	frame=<nnnn>, or /p<nnnn> switches.
	
	LIM 4.0 Expanded Memory
	-----------------------
	
	If you don't have a full 64K contiguous block available, you can create up to
	four LIM 4.0 expanded memory pages using 16K blocks of the UMA. Please note that
	these pages will not be LIM 3.2 compatible. Using four digit-hex notation, a 16K
	block is equal to 400h of memory (for example, D000h to D3FFh). Use the
	p<n>=<mmmm> switch to specify the location of each block. For
	example, you could use the following lines in your CONFIG.SYS to create four LIM
	4.0 pages:
	
	  DEVICE=HIMEM.SYS
	  DEVICE=EMM386.EXE RAM i=C800-CFFF p0=C800 p1=CC00 p2=E000 p3=E400
	
	Note: The address ranges used here are for demonstration purposes only. These
	address ranges may not work on your computer. Consult your hardware
	documentation to determine the address ranges used by your adapter cards.
	
	See pages 606-607 of the version 5.0 "Microsoft MS-DOS User's Guide and
	Reference" for more information on these switches.
	
	For more information on this subject query on the following words:
	
	  LIM and EMM386.EXE
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 emulation akz
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
