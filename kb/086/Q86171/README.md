---
layout: page
title: "Q86171: Differences Between Retail and Debug versions of Windows 3.1"
permalink: /kb/086/Q86171/
---

## Q86171: Differences Between Retail and Debug versions of Windows 3.1

	Article: Q86171
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines some of the differences between the retail and dubugging
	(debug) versions of Microsoft Windows version 3.1.
	
	MORE INFORMATION
	================
	
	The retail version of Windows 3.1 can be transformed into the debug version by
	using files that are provided with the Windows 3.1 Software Development Kit
	(SDK).
	
	NOTE: Windows will be slower when the debug version is installed.
	
	The debug version of Windows consists of the following files:
	
	  KRNL286  SYM      4308 03-23-92   3:10a
	  KRNL386  SYM      4340 03-23-92   3:10a
	  MMSYSTEM SYM      5428 03-23-92   3:10a
	  GDI      SYM      6004 03-23-92   3:10a
	  USER     SYM     11620 03-23-92   3:10a
	  MMSYSTEM DLL     66656 03-23-92   3:10a
	  KRNL286  EXE    110550 03-23-92   3:10a
	  KRNL386  EXE    116132 03-23-92   3:10a
	  GDI      EXE    275261 03-23-92   3:10a
	  USER     EXE    338406 03-23-92   3:10a
	
	The .SYM files are symbol files that contain symbolic information that the SDK
	utility programs, CodeView (CVW.EXE), and Windows 80386 Debugger (WDEB386.EXE)
	use to locate program modules, global data in an executable, and other debugging
	information. The .SYM files can remain in the Windows \SYSTEM directory (they do
	not affect the performance of Windows when the retail Windows 3.1 system files
	are being used). The .DLL and .EXE files are special debugging versions of the
	normal files that replace the corresponding retail Windows files in the Windows
	\SYSTEM directory.
	
	Below is a list of the normal files that must be present in the Windows \SYSTEM
	directory to run the retail version of Windows 3.1:
	
	  GDI      EXE    220800 03-10-92   3:10a
	  KRNL286  EXE     71730 03-10-92   3:10a
	  KRNL386  EXE     75490 03-10-92   3:10a
	  USER     EXE    264016 03-30-92  10:49a
	  MMSYSTEM DLL     61648 03-10-92   3:10a
	
	
	Identifying Debug Windows
	-------------------------
	
	If the debug version of Windows is running, a message specific to the debug mode
	(standard or enhanced) is displayed in the bottom-right corner of the Windows
	desktop. These messages appear as follows:
	
	  ENHANCED MODE DEBUG Windows 3.1
	
	-or-
	
	  STANDARD MODE DEBUG Windows 3.1
	
	How to Switch Between Debug and Retail Windows
	----------------------------------------------
	
	There are two batch files, D2N.BAT and N2D.BAT, that are provided with the SDK
	that allow you to switch between the retail and debug versions of Windows 3.1.
	These files are normally found in the WINDEV\BIN directory. N2D.BAT is used to
	convert retail Windows into debug Windows. D2N.BAT is used to convert debug
	Windows to retail Windows.
	
	Changes Made to SYSTEM.INI
	--------------------------
	
	The following lines are added to the SYSTEM.INI file when the SDK is installed:
	
	     DEVICE=C:\WINDEV\BIN\VCV.386
	     DEVICE=C:\WINDEV\BIN\WINDEBUG.386
	
	KBCategory: kbusage kbother
	KBSubcategory: win31
	
	Additional query words: 3.11 3.10 sdk de-bug
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
