---
layout: page
title: "Q166089: Event ID 7020: Circular Dependency Afd Service Depends on..."
permalink: /kb/166/Q166089/
---

## Q166089: Event ID 7020: Circular Dependency Afd Service Depends on...

{% raw %}

	Article: Q166089
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade from Windows NT version 3.1 or 3.51 to Windows NT version 4.0,
	the following message may appear in Event Viewer:
	
	  Event ID 7020: EVENT_DEPEND_ON_LATER_SERVICE: Circular Dependency -
	  The Afd service depends on a service in a group that starts later.
	
	CAUSE
	=====
	
	This behavior can occur if information in the registry is not updated or removed
	during the upgrade process.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To resolve this issue, follow these steps:
	
	1. Start Registry Editor (Regedt32.exe) and locate the following registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  SYSTEM\CurrentControlSet\Services\Afd
	
	2. Locate the DependOnGroup value and then double-click it.
	
	3. Delete the current value, and then click OK.
	
	
	4. The value should appear as follows:
	
	     DependOnGroup:REG_MULTI_SZ:
	
	5. Quit Registry Editor and then restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: afd.sys ntw nts
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
