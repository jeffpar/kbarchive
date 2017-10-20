---
layout: page
title: "Q178094: XFOR: Incorrect Time Stamp on Messages Sent from NZDT Zone"
permalink: /kb/178/Q178094/
---

## Q178094: XFOR: Incorrect Time Stamp on Messages Sent from NZDT Zone

{% raw %}

	Article: Q178094
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Internet mail sent from an Exchange Server computer located in the New Zealand
	time zone during Daylight Savings Time is received with an incorrect time stamp
	outside this time zone.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	New Zealand Daylight Savings Time (NZDT) is not a defined time zone. NZDT is
	actually +13 hours GMT. Time zone selections in Windows NT are displayed in + or
	- GMT with a maximum of +/-12 hours GMT.
	
	A new registry entry labeled "NewTimeZones" has been added to the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Besides the hotfix mentioned above, the following key may be added as necessary
	to allow for non-defined time zones:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS
	  \ParametersSystem\InternetContent
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	This value MUST be defined as REG_MULTI_SZ type. You can define any number of
	zone codes and associated time offsets. Each zone-offset string must be in the
	following format:
	
	  ZZZZ;[+|-]hh:mm
	
	where ZZZZ is the zone code (can be any # of characters, terminated by a ';'), hh
	is the hour offset (from GMT), and mm is the minute offset (from GMT).
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
