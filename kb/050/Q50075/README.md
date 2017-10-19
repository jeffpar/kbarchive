---
layout: page
title: "Q50075: Limitations on the Use of the '&#42;' Wildcard Character"
permalink: /kb/050/Q50075/
---

## Q50075: Limitations on the Use of the '&#42;' Wildcard Character

	Article: Q50075
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The asterisk (*) wildcard character cannot be placed before a static string in a
	wildcard search path. When the MS-DOS file search routines find an asterisk
	wildcard character in a path, the routines fill the remaining filename field
	with the question-mark (?) wildcard character. When this happens, any static
	text in the filename following the asterisk is discarded.
	
	MORE INFORMATION
	================
	
	For example, the following wildcard string:
	
	  FIL*NAM.*
	
	is interpreted by MS-DOS as follows:
	
	  FIL?????.???
	
	This string finds all files starting with the character string "FIL" instead of
	all files beginning with "FIL" and ending with "NAM" and having a non-specific
	number and type of characters between "FIL" and "NAM." To find the files as
	described above, three separate searches must be made. These searches are as
	follows:
	
	  FILNAM.*
	  FIL?NAM.*
	  FIL??NAM.*
	
	Additional query words: 6.22 3.20 3.21 3.30 3.30a 4.00 4.01 5.00a 5.00 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
