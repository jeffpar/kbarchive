---
layout: page
title: "Q187067: Multitasking Hotkeys Do Not Work in Terminal Server Session"
permalink: /kb/187/Q187067/
---

## Q187067: Multitasking Hotkeys Do Not Work in Terminal Server Session

{% raw %}

	Article: Q187067
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	The normal task-switching hotkey combinations for Microsoft Windows operating
	systems, such as Windows NT, Windows 9x, and so on, are not passed through the
	Terminal Server client session to the Terminal Server. However, alternative key
	combinations are provided on the Terminal Server Client to offer the same
	functionality:
	
	- ALT+PGUP = ALT+TAB
	- ALT+PGDN = ALT+SHIFT+TAB
	- ALT+INSERT = ALT+ESC
	- ALT+HOME = CTRL+ESC
	- ALT+DEL = ALT+SPACEBAR
	- CTRL+ALT+END = CTRL+ALT+DEL
	
	SYMPTOMS
	========
	
	When using multitasking hotkeys, such as ALT+TAB, within a Terminal Server
	session, the keystroke combination is processed on the local desktop that is
	running the Terminal Server client software, task switching back to the Windows
	95/Windows NT desktop, rather than between applications in the Terminal Server
	client session.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
