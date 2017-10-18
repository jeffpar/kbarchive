---
layout: page
title: "Q245814: Interix Software Development Kit Libraries"
permalink: kb/245/Q245814/
---

## Q245814: Interix Software Development Kit Libraries

	Article: Q245814
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a summary of the Interix Software Development Kit
	libraries.
	
	MORE INFORMATION
	================
	
	The Interix Software Development Kit includes the following libraries:
	
	- libc.a - Standard C library
	
	- libcurses.a - Ncurses (System V curses) library ported to Interix
	
	- libform.a - Forms library (part of Ncurses)
	
	- libl.a - Lex library
	
	- libmenu.a - Menu library (part of Ncurses)
	
	- libpanel.a - Panel library (part of Ncurses)
	
	- libsocket.a - Stub for compatibility; not actually required
	
	- libtermcap.a - Termcap library
	
	- psxdll.a - Interix API entry points as a DLL
	
	Metaconfig scripts search specified files for application programming interfaces
	(APIs). They do not locate many of the system calls because the Psxdll.a file is
	not specified for the scripts.
	
	For additional information about configuring scripts with Interix, see the
	following Interix Web site:
	
	  http://www.interix.com/NewInterix/technotes/note0007.html
	
	Additional query words: 2.2.10 2.2.20 2.2.30 2.2.40
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbinfo
	
	=============================================================================
	
