---
layout: page
title: "Q83399: Using Windows 3.1 with COMPAQ's HIMEM.EXE"
permalink: kb/083/Q83399/
---

## Q83399: Using Windows 3.1 with COMPAQ's HIMEM.EXE

	Article: Q83399
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.1's Setup automatically replaces earlier versions of
	HIMEM.SYS or HIMEM.EXE with the version supplied with Windows 3.1, regardless of
	whether they were from Microsoft or another company. Windows 3.1's HIMEM.SYS is
	version 3.07, and supports the Lotus/Intel/Microsoft/AST eXtended Memory
	Specification version 3.0.
	
	In general, HIMEM.SYS from Microsoft is completely compatible with the HIMEM.EXE
	supplied by COMPAQ. Microsoft HIMEM.SYS version 3.07 includes all functionality
	found in COMPAQ HIMEM.EXE versions through 3.02 (which was the version available
	at the time Windows was released).
	
	However, COMPAQ will eventually ship a HIMEM.EXE version 3.03 which will have one
	additional function not found in Microsoft HIMEM.SYS. This is the ability to
	handle more than 16 MB of memory on an ISA machine. (Existing versions of
	HIMEM.SYS will only support more than 16 MB of memory on EISA or MCA machines.)
	This feature will be turned off by default and must be explicitly enabled to be
	used. If you need this functionality, then you should continue to use the COMPAQ
	HIMEM.EXE version 3.03.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
