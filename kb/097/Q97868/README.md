---
layout: page
title: "Q97868: Uninstall Doesn't Run If It Finds DoubleSpace Files"
permalink: kb/097/Q97868/
---

## Q97868: Uninstall Doesn't Run If It Finds DoubleSpace Files

	Article: Q97868
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You try to use the Uninstall disk to remove MS-DOS 6.0, but you receive an error
	message stating that you cannot uninstall MS-DOS 6.0 because you installed
	DoubleSpace.
	
	CAUSE
	=====
	
	If DoubleSpace is installed on your computer, you cannot use the Uninstall disk
	to remove MS-DOS 6.0. If you try to do so, you receive the error message
	mentioned above. If you remove DoubleSpace, you still receive this error message
	if either of the following is true:
	
	- DBLSPACE.BIN is in the root of the host drive
	
	-or-
	
	- A functional DoubleSpace driver is active in memory after you start your
	  computer with the Uninstall disk in drive A. This occurs when you have a
	  valid DBLSPACE.INI file on your host drive.
	
	WORKAROUND
	==========
	
	To work around these problems, try using the Uninstall disk after you following
	these steps:
	
	1. Use the DIR /A command to confirm that no DBLSPACE.<nnn> files are
	  located in the root directory of your local drive(s). As an alternative, you
	  can use the DBLSPACE /LIST command to confirm no DBLSPACE.<nnn> files
	  exist on your system.
	
	  If you find any compressed volume files (DBLSPACE.<nnn>), and you want
	  to remove DoubleSpace, see section 7.6 of the README.TXT file, "Removing
	  DoubleSpace from your computer," or query on the following words in the
	  Microsoft Knowledge Base:
	
	  "how" (without the quotation marks) and "remove" (without the quotation
	  marks) and "doublespace" (without the quotation marks) and "preserve"
	  (without the quotation marks)
	
	  After you remove any DBLSPACE.<nnn> files, continue with step 2 of this
	  procedure.
	
	2. Delete or rename any DBLSPACE.BIN or DBLSPACE.INI files in the root directory
	  of all drive(s). If the Uninstall program finds a DBLSPACE.BIN or
	  DBLSPACE.INI file in the root directory of the first hard disk drive or the
	  root of the first hard disk drive's host drive, it assumes DoubleSpace is in
	  use.
	
	3. Delete or rename DBLSPACE.BIN on the Uninstall disk. The driver can't load if
	  MS-DOS can't find it.
	
	If you cannot use the Uninstall disk to remove MS-DOS 6 because DoubleSpace is
	still detected, call Microsoft Product Support Services at (425) 646-5104 for
	assistance.
	
	
	Additional query words: 6.00 dblspace double space remove delete un-install
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	
