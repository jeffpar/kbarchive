---
layout: page
title: "Q78437: Internal Stack Overflow with WordPerfect 5.1 and MS-DOS 5.0"
permalink: kb/078/Q78437/
---

## Q78437: Internal Stack Overflow with WordPerfect 5.1 and MS-DOS 5.0

	Article: Q78437
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WordPerfect has confirmed that the following error message may be displayed on a
	system running WordPerfect 5.1 with MS-DOS 5.0.
	
	  Internal Stack Overflow
	  System Halted
	
	To correct this error, use the BUFFERS= and STACKS= commands in the CONFIG.SYS
	file.
	
	This information applies to Microsoft MS-DOS version 5.0.
	
	MORE INFORMATION
	================
	
	The following commands must be added to the CONFIG.SYS file to resolve the above
	error message:
	
	     BUFFERS=X
	
	(where X is 16 or more)
	
	     STACKS=16,128
	
	The STACKS command needs to occur AFTER the BUFFERS= statement, and BUFFERS needs
	to be set to at least 16. The default number for BUFFERS is 15 for machines with
	at least 640K memory.
	
	
	The STACKS command supports the dynamic use of data stacks to handle hardware
	interrupts. The syntax of the command is:
	
	STACKS=n,s
	
	(where n specifies the number of stacks and s specifies the size [in bytes] of
	each stack).
	
	The stacks are created within the buffers; therefore, the STACKS command must
	occur after the BUFFERS statement.
	
	The product included here is manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	REFERENCES
	==========
	
	WordPerfect technical support: (800) 541-5096
	
	Additional query words: err msg 5.00 5.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
