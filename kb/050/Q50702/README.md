---
layout: page
title: "Q50702: PRB: /PACKCODE Incompatible with IOPL Segments w/ LINK 5.01.21"
permalink: kb/050/Q50702/
---

## Q50702: PRB: /PACKCODE Incompatible with IOPL Segments w/ LINK 5.01.21

	Article: Q50702
	Product(s): Microsoft Programming Utilities
	Version(s): OS/2:5.01.21
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for OS/2, version 5.01.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	LINK Version 5.01.21 does not support the combination of using the /PACKCODE
	switch and having code segments declared as IOPL (i.e., as having I/O
	privilege).
	
	When combining segments as directed by the /PACKCODE option, LINK 5.01.21 will
	combine the IOPL segment(s) with other segments that do not have I/O privilege.
	The result is an invalid executable that returns the system error SYS1059 when
	it is invoked.
	
	STATUS
	======
	
	The lack of ability to combine these options is a limitation of this particular
	linker version. LINK Version 5.03 allows the combination of /PACKCODE and IOPL
	segments without a problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK50121DOS
	Version           : OS/2:5.01.21
	
	=============================================================================
	
