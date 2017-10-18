---
layout: page
title: "Q98135: &quot;General Failure Error Reading Drive O:&quot; Error Message"
permalink: kb/098/Q98135/
---

## Q98135: &quot;General Failure Error Reading Drive O:&quot; Error Message

	Article: Q98135
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	At times you may receive the error message:
	
	  General Failure Error Reading Drive O: Abort, Retry, Fail ?
	
	The error occurs when trying to do a NET USE, and will occur from the MS-DOS
	command prompt.
	
	CAUSE
	=====
	
	This problem very often is caused by having a server-level that does not support
	the amount of users you are trying to attach to the specified server. For
	example, if you have a ten user server, and you try to attach an eleventh user,
	you will sometimes encounter the error.
	
	RESOLUTION
	==========
	
	Add a user pack so that your server-level allows the amount of sessions you are
	trying to support.
	
	Additional query words: 2.10 addpack
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
