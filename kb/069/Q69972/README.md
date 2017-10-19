---
layout: page
title: "Q69972: Automating Network Setup Shell Via SETUP.INF"
permalink: /kb/069/Q69972/
---

## Q69972: Automating Network Setup Shell Via SETUP.INF

	Article: Q69972
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Windows 3.00 is set up on a network workstation via the SETUP /N command,
	the first program that is run on the workstation when Windows is started is the
	shell Program Manager (PROGMAN.EXE). It is the Windows default shell for
	controlling items on your desktop.
	
	It is possible to have all of the workstations use a different shell by editing
	the SETUP.INF before running the SETUP /N command on the individual
	workstations.
	
	For example, to change the Windows shell from PROGMAN.EXE to WINFILE.EXE (File
	Manager), do the following:
	
	1. Edit SETUP.INF with a standard ASCII text editor and locate the lines:
	
	        [shell]
	        progman.exe, "Windows Program Manager"
	
	2. Change the lines to:
	
	        [shell]
	        winfile.exe, "Windows File Manager"
	
	This causes all workstations to use File Manager as the Windows shell. It is also
	possible to set the shell to MS-DOS Executive (MSDOS.EXE located in Windows
	directory) or a third-party Windows 3.0 program shell.
	
	MORE INFORMATION
	================
	
	The SETUP.INF file is a comma-delineated text file, formatted for 160 columns,
	that supplies customized directions to the SETUP.EXE (the Windows 3.0
	installation program).
	
	Preferred Workstation Setup Method
	----------------------------------
	
	Install Windows 3.0 on a network (see pages 543-556 of the "Microsoft Windows
	User's Guide"), and then run the SETUP /N command on each workstation. In some
	instances (for example, large workstation groups) it may not be efficient to do
	this and then customize each workstation individually. By editing the SETUP.INF
	file with a text editor, it is possible to enhance the SETUP /N command so that
	it customizes each workstation to a company standard.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide." version 3.0, "Networks and Windows," pages
	543-556.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30 kbsetup SETUP.INF, NETWORKS.TXT
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
