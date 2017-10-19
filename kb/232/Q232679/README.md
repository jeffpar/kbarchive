---
layout: page
title: "Q232679: Err Msg: &quot;No Domain Server&quot; with Windows 95/98 DUN Client"
permalink: /kb/232/Q232679/
---

## Q232679: Err Msg: &quot;No Domain Server&quot; with Windows 95/98 DUN Client

	Article: Q232679
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98,98 Second Edition; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Windows 95/98 Dial-Up Networking (DUN) client to dial a Windows
	NT Remote Access Service (RAS) server and you attempt to log on to a Windows NT
	domain, your logon scripts may not run and you may receive the following error
	message:
	
	  No domain server was available to validate your password.
	  You may not be able to gain access to some network resources.
	
	In addition, when you attempt to gain access to a network share, you may receive
	the following error message:
	
	  Error 58: This operation cannot be performed by the specified server. Make
	  sure that you have specified the correct computer name and command. If the
	  problem persists, contact your network administrator.
	
	CAUSE
	=====
	
	This behavior occurs when both TCP/IP and the IPX/SPX compatible protocol are
	installed on a Windows 95/98 client, and both protocols are enabled for the
	dial-up connection. The IPX/SPX Netlogon requests may reach the primary domain
	controller (PDC) before the TCP/IP Netlogon requests.
	
	RESOLUTION
	==========
	
	To resolve this issue, "unbind" Client for Microsoft Networks from the IPX/SPX
	protocol on the Windows 95/98 client:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. Click the Configuration tab, click "IPX/SPX Compatible Protocol -> Dial-Up
	  Adapter", and then click Properties.
	
	3. Click the Bindings tab, and then clear the "Client for Microsoft Networks"
	  check box.
	
	MORE INFORMATION
	================
	
	When the PDC is configured for both TCP/IP and the IPX/SPX compatible protocol,
	the PDC responds only to the first Netlogon request it receives, regardless of
	other protocols configured on the server. Because the IPX/SPX Netlogon request
	arrives before the TCP/IP Netlogon request, the server responds with an IPX/SPX
	type 20 broadcast. By default, the RAS server does not forward IPX/SPX type 20
	broadcast packets to the client unless two-way broadcasting of type 20 packets
	(NetBIOS over IPX) is enabled on the RAS server.
	
	Because of additional bandwidth requirements, do not enable two-way broadcasting
	of IPX/SPX type 20 (14h) broadcast packets.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173607 Client Not Authenticated by Domain Through RAS Member Server
	
	Auditing successful logon and logoff attempts at the PDC shows the user
	successfully logged on, and a Network Monitor capture shows the IPX/SPX Netlogon
	requests arriving first.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95,98,98 Second Edition; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
