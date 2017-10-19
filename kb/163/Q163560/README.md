---
layout: page
title: "Q163560: SLI_OPEN May Complete in Error with No Host Logon Screen"
permalink: /kb/163/Q163560/
---

## Q163560: SLI_OPEN May Complete in Error with No Host Logon Screen

	Article: Q163560
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprogrammingkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may observe problems when an SLI application issues an SLI_OPEN followed by
	an SLI_CLOSE followed by another SLI_OPEN, all in quick succession. Due to the
	sequence of messages on the server, the client SLI_OPEN call sometimes returns
	before the SNA Server service sends the NOTIFY(enabled) request to the host.
	This causes the SLI application to not receive the host logon screen (on the
	SSCP-LU session) as it expects.
	
	This problem can be further complicated in an environment where the host sends a
	logon screen before it receives a response to the previous logon screen.
	
	CAUSE
	=====
	
	Because a client SLI_OPEN is completing before the SNA Server sends a
	NOTIFY(enabled) to the host, the host logon screen is not being received
	immediately by the SLI application as expected.
	
	RESOLUTION
	==========
	
	An update to SNA Server 2.11 SP1 and 3.0 is available to correct this problem.
	The updated module is SNASERVR.EXE. This fix incorporates two changes to the SNA
	Server service:
	
	- New client open requests are now queued inside the node if there is a NOTIFY
	  request pending.
	
	
	- Queue up outbound SSCP data messages if there is an SSCP response pending.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, and 3.0. This problem was corrected in the latest Microsoft SNA Server
	2.11 and 3.0 U.S. Service Packs. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbprogramming kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
