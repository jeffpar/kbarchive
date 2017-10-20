---
layout: page
title: "Q187453: User's SID Remains in Registry After Logoff"
permalink: /kb/187/Q187453/
---

## Q187453: User's SID Remains in Registry After Logoff

{% raw %}

	Article: Q187453
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	This issue has multiple symptoms including:
	
	- The user's policy is no longer applied when the user logs on to the server.
	
	- The system administrator cannot delete the user's profile using the System
	  Properties/User Profiles utility because the Delete button is unavailable.
	
	- The user's SID remains in HKEY/USERS even if the user is not logged on to the
	  server.
	
	CAUSE
	=====
	
	Programs or services that leave a handle open to the user's registry cause the
	unload of the hive not to succeed.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	In Registry Editor (Regedt32.exe), select the user's SID and then click Unload
	Hive.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
