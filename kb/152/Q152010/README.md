---
layout: page
title: "Q152010: LUA RUI/SLI Calls May Return Immediately or with LUA_IN_PROGRESS"
permalink: /kb/152/Q152010/
---

## Q152010: LUA RUI/SLI Calls May Return Immediately or with LUA_IN_PROGRESS

	Article: Q152010
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogramming
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, versions 2.0, 2.1, 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	There is no way for an application program to control whether an SNA Server
	LUA RUI or SLI call will return synchronously (that is, block the calling
	thread) or asynchronously. The call may complete immediately (for example
	if data has already arrived to complete a read request), though in most
	cases the call will return immediately with the primary return code set to
	LUA_IN_PROGRESS (0x0030). In this case, the application must use whatever
	asynchronous completion method it chose to wait for the verb to complete.
	
	Asynchronous completion methods are described in Chapter 2 (pages 17 and
	18) in the SNA Server LUA Programmer's Guide. SNA Server 3.0 documents this
	in the LUA Programmer's Guide section of the SNA SDK Documentation applet.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbprogramming 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200NT kbSNAServ300NT kbSNAServ210NT kbSNAServ211NT
	Version           : :2.0,2.1,2.11,3.0
	
	=============================================================================
	
