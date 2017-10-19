---
layout: page
title: "Q246329: Working with the xterm Client in Interix"
permalink: /kb/246/Q246329/
---

## Q246329: Working with the xterm Client in Interix

	Article: Q246329
	Product(s): Microsoft Windows NT
	Version(s): 2.2.1,2.2.2,2.2.3,2.2.4
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Interix versions 2.2.1, 2.2.2, 2.2.3, 2.2.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information about working with the xterm client in
	Interix.
	
	MORE INFORMATION
	================
	
	The xterm client is one of the X11 clients provided as part of the Interix
	Workstation Lite, Workstation, and Server packages.
	
	The xterm client is not currently available for Interix on Microsoft Windows NT
	3.51. There is a known issue in Windows NT 3.51 which prevents xterm from
	running, but it is fixed in Windows NT 4.0.
	
	The xterm client starts the Korn shell, and this is not configurable. If you
	prefer to run in the C shell, you can include a .profile in your home folder
	which contains the following line:
	
	  exec csh -l
	
	NOTE: Remember to invoke the xterm client as a login shell so that the .profile
	is actually read:
	
	  oterm -ls
	
	For additional information, see the following Tech Note at the following Interix
	Web site:
	
	  http://www.interix.com/NewInterix/technotes/note0006.html
	
	Additional query words: 2.2.10 2.2.20 2.2.30 2.2.40
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbinfo
	
	=============================================================================
	
