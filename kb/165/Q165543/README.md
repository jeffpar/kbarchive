---
layout: page
title: "Q165543: Bus-Tech Link Service Doesn't Install Driver from SNA Setup"
permalink: kb/165/Q165543/
---

## Q165543: Bus-Tech Link Service Doesn't Install Driver from SNA Setup

	Article: Q165543
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	BTILINK link service requires installation of the BTIMCCA device driver from the
	Network Control Panel (Adapter). The following message will be displayed as a
	popup if the driver is not already installed:
	
	  The Bus-Tech BTIMCCA driver is required by this link service, but must be
	  installed from the Control Panel, Network icon
	
	CAUSE
	=====
	
	This is a problem with SNA Server 3.0.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
