---
layout: page
title: "Q85125: Command-Line Switches for Windows 3.1 Setup"
permalink: /kb/085/Q85125/
---

## Q85125: Command-Line Switches for Windows 3.1 Setup

	Article: Q85125
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the various command-line switches for the Microsoft
	Windows operating system version 3.1 Setup program.
	
	MORE INFORMATION
	================
	
	Command-Line Switches:
	
	SETUP.EXE Run from MS-DOS
	-------------------------
	
	/N - Sets up a shared copy of Windows from a network server to a workstation or a
	user directory. This switch should be used when the you want to run Windows from
	a network server. In this mode, Setup only copies the few files that are
	necessary to personalize your Windows configuration. This is used after the
	SETUP /A.
	
	/I - Ignores hardware detection. During Setup, you will need to check the
	accuracy of settings on the system information screen, and make corrections if
	needed. This switch should be used in cases where the hardware detection is
	suspected of causing Setup to fail.
	
	/B - Sets up Windows with monochrome display attributes.
	
	/T - Searches the hard drive for terminate-and-stay-resident (TSR) programs, and
	notifies you about certain programs.
	
	/C - Turns off the search for TSR programs.
	
	/A - Administrative setup. It places Windows on a network server. Setup expands
	and copies all files on every disk to a given directory, and marks them
	read-only. After this is done, SETUP /N can be run from the workstation.
	
	/O:filespec - Specifies the SETUP.INF file.
	
	/S:filepath - Specifies a path to the setup disk(s).
	
	/H:filespec - Batch mode setup. Sets up Windows with little or no user
	interaction. "Filespec" is the name of the system settings file that contains
	user's configuration settings. If "Filespec" is not in the directory from which
	Windows is being set up, the path must be included.
	
	/? - Displays instructions for running Setup from the MS-DOS prompt.
	
	
	SETUP.EXE Run from Windows
	--------------------------
	
	/P - When invoked with this switch, Setup will only create the default Program
	Manager groups.
	
	
	Additional query words: 3.10 3.11 parameter
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
