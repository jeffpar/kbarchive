---
layout: page
title: "Q79892: MS-DOS LABEL Command May Truncate Spaces"
permalink: kb/079/Q79892/
---

## Q79892: MS-DOS LABEL Command May Truncate Spaces

	Article: Q79892
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MS-DOS LABEL command may truncate consecutive spaces within a label name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft MS-DOS versions 5.x,
	6.0, 6.2, and 6.21. We are researching this problem and will post new
	information here as it becomes available.
	
	MORE INFORMATION
	================
	
	Using the syntax provided in the example on page 517 of the version 5.0
	"Microsoft MS-DOS User's Guide and Reference," consecutive spaces may be
	interpreted as a single space. The example was intended for labels without
	consecutive spaces.
	
	The syntax for the LABEL command in the version 5.0 "MS-DOS User's Guide and
	Reference" shows the following:
	
	  label a:sales1991
	
	Using the above syntax for labels with consecutive spaces may truncate spaces to
	a single space.
	
	WORKAROUND
	==========
	
	To avoid interpreting consecutive spaces as a single space, the following format
	should be used with the LABEL command:
	
	With a formatted disk in drive A, enter the following at the command prompt:
	
	  " label a: " (without the quotation marks)
	
	The following is displayed:
	
	  Volume in drive D has no label
	  Volume label (11 characters, ENTER for none)? TEST 1
	
	The volume label is correctly recorded as:
	
	  test 1
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 label.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
