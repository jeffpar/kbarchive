---
layout: page
title: "Q179442: How to Configure a Firewall for Domains and Trusts"
permalink: /kb/179/Q179442/
---

## Q179442: How to Configure a Firewall for Domains and Trusts

	Article: Q179442
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool
	Last Modified: 23-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure a firewall for domains and trusts.
	
	MORE INFORMATION
	================
	
	To establish a domain trust or secure channel across a firewall, the following
	ports must be opened. Note that there may be hosts functioning with both client
	and server roles on both sides of the firewall. Because of this, ports rules may
	need to be mirrored.
	
	Windows NT
	----------
	
	+--------------------------------------------------------------+
	| Client Port(s) | Server Port | Service                       | 
	+--------------------------------------------------------------+
	| 1024-65535/TCP | 135/TCP     | RPC *                         | 
	+--------------------------------------------------------------+
	| 137/UDP        | 137/UDP     | NetBIOS Name                  | 
	+--------------------------------------------------------------+
	| 138/UDP        | 138/UDP     | NetBIOS Netlogon and Browsing | 
	+--------------------------------------------------------------+
	| 1024-65535/TCP | 139/TCP     | NetBIOS Session               | 
	+--------------------------------------------------------------+
	| 1024-65535/TCP | 42/TCP      | WINS Replication              | 
	+--------------------------------------------------------------+
	
	Windows 2000
	------------
	
	For a mixed-mode domain with either Windows NT domain controllers or legacy
	clients or trust relationship between two windows 2000 domain controllers which
	are not in the same forest, all of the preceding ports for Windows NT may need
	to be opened in addition to the following ports:
	
	+---------------------------------------------------+
	| Client Port(s)        | Server Port | Service     | 
	+---------------------------------------------------+
	| 1024-65535/TCP        | 135/TCP     | RPC *       | 
	+---------------------------------------------------+
	| 1024-65535/TCP/UDP    | 389/TCP/UDP | LDAP        | 
	+---------------------------------------------------+
	| 1024-65535/TCP        | 636/TCP     | LDAP SSL    | 
	+---------------------------------------------------+
	| 1024-65535/TCP        | 3268/TCP    | LDAP GC     | 
	+---------------------------------------------------+
	| 1024-65535/TCP        | 3269/TCP    | LDAP GC SSL | 
	+---------------------------------------------------+
	| 53,1024-65535/TCP/UDP | 53/TCP/UDP  | DNS         | 
	+---------------------------------------------------+
	| 1024-65535/TCP/UDP    | 88/TCP/UDP  | Kerberos    | 
	+---------------------------------------------------+
	| 1024-65535/TCP        | 445/TCP     | SMB         | 
	+---------------------------------------------------+
	
	NOTE: There are specific requirements for RPC communication beyond what is listed
	in this table. For additional information about how to configure RPC
	communications for a firewall, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q154596 Configuring RPC Dynamic Port Allocation to Work With Firewall
	
	By default, Windows 2000 DNS servers use ephemeral client-side ports when they
	query other DNS servers. However, this behavior may be modified with a specific
	registry setting that is described in the following article in the Microsoft
	Knowledge Base:
	
	  Q260186 SendPort DNS Registry Key Does Not Work as Expected
	
	
	Alternatively, you can establish a trust through the Point-to-Point Tunneling
	Protocol (PPTP) compulsory tunnel, and this will limit the number of ports that
	the firewall will need to open. For PPTP, the following ports must be enabled:
	
	+-----------------------------------------+
	| Client Ports   | Server Port | Protocol | 
	+-----------------------------------------+
	| 1024-65535/TCP | 1723/TCP    | PPTP     | 
	+-----------------------------------------+
	
	In addition, you would need to enable IP PROTOCOL 47 (GRE).
	
	Additional query words: tcpip
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000,4.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
