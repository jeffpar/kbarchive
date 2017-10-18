---
layout: page
title: "Q99578: Trap Errors with NEC Powermate Global Cache and Madge"
permalink: kb/099/Q99578/
---

## Q99578: Trap Errors with NEC Powermate Global Cache and Madge

	Article: Q99578
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	Your system traps with an NEC Powermate 486 EISA tower with global cache turned
	on, and a Madge 32-bit token ring card.
	
	CAUSE
	=====
	
	Madge token ring card models other than 5208 (part number series 95XXX) cannot
	function with the NEC CMOS global cache setting turned on. Any other Madge token
	ring card model (5209, 5210, and so on) traps the system.
	
	WORKAROUND
	==========
	
	Turn the NEC CMOS global cache off or obtain Madge token ring card model 5208.
	
	Additional query words: globalcache 2.20 2.2 madge5208
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
