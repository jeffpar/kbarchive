---
layout: page
title: "Q128638: User Logs On To a Blank Windows NT Screen"
permalink: /kb/128/Q128638/
---

## Q128638: User Logs On To a Blank Windows NT Screen

{% raw %}

	Article: Q128638
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you log on to Windows NT, the system may stop responding (hang) with a
	blank screen displayed. You can continue by pressing CTRL+ALT+DEL to bring up
	the Windows NT security dialog box. You can then choose either Cancel, Logoff,
	or Shutdown.
	
	CAUSE
	=====
	
	This problem occurs when the user account has No Access permissions to its home
	directory (typically the \USERS\DEFAULT subdirectory). This problem also occurs
	if the \USERS directory has No Access permission for the user and this
	permission has been applied to its subdirectories.
	
	RESOLUTION
	==========
	
	To correct this problem, give the user at least a read-only permission to the
	home directory.
	
	Additional query words: prodnt 3.10 hung progman wallpaper
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
