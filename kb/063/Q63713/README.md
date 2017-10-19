---
layout: page
title: "Q63713: Largest Document Size MS-DOS Editor Can Edit"
permalink: /kb/063/Q63713/
---

## Q63713: Largest Document Size MS-DOS Editor Can Edit

	Article: Q63713
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MS-DOS Editor (EDIT.EXE) occupies approximately 289 kilobytes (K) of the
	available program space; therefore, the largest file size MS-DOS Editor can edit
	is equal to the total space available for programs minus 289K.
	
	For example, if the MEM command reports the following
	
	  655,360 bytes total conventional memory
	  655,360 bytes available to MS-DOS
	  585,584 largest executable program size
	
	the largest file MS-DOS Editor can load into memory is as follows:
	
	      585K  Largest executable program size
	    - 289K  Memory MS-DOS Editor occupies
	    ---------------------------------------
	
	      296K  Space available for text file
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 out of memory yeswin4
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
