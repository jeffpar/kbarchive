---
layout: page
title: "Q40705: MS-DOS: Reassignment Buffer Size of ANSI.SYS"
permalink: /kb/040/Q40705/
---

## Q40705: MS-DOS: Reassignment Buffer Size of ANSI.SYS

	Article: Q40705
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.3,3.3a,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In MS-DOS versions 3.30 and 3.30a, the ANSI.SYS driver can be used to reassign
	some of the keys on the keyboard to perform a user-defined function. The entire
	keyboard cannot be redefined. The number of keys that can be redefined is
	limited by a reassignment buffer size internal to ANSI.SYS. The size of this
	buffer in MS-DOS versions 3.30 and 3.30a is 200 bytes.
	
	MORE INFORMATION
	================
	
	Public-domain ANSI.SYS substitute drivers are available that provide a larger
	buffer to redefine more of the keys.
	
	Additional query words: 6.22 3.30 3.30a 4.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.3,3.3a,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
