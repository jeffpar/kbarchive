---
layout: page
title: "Q178919: XADM: Exchange Event Service Not Installed During Upgrade"
permalink: kb/178/Q178919/
---

## Q178919: XADM: Exchange Event Service Not Installed During Upgrade

	Article: Q178919
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you upgrade from Microsoft Exchange Server version 5.0 to Exchange Server
	5.5, the EventConfig_<servername> item in the Events Root system folder
	does not appear in the Exchange Administrator program.
	
	This occurs because the Exchange Event Service has not been installed. When you
	upgrade an existing computer, setup generally does not add new services unless
	you select them. The Event Service is not installed by default.
	
	MORE INFORMATION
	================
	
	To install the Exchange Event Service, run the Exchange Server 5.5 setup
	program. Choose Add\Remove, and select the Microsoft Exchange Event Service
	option under Microsoft Exchange Server.
	
	Additional query words: MSExchangeES
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
