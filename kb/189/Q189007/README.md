---
layout: page
title: "Q189007: DNS: RPC Server or EndPoints not available."
permalink: kb/189/Q189007/
---

## Q189007: DNS: RPC Server or EndPoints not available.

	Article: Q189007
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When choosing a remote Domain Name Service(DNS) server in DNS Manager, you may
	receive one of the following errors:
	
	  The RPC server is unavailable.
	
	  -or-
	
	  There are no more endpoints available from the endpoint mapper.
	
	These error messages will appear in the DNS Manager's Statistics Panel.
	
	CAUSE
	=====
	
	The remote DNS Server whose name or IP address is chosen from DNS Manager is not
	yet started.
	
	RESOLUTION
	==========
	
	Start the remote DNS Server using the following steps:
	
	1. Click Start, point to Programs, point to Administrative Tools (Common), and
	  then click Server Manager.
	
	2. In the server list in Server Manager, click the DNS server that you are
	  trying to administer.
	
	3. Click server and then select Services.
	
	4. Select the Microsoft DNS Server and click start to start the service.
	
	5. Click close and then close Server Manager.
	
	MORE INFORMATION
	================
	
	When you choose a DNS server listed by its name in DNS Manager, and the service
	is not started, you will receive the error:
	
	  The RPC server is unavailable.
	
	When you choose a DNS server listed by its IP address, and the service is not
	started, you will receive the error:
	
	  There are no more endpoints available from the endpoint mapper.
	
	Additional query words: DNSADMIN EndPoint
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
