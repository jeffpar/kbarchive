---
layout: page
title: "Q242113: Cannot Log On to Windows NT Domain Using IPX/SPX and TCP/IP"
permalink: /kb/242/Q242113/
---

## Q242113: Cannot Log On to Windows NT Domain Using IPX/SPX and TCP/IP

	Article: Q242113
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to log on to a TCP/IP- and Microsoft Windows NT-based network using
	a Microsoft Windows 95-based client, you may not be able to do so. The client
	computer may have both TCP/IP and IPX/SPX bound to the network adapter and both
	Client for Microsoft Networks and Client for NetWare Networks installed.
	
	CAUSE
	=====
	
	This behavior can occur if the Windows 95-based client is using IPX/SPX as the
	default protocol and the Windows NT Server-based servers are configured for
	TCP/IP only. The network logon validation request may time out before TCP/IP
	sends a confirmation.
	
	RESOLUTION
	==========
	
	To resolve this issue, on the Windows 95-based computer, cancel the bindings for
	IPX/SPX, and then remove any Novell client software. To do this, follow these
	steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click Configuration.
	
	3. In the list of installed network components, click the network adapter, and
	  then click Properties.
	
	4. Click Bindings.
	
	5. Click to clear the IPX/SPX Compatible Protocol and any Novell client software
	  check boxes.
	
	6. Click OK, and then click OK again.
	
	7. Click Yes to restart the computer.
	
	Additional query words: nt 4.0 ipx spx tcp
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
