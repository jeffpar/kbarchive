---
layout: page
title: "Q258246: XFOR: Calendar Connector Not Removed w. Connectivity Components"
permalink: kb/258/Q258246/
---

## Q258246: XFOR: Calendar Connector Not Removed w. Connectivity Components

	Article: Q258246
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 30-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you remove any of the following Exchange Server connectors and the Microsoft
	Exchange Calendar Connector is installed, the Exchange Calendar Connector is not
	removed from the Exchange Server computer.
	
	- Microsoft Exchange Connector for Lotus Notes
	
	- Microsoft Exchange Connector for Novell GroupWise
	
	- Microsoft Exchange Connector for IBM OfficeVision/VM (PROFS)
	
	MORE INFORMATION
	================
	
	The Exchange Calendar Connector has an uninstall executable file that is
	separate from the other Exchange Server connectors. To successfully remove the
	Exchange Calendar Connector, use Add/Remove Programs in Microsoft Windows NT or
	Microsoft Windows 2000 Control Panel to remove the Exchange Calendar Connector.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
