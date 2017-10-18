---
layout: page
title: "Q162392: XCLN: Exchange Server Service Not Available in Outlook"
permalink: kb/162/Q162392/
---

## Q162392: XCLN: Exchange Server Service Not Available in Outlook

	Article: Q162392
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Office 97 and Outlook, the Microsoft Exchange Server
	service is not available. The Microsoft Exchange Server service is required to
	connect to a computer running Microsoft Exchange Server.
	
	CAUSE
	=====
	
	A typical installation of Office 97 does not install the Microsoft Exchange
	Server service.
	
	RESOLUTION
	==========
	
	To install the Microsoft Exchange Server service:
	
	1. Run Office 97 Setup in maintenance mode and click Add/Remove Components.
	
	2. Select Microsoft Outlook and click change option.
	
	3. Select Microsoft Exchange Server Support and finish the setup. The Microsoft
	  Exchange Server service can now be added to the profile.
	
	Additional query words: Exchange Server Service unavailable
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : 4.0
	
	=============================================================================
	
