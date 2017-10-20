---
layout: page
title: "Q166429: PCNTW: How to Set Appropriate System Locale for Applications"
permalink: /kb/166/Q166429/
---

## Q166429: PCNTW: How to Set Appropriate System Locale for Applications

{% raw %}

	Article: Q166429
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To run Traditional Chinese and Simplified Chinese applications in Pan Chinese
	Windows NT Workstation 4.0, you need to switch between different locales.
	Otherwise, the applications will not show the proper text or User Interface on
	screen.
	
	For BIG5 applications, you must switch system locale to Chinese (Taiwan) locale.
	For example, Traditional Chinese Office 95 uses the Chinese (Taiwan) locale.
	
	For GB or GBK applications, you must switch system locale to Chinese (PRC)
	locale. For example, Simplified Chinese Office 95 uses the Chinese (PRC)
	locale.
	
	Unicode or English applications can run on any Chinese (PRC) or (Taiwan) or (Hong
	Kong) locale. For example, Notepad in Pan Chinese Windows NT is able to use any
	of these locales.
	
	MORE INFORMATION
	================
	
	To change system locale:
	
	1. Log on to an account with administrator privileges.
	
	2. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Regional Settings.
	
	3. Click the Regional Settings tab.
	
	4. Click either Chinese (PRC) or Chinese (Taiwan) locale.
	
	5. Click Set As System Default Locale, so that it is selected, and then click
	  OK.
	
	6. Restart your computer to activate the selected system locale.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
