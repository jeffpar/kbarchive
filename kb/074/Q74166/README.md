---
layout: page
title: "Q74166: MS-DOS: Piped DIR Command Shows Temporary Files"
permalink: /kb/074/Q74166/
---

## Q74166: MS-DOS: Piped DIR Command Shows Temporary Files

	Article: Q74166
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Temporary files having a zero byte size can be seen if the DIR command is issued
	with a pipe symbol and parameters MORE or SORT. These files are seen when the
	DIR command is listing files residing in the temporary directory.
	
	If the temporary directory is set to be: C:\windows\temp and the current
	directory is C:\windows\temp, then the following examples of commands will show
	the temporary DOS files:
	
	  dir | more
	  dir | sort
	
	The files can also be seen if the current directory is not the temporary
	directory by including a path as shown below:
	
	  dir C:\windows\temp | more
	  dir \windows\temp |sort
	
	The files will appear as eight-character files with no file extensions. They will
	have zero bytes and will be stamped with the date and time that the command was
	given, as follows:
	
	  AOBOAJCF 0 7-04-91 2:45p
	  AOBOAJCK 0 7-04-91 2:45p.
	
	If you don't use the pipe parameter, these files will not be visible. They are
	temporary and are deleted immediately after the command is finished executing.
	
	This information applies to MS-DOS version 5.0. In versions previous to 5.0, the
	temporary files were not created in the directory specified by the temp
	variable, but rather in the root directory of the active drive.
	
	Additional query words: 5.00 5.00a 6.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0
	
	=============================================================================
	
