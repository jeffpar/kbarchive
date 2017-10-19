---
layout: page
title: "Q194082: TEST_RTS_AND_POST Does Not Work When Using WinAsyncAppc Call"
permalink: /kb/194/Q194082/
---

## Q194082: TEST_RTS_AND_POST Does Not Work When Using WinAsyncAppc Call

	Article: Q194082
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The APPC/CPI-C command TEST_RTS_AND_POST does not work when using a WinAsyncAppc
	call. If the TEST_RTS_AND_POST verb is called asynchronously, the APPC library
	signals the completion of the event but never receives the post event.
	
	CAUSE
	=====
	
	TEST_RTS_AND_POST is one of the set of "post" APPC verbs which completes twice.
	
	The TEST_RTS_AND_POST verb contains a post event. When the APPC library receives
	the verb, it makes a note of this post event, and then completes the verb
	immediately in the normal way, either by returning control to the application
	(if called synchronously) or by signaling a completion event which has also been
	supplied with the verb (if called asynchronously). Note that the completion
	event is different from the post event which the verb contained.
	
	This is the first completion for the verb.
	
	Later, if the APPC library gets a change direction message from the SNA Server
	service, it signals the post event.
	
	This is the second completion of the verb.
	
	The problem is that if the verb is called asynchronously, the APPC library
	signals the first completion correctly, but for the second completion it signals
	the completion event again, rather than the post event.
	
	An application written to wait for the completion of the post event waits
	forever, and the application thinks that a change direction message has never
	been received by the APPC library.
	
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1. We are researching this problem in SNA
	Server version 3.0 and will post more information here in the Knowledge Base as
	it becomes available.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
