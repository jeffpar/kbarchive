---
layout: page
title: "Q105186: DBLSPACE /MAXFILEFRAGMENTS May Not Display Error Message"
permalink: /kb/105/Q105186/
---

## Q105186: DBLSPACE /MAXFILEFRAGMENTS May Not Display Error Message

	Article: Q105186
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DoubleSpace does not display an error message when you issue a DBLSPACE
	/MAXFILEFRAGMENTS command with more than the maximum valid value. However,
	MaxFileFragments in the DBLSPACE.INI file is still set to the maximum valid
	value of 10,000. For example:
	
	  MaxFileFragems=10000
	
	NOTE: This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and
	filenames.
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
