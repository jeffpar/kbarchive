---
layout: page
title: "Q180935: Distributed Link Service Reactivation Fails with Event 77,x0AFF"
permalink: /kb/180/Q180935/
---

## Q180935: Distributed Link Service Reactivation Fails with Event 77,x0AFF

	Article: Q180935
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, when Event 23 outage 0x0A is reported by a
	Distributed Link Service, the reconnection fails with the following event log
	error:
	
	  Event ID: 77
	  Source: SNA Server
	  Description:
	  Connection <name> failed to activate due to failure at link service.
	  Error Code = x0AFF
	
	  X'0AFF' - Duplicate destination MAC/SAP for link service%n
	
	This problem occurs even when no other connections are configured to use the link
	service that is running on the central server.
	
	CAUSE
	=====
	
	When the LAN session is broken between the remote link service (running in the
	remote branch) and the central link service (running in the central office),
	both SNA Server and the centralized link service receive a "lost locality"
	message. However, in some cases, SNA Server receives a "lost locality" before
	the centralized link service. This causes SNA Server to reissue a new Open(Link)
	request while the central link service still believes its current connection is
	still active, causing the central link to respond with error x0AFF (duplicate
	destination mac/sap for link service).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With the fix applied, the distributed link service retries the Open(Link)
	request if it receives error 0x0AFF from the central link service. The updated
	module is: <snaroot>\system\snaremls.dll.
	
	Branch Server      Central Server
	DLS         Shared Link             Host
	
	<-- Outage 0x0A --
	-- Close(Link) Rq ->
	<-- Close(Link) Ok --
	  ...      <-- Outage 0xAE -- (on LPI 09160001)
	  ...
	  ...
	-- Open(Link) Rq ->
	         -- Open(Link) Rq ->(on LPI 0A160001)
	        <-- Open(Link) Error 0x0AFF -- (on LPI 0A160001)
	<-- Open(Link) Error 0x0AFF --
	        -- Close(Link)Rq ->(on LPI 09160001)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
