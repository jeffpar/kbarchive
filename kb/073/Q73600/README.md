---
layout: page
title: "Q73600: Adaptec ACB-2372 Controller Board and Expanded Memory"
permalink: /kb/073/Q73600/
---

## Q73600: Adaptec ACB-2372 Controller Board and Expanded Memory

	Article: Q73600
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31 msdos
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using any of the Adaptec controller boards listed below with two hard
	disk drives attached and you are using expanded memory (EMS), you need to obtain
	the Adaptec ADAPTEC.SYS device driver. Without ADAPTEC.SYS, your machine will
	stop responding (hang) when loading EMM386.SYS or EMM386.EXE
	
	ADAPTEC.SYS can be obtained by contacting Adaptec technical support or from the
	Adaptec bulletin board service (BBS).
	
	MORE INFORMATION
	================
	
	RLL Controllers
	---------------
	
	  ACB-2370
	  ACB-2370A
	  ACB-2370B
	  ACB-2372
	  ACB-2372A
	  ACB 2372B
	  ACB-2372C
	
	ESDI Controllers
	----------------
	
	  ACB-2320
	  ACB 2320A
	  ACB-2320B
	  ACB-2322
	  ACB-2333A
	  ACB-2322B
	  ACB-2322B-8
	  ACB-2322B-16
	
	The above controllers require the ADAPTEC.SYS driver because they use INT 60-67
	to store drive tables. EMM386 also uses INT 67, which causes a conflict.
	
	ADAPTEC.SYS relocates the drive tables from INT 60-67 to a reserved location in
	random access memory (RAM). ADAPTEC.SYS should be loaded in the CONFIG.SYS file
	before loading any MS-DOS 5.0 device drivers.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: appnote 6.22 5.00 5.00a 6.00 6.20 3.00 3.00a 3.10 emm386.exe emm386.sys 3rdparty hardware win3x
	
	======================================================================
	Keywords          : win31 msdos 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
