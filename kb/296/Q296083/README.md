---
layout: page
title: "Q296083: SNA Server DLC Connection Fails Through Cisco DLSw and VLAN"
permalink: kb/296/Q296083/
---

## Q296083: SNA Server DLC Connection Fails Through Cisco DLSw and VLAN

	Article: Q296083
	Product(s): Microsoft SNA Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbDSupport sna4 tslic_tslic
	Last Modified: 07-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Data Link Control (DLC) connection is activated in SNA Server or Host
	Integration Server (HIS) 2000 and the connection is through a Cisco Systems
	router that is implementing Data Link Switching (DLSw) (DLC protocol tunneled in
	IP) in a virtual LAN (VLAN) Ethernet environment, the connection attempt may
	fail. The application event log may post an event 230, "remote station not
	responding." If the VLAN software is shut down so only DLSw is operational, the
	connection attempt will be successful. If several Host Integration Server 2000
	or SNA Server servers are on one segment, another symptom is that some but not
	all of the servers will connect, but not the same servers each time.
	
	CAUSE
	=====
	
	SNA Server or Host Integration Server 2000 is sending polls to the destination
	address specified in the connection configuration, but no response is returned
	from the destination.
	
	RESOLUTION
	==========
	
	Update the Cisco routers that are implementing the VLAN and switching "fabric"
	to IOS release 12.1.6.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 tslic_tslic 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ300 kbSNAServ400
	Version           : :3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
