---
layout: page
title: "Q199352: Err Msg: At Least One Service or Driver Failed During System..."
permalink: /kb/199/Q199352/
---

## Q199352: Err Msg: At Least One Service or Driver Failed During System...

{% raw %}

	Article: Q199352
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start your computer, you may receive the following error message:
	
	  At least one service or driver failed during system startup. Use Event
	  Viewer to examine the event log for details.
	
	CAUSE
	=====
	
	This behavior can occur if the NetBios data value is missing from the registry.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior, use Registry Editor to add the "NetBios" (without the
	quotation marks) data value to the DependOnService multi-string value in the
	following registry key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Messenger
	
	The DependOnService multi-string value should include the LanmanWorkstation and
	NetBios data values.
	
	NOTE: The DependOnService multi-string value is displayed as a hexadecimal number
	when you use Regedit.exe, and as a REG_MULTI_SZ value when you use Regedt32.exe.
	Therefore, you should use Regedt32.exe to add the NetBios data value.
	
	MORE INFORMATION
	================
	
	When you check the Services tool in Control Panel, you may find that the
	Messenger service is started and networking is functional. However, Event Viewer
	may display the following error message:
	
	  Event ID 7022 Source: Service Control Manager
	  Description: The Messenger Service hung on startup
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
