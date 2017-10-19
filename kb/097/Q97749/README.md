---
layout: page
title: "Q97749: Adjusting PRINTSTA Parameters to Enhance Printer Speed"
permalink: /kb/097/Q97749/
---

## Q97749: Adjusting PRINTSTA Parameters to Enhance Printer Speed

	Article: Q97749
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	You can set several parameters from the command line to speed up network
	printing on MS-DOS workstations when using PRINTSTA.EXE. Type "PRINTSTA"
	(without the quotation marks) at the command line to see which parameters it is
	currently using, or "PRINTSTA /?" (without the quotation marks) for a brief
	description of each parameter.
	
	MORE INFORMATION
	================
	
	Some parameters that are most useful for enhancing printing speed are are:
	
	/T:1 Timer Priority   This sets the priority for PRINTSTA as to how
	                     often it can use the system's processor. Setting
	                     this to 1 gives PRINTSTA its highest priority.
	
	/B:20                 Number of network buffers for use with PRINTSTA.
	                     20 is the maximum. Each buffer uses 128 bytes.
	
	/I:50 Timer Loop      This sets the number of processing cycles PRINTSTA
	Iterations            uses before relinquishing control. You can assign
	           whatever value you want to this, but setting it too
	           high can cause problems. If you change it and
	           problems develop, look to it first as a probable
	           cause.
	
	/O:1024 Number of     This should be matched to the value set for the /M
	Characters to Print   parameter.
	in Each Pass
	
	/M:1024        The amount of cache memory to be reserved for
	                     each permitted spool file.
	
	Giving your protocol stack more NCBs seems to help. You need at least 8 for the
	stack to function properly, 12 is better, and if a lot of people are trying to
	connect at the same time you may want even more.
	
	Additional query words: 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
