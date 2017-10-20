---
layout: page
title: "Q191756: Stop 0x1E Switching Between System Menus in Application Window"
permalink: /kb/191/Q191756/
---

## Q191756: Stop 0x1E Switching Between System Menus in Application Window

{% raw %}

	Article: Q191756
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a child window of the main window is created in a separate UI thread and
	the child window has the WS_SYSMENU style, when you switch to the child window's
	system menu by pressing the right arrow, the system stops responding and,
	eventually, after switching between other applications, the following blue
	screen STOP message may occur:
	
	  STOP: 0x0000001E (0xC0000005, 0xA000E0DC, 0x00000001, 0x000000E4)
	  KMODE_EXCEPTION_NOT_HANDLED
	  win32k.sys
	
	For example, if an MDI child window is running on a separate thread and you
	select a menu item, such as the File menu, and then press the right arrow key,
	the frame or application's system menu will appear (that is, where you move,
	size, minimize, maximize, and so on). If you press the right arrow key again,
	the child window's system menu will appear. After you arrow down, the menu items
	are not highlighted as expected. When you switch (press ALT+TAB) to another
	application, the system menu remains on top and does not redraw properly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: repaint redraws display screen bugcheck
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
