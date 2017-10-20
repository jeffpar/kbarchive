---
layout: page
title: "Q201504: XFOR: Isolating Providers In CALCON for Troubleshooting Purposes"
permalink: /kb/201/Q201504/
---

## Q201504: XFOR: Isolating Providers In CALCON for Troubleshooting Purposes

{% raw %}

	Article: Q201504
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	If there is more than one Calendar provider configured, the Calendar Connector
	service automatically starts all configured providers as well as some general
	administrative processes in the background.
	
	MORE INFORMATION
	================
	
	You may want to isolate certain providers for troubleshooting purposes without
	having to remove each individual calendar connection information in the Calendar
	Connector property page.
	
	There are six potential processes that the Calendar Connector may run, they are:
	
	+----------------------------------------------------------------------------+
	| Provider Name | Description                                                | 
	+----------------------------------------------------------------------------+
	| CALSYNC       | Process for updating all F/B records for custom recipients | 
	+----------------------------------------------------------------------------+
	| ADMINSVC      | General cleanup process                                    | 
	+----------------------------------------------------------------------------+
	| MAPICAL       | Provider for the information store-F/B public folder       | 
	+----------------------------------------------------------------------------+
	| NOTESCAL      | Provider for Lotus Notes                                   | 
	+----------------------------------------------------------------------------+
	| GWISECAL      | Provider for GroupWise                                     | 
	+----------------------------------------------------------------------------+
	| PROFSCAL      | Provider for OV/VM                                         | 
	+----------------------------------------------------------------------------+
	
	To isolate specific providers, open up the registry with regedt32 or regedit.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Go to HKLM\SYSTEM\CurrentControlSet\Services\MSExchangeCalCon\Parameters.
	
	2. Add the following for troubleshooting the Notes provider. To troubleshoot
	  other providers, simply change the NOTESCAL provider name to the desired
	  provider, for example, GWISECAL.
	
	  Value Name: Providers
	  Data Type: REG_SZ
	  String: MAPICAL, NOTESCAL
	
	3. Start up the Calendar Connector in console mode (refer to the following
	  article in the Microsoft Knowledge Base):
	
	  Q197372 XFOR: How to Run Calendar Connector in Console Mode
	
	4. Notice that the Calendar Connector only loads the two processes you want.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
