---
layout: page
title: "Q257964: Cannot Change Input Locale to Australia or NZ on WTS Client"
permalink: kb/257/Q257964/
---

## Q257964: Cannot Change Input Locale to Australia or NZ on WTS Client

	Article: Q257964
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to permanently change your terminal server client Input Locales in
	Regional Settings to EN English (Australian), you may be unable to do so. If the
	Australian input locale is installed on the console, the terminal server client
	can add it, but if the you click "Set as default" on your terminal server client
	to make it the default input locale, it only retains this setting during that
	session and reverts to "US" the next time you log on.
	
	CAUSE
	=====
	
	This issue can occur because the default locale must be set in the registry of
	the terminal server client, not in the registry of the terminal server client
	session.
	
	NOTE: Australia is a locale that is only mapping to the "US" keyboard. Because of
	this, a new locale must be created on the terminal server computer.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. On the terminal server client computer, set the value of the Keyboard Layout
	  (REG_SZ) value in the following registry key to "00000c09" (the locale ID for
	  English Australia):
	
	  HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client
	
	2. On the Terminal Server console, add a key that is named "00000c09" to the
	  following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Keyboard Layouts
	
	3. Create two REG_SZ entries, one named "Layout File" with the value "KBDUS.DLL"
	  and another named "Layout Text" with the value "US".
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
