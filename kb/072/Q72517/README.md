---
layout: page
title: "Q72517: UNDELETE Won't Work If the Subdirectory Has Been Removed"
permalink: /kb/072/Q72517/
---

## Q72517: UNDELETE Won't Work If the Subdirectory Has Been Removed

	Article: Q72517
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Removing the subdirectory after deleting files contained within the subdirectory
	will cause UNDELETE to fail even if the MIRROR /t<drive> command is
	running. To recover deleted files, re-create the subdirectory with the MKDIR
	(MD) command, then use the UNDELETE feature.
	
	The UNDELETE command defaults to the current directory. If the subdirectory of
	the root had been deleted, the default directory is the root directory. For
	multiple subdirectory structures, the default is the next higher subdirectory.
	
	  Note: MIRROR /t<drive> must be running prior to any file deletion.
	
	MORE INFORMATION
	================
	
	When you are running MIRROR /t<drive> in the AUTOEXEC.BAT file to track
	deleted files, observe caution before removing the subdirectory where the files
	were located.
	
	If the deleted files are located in a subdirectory that has been removed with the
	RMDIR (RD) command, all possibilities for file undeletion are lost unless the
	subdirectory is re-created with the MKDIR (MD) command prior to UNDELETE.
	
	Additional information using the UNDELETE command is located in the version 5.0
	"Microsoft MS-DOS User's Guide and Reference," Chapter 4, Working with Files,
	page 90, Recovering Deleted Files; and Chapter 14, Commands, page 579,
	UNDELETE.
	
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
