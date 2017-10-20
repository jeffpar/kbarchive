---
layout: page
title: "Q189714: Closing Lotus Notes Window Opens Desktop Context Menu"
permalink: /kb/189/Q189714/
---

## Q189714: Closing Lotus Notes Window Opens Desktop Context Menu

{% raw %}

	Article: Q189714
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty appscomp kbAppCompatibility
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to close a window in Lotus Notes version 4.5 or 4.6 by using
	the right mouse button to double-click the window, the Desktop context menu may
	be displayed after the Lotus Notes window closes.
	
	CAUSE
	=====
	
	This behavior can occur if the Lotus Notes window is on the Windows NT desktop
	and not within the Lotus Notes Main Window.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	Method 1
	--------
	
	Do not use the right mouse button to double-click a Lotus Notes window to close
	it. To disable this feature, follow these steps:
	
	1. In Lotus Notes, point to File on the Tools menu, and then click User
	  Preferences.
	
	2. Click the Right Double-Click Closes Window check box to clear it.
	
	3. Click Ok.
	
	4. Quit and then restart Lotus Notes.
	
	Method 2
	--------
	
	Configure Lotus Notes windows to remain within the Lotus Notes Main Window. To do
	so, follow these steps:
	
	1. In Lotus Notes, point to File on the Tools menu, and then click User
	  Preferences.
	
	2. Click the "Keep all Windows within Lotus Notes Main Window (MDI)" check box
	  to select it.
	
	3. Click Ok.
	
	4. Quit and then restart Lotus Notes.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: workspace
	
	======================================================================
	Keywords          : kb3rdparty appscomp kbAppCompatibility 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
