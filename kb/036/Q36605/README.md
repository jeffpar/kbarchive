---
layout: page
title: "Q36605: Environment Variable Trailing Spaces Not Truncated"
permalink: kb/036/Q36605/
---

## Q36605: Environment Variable Trailing Spaces Not Truncated

	Article: Q36605
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When setting environment variables, the following commands produce different
	environment variables:
	
	  SET FIRST=one
	  SET FIRST =two
	
	MORE INFORMATION
	================
	
	The command SET now displays the following (along with all the other environment
	variables):
	
	  FIRST=one
	  FIRST =two
	
	Trailing spaces are not removed from the environment variable that is being set.
	The variables are fully functional and may be addressed in batch files by using
	the same syntax when referring to the variable. For example, the following line
	
	  echo %FIRST %
	
	will print the word "two" on the screen.
	
	Additional query words: 6.22 3.00 3.10 3.20 3.30 3.30A 4.00 5.00 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
