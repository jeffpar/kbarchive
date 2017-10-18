---
layout: page
title: "Q165467: How to Install a Windows-Based Program on a Dual-Boot Computer"
permalink: kb/165/Q165467/
---

## Q165467: How to Install a Windows-Based Program on a Dual-Boot Computer

	Article: Q165467
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv win31 win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows 3.1 
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up a Windows-based program in the same home
	folder on a computer that is configured to boot multiple versions of Windows.
	
	MORE INFORMATION
	================
	
	To set up a Windows-based program on a dual-boot computer so that you can run
	the program from either version of Windows and share a common folder for the
	program, follow these steps:
	
	1. Verify that the program is compatible with both operating systems.
	
	2. Start Windows (either version) and install the program following the
	  manufacturer's instructions.
	
	3. Boot the other version of Windows. Install the program in the same folder as
	  in step 2.
	
	The installation of a Windows-based program generally involves adding files and
	information to the program's folder and the Windows folder. The Windows folder
	holds files that are shared with other Windows-based programs, and links to the
	programs (icons) that are used to start the programs. Programs also may write
	information to .ini or registry files in the Windows folder.
	
	If a program is installed in only one version of Windows in a dual-boot
	situation, information that may be required to run the program is not available
	to the version of Windows in which the program has not been installed.
	
	Note that when you make changes to options within a program, those changes may
	not be recognized in the other version of Windows and may need to be configured
	while you are running the program in the other version of Windows. This occurs
	when the configuration options are contained in the registry or in .ini files in
	the Windows folder.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kbenv win31 win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbAudDeveloper kbWin3xSearch kbWin95search kbWFWSearch kbZNotKeyword3 kbWin310 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11,95; winnt:3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
