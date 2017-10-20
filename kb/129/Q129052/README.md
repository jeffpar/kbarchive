---
layout: page
title: "Q129052: Missing IntelliType Keyboard Tabs in Windows NT"
permalink: /kb/129/Q129052/
---

## Q129052: Missing IntelliType Keyboard Tabs in Windows NT

{% raw %}

	Article: Q129052
	Product(s): Microsoft Windows NT
	Version(s): 1.0,3.1,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install IntelliType software, the Pointer Control and Pointer Activity
	tabs may be missing from IntelliType Manager. Also, the Sounds, Key Locks, and
	Enable/Disable Caps Lock Key options are unavailable.
	
	CAUSE
	=====
	
	This behavior occurs when the Microsoft IntelliType software is installed
	without a Microsoft Natural Keyboard attached to the computer. IntelliType is
	designed to work with a 8042 keyboard controller chip exclusively.
	
	
	RESOLUTION
	==========
	
	To correct this problem, ensure that your computer has an 8042 keyboard
	controller chip.
	
	Additional query words: prodnt 3.10 keybd
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :1.0,3.1,3.5
	
	=============================================================================
	

{% endraw %}
