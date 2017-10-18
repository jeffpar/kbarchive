---
layout: page
title: "Q103547: Error Message Formatting Blank Disk: Drive Not Ready"
permalink: kb/103/Q103547/
---

## Q103547: Error Message Formatting Blank Disk: Drive Not Ready

	Article: Q103547
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FORMAT command may report "Drive not ready" if you try to format an
	unformatted disk in drive B after you access an empty drive A. The same problem
	occurs if you access an empty drive B and then try to format a disk in drive A.
	
	NOTE: If the floppy disk has been previously formatted, the FORMAT command works
	correctly.
	
	RESOLUTION
	==========
	
	To work around this problem, restart your computer or use the /U (unconditional)
	parameter when you format the disk. For example, type "format b: /u" (without
	the quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 5.0, 5.0a, 6.0,
	and 6.2. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 err msg errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
