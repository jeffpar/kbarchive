---
layout: page
title: "Q97689: MS-DOS-Based Program Doesn't Run After Installing DoubleSpace"
permalink: /kb/097/Q97689/
---

## Q97689: MS-DOS-Based Program Doesn't Run After Installing DoubleSpace

	Article: Q97689
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	You install DoubleSpace and one or more of your MS-DOS-based applications no
	longer runs.
	
	CAUSE
	=====
	
	The application(s) may be using a copy-protection scheme or may be looking for
	files that were left on the host drive.
	
	WORKAROUND
	==========
	
	If your application does not run after you install DoubleSpace, do the
	following:
	
	1. If the application uses a copy-protection scheme, contact the application
	  vendor for information on how to make it work with DoubleSpace.
	
	2. Check the host drive for application files that were not transferred to the
	  DoubleSpace volume by using the following steps:
	
	  a. To determine your host drive, type "dblspace /list" (without the quotation
	     marks) at the MS-DOS command prompt and then press ENTER.
	
	  b. At the MS-DOS command prompt, change to the host drive (for example, drive
	     H).
	
	  c. Change to the application directory (if one exists). For example, type "cd
	     appdir" (without the quotation marks) at the MS-DOS command prompt and
	     then press ENTER.
	
	  d. Use the DIR command with the /A and /S parameters to search for any files
	     left in the directory. For example, type "dir /a /s" (without the
	     quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	  e. If any files are left in the applications directory, copy them to the
	     DoubleSpace volume. For example, type the following at the MS-DOS command
	     prompt and then press ENTER:
	
	  " copy h:\appdir\file.exe c:\appdir\file.exe " (without the quotation marks)
	
	Additional query words: 6.00 6.20 dblspace double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
