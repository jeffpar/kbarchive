---
layout: page
title: "Q169649: XWEB: Access Is Denied Using the Web Client"
permalink: kb/169/Q169649/
---

## Q169649: XWEB: Access Is Denied Using the Web Client

	Article: Q169649
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to log on to your Exchange mailbox via Active Server Pages, you may
	receive the following error message:
	
	  Error: Access is Denied.
	
	CAUSE
	=====
	
	You have a proxy server in your environment and your browser's proxy settings
	are set to use the proxy server for all requests. This causes the IIS server to
	request for authorization at the Exchange Login page and it fails.
	
	RESOLUTION
	==========
	
	Enable the "Do not use proxy server for local (Intranet) addresses" option in
	Internet Explorer:
	
	1. View the Internet Explorer Properties. This can be reached in the following
	  ways:
	
	   - Go to Control Panel and double-click on Internet
	
	   - Right-click the Internet Explorer icon on the desktop.
	
	   - In Internet Explorer, on the View menu, click Options.
	
	2. Click the Connection tab; if there is a Settings button , click it.
	
	3. Select the "Do not use proxy server for local (intranet) addresses" check
	  box.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
