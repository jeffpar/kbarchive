---
layout: page
title: "Q87140: HP NewWave Err Msg: Cannot Run a Non-Windows Application"
permalink: kb/087/Q87140/
---

## Q87140: HP NewWave Err Msg: Cannot Run a Non-Windows Application

	Article: Q87140
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Hewlett-Packard (HP) has confirmed that HP NewWave version 3.03 was designed
	primarily for compatibility with Microsoft Windows version 3.0. When running
	NewWave version 3.03 with Windows version 3.1 in 386 enhanced mode, the
	following error occurs while attempting to run any non-Windows application:
	
	  Cannot run a non-Windows application from the second instance of Windows;
	  exit this instance of Windows and run your application from the original
	  instance.
	
	After exiting NewWave and restarting Windows 3.1, a different error occurs while
	attempting to run non-Windows applications:
	
	  Incorrect system version; reinstall the 386 enhanced mode of Windows.
	
	Expanding WINOA386.MOD (Disk 4) and WINOLDAP.MOD (Disk 5) from the Windows 3.1
	disks to the WINDOWS\SYSTEM subdirectory eliminates the error message and
	enables NewWave 3.03 to run in Windows 3.1. For example, to expand WINOA386.MOD,
	insert Disk 4 and type the following from the MS-DOS command prompt:
	
	  expand a:\winoa386.mo_ c:\windows\system\winoa386.mod
	
	MORE INFORMATION
	================
	
	Windows version 3.1 will run properly in standard mode but fails in 386 enhanced
	mode under NewWave 3.03 if you run non-Windows applications. The main reason for
	these errors is the replacement of WINOA386.MOD and WINOLDAP.MOD in the
	WINDOWS\SYSTEM subdirectory during the installation of NewWave. It also adds
	DEVICE=VNWD.386 in the [386Enh] section, but this does not seem to affect
	Windows' functionality.
	
	The New Wave products included here are manufactured by NewWave, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 3.00 3.00a 3.10 3.11 A.03.03 New Wave 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
