---
layout: page
title: "Q163540: Host Sends Logon Screen Before RUI_WRITE Completes on Open"
permalink: /kb/163/Q163540/
---

## Q163540: Host Sends Logon Screen Before RUI_WRITE Completes on Open

	Article: Q163540
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In some cases, the mainframe may send the logon screen down before the RUI_WRITE
	on the Open has completed. If this occurs, the RUI_WRITE for the response to the
	logon screen fails.
	
	CAUSE
	=====
	
	A timing issue has been identified that allows the host to send the logon screen
	to the client prematurely.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. In the hotfix,
	Winsli32.dll has been modified so that it does not issue RUI_READ for the SSCP
	normal flow until RUI_WRITE has completed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	2.0, 2.1, 2.11, 2.11 Service Pack 1, and 3.0. This problem was corrected in the
	latest Microsoft SNA Server 2.11 and 3.0 U.S. Service Packs. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sp1 kbbug2.00 kbbug2.10
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
