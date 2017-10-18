---
layout: page
title: "Q90529: NetWatcher Shows Same User Multiple Times"
permalink: kb/090/Q90529/
---

## Q90529: NetWatcher Shows Same User Multiple Times

	Article: Q90529
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows for Workgroups application NetWatcher, the server may
	notice a single user connected several times, each time opening the same file.
	This is normal for a user using Schedule+.
	
	CAUSE
	=====
	
	This situation is caused by running Schedule+ and the Schedule+ Reminders
	program. Each would have the user's schedule file open. If the user then has a
	meeting request from another user open, the file is opened a third time.
	
	This behavior is by design.
	
	Additional query words: 3.10 3.11 Peer Net Watcher
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
