---
layout: page
title: "Q69964: Automating Network Setup Files via SETUP.INF"
permalink: kb/069/Q69964/
---

## Q69964: Automating Network Setup Files via SETUP.INF

	Article: Q69964
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Windows 3.0 is set up on a network workstation via the SETUP /N command,
	there are 13 files copied to or created in the user's directory on either the
	server or the user's local hard disk.
	
	It is possible to copy other important files on the individual workstations by
	editing the SETUP.INF before running the SETUP /N command.
	
	MORE INFORMATION
	================
	
	Use the following outline to copy additional files to individual workstations
	via the SETUP.INF file.
	
	1. Copy the file(s) to be placed in everyone's user directory into the shared
	  Windows directory on the server.
	
	2. Edit SETUP.INF with a standard ASCII text editor and locate the line:
	
	        [win.copy]
	
	  This is where the different files are copied to different directories such as
	  the Windows users' directories. For example:
	
	     2:myfile.txt,     0:
	
	  (This copies myfile.txt from disk 2 into the Windows directory.)
	
	     #net,     0:
	
	  (This copies all files under the [NET] section into the user's Windows
	  directory).
	
	3. Locate the [NET] section. It shows the files copied into the individual
	  users' directories are CONTROL.INI, SMARTDRV.SYS, RAMDRIVE.SYS, EMM386.SYS,
	  and WINVER. Other files are built there such as WIN.INI and SYSTEM.INI.
	
	4. Add the following line to the end of this section:
	
	  2:allfile.exe
	
	The disk number is only valid when installing from the Windows disks. It is
	ignored when installing from a shared Windows directory.
	
	The SETUP.INF file is a comma delineated text file formatted for 160 columns that
	supplies customized directions to the SETUP.EXE.
	
	Preferred Workstation Setup Method
	----------------------------------
	
	Install Windows 3.0 on a network (see pages 543-556 of the "Microsoft Windows
	User's Guide"), and then run the SETUP /N command on each workstation. In some
	instances (for example, large workstation groups) it may not be efficient to do
	this and then customize each workstation individually. By editing the SETUP.INF
	file with a text editor, it is possible to enhance the SETUP /N command so that
	it customizes each workstation to a company standard.
	
	For more information on the list of files copied to the Windows user's directory
	on the server, query on:
	
	  files and windows and directory and workstation
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide." version 3.0, "Networks and Windows," pages
	543-556.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30 setup.inf networks.txt kbsetup
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
