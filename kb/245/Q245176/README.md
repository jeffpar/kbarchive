---
layout: page
title: "Q245176: Cached Terminal Server Roaming Profiles Use Too Much Disk Space."
permalink: /kb/245/Q245176/
---

## Q245176: Cached Terminal Server Roaming Profiles Use Too Much Disk Space.

	Article: Q245176
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a roaming profile to connect to a server running Microsoft Windows
	NT Server 4.0, Terminal Server Edition, you may find a duplicate copy of your
	roaming profile cached on the server. If this occurs with the profiles of all
	the Terminal Server users on your network, you may use a large amount of disk
	space on the server.
	
	CAUSE
	=====
	
	This behavior can occur if the system policy of the Terminal Server is
	configured to cache copies of roaming profiles.
	
	RESOLUTION
	==========
	
	To resolve this issue, modify the system policy of the Terminal Server:
	
	1. At the server, start System Policy Editor.
	
	2. On the File menu, click Open Registry.
	
	3. Double-click Local Computer.
	
	4. Click Windows NT User Profiles.
	
	5. Click "Delete cached copies of roaming profiles", and then click OK.
	
	6. Quit System Policy Editor, clicking Yes to save the policy changes to the
	  registry.
	
	Additional query words: system
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
