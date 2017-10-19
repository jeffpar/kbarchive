---
layout: page
title: "Q103705: Piping LOAD Commands to NUL Causes Windows Sharing Violations"
permalink: /kb/103/Q103705/
---

## Q103705: Piping LOAD Commands to NUL Causes Windows Sharing Violations

	Article: Q103705
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Users sometimes pipe network commands to NUL to shield their workstations from
	network messages. But If SHARE.EXE is loaded and any LAN Manager LOAD command
	has been piped to NUL before you enter Windows enhanced mode (LOAD NETBEUI >
	NUL) then all subsequent piping to NUL from within Windows reports a sharing
	violation.
	
	To avoid this, refrain from piping protocol LOAD commands to NUL. It should not
	pose a problem: LOAD commands return only two lines of information.
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
