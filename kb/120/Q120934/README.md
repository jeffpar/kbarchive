---
layout: page
title: "Q120934: MWBACKUP Can't Back Up More Than 1637 Files from One Dir"
permalink: kb/120/Q120934/
---

## Q120934: MWBACKUP Can't Back Up More Than 1637 Files from One Dir

	Article: Q120934
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Microsoft Backup for Windows (MWBACKUP.EXE), you receive the
	following error message as Microsoft Backup is reading directories:
	
	  There are too many files in the current directory. Not all the files will be
	  available for backup.
	
	If you choose OK, Backup continues to load; however, some of the files from the
	given directory are not available for backup.
	
	CAUSE
	=====
	
	This error message is displayed if one (or more) of the directories on the drive
	being read contains more than 1637 files.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	- Move some of the files from the original directory into a new directory so
	  that the total number of files in the original directory is not greater than
	  1637.
	
	- Quit Windows and run Microsoft Backup for MS-DOS (MSBACKUP.EXE) by typing
	  "msbackup" (without the quotation marks) at an MS-DOS command prompt. If
	  MSBACKUP.EXE is not installed, you can install it by running SETUP /E from
	  the MS-DOS Setup Disk 1.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: limit limited 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
