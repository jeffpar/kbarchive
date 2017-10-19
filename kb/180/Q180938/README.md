---
layout: page
title: "Q180938: Unable to Activate Multiple DLS Connections Using the Same SAP"
permalink: /kb/180/Q180938/
---

## Q180938: Unable to Activate Multiple DLS Connections Using the Same SAP

	Article: Q180938
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a DLS (Distributed Link Service) environment where a "central" SNA Server has
	distributed an 802.2 DLC (Data Link Control) link service configured for
	MultiSap support, "remote" SNA Servers may have a problem activating multiple
	connections through the distributed link service if all of the connections are
	configured to use the same Local SAP.
	
	CAUSE
	=====
	
	An 802.2 Data Link Control (DLC) link services can support up to 128 connections
	over a particular Local SAP. The number of connections that can be configured
	over using the same Local SAP will depend on the remote MAC/SAP addresses the
	connections are configured to connect to.
	
	When a DLC Link Service is initialized, DLC issues a DLC.OPEN.SAP command to
	activate a SAP and reserve a number of link stations for that SAP. The DLC Link
	Service is not designed to dynamically allocate additional link stations after
	is SAP is opened, therefore it cannot allocate additional link stations if the
	original allocation did not reserve enough to support all of the configured
	connections for a particular SAP.
	
	The problem described in the SYMPTOMS section can occur in a DLS environment
	because the "Central" SNA Server that opens the SAPs for the distributed 802.2
	DLC link service does not know how many connections will be using the link
	service. If the original allocation of link stations is not sufficient to
	support the number of connections that will be using a SAP, some of the
	configured connections using that SAP will not activate and will stay in a
	"Pending" state.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The hotfix modified the DLC Link Service so that it uses the DLC_REALLOCATE
	command to dynamically allocate more link stations after the DLC.OPEN.SAP
	command has been issued if they are needed. Another enhancement was made to the
	DLC Link Service so that it no longer allocates a SAP buffer pool for every SAP
	that is opened. By default, Windows NT DLC does not use SAP buffer pools. This
	change saves a maximum of 64 KB of memory per opened SAP.
	
	Note: The update DLC Link service has to be applied to the "Central" SNA Server.
	
	Steps to Reproduce This Problem:
	
	1. Have three SNA devices available to establish connections to (this can be any
	  combination of Hosts, AS/400 or SNA Servers).
	
	2. Set up a "Central" SNA Server site with one 802.2 DLC Link Service configured
	  with the "Allowed to be distributed" option selected and the "Use Fixed SAP"
	  option deselected.
	
	3. Set up a "Remote" SNA Server site with one Distributed Link Service
	  configured to use the link defined on the "Central" site in Step 2.
	
	4. On the "Remote" site configure three connections using the same Local SAP on
	  the same SnaRemX link service but to three different SNA devices (MAC
	  addresses).
	
	5. Activate the connections one at a time. The first two will go to an Active
	  state and the last one will stay in a Pending state.
	
	6. Stop one of the Active connections, and the Pending connection activate.
	
	This can be reproduced the same way with two connections configured on the
	"Remote" SNA Server and one local connection on the "Central" SNA Server.
	
	Note: There may be cases when more than two connections using the same Local SAP
	can be started before the next connection fails to activate. This will depend on
	how the "Central" SNA Server is configured.
	
	This problem does not occur if the distributed 802.2 link service is configured
	with the "Use Fixed SAP" option enabled.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
