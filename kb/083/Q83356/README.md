---
layout: page
title: "Q83356: Unexpected DOS Errors 0 - 23 and Windows"
permalink: kb/083/Q83356/
---

## Q83356: Unexpected DOS Errors 0 - 23 and Windows

	Article: Q83356
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 24-SEP-1999
	
	3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kbref kbdisplay kberrmsg kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following error message may be displayed when you start a Windows-based
	application
	
	  Unexpected DOS Error <n>
	
	where <n> is a number between 0 and 23.
	
	Causes for unexpected errors include incompatible terminate-and-stay- resident
	(TSR) programs, low BUFFER settings, and incompatible virtual device drivers.
	
	MORE INFORMATION
	================
	
	The following numbers represent specific Unexpected DOS Errors in Windows 3.0.
	An asterisk (*) indicates that the error is trapped and handled by Program
	Manager (PROGMAN.EXE).
	
	   *0  Out of memory
	   *2  File not found
	   *3  Path not found
	   *5  Attempt to dynamically link to a task
	   *6  Library requires separate data segments for each task
	  *10  Incorrect Windows version
	   11  Invalid .EXE file
	   12  OS/2 Application
	  *13  MS-DOS 4.0 application
	   14  Unknown EXE type
	  *15  Attempt to load an EXE created for an earlier Windows version
	  *16  Attempt to load a second instance of an .EXE
	       containing multiple, writeable data segments
	  *17  Attempt in large-frame EMS mode to load a second instance of an
	       application that links to certain non-shareable DLLs already in use
	   18  Attempt in real mode to load an application marked for protected
	       mode only
	
	Unexpected DOS Error 1 can occur with third-party video drivers.
	
	Unexpected DOS Error 2 can occur if you install Time$heet Professional on a
	system with the Certus NoVi TSR program loaded.
	
	Unexpected DOS Error 5 can occur when virus-scanning software is running (noted
	with VDEFEND) or if the buffers= line in CONFIG.SYS is set low (that is, less
	than 10).
	
	Unexpected DOS Error 6 can occur if you run Time$heet Professional on a system
	with the Certus NoVi TSR program.
	
	Unexpected DOS Error 11 can occur if you use a third-party video driver.
	Resetting Windows to a default video driver (such as standard VGA) corrects the
	problem.
	
	Unexpected DOS error 11 can occur if WINOA386.MOD is corrupted.
	
	Unexpected DOS Error 13 can occur under Windows 3.1 if you try to run a program
	created with Microsoft C version 7. No resolution is available.
	
	Unexpected DOS Error 13 can occur under Windows 3.1 if you try to run an
	MS-DOS-based terminal emulator program (for example, KEA's Z-Stem).
	
	Unexpected DOS Error 14 can occur under Windows 3.0 if you run Borland Paradox
	version 4.0.
	
	Unexpected DOS Error 21 can occur when you try to run Math CAD for Windows,
	version 4.0. To resolve this problem, obtain Math CAD's Fax #2000.
	
	If you experience DOS Error 21 running Microsoft Works, you may be able to
	resolve the issue by increasing the MS-DOS environment size to 2048 bytes. To do
	so, add the following line to the Config.sys file and then restart your
	computer:
	
	       shell=c:\command.com /p /e:2048
	
	Unexpected DOS error 23 can occur when you run Microsoft Golf.
	
	Unexpected DOS error 23 can occur when you try to start an MS-DOS prompt or an
	application and WINOA386.MOD is missing from the Windows directory or the
	Windows SYSTEM subdirectory and is not in the path.
	
	Unexpected DOS Error 23 can occur, along with the message "Cannot find
	WINOLDAP.MOD," when you try to set up Microsoft Mail 3.2 extensions for
	Workgroups after you start Windows for Workgroups with the /D:T switch.
	
	
	KBCategory: kbref kbdisplay kberrmsg kb3rdparty
	KBSubcategory: wfw wfwg win30 win31
	
	Additional query words: 3.00 3.00a WordPerfect Ami Pro AMIPRO MS-DOS 3.10 3.11
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
