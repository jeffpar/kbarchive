---
layout: page
title: "Q152009: Handling LUA RUI_WRITE Completion Delays"
permalink: kb/152/Q152009/
---

## Q152009: Handling LUA RUI_WRITE Completion Delays

	Article: Q152009
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetwork kbProgramming
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, versions 2.0, 2.1, 2.11, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following questions regarding the SNA Server LUA RUI_WRITE verb were raised
	by an application developer.
	
	Generally, when issuing the RUI_WRITE verb, the successful posting response comes
	back within a second or two. However, in certain circumstances the RUI_WRITE
	verb takes longer than 30 seconds to complete, which is when our communications
	interface assumes the call is not going to complete, and returns a failure to
	the calling application.
	
	Questions:
	
	1. As we cannot issue another RUI_WRITE verb on the same flow until the previous
	  one returns, are we always guaranteed to get a response from an RUI_WRITE
	  verb, even if it takes longer than 30 seconds?
	
	  Answer: Yes, the RUI application is guaranteed to receive a response to the
	  RUI_WRITE call. If errors occur anywhere on the connection, session, client-
	  server LAN session, and so forth, RUI_WRITE will complete with an error,
	  otherwise it will complete successfully.
	
	
	2. Is there a way of canceling an outstanding RUI_WRITE call? I am unaware of
	  any method; my understanding is that RUI_PURGE only works with outstanding
	  RUI_READS, and that RUI_TERM only works with RUI_INIT.
	
	  Answer: RUI_PURGE can only be used for canceling RUI_READ verbs. There is no
	  way of canceling an outstanding RUI_WRITE, apart from closing the entire
	  session with RUI_TERM.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbProgramming 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200NT kbSNAServ300NT kbSNAServ210NT kbSNAServ211NT
	Version           : :2.0,2.1,2.11,3.0
	
	=============================================================================
	
