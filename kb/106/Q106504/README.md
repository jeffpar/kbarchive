---
layout: page
title: "Q106504: Ability to Change Password Added to SNA Win3.x Client"
permalink: /kb/106/Q106504/
---

## Q106504: Ability to Change Password Added to SNA Win3.x Client

	Article: Q106504
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Previously, when you used the SNA Server Windows 3.x client to communicate to
	the server over TCP/IP sockets, Netware IPX/SPX, or Banyan IP, you were not able
	to change your Windows NT password if the password had expired on the Windows NT
	Server.
	
	Support for SNA Server Windows 3.x clients to change their expired Windows NT
	password has been added in SNA Server 2.11 Service Pack 1. For this to work,
	apply the Service Pack to the SNA Server 2.11 server and to the Windows 3.x
	client. Also apply Service Pack 2 (or higher) to Windows NT 3.51 on the Primary
	Domain Controller (PDC).
	
	MORE INFORMATION
	================
	
	This enhancement to the SNA Server Win3x client now allows clients running
	non-named pipes interface along with the SNA Server Win3x 2.11 client to have
	the ability to change their expired password in the Windows NT Server domain.
	This enhancement works across all protocol stacks that are able to use the SNA
	Server Win3x client software to access the SNA Server.
	
	This enhancement to the SNA Server Client is possible due to enhancements made in
	NT 3.51 Service Pack 2. To make use of this feature, the Primary Domain
	Controller (PDC) must be running Windows NT 3.51 with Service Pack 2 or later.
	The SNA Server(s) do not necessarily need to be running at this level but it is
	recommended.
	
	
	STATUS
	======
	
	This feature is included in the latest U.S. Service Pack for SNA Server for
	Windows NT, version 2.11. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	This feature is included in SNA Server 3.0 (all SPs) and 4.0.
	
	Additional query words: prodsna password wnap
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	
	=============================================================================
	
