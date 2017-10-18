---
layout: page
title: "Q169141: NetBIOS and Hostname Resolution for MS-Client and LM 2.2c"
permalink: kb/169/Q169141/
---

## Q169141: NetBIOS and Hostname Resolution for MS-Client and LM 2.2c

	Article: Q169141
	Product(s): Microsoft Windows NT
	Version(s): 2.2c 3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LAN Manager, version 2.2c 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Network clients that use the LAN Manager 2.2c client or Microsoft Network Client
	3.0 fail to resolve hostnames using broadcasts (b-node.)
	
	MORE INFORMATION
	================
	
	This behavior is by design.
	
	Host Name Resolution
	--------------------
	
	If the LAN Manager 2.2c or Microsoft Network Client 3.0 is attempting to resolve
	a host name, it will use the gethostbyname() call, that is resolved by entries
	in the HOSTS file and, optionally, a Domain Name Service (DNS) server. These
	clients DO NOT use WINS, LMHOSTS or broadcast to resolve hostnames. For
	information on configuring the Domain Name Resolver (DNR) for these clients, see
	the Readme.txt on the appropriate clients directory where you installed from.
	
	NOTE: This is different behavior than the Windows For Workgroups, Windows 95, and
	Windows NT clients that can also resolve hostnames through WINS, LMHOSTS files
	and broadcasts. For more information about node type settings in Windows For
	Workgroups, Windows 95, and Windows NT, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q142042 TCP/IP Node-Type Settings in Windows 95
	
	
	  Q137966 Changing NetBIOS Name Resolution Order in Windows for Workgroups
	
	
	NetBIOS Name Resolution
	-----------------------
	
	If the LAN Manager 2.2c client or Microsoft Network 3.0 client is attempting to
	resolve a NetBIOS name (for example, using the 'NET USE' command), the name may
	be resolved using LMHOSTS entries, WINS query, or broadcast. These clients do
	NOT use DNS or HOSTS queries to resolve NetBIOS names.
	
	Additional query words: prodnt msclient lmclient
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbZNotKeyword kbLanManSearch kbNetworkClientSearch kbLanMan220c kbNetworkClient300DOS
	Version           : 2.2c 3.0
	
	=============================================================================
	
