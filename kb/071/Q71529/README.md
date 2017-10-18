---
layout: page
title: "Q71529: Reader and Writer with Copy Protect May Lock System"
permalink: kb/071/Q71529/
---

## Q71529: Reader and Writer with Copy Protect May Lock System

	Article: Q71529
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Learning Company's earlier Reader and Writer Rabbit software applications
	may lock a computer system with ANSI.SYS loaded high using MS-DOS version 5.0.
	This problem occurs when either program is executed from the hard disk and the
	program requests the key disk be inserted into the floppy drive. When this is
	done, the system may lock up.
	
	The problem might be caused by a copy protection scheme that both these programs
	have. Reader 2.4 and Writer 1.2 are specific versions that contain a copy
	protection scheme and have locked systems.
	
	WORKAROUND
	==========
	
	1. Load ANSI.SYS low.
	
	-or-
	
	2. Upgrade to a later version of either program. Reader version 4.1 and Writer
	  version 1.3 no longer have a copy protection scheme and do not produce the
	  same problem as the earlier versions.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
