---
layout: page
title: "Q225260: Problems Installing Modem Sharing Service with Two Network Cards"
permalink: /kb/225/Q225260/
---

## Q225260: Problems Installing Modem Sharing Service with Two Network Cards

	Article: Q225260
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.5
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbtool
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install the Modem Sharing service in BackOffice Small Business
	Server (SBS), you may be prompted to configure the TCP/IP properties or bind to
	the correct Network Interface Card (NIC).
	
	CAUSE
	=====
	
	This issue can occur if your computer contains two NICs that are the same make
	and model or use the same chipset.
	
	RESOLUTION
	==========
	
	To resolve this issue, install SBS when you have only one NIC installed in your
	computer. If you need additional NICs, you can install them after you configure
	the Modem Sharing service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Backoffice Small Business Server
	4.5.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbtool 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ450
	Version           : winnt:4.5
	Issue type        : kbprb
	
	=============================================================================
	
