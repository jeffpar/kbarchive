---
layout: page
title: "Q120345: Menu Bar in Microsoft Bookshelf '94 Does Not Work Properly"
permalink: /kb/120/Q120345/
---

## Q120345: Menu Bar in Microsoft Bookshelf '94 Does Not Work Properly

	Article: Q120345
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf for Windows 1994 edition 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clicking an option on the menu bar in Microsoft Bookshelf '94 does not select
	the correct option, or it causes the menu bar to become difficult to read. For
	example, when you click Edit, the Tools menu options become visible instead.
	
	CAUSE
	=====
	
	Bookshelf '94 makes changes to its menu bar under the assumption that the menu
	bar font is the System font. In Windows 95, this assumption is false.
	
	RESOLUTION
	==========
	
	There are two methods for changing this behavior:
	
	- Bookshelf '94 has an option called Normal Menus that you can turn on and off.
	  If this option is off, the above symptoms occur. Use the following steps to
	  activate Normal Menus:
	  1. Press the ALT key on your keyboard, then press the letter "T."
	
	  2. Click Options.
	
	  3. Click the Normal Menus check box to enable this option.
	
	  -or-
	
	- Changing the menu bar font in Windows 95 to the System font also prevents the
	  aforementioned symptoms. If you choose this method, the menu bar font is
	  changed for all applications, not just Bookshelf '94:
	  1. Click the Start button, point to Settings, and then click Control Panel.
	
	  2. Double-click the Display icon. NOTE: You can skip steps 1 and 2 if you
	     click the desktop with the right (secondary) mouse button and then click
	     Properties.
	
	  3. Click the Appearance tab.
	
	  4. On the Item menu, click Menu Bar.
	
	  5. On the Font menu, click System, then click OK.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95.
	
	Additional query words: msn_bookshelf bookshelf94 wrong incorrect switched mmtitles
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin95 kbOSWinSearch kbHomeMMsearch kbBookshelfSearch kbBookShelf1994
	Version           : :1994 edition,95
	
	=============================================================================
	
