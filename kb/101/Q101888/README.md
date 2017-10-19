---
layout: page
title: "Q101888: SETUP /E Removes Undelete Icon from Windows Program Manager"
permalink: /kb/101/Q101888/
---

## Q101888: SETUP /E Removes Undelete Icon from Windows Program Manager

	Article: Q101888
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the optional Windows-based versions of Microsoft Backup, Microsoft Undelete,
	and/or Microsoft Anti-Virus have already been installed and you run SETUP /E
	using the following selections, the Undelete icon in Windows is deleted.
	
	- Undelete is selected for MS-DOS Only or None
	
	-and-
	
	- Backup and/or Anti-Virus are selected for Windows Only or Windows and MS-DOS
	
	RESOLUTION
	==========
	
	There are two ways to work around this problem:
	
	- Run SETUP /E again and select Windows Only for Undelete, and select None for
	  Backup and Anti-Virus. This creates a new Undelete icon.
	
	-or-
	
	- Manually create the Undelete icon as follows:
	
	  1. In Windows, double-click the Microsoft Tools group.
	
	  2. In Program Manager, choose New from the File menu.
	
	  3. Select Program Item, and choose OK.
	
	  4. In the Description box, type "Undelete" (without the quotation marks).
	
	  5. In the Command Line box, type "C:\DOS\MWUNDEL.EXE" (without the quotation
	     marks) where "C:\DOS" is the directory containing your MS-DOS files.
	
	     NOTE: Do not use the file UNDELETE.EXE, which is for the MS-DOS level
	     Undelete utility.
	
	  6. In the Working Directory box, type the location of the Windows directory,
	     for example "C:\WINDOWS" (without the quotation marks), then choose OK.
	
	Additional query words: msbackup 6.22 6.00 6.20 back up anti virus
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	
