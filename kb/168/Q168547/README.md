---
layout: page
title: "Q168547: DSMN Errors in Event Viewer with Netware Servers"
permalink: /kb/168/Q168547/
---

## Q168547: DSMN Errors in Event Viewer with Netware Servers

{% raw %}

	Article: Q168547
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Directory Service Manager for NetWare (DSMN) is installed and successfully
	managing NetWare servers. However, an error message continually shows up in
	Event Viewer:
	
	  Event ID 8026: The sync agent service failed to remove account from group
	  CONSOLE OPERATORS on the NetWare server <servername> due to error
	  10253.
	
	This event will occur for each NetWare server that is being managed by DSMN.
	
	CAUSE
	=====
	
	Arcada Backup (now Seagate) installs a Console Operators group on the Windows NT
	server computer. There are no members in this group and according to Seagate is
	not necessary for Arcada Backup to function properly.
	
	The "Console Operators" group will not be copied to NetWare 3.x servers during
	the synchronization process because the group name contains a space, and does
	not conform to NetWare's group naming convention (In NetWare, spaces in group
	names are changed to underscores). NetWare 4.x servers are not affected by this
	limitation.
	
	RESOLUTION
	==========
	
	Remove the Console Operators group from the Windows NT server computer and
	synchronize the domain.
	
	NOTE: If a group is required "console_operators" group name is acceptable.
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
