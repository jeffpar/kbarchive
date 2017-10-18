---
layout: page
title: "Q86018: Windows 3.1 Has Limited Support for VCPI"
permalink: kb/086/Q86018/
---

## Q86018: Windows 3.1 Has Limited Support for VCPI

	Article: Q86018
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Microsoft Windows Resource Kit" (WRK) guide for Windows 3.1 incorrectly
	states on page 248:
	
	  Windows 3.1 supports VCPI in both standard mode and 386 enhanced mode.
	
	Windows 3.1 is a Virtual Control Program Interface (VCPI) client in standard mode
	(using DOSX.EXE). Windows 3.1 in 386 enhanced mode is a DOS Protected Mode
	Interface (DPMI) server (using WIN386.EXE); it does not support VCPI.
	
	It is possible to run some VCPI applications in standard mode. It is not possible
	to run VCPI applications in 386 enhanced mode.
	
	MORE INFORMATION
	================
	
	INT15 and Extended Memory Specification (XMS) are two methods for allocating
	extended memory. INT15 is rarely used anymore. It can be used for data storage
	or VCPI (early specification). MS-DOS 5.0's HIMEM.SYS version 2.77 or later has
	the /INT15=xxxx switch for running these older applications. Windows in standard
	and 386 enhanced modes does not use INT15 for itself or MS-DOS applications run
	from Windows. Some MS-DOS applications that can switch from INT15 VCPI to XMS
	VCPI because INT15 is not available, can run from Windows' standard mode.
	
	XMS can be used for data storage, DPMI calls, and VCPI calls. Windows standard
	mode uses XMS as data storage and VCPI (DOSX.EXE is a VCPI client). Windows in
	386 enhanced mode can use XMS for data storage and DPMI (WIN386.EXE is a DPMI
	server).
	
	Extended        MS-DOS          Standard Mode   386 Enhanced Mode
	Memory Use                      Windows         Windows
	----------      ------          -------------   -----------------
	
	INT15 data      Yes, with         No              No
	               /INT15=
	
	INT15 VCPI      Yes, with         No              No
	               /INT15=
	
	XMS data        Yes               Yes             Yes
	
	XMS VCPI        Yes               Yes             No
	
	XMS DPMI        Yes               N/A             Yes
	
	Standard mode can run some VCPI applications because when the MS-DOS- based
	application is run, Windows, except for DOSX.EXE, is swapped to disk or XMS
	data. This leaves the MS-DOS application to use any XMS calls or usage it needs.
	Windows in standard mode understands how to allocate memory from a VCPI provider
	(server), or a DPMI provider.
	
	Additional query words: 3.10 documentation error doc err
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
