---
layout: page
title: "Q99531: Adjusting PRINTSTA Parameters Speeds Network Printing"
permalink: /kb/099/Q99531/
---

## Q99531: Adjusting PRINTSTA Parameters Speeds Network Printing

	Article: Q99531
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	You can set several parameters from the command line to speed up networked
	printings on MS-DOS workstations when PRINTSTA is loaded. Type "PRINTSTA"
	(without the quotation marks) at the command line to see which parameters it is
	currently using, or "PRINTSTA /?" (without the quotation marks) for a brief
	description of each.
	
	MORE INFORMATION
	================
	
	The parameters most useful for speeding up printing are:
	
	- /T (set this to 1)
	
	- buffers (set this to 1024 [default = 128])
	
	- /i (you can assign whatever value you want to this, but setting it too high
	  can cause problems. If you change it and problems develop, look to it first
	  as a probable cause.)
	
	Giving your protocol stack more NCBs seems to help. You need at least 8 for the
	stack to function properly, 12 is better, and if a lot of people are trying to
	connect at the same time you may want even more.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
