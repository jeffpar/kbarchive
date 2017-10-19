---
layout: page
title: "Q192556: Side Effect of StickyKeys on Client Hotkeys"
permalink: /kb/192/Q192556/
---

## Q192556: Side Effect of StickyKeys on Client Hotkeys

	Article: Q192556
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
	
	When using StickyKeys, you expect to be able to press ALT, then press another
	key and have it act as if you pressed the ALT-key. When using a Terminal Server
	Client, this works fine for keys that are processed by the server. However,
	Hotkeys that are processed by the client (such as ALT-HOME, ALT-PGUP) do not
	work in this way.
	
	For example, you might expect to be able to press ALT, then Home, and have the
	Start Menu appear. However, with StickyKeys on, you may use the normal
	shortcuts, such as CTRL-ESC. In other words, if connected to a Server and it has
	StickyKeys enabled, press CTRL, then ESC to bring up the Start Menu.
	
	MORE INFORMATION
	================
	
	Resolved by design.
	
	Additional query words: stickykeys hotkeys
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
