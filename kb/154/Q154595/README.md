---
layout: page
title: "Q154595: XADM: Directory Won't Start If System Date Later Than 2038"
permalink: kb/154/Q154595/
---

## Q154595: XADM: Directory Won't Start If System Date Later Than 2038

	Article: Q154595
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange Directory service, you may
	receive the following error message:
	
	  Could not start the Microsoft Exchange Directory service on \\servername.
	
	  Error 2140: An internal Windows NT error occurred.
	
	In addition, the following events may appear in the application event log:
	
	   - Event ID: 5000
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	
	  Description: Unable to initialize the Microsoft Exchange Information Store
	  service. Error 4015.
	
	   - Event ID: 1121
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	
	  Description: Error 4015 connecting to the Microsoft Exchange Information
	  Server Directory Service.
	
	CAUSE
	=====
	
	The Directory service will not start if the system date is later than January
	17, 2038.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	versions 4.0 and 5.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: internal id 30d0180 1166 2140
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
