---
layout: page
title: "Q135733: PC NTMMTA: Errors Installing on Unsupported Platforms"
permalink: kb/135/Q135733/
---

## Q135733: PC NTMMTA: Errors Installing on Unsupported Platforms

	Article: Q135733
	Product(s): Microsoft Mail For PC Networks
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run SETUP.EXE for the Mail Multitasking Message Transfer Agent (NT
	MMTA), one of the following errors may occur:
	
	  Setup has encountered a problem.
	  Please report File='COMMON\INF01.C', Line='253' to Microsoft Product Support
	  Services
	
	  -or-
	
	  Win32s - Error
	  The procedure entry point "GetVersionExA" could not be located in the Dynamic
	  Link Library "KERNEL32.dll"
	
	If you select OK, you get the following error:
	
	  Cannot run program
	  Unexpected error:21
	
	When you start the NT MMTA from the command line or a batch file, the following
	error may occur:
	
	  OS/2 is required to run the program.
	
	CAUSE
	=====
	
	For the first error, you are trying to run the Setup program from within
	Microsoft Windows 95.
	
	For the second error, you are trying to run the NT MMTA Setup from Microsoft
	Windows version 3.1 with the Win32s libraries installed.
	
	For the third error, you are trying to run the NT MMTA from an unsupported
	platform, such as Alpha, MIPS, or the PowerPC processor.
	
	RESOLUTION
	==========
	
	Run Setup for the NT MMTA from an Intel-x86 or Pentium-based Windows NT Server,
	version 3.51 or later.
	
	You may get the first error if you install from a Microsoft Windows 95 computer
	to a Microsoft Windows NT Server version 3.51. To resolve the problem, install
	direct to the Server.
	
	MORE INFORMATION
	================
	
	Although the Windows 95 and Windows 3.1 with Windows 32s libraries allow
	operation of some Windows NT programs, they do not support an OS/2 subsystem.
	Therefore, the NT MMTA cannot be used.
	
	The NT MMTA uses the OS/2 subsystem on a Intel-x86 or Pentium-based Windows NT
	Server machine. Other Windows NT platforms include Alpha, MIPS, and the PowerPC
	processors. Windows NT does not support the OS/2 subsystem on these platforms.
	Therefore, the NT MMTA will not function.
	
	You may also get the following error when you try to start the NT MMTA from
	either MS-DOS, Windows 3.x, or Windows 95:
	
	  OS/2 is required to run the program
	
	Additional query words: 3.50 p5
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
