---
layout: page
title: "Q243188: Unable to Browse RAS Clients from the Local Area Network"
permalink: /kb/243/Q243188/
---

## Q243188: Unable to Browse RAS Clients from the Local Area Network

	Article: Q243188
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clients that dial in to a Remote Access Services (RAS) server using only the
	Transmission Control Protocol/Internet Protocol (TCP/IP) do not appear in the
	browse list on clients on the local area network (LAN). Such a RAS client,
	assuming it is configured properly to view the browse list in Network
	Neighborhood, sees the LAN clients and also sees itself in the browse list.
	
	For additional information about browsing from RAS clients, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q150800 Domain Browsing with TCP/IP and LMHOSTS Files
	
	  Q232511 Client Dialup, Authentication, Browsing Using TCPIP, IPX/SPX
	
	  Q149907 Browsing a Remote Network from a DUN Client Using Only TCP/IP
	
	RESOLUTION
	==========
	
	To cause LAN clients to be able to view RAS clients, install the NetBEUI
	protocol on the RAS clients and server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you use only TCP/IP, HOST announcements are not broadcast to the LAN. When
	you use the NetBEUI protocol dial-up connection, the NetBIOS gateway forwards
	HOST announcements to the LAN. The NetBEUI protocol allows RAS clients to
	communicate with the browser servers on the LAN through the NetBIOS gateway on
	the RAS server. The NetBEUI protocol therefore allows RAS clients to be added to
	the LAN browse list.
	
	For additional information about NetBIOS gateways, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q97559 How Remote Access Service Processes Datagram Traffic
	
	  Q99145 RAS RemoteListen Parameter
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
