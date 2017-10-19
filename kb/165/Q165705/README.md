---
layout: page
title: "Q165705: Client Functions Can't Use TCP/IP Sockets on SNA Server"
permalink: /kb/165/Q165705/
---

## Q165705: Client Functions Can't Use TCP/IP Sockets on SNA Server

	Article: Q165705
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1,2.11 SP2,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When running SNA Admin, SNA Manager, or any SNA applications on an SNA Server,
	the Admin/Manager program or SNA application always uses named pipes when
	communicating to other SNA Servers in the subdomain. There is no way to force
	SNA Admin or the SNA application to use a non-named pipe transport (such as
	TCP/IP sockets or IPX/SPX).
	
	
	CAUSE
	=====
	
	When initiating client functions from an SNA Server, the DMOD would always
	choose the first LAN transport configured, which always defaults to Microsoft
	Networking named pipes (Snalm.dll), even when named pipes is not selected during
	SNA Server Setup. The named pipe transport is always used on the SNA Server,
	because this transport supports file access to the shared SNA Server
	configuration file, which is always performed over Microsoft Networking.
	
	RESOLUTION
	==========
	
	Updates to SNA Server versions 2.11 (post Service Pack 2) and 3.0 are available
	to correct this problem. With this update applied on an SNA Server, SNA Server
	Admin (and other client functions) can now use TCP/IP sockets or other non-named
	pipe transport methods to communicate with other SNA Servers in the SNA
	subdomain.
	
	Within SNA Server Setup, the administrator defines what client LAN transports the
	server will support. If both named pipes and TCP/IP sockets are chosen, then the
	following registry value must be added to allow SNA Admin (or any SNA
	application running on the SNA Server) to use TCP/IP sockets instead of named
	pipes:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SnaBase\Parameters
	
	  Value Name:  TransportBase
	  Data Type:  REG_DWORD
	
	  Data: 1
	
	NOTE: The first TransportBase is 0 which always points to Snalm.dll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	Service Pack 1, 2.11 Service Pack 2, and 3.0. This problem was corrected in the
	latest Microsoft SNA Server 3.0 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211SP1 kbSNAServ211SP2
	Version           : WINDOWS:2.11 SP1,2.11 SP2,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
