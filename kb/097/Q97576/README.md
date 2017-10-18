---
layout: page
title: "Q97576: Err Msg: &quot;DoubleSpace Cannot Copy the File DBLSPACE.INF&quot;"
permalink: kb/097/Q97576/
---

## Q97576: Err Msg: &quot;DoubleSpace Cannot Copy the File DBLSPACE.INF&quot;

	Article: Q97576
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	After it examines a hard disk, the DoubleSpace utility may return one of the
	following error messages:
	
	  DoubleSpace Cannot Copy The File DBLSPACE.INF
	
	  -or-
	
	  DoubleSpace cannot copy DBLSPACE.BIN
	
	CAUSE
	=====
	
	The root directory of the drive contains an excessive number of entries. The
	root directory of a hard disk can contain up to 512 entries,including both files
	and directories.
	
	NOTE: The first error message can also be generated when the files DBLSPACE.INF
	or DBLSPACE.HLP are not in the DOS directory.
	
	WORKAROUND
	==========
	
	Reduce the number of entries in the root directory.
	
	Additional query words: 6.00 6.20 double space dblspace
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
