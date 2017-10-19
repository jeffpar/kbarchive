---
layout: page
title: "Q241865: ILS May Cause SBS Wizards Not to Work"
permalink: /kb/241/Q241865/
---

## Q241865: ILS May Cause SBS Wizards Not to Work

	Article: Q241865
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have the Internet Locator service (ILS) installed in BackOffice Small
	Business Server (SBS) 4.5 or BackOffice Server 4.5 and the ILS is using TCP port
	389 (which is necessary for Microsoft NetMeeting clients to connect), some of
	the console wizards may not work.
	
	For example, the Add User Wizard may skip past the information necessary for
	creating the Microsoft Exchange mailbox, or you may receive the following error
	message and events when you try to manage your e-mail distribution list:
	
	  E-mail Distribution List Wizard
	  The specified Exchange server could not be found or is not running. This
	  program cannot continue.
	
	  Event ID: 1306
	  Type: Error
	  Source: MSexchangeDS
	  Description: Register LDAP protocol failed with error 10048. If port number
	  389 is used by another application, change to an unused port, then shutdown
	  and restart Microsoft exchange Directory Services. Contact Microsoft Support
	  service if the condition persists.
	
	  Event ID: 1309
	  Type: Error
	  Source: MSExchangeDS
	  Description: Register LDAP SSL protocol failed with error 10048. The LDAP SSL
	  server is not available. Make sure port number 636 is not used by another
	  application.
	
	CAUSE
	=====
	
	When you run the Add User Wizard from the console, it attempts to make a
	Lightweight Directory Access Protocol (LDAP) query to the Microsoft Exchange
	server on TCP port 389 (by default). The ILS may start before the Exchange
	Directory service, which would take control of TCP port 389.
	
	RESOLUTION
	==========
	
	See the following article for information about how to configure Exchange to use
	a different port, allowing the ILS to use TCP port 389. The Add User Wizard can
	query Exchange on the alternate port.
	
	  Q176169 XADM: How to Install ILS on Exchange Server Computer
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ450 kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	
