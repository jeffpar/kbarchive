---
layout: page
title: "Q170903: NUMLOCK Causes Logon Problems with Portable Computers"
permalink: /kb/170/Q170903/
---

## Q170903: NUMLOCK Causes Logon Problems with Portable Computers

{% raw %}

	Article: Q170903
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Portable computers have the NUMLOCK key set to on when users try to log on to
	the system. This can cause users to type passwords incorrectly, because users
	often don't check the keyboard indicators before typing their passwords.
	
	CAUSE
	=====
	
	By default NUMLOCK is set to on.
	
	RESOLUTION
	==========
	
	You can modify this setting by editing the registry on the portable computer.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Normally, the computer applies the user settings when the user logs on, but it
	uses the default user profile when it is first turned on, before the user has
	logged on. To turn this functionality off, the default user settings must be
	modified. The Keyboard entry contains user preferences as defined by choosing
	the Keyboard icon in Control Panel. Entries are found under this registry path:
	
	  HKEY_USERS\.DEFAULT\Control Panel\Keyboard
	
	  InitialKeyboardIndicators REG_SZ Number
	      Default: 0
	
	Specifies initial values for keys. 0 means that NUMLOCK is turned off after the
	user logs on; 2 means NUMLOCK is turned on after the user logs on. This value is
	set when logging off or during shutdown to preserve the state of the NUMLOCK key
	at that time.
	
	This value can also be changed on a user basis by modifying
	HKEY_CURRENT_USER\Control Panel\Keyboard and the same registry key.
	
	For more information, see the following Microsoft Knowledge Base article:
	
	  Q102978 REG: User Preferences Entries, PART 3.
	
	Additional query words: Profile NUMLOCK
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:; winnt:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
