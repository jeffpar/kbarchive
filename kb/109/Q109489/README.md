---
layout: page
title: "Q109489: UNDELETE Err Msg: Cannot Load with Neither Option Selected"
permalink: kb/109/Q109489/
---

## Q109489: UNDELETE Err Msg: Cannot Load with Neither Option Selected

	Article: Q109489
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Undelete for MS-DOS (UNDELETE.EXE) generates the following error
	message when the command UNDELETE /LOAD is run:
	
	  Cannot load with neither option selected
	
	CAUSE
	=====
	
	This error is the result of an improper combination of settings found in the
	[defaults] section of the UNDELETE.INI file. This error occurs if the [defaults]
	section of the UNDELETE.INI file appears as follows:
	
	  [defaults]
	  d.sentry=FALSE
	  d.tracker=FALSE
	
	The UNDELETE /LOAD command relies on this section to load whichever option is set
	to TRUE. If both values are FALSE, UNDELETE does not load.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Use the command UNDELETE /T to specifically load Delete Tracker, or use
	  UNDELETE /S to specifically load Delete Sentry.
	
	-or-
	
	- Edit the UNDELETE.INI file to set the chosen method of delete protection to
	  TRUE. For example, to make the command UNDELETE /LOAD load Delete Sentry by
	  default, set the [defaults] section of the UNDELETE.INI file as follows:
	
	  [defaults]
	  d.sentry=TRUE
	  d.tracker=FALSE
	
	For more information about the UNDELETE.INI file, type "help undelete" (without
	the quotation marks) at the MS-DOS command prompt, press ENTER, and refer to the
	Notes section.
	
	
	Additional query words: 6.22 6.00 6.20 MS-DOS-based
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
