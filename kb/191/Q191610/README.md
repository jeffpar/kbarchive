---
layout: page
title: "Q191610: Assigning LUs/Pools to Workstation MAC Addresses Not Supported"
permalink: kb/191/Q191610/
---

## Q191610: Assigning LUs/Pools to Workstation MAC Addresses Not Supported

	Article: Q191610
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1kbfixlist
	Last Modified: 12-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server does not allow workstations to be defined using the workstation's
	media access control (MAC) address, except in the case of Internetwork Packet
	Exchange (IPX) clients. IPX addresses include the MAC address of the
	workstation; therefore they are identified by their MAC addresses. Workstations
	cannot be defined using their MAC addresses if they communicate with the SNA
	Server using TCP/IP.
	
	CAUSE
	=====
	
	SNA Server was not designed to allow the use of MAC addresses for workstation
	definitions for TCP/IP connected clients. SNA Server does not know the MAC
	address of TCP/IP connected clients, because this information is not returned to
	the SNA Server computer by the SNA Server client software.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, 3.0 SP3, 4.0, and 4.0 SP1.
	
	This problem was corrected in SNA Server version 4.0 U.S. Service Pack.
	
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With these updates applied, SNA Server 4.0 SP1 allows you to define workstations
	using the client's MAC address to connect to SNA Server with TCP/IP.
	
	NOTE: Updates must be made to both the SNA Server computer and all Windows 95 and
	Windows NT clients to support this new feature. TCP/IP clients that do not have
	the updates applied continue to function correctly, but LUs/Pools cannot be
	assigned to their MAC addresses.
	
	After you apply the updates, to define workstations using a MAC address: in SNA
	Server Manager, in the Workstation Properties dialog box, in the Workstation ID
	box, type the MAC address. In addition, ensure the Workstation ID Type parameter
	is set to Address.
	
	There are three ways you can add a TCP/IP connected workstation to the SNA Server
	configuration file:
	
	+--------------------------------------+
	| Workstation ID | Workstation ID Type | 
	+--------------------------------------+
	| NetBIOS name   | Name                | 
	+--------------------------------------+
	| TCP/IP address | Address             | 
	+--------------------------------------+
	|                |                     | 
	+--------------------------------------+
	| MAC address    | Address             | 
	+--------------------------------------+
	
	When SNABASE searches for the user's workstation definition in the configuration
	file, it does so in the order shown above (that is, a workstation name has the
	highest priority, next highest priority is the TCP/IP address, and lowest is the
	MAC address). The rights do NOT accumulate. For example, if both a NetBIOS name
	and a TCP/IP address are configured for the same workstation, the TCP/IP address
	is never used (assuming the workstation has a NetBIOS name).
	
	NOTE: The new feature requires that you install Client for Microsoft Networks on
	the Windows 95 system that runs the SNA Server client for Windows 95.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
