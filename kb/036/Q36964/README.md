---
layout: page
title: "Q36964: Meaning of the /PATH:ON Option of the MS-DOS APPEND Command"
permalink: /kb/036/Q36964/
---

## Q36964: Meaning of the /PATH:ON Option of the MS-DOS APPEND Command

	Article: Q36964
	Product(s): Microsoft Disk Operating System
	Version(s): 4.0,4.01,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The APPEND command in MS-DOS versions 4.0 and later has a /PATH: option. APPEND
	allows you to specify a search path for data files. If MS-DOS cannot find a data
	file in the current directory, APPEND searches for the file using the APPEND
	path. If the filename specified includes a path and/or drive name (for example,
	C:\DIR\FILENAME versus FILENAME) APPEND checks the /PATH option. If the
	/PATH:OFF option has been specified, APPEND does not search the APPENDed
	directories. If the /PATH:ON option has been specified, APPEND will search the
	APPENDed directories if the file cannot be found in the specified directory.
	
	Additional query words: 6.22 4.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : :4.0,4.01,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
