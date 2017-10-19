---
layout: page
title: "Q165657: RUI_BID Response Is Not Recognized by RUI Application"
permalink: /kb/165/Q165657/
---

## Q165657: RUI_BID Response Is Not Recognized by RUI Application

	Article: Q165657
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP2,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP2, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An RUI application receives an RUI_BID response from the node in an FMI- STATUS
	message rather than a data message. As a consequence, the application does not
	recognize or expect the RUI_BID response.
	
	CAUSE
	=====
	
	The node was not checking whether messages were FMIDATA before checking the
	segmentation bits of the request unit (RU).
	
	This problem was inadvertently introduced in SNA Server version 2.11 Service Pack
	2 as the result of an unrelated fix.
	
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11 Service
	Pack 2 and 3.0.
	This problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: ruibid LUA
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211SP2
	Version           : WINDOWS:2.11 SP2,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
