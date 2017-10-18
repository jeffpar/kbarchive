---
layout: page
title: "Q164707: XFOR: Connecting the CCMC to a cc:Mail PO on a NetWare Server"
permalink: kb/164/Q164707/
---

## Q164707: XFOR: Connecting the CCMC to a cc:Mail PO on a NetWare Server

	Article: Q164707
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you configure the Microsoft Exchange Connector for Lotus cc:Mail (CCMC) to
	connect to a cc:Mail post office that is located on a NetWare server, you must
	ensure that the Microsoft Exchange Server service account has permission to
	access the cc:Mail post office database. There are two ways to do this: one is
	by setting up Microsoft Gateway Services for NetWare (GSNW) with the gateway
	enabled, and the other is without having the gateway enabled.
	
	MORE INFORMATION
	================
	
	GSNW Enabled
	------------
	
	When you enable the gateway and re-share the cc:Mail post office as a Windows NT
	share, then the Exchange Server service account will use the Gateway's NetWare
	access permission to access the cc:Mail post office.
	
	GSNW Disabled
	-------------
	
	If you bypass enabling the gateway, then the Exchange Server service account must
	also be created on the NetWare server with the identical account information and
	password.
	
	For additional information on installing and configuring Microsoft's GSNW on your
	computer running Windows NT Server, please see the Windows NT online
	documentation and refer to the following articles in the Microsoft Knowledge
	Base:
	
	  Q118469 GSNW Gateway Requires NTGATEWAY group
	
	  Q161276 Error Message Installing GSNW in a Netware 4.x Environment
	
	Additional query words: Novell 3.1x 4.x event 66 exfaqcon
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
