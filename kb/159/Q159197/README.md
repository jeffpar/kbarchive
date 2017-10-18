---
layout: page
title: "Q159197: XADM: Controlling Folder Index Aging"
permalink: kb/159/Q159197/
---

## Q159197: XADM: Controlling Folder Index Aging

	Article: Q159197
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Client-created database table indexes (used for views) that have not been used
	for a given time interval are deleted (they will be re-created as needed). The
	default index age at which they are purged is eight days. This article shows you
	how to modify the registry to change the time settings for index aging.
	
	MORE INFORMATION
	================
	
	There are three registry entries that can control the index aging. These tasks
	are performed during the time allotted by the Information Store Maintenance
	Schedule. They are listed here in the order in which they are performed. These
	tasks will run until completed.
	
	WARNING: Using the Registry Editor incorrectly can cause serious problems that
	may require you to reinstall Windows NT. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	Aging Keep Time
	---------------
	
	This is the time (in milliseconds for Exchange 4.0 and 5.0, in seconds for
	Exchange 5.5) after which a view is cached even though it is not currently in
	use by a client.
	
	Public Information Store:
	
	To modify this registry key to change Aging Keep Time for the Public Information
	Store:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     System\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	3. Create a value named "Aging Keep Time" of type REG_DWORD.
	
	4. The default value for Aging Keep Time, without this registry entry, is
	  691200000 (8 days in milliseconds - 1000*60*60*24*8 for Exchange 4.0 and 5.0,
	  8 days in seconds - 60*60*24*8 for Exchange 5.5). Set the value to the new
	  Aging Keep Time in milliseconds (Exchange 4.0 and 5.0) or seconds (for
	  Exchange 5.5).
	
	5. Quit Registry Editor.
	
	Private Information Store:
	
	To modify this registry key to change Aging Keep Time for the Private Information
	Store:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     System\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate
	
	3. Create a value named "Aging Keep Time" of type REG_DWORD.
	
	4. The default value for Aging Keep Time, without this registry entry, is
	  691200000 (8 days in milliseconds - 1000*60*60*24*8, 8 days in seconds -
	  60*60*24*8 for Exchange 5.5)). Set the value to the new Aging Keep Time in
	  milliseconds (for Exchange 4.0 and 5.0) or seconds (Exchange 5.5).
	
	5. Quit the Registry Editor.
	
	Aging Clean Interval
	--------------------
	
	The interval (in milliseconds) at which the store checks to see if anything needs
	to be removed from the cache. Default value is 24 hours (or 86400000
	milliseconds).
	
	To modify this registry key to change the Aging Clean Interval for the Public
	Information Store:
	
	Public Information Store:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     System\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	3. Create a value named "Aging Clean Interval" of type REG_DWORD.
	
	4. The default value of the Aging Clean Interval, without this registry entry,
	  is 86400000 (or one day in milliseconds - 1000*60*60*24). Set the value to
	  the new Aging Clean Interval in milliseconds.
	
	5. Quit Registry Editor.
	
	Private Information Store:
	
	To modify this registry key to change the Aging Clean Interval for the Private
	Information Store:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     System\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate
	
	3. Create a value named "Aging Clean Interval" of type REG_DWORD.
	
	4. The default value the Aging Clean Interval, if this registry entry is
	  missing, is 86400000 (or one day in milliseconds - 1000*60*60*24). Set the
	  value to the new Aging Interval in milliseconds.
	
	5. Quit the Registry Editor.
	
	Reset Views
	-----------
	
	If this parameter exists and is set to a non-zero value, the Information Store
	deletes all cached restrictions on the next cleaning interval and resets the
	value to zero. This could be used to manually dump the restrictions at each
	cleaning interval by setting it whenever a new restriction is created. It will
	not dump restrictions that are actively being used by clients.
	
	Public Information Store:
	
	To modify this registry key to change the Reset Views for the Public Information
	Store:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     System\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	3. Create a value named "Reset Views" of type REG_DWORD.
	
	4. The default value of the Reset Views, without this registry entry, is 0. Set
	  the value to 1.
	
	5. Quit Registry Editor.
	
	Private Information Store:
	
	To modify this registry key to change the Reset Views for the Public Information
	Store:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	     System\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate
	
	3. Create a value named "Reset Views" of type REG_DWORD.
	
	4. The default value the Aging Clean Interval, without this registry entry, is
	  0. Set the value to 1.
	
	5. Quit the Registry Editor.
	
	For additional information on tasks performed by the IS Maintenance Schedule,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q159196 XADM: Tasks Controlled by the IS Maintenance Schedule
	
	For additional information on the Aging Keep Time parameter, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q156970 XADM: Improving Performance with Public Folder Views
	
	
	Additional query words: restrictions
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
