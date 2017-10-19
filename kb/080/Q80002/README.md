---
layout: page
title: "Q80002: Quicken Should Not Be Task Swapped from MS-DOS Shell"
permalink: /kb/080/Q80002/
---

## Q80002: Quicken Should Not Be Task Swapped from MS-DOS Shell

	Article: Q80002
	Product(s): Microsoft Disk Operating System
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Intuit has confirmed that all versions of Quicken should not be task swapped
	from MS-DOS Shell. Task swapping Quicken may cause system hangs and/or result in
	loss of Quicken data.
	
	To avoid loss of Quicken data, disable Task Swapper.
	
	MORE INFORMATION
	================
	
	Quicken is a finance program designed for individuals and small businesses.
	
	When Quicken is task swapped from Shell, the Quicken program is not properly
	closed. Quicken data files and indexes (.QNX files) are left open and are not
	saved. This may cause Quicken file corruption.
	
	To properly execute Quicken from Shell, Task Swapper should be disabled. To
	disable Task Swapper, choose Enable Task Swapper from the Options menu. The
	Active Task List will no longer be displayed.
	
	
	The product included here, Quicken, is manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	To obtain phone numbers for Untuit, query on the following words in the Microsoft
	Knowledge Base:
	
	  " Intuit and phone list " (without the quotation marks)
	
	"Microsoft MS-DOS User's Guide and Reference Manual," version 5.0, Chapter 3,
	Chapter 8
	
	Additional query words: lock up dosshell 5.00 5.00a 6.00 3rdparty
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
