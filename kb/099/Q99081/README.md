---
layout: page
title: "Q99081: DoubleSpace Err Msg: To Set Up DoubleSpace, You Must Start..."
permalink: kb/099/Q99081/
---

## Q99081: DoubleSpace Err Msg: To Set Up DoubleSpace, You Must Start...

	Article: Q99081
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If you try to recover an unmounted compressed volume file (CVF) by starting your
	computer with an MS-DOS 6.0 startup disk and running DBLSPACE.EXE from the A
	drive, the following message may appear:
	
	  To set up DoubleSpace, you must start your computer from your hard disk
	  drive.
	
	  To quit Doublespace and restore your original system configuration, press
	  ENTER.
	
	CAUSE
	=====
	
	This message appears if the DBLSPACE.INI file cannot be located.
	
	WORKAROUND
	==========
	
	To correct this problem, use MS-DOS Editor or the COPY CON command to create a
	DBLSPACE.INI file with the appropriate settings. Save the DBLSPACE.INI file to
	the hard disk drive and then restart your computer.
	
	DBLSPACE.INI is a text file that has the System, Read-Only, and Hidden
	attributes. DoubleSpace stores this file in the root directory of your original
	startup drive since it contains variables that DoubleSpace uses when your
	computer starts. The contents of the DBLSPACE.INI file depend on which drive was
	compressed and if other block devices and networks are installed.
	
	For more information on DBLSPACE.INI settings, query on the following words in
	the Microsoft Knowledge Base:
	
	  " dblspace.ini and file and settings " (without the quotation marks)
	
	Additional query words: 6.00 double space dblspace 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
