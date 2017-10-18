---
layout: page
title: "Q50564: MS-DOS: Problem COPYing Zero-Length Files"
permalink: kb/050/Q50564/
---

## Q50564: MS-DOS: Problem COPYing Zero-Length Files

	Article: Q50564
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a file of zero length is copied to a currently existing file, the COPY
	command returns the following message and incorrectly deletes the target file in
	the process:
	
	  0 File(s) copied
	
	CAUSE
	=====
	
	When a file is to be copied to an existing file, the COPY command deletes the
	target file and then proceeds to copy the source file onto the target file.
	However, just before proceeding, COPY checks the length of the source file and,
	since it is of length zero, the COPY command is aborted. The net result is that
	the previously existing target file isn't undeleted and hence is lost.
	
	WORKAROUND
	==========
	
	You can recover the target file by using a third-party utility (such as The
	Norton Utilities or PC-Tools).
	
	With MS-DOS 5.0 and later, the UNDELETE command can also be used to recover the
	target file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft MS-DOS packaged
	product versions listed at the beginning of this article. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	MORE INFORMATION
	================
	
	For more information on UNDELETE, query on the following words:
	
	  " ms-dos and 5.00 and undelete and file " (without the quotation marks)
	
	The third-party utilities mentioned above are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.30 3.30a 4.00 4.01 5.00 5.00a 6.00 6.20 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
