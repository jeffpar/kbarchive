---
layout: page
title: "Q113776: Remote Access Monitor Disappears From Desktop"
permalink: /kb/113/Q113776/
---

## Q113776: Remote Access Monitor Disappears From Desktop

{% raw %}

	Article: Q113776
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Remote Access Monitor with the No Title option selected, it
	starts but does not appear anywhere on the desktop. This only happens if Remote
	Access Monitor was previously started in one of the corners of the desktop other
	than the bottom-right and if no other applications are running with the No Title
	option selected.
	
	CAUSE
	=====
	
	The borders of Remote Access Monitor scrolled off the viewable portion of the
	desktop when the application was terminated.
	
	RESOLUTION
	==========
	
	To see Remote Access Monitor, start Task Manager and choose either Tile or
	Cascade. Resize and move Remote Access Monitor to another location on the
	desktop.
	
	
	Additional query words: prodnt ntas rasmon
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
