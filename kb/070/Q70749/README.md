---
layout: page
title: "Q70749: Debug: &quot;U 0 FFFF&quot; Produces Incorrect Results"
permalink: /kb/070/Q70749/
---

## Q70749: Debug: &quot;U 0 FFFF&quot; Produces Incorrect Results

	Article: Q70749
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The UNASSEMBLE command in the Debug utility has the syntax "U [range]" and is
	used to display the unassembled information contained in the specified range.
	For example, the command "U 0 8" displays the unassembled information in bytes 0
	(zero) through 8.
	
	The command displays incorrect results if the specified range is bytes 0 through
	FFFF. DEBUG displays only the unassembled representation of the byte at offset
	0, rather than the bytes 0 through FFFF.
	
	Additional query words: 6.22 2.11 3.00 3.20 3.30 3.30a 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS330 kbMSDOS401 kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
