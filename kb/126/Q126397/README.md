---
layout: page
title: "Q126397: SNA Server Installation Guidelines (DC or Member Server)"
permalink: /kb/126/Q126397/
---

## Q126397: SNA Server Installation Guidelines (DC or Member Server)

{% raw %}

	Article: Q126397
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers the implications of installing SNA Server on a primary
	domain controller/backup domain controller rather than a member server.
	
	MORE INFORMATION
	================
	
	SNA Server logs users on to the Windows NT domain before allowing any requests
	to be processed, regardless of the transport used by the client to connect to
	SNA Server. If SNA Server logs users onto the domain over named pipes, the users
	is not prompted for the domain password or username. For other client server
	protocols (IPX/SPX, TCP/IP, Banyan, and AppleTalk), the user is prompted for the
	domain password and username. As a result, each new client connection to SNA
	Server results in a winlogon transaction which, in the case of a member server,
	needs to be authenticated across the network by a PDC or BDC. A Windows NT
	member server does not maintain the domain user database, and therefore must
	rely on a BDC or PDC to validate the user over a secure channel.
	
	If the PDC or BDC spend a large percentage of CPU time servicing winlogon
	requests, and the clients generally stay connected to SNA Servers for a long
	time, then the administrator should install SNA Server on a member server. If
	clients connect and disconnect frequently from SNA Server, and the Windows NT
	domain is primarily used for SNA access (as is likely the case when you install
	in an existing NetWare or Banyan environment), you should install SNA Server on
	the PDC or BDC.
	
	SNA Server to SNA Server Communication Issue:
	---------------------------------------------
	
	1. SNA Server Versions 2.11 SP1 and earlier:
	
	  If SNA Servers in the same domain are located across routers, an administrator
	  must install SNA Server on a primary domain controller (PDC) or backup domain
	  controller (BDC). SNA Server to SNA Server communication is mailslot or
	  datagram based. SNA Server uses the winlogon protocols when sending messages
	  across routers.
	
	2. SNA Server 3.0 and 4.0:
	
	  SNA Server 3.0 and 4.0 systems in the same domain that are separated by
	  routers do not have to be installed on Windows NT domain controllers. SNA
	  Server 3.0 and 4.0 Setup prompts for the primary SNA Server's name if it is
	  unable to dynamically locate the primary SNA Server based on a UDP broadcast
	  datagram.
	
	
	Additional query words: prodsna backup domain controller bdc dc admin user name mail slot
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	

{% endraw %}
