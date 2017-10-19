---
layout: page
title: "Q255627: XFOR: No Import/Export Vers. 8.x Option in Connector for cc:Mail"
permalink: /kb/255/Q255627/
---

## Q255627: XFOR: No Import/Export Vers. 8.x Option in Connector for cc:Mail

	Article: Q255627
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 28-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure the Microsoft Exchange Connector for Lotus cc:Mail and select
	"Import/Export version" on the General tab, Import/Export version 8.0 or later
	is not displayed.
	
	RESOLUTION
	==========
	
	To resolve this issue, click Import 6.0/Export 6.0.
	
	NOTE: Make sure that the Lotus cc:Mail database is database version 8 (DB8) or
	later.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Import/Export version list on the General tab of the Connector for cc:Mail
	is used to select the Lotus cc:Mail database version, and not the actual version
	number of the Import and Export programs. Database version 8 uses Import
	6.0/Export 6.0. Database version 6 (DB6) used Import 5.15/Export 5.14.
	
	
	Additional query words: import.exe export.exe 8.5 ccmail ccdata
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
