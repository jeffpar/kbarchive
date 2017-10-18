---
layout: page
title: "Q205994: Renewing IP Lease From DHCP Server Logs Off Novell Server"
permalink: kb/205/Q205994/
---

## Q205994: Renewing IP Lease From DHCP Server Logs Off Novell Server

	Article: Q205994
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under the following conditions, when you renew your Windows 95-based computer
	Internet Protocol (IP) address from a Microsoft Windows NT-based DHCP server,
	you may be temporarily logged off of your Novell logon server:
	
	- Your computer meets one the following conditions:
	
	   - You are running Windows 95 with the Novell NetWare Client32 version 2.5
	     software installed.
	
	   - You are running Windows 95 Service Pack 1 with Novell NetWare Client
	     version 3.1 software installed.
	
	- You disconnected from the NetWare server before renewing the IP address.
	
	- You disconnected from the NetWare server after logging on to the NetWare
	  server.
	
	  NOTE: This issue does not occur if you skip the NetWare login process by
	  pressing Cancel, you must first log on.
	
	CAUSE
	=====
	
	This issue occurs after the DHCP information exchange between the DHCP client
	and DHCP server has completed. When this happens, the client sends an NCB logoff
	request, which is then received by the Novell server.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Issue
	----------------------------
	
	1. Log on to Windows by using the Novell login dialog box.
	
	2. Right-click Network Neighborhood, and then click NetWare Connections.
	
	3. On the Resource column, click the NetWare server you logged on to in step 1.
	
	4. Click Detach, and then click OK. Note that the server name should disappear
	  and all drives mapped to that server should be disconnected.
	
	5. Run the Winipcfg.exe tool, click Release to release the current DHCP-assigned
	  IP address, and then click Renew. After a few seconds, the Novell welcome
	  screen appears and the connection to the NetWare server will be
	  re-established.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
