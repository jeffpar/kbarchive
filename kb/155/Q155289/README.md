---
layout: page
title: "Q155289: XADM: SA Hangs if NetWare Client v3.5b is Installed"
permalink: kb/155/Q155289/
---

## Q155289: XADM: SA Hangs if NetWare Client v3.5b is Installed

	Article: Q155289
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Setup program will hang when it attempts to start
	the Microsoft Exchange System Attendant (SA) if NetWare Clients version 3.5b or
	4.0 for Windows NT are installed. The SA will also hang when restarting the
	system if NetWare Clients version 3.5b or 4.0 for Windows NT are installed on an
	existing Microsoft Exchange Server.
	
	CAUSE
	=====
	
	NetWare Clients version 3.5b and 4.0 for Windows NT do not handle the MPR logon
	notification for the SA service properly.
	
	MORE INFORMATION
	================
	
	It is not possible to stop the service. Double clicking the SA service or
	attempting to change the startup parameters in the Control Panel, Services
	applet will return the following message:
	
	  The service database is locked.
	
	RESOLUTION
	==========
	
	The current Beta version of the NetWare Client for Windows NT does not cause
	this problem. Contact Novell for more information.
	
	The NetWare Client for Windows NT is manufactured by Novell, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
