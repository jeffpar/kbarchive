---
layout: page
title: "Q115199: Too Many Files in Root Directory Generates DriveSpace Err Msgs"
permalink: /kb/115/Q115199/
---

## Q115199: Too Many Files in Root Directory Generates DriveSpace Err Msgs

{% raw %}

	Article: Q115199
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have more than 500 files in the root directory of your startup drive and
	you run DoubleSpace or DriveSpace, you receive one of the following error
	messages
	
	- 
	
	  Too many files in the root directory, remove some files from the root and try
	  this operation again.
	
	-or-
	
	- 
	
	  Error Copying <filename>
	
	  where <filename> is DRVSPACE.BIN, DRVSPACE.EXE, DEFRAG.EXE,
	  DRVSPACE.HLP, or DRVSPACE.INF.
	
	The error message you receive depends on the number of files in your root
	directory and whether or not DoubleSpace or DriveSpace is already installed on
	your system.
	
	If you try to convert a DoubleSpace-compressed drive to a DriveSpace- compressed
	drive, you may receive the following error message:
	
	  There is not enough free space on your original startup drive, which is now
	  drive C. DriveSpace will need at least 0.58 MB of free space on that drive.
	  Delete some files from that drive, and try this operation again.
	
	CAUSE
	=====
	
	These error messages are displayed when there are too many files in the root
	directory of your compressed drive or host drive.
	
	WORKAROUND
	==========
	
	To work around this problem, delete a few files from the root directory, or move
	them to a subdirectory.
	
	Additional query words: dblspace 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	

{% endraw %}
