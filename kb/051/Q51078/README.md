---
layout: page
title: "Q51078: FILECOMPARE Does Not Count Blank Lines"
permalink: kb/051/Q51078/
---

## Q51078: FILECOMPARE Does Not Count Blank Lines

	Article: Q51078
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following FC (FILECOMPARE) command should compare file1 to file2, ignoring
	white space and adding line numbers to the differences report:
	
	  fc /w/n file1 file2
	
	Blank lines should be counted when computing the reported line numbers; however,
	they are not counted.
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 4.x and 5.x. This
	problem was corrected in later versions of MS-DOS.
	
	Additional query words: 4.01 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x
	
	=============================================================================
	
