---
layout: page
title: "Q87284: DOSKEY Maximum Buffer Size is 61900 Bytes"
permalink: /kb/087/Q87284/
---

## Q87284: DOSKEY Maximum Buffer Size is 61900 Bytes

	Article: Q87284
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Specifying a buffer size larger than 61900 for DOSKEY causes your computer to
	stop responding (hang).
	
	CAUSE
	=====
	
	The maximum size of the DOSKEY command history and macro buffer is equal to 64K
	minus the size of the DOSKEY program itself. This works out to approximately
	61900 bytes. Due to an error in the DOSKEY program, specifying a buffer size
	larger than this will cause your computer to hang. To avoid this problem,
	specify a buffer of 61900 bytes or less.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 5.0, 5.00a, and
	6.00. This problem was corrected in later versions.
	
	MORE INFORMATION
	================
	
	Because DOSKEY is a .COM program, it is limited to 64K of memory for both its
	code and data. For this reason, the maximum command history and macro buffer
	size is equal to 64K minus the DOSKEY code, or approximately 61900 bytes.
	
	If you specify a buffer size larger than can fit within the DOSKEY 64K memory
	segment, DOSKEY will detect it and automatically truncate the buffer. While
	DOSKEY correctly limits the size of the buffer, an error in the code used when
	DOSKEY terminates and stays resident causes DOSKEY to miscalculate the amount of
	memory to free on termination.
	
	As a result, the memory where DOSKEY is loaded is marked as unused. The next
	program that runs will be placed where DOSKEY is already located, which causes
	the computer to hang.
	
	
	Reference(s):
	
	"Microsoft MS-DOS User's Guide and Reference," versions 5.0 and 5.0a
	
	Additional query words: 5.00 5.00a 6.00 lock /bufsize large MS DOS KEY
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
