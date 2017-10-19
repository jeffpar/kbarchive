---
layout: page
title: "Q123248: PC WRmt: Err Msg: Postoffice Has Not Accepted Mail Item"
permalink: /kb/123/Q123248/
---

## Q123248: PC WRmt: Err Msg: Postoffice Has Not Accepted Mail Item

	Article: Q123248
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When version 3.2 of Microsoft Mail Remote for Windows has mail queued up and
	dials into the EXTERNAL.EXE machine at the postoffice, the following error may
	be displayed after a connection has been established:
	
	  Postoffice has not accepted mail item
	
	EXTERNAL.EXE will log the following error in the log file:
	
	  Connection end. Disk storage full.
	
	CAUSE
	=====
	
	This error could be caused by missing subdirectories under the MAI or ATT
	directory.
	
	RESOLUTION
	==========
	
	The MAI directory has 16 subdirectories, MA0 through MAF. The ATT directory has
	16 subdirectories, AT0 through ATF. Missing subdirectories are often a result of
	backup and restore processes that are not configured to include empty
	directories or zero-length files. The POPULATE.MSM file is used to ensure the
	directory is not completely empty.
	
	If subdirectories are missing from the MAI or ATT directory, either restore them
	from a backup copy. If no backup exists, create them using the MS-DOS Make
	Directory (MD) command and copy POPULATE.MSM from another mail subdirectory,
	then change the attribute to read only.
	
	NOTE: If you do not restore from backup copies but you just re-create the missing
	subdirectories, any mail messages or attachments in the directory prior to its
	loss will no longer be available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
