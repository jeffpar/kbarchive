---
layout: page
title: "Q184568: XADM: Authrest Err. Msg. in 5.0: Dynamic Link Library Not Found"
permalink: /kb/184/Q184568/
---

## Q184568: XADM: Authrest Err. Msg. in 5.0: Dynamic Link Library Not Found

	Article: Q184568
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the Authrest utility, Authrest.exe, from the Microsoft
	Exchange Server 5.0 CD, Authrest.exe fails with the following error message:
	
	  The dynamic link library edb.dll could not be found in the specified
	  path <PATH system variable>
	
	CAUSE
	=====
	
	Authrest.exe is being run from a directory other than exchsrvr\bin.
	
	WORKAROUND
	==========
	
	To work around this problem, copy Authrest.exe to the \exchsrvr\bin directory
	and run the command from the \exchsrvr\bin directory.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
