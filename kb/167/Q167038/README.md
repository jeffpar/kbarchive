---
layout: page
title: "Q167038: RAS Clients Run Winsock and RPC Applications Slowly"
permalink: kb/167/Q167038/
---

## Q167038: RAS Clients Run Winsock and RPC Applications Slowly

	Article: Q167038
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 22-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Remote Access Server (RAS) clients experience delays when Winsock or RPC
	applications attempt to connect to remote resources.
	
	
	CAUSE
	=====
	
	The RAS Server or Routing and Remote Access Service (RRAS) Server has provided a
	Domain Name Service (DNS) IP address to the client that is unreachable. This
	causes Winsock and RPC applications (over TCP/IP) to fail DNS name lookups.
	
	By default, RAS or RRAS Servers project any DNS IP addresses they are configured
	with to RAS clients using TCP/IP. If the RAS or RRAS Server has a DNS IP address
	that cannot be reached by the RAS client, the RAS client experiences delays
	whenever an application attempts to query the DNS name servers. The RAS or RRAS
	Server may be unreachable because the DNS server is not responding or because
	the RAS or RRAS Server is multihomed and the DNS server is on a network not
	accessible to the RAS client.
	
	
	RESOLUTION
	==========
	
	Perform one of the following steps to resolve this problem:
	
	Windows NT RAS Server
	---------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Windows NT RRAS Server
	----------------------
	
	Obtain the Routing & Remote Access Service Hotfix Update mentioned below.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Microsoft has confirmed this to be a problem in Routing and Remote Access Update
	for Windows NT Server version 4.0. This problem was corrected in the Routing
	& Remote Access Service Hotfix Update. You can obtain this update from
	Microsoft's World Wide Web Site on the Internet at the following location:
	
	  http://www.microsoft.com/ntserver/commserv/exec/feature/routing.asp
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	  http://www.microsoft.com/
	
	
	MORE INFORMATION
	================
	
	Microsoft has added a new registry value to the RAS service that allows an
	administrator the option of preventing all DNS IP addresses from being projected
	to RAS clients.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To enable this feature to prevent the RAS or RRAS Server from sending DNS Server
	IP address(es) to RAS clients, perform the following steps:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\RemoteAccess\ 
	  Parameters\IP
	
	3. On the Edit menu, click Add Value and use the following entry:
	
	     Value Name: SuppressDNSNameServers
	     Data Type:  REG_DWORD
	     Value:      1 or 0 (default=0, value of 1 prevents RAS Server from
	                 sending the DNS Server address(es) to RAS clients)
	
	4. Exit the Registry Editor and restart the computer for the change to take
	  effect.
	
	
	Additional query words: slow delayed Exchange client socket application RPC Remote Procedure Call DNS RAS Access Service ntrouter rras
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
