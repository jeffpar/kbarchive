---
layout: page
title: "Q104219: XTree Gold Slow Screen Redraw Under Windows NT"
permalink: /kb/104/Q104219/
---

## Q104219: XTree Gold Slow Screen Redraw Under Windows NT

{% raw %}

	Article: Q104219
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	XTree Gold version 2.5 by XTree Company may perform screen redraws
	very slowly while running in a window under Windows NT. In order to
	correct this problem, the configuration of XTree needs to be changed.
	
	There are two ways to get to the XTree Configuration screen:
	
	1. While in XTree, press ALT+F10.
	
	2. At the Command Prompt, run XTG_CFG.EXE from the XTree directory (C:\XTGOLD is
	  the default).
	
	Once you are in the XTree Configuration screen follow these steps:
	
	1. Select menu item 1, Modify Configuration Items.
	
	2. On the next screen, select Next Page.
	
	3. You should now be on Page 2 in Configuration Items. In the Display section,
	  change option 2, Display is "flicker free," to Yes. Use ENTER to toggle
	  between Yes and No.
	
	The "flicker free" setting in XTree is used to correct some display
	problems like snowy or flickering lines that occur with some display
	adapters. This setting will effect the speed at which the screen is
	redrawn.
	
	NOTE: If you are running Windows NT version 3.5 and the display flicker
	free is set to Yes, the system can stop functioning. The only option is to
	power down.
	
	XTree Gold is manufactured by the XTree Company, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
