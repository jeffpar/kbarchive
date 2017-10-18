---
layout: page
title: "Q156970: XADM: Improving Performance with Public Folder Views"
permalink: kb/156/Q156970/
---

## Q156970: XADM: Improving Performance with Public Folder Views

	Article: Q156970
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange client to change the view of a Public Folder
	that has a very large number of items, it may be a long time before the required
	information is displayed.
	
	CAUSE
	=====
	
	When you select a Public Folder view, if the view has not been used before,
	underlying indices and possibly new tables are created. This process will take a
	longer time to complete than it does when the view already exists.
	
	RESOLUTION
	==========
	
	To speed up the process of viewing the Public Folder, use one of the following
	three resolutions:
	
	- Upgrade the Microsoft Exchange Server to Service Pack 2. This service pack
	  resolves a problem that caused the server to take longer to switch views. The
	  problem is not present Microsoft Exchange version 4.0a (that is, SP2).
	
	- If the public folder contains a large number of items, use a filtered view.
	  This not only improves response times, but also helps reduce the number of
	  items displayed to a manageable size.
	
	- Change the Aging Interval. By default, the Information Store will remove any
	  views that have not been used, by any user, for eight days. This helps reduce
	  the size of the Information Store by purging out unused views. However, this
	  may cause the view to be re-created the next time a user switches to that
	  view, after it has been aged out. Since the view has to be re-created, the
	  time required to switch to the view will be much greater than if the view
	  already existed.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	The default aging time that the Information Store uses can be changed by
	modifying the registry as follows:
	
	Public Information Store:
	-------------------------
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	    System\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	3. Create a value named "Aging Keep Time" of type REG_DWORD.
	
	4. The default value of the Aging Interval, without this registry entry, is
	  691200000 (8 days in milliseconds - 1000*60*60*24*8).
	
	  Set the value to the new Aging Interval in milliseconds.
	
	5. Quit Registry Editor.
	
	Private Information Store:
	--------------------------
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Under the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	    System\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate
	
	3. Create a value named "Aging Keep Time" of type REG_DWORD.
	
	4. The default value the Aging Interval, if this registry entry is missing, is
	  691200000 (8 days in milliseconds - 1000*60*60*24*8).
	
	  Set the value to the new Aging Interval in milliseconds.
	
	NOTE: Changing the Aging Interval can increase the size of the Private and/or
	Public Information Store databases, because unused views will not be removed
	from the databases. Hence even rarely used views will not be purged from the
	database.
	
	The benefit of changing the Aging Interval will only be noticed in the case of
	views that are not commonly used. If views are regularly used by a user, it is
	not necessary to modify the Aging Interval.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
