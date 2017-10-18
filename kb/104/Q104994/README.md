---
layout: page
title: "Q104994: DBLSPACE /UNCOMPRESS Points to Zero-Byte DBLSPACE.LOG File"
permalink: kb/104/Q104994/
---

## Q104994: DBLSPACE /UNCOMPRESS Points to Zero-Byte DBLSPACE.LOG File

	Article: Q104994
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	When you have duplicate files or directories on your compressed drive and host
	drive, you receive a message instructing you to read a DBLSPACE.LOG file when
	you attempt to uncompress a drive. The DBLSPACE.LOG file may be a zero-byte
	file.
	
	CAUSE
	=====
	
	If the host drive has zero bytes free, the DBLSPACE.LOG file is created as a
	zero-byte file when DoubleSpace tries to write the DBLSPACE.LOG file.
	
	NOTE: If the host drive is write protected, the DBLSPACE.LOG file cannot be
	created.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Run DoubleSpace, decrease the size of the DoubleSpace-compressed drive, and
	  then run DBLSPACE /UNCOMPRESS.
	
	-or-
	
	- Free up some space on the host drive by moving files to another drive and
	  then running DBLSPACE /UNCOMPRESS.
	
	Additional query words: 6.20 double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
