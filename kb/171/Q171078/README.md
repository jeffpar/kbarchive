---
layout: page
title: "Q171078: SnaBase Fails to Start Using Novell NetWare Client"
permalink: kb/171/Q171078/
---

## Q171078: SnaBase Fails to Start Using Novell NetWare Client

	Article: Q171078
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SnaBase stops responding on startup, without displaying an error if SNA Server
	is configured to use NetWare Directory Services (NDS) with the Novell NetWare
	client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT SNA Server version
	3.0 Server Pack 1. This problem was corrected in the latest SNA Server version
	3.0 U.S. Service Pack. For information on obtaining this Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Although SNA Server 3.0 Service Pack 1 does not support NDS operation over the
	Novell NetWare client, a fix for SNA Server 3.0 SP1 is available from Microsoft
	to correct this SnaBase problem. With this update applied, SNA Server checks the
	workstation type before it tries to register SnaBase with NDS. SNA Server will
	log an error if the workstation type is Novell.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP1
	Version           : WINDOWS:3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
