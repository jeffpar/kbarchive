---
layout: page
title: "Q177498: Configuration Preferences May Not Be Applied to Other Users"
permalink: /kb/177/Q177498/
---

## Q177498: Configuration Preferences May Not Be Applied to Other Users

{% raw %}

	Article: Q177498
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you specify a configuration preference on a computer running Windows NT,
	the setting may not be applied to other users or to new users who log on to the
	computer.
	
	CAUSE
	=====
	
	Some configuration preferences in Windows NT are stored on a per-user basis in
	the user's profile.
	
	RESOLUTION
	==========
	
	To work around this behavior, use one of the following methods:
	
	- Log on as each user and specify the configuration preference individually for
	  that user.
	
	- Copy a configured user profile to the default user profile, so that new users
	  automatically receive the configuration preference the first time they log
	  on.
	
	MORE INFORMATION
	================
	
	Some commonly used configuration preferences stored on a per-user basis
	include:
	
	- User-definable settings for Windows NT Explorer.
	
	- Persistent network connections and network printer connections.
	
	- User-definable settings for Control Panel such as regional settings,
	  preferred server, open database connectivity, and other settings.
	
	- User-definable taskbar settings, personal program groups and program items,
	  and their properties.
	
	- User-specific settings for accessories such as Calculator, Clock, Notepad,
	  Paint, HyperTerminal, and other accessories.
	
	- Personal folders for each user's Start Menu, Desktop, Favorites, and other
	  folders.
	
	For information about configuring the default user profile, see the "Guide to
	Microsoft Windows NT 4.0 Profiles and Policies." This guide is available for
	free download from the following Microsoft Web site:
	
	http://www.microsoft.com/ntserver/management/deployment/planguide/prof_policies.asp
	
	Additional query words: odbc
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
