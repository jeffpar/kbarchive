---
layout: page
title: "Q178256: LUA Program Hangs After Receiving Exception Request (EXR)"
permalink: /kb/178/Q178256/
---

## Q178256: LUA Program Hangs After Receiving Exception Request (EXR)

	Article: Q178256
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An SNA Server LUA application may hang indefinately after receiving an exception
	request (EXR) message on a session, which SNA Server sends to the client after
	it has detected a bad RU in an outbound message from the host.
	
	CAUSE
	=====
	
	If the host sends a bad RU on a session, the SNA Server changes the message to
	Exception Request type (EXR) before sending it to the LUA application. However,
	SNA Server was failing to set the End Chain (EC) indicator on the EXR message,
	causing the LUA application to hang indefinately waiting for EC to be received.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 (including SP1
	and SP2).
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
