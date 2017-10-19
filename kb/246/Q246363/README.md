---
layout: page
title: "Q246363: Interix and Telnetd"
permalink: /kb/246/Q246363/
---

## Q246363: Interix and Telnetd

	Article: Q246363
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
	
	This article summarizes how INTEREX uses Telnetd.
	
	MORE INFORMATION
	================
	
	Interix does not use a Win32 telnet server, but instead uses a port from the
	telnetd program from the 4.4 BSD-Lite distribution. This telnet server is much
	more robust than the Win32 telnet server native to Microsoft Windows NT.
	
	You can run the telnetd program from a command prompt, or install it as a Windows
	NT service. By default, telnetd runs on port 23, the telnet port.
	
	Login Shell: All users log on to the Interix shell /bin/ksh.
	
	Security: Each user runs in the appropriate security context, as if logged on
	from the main Windows NT console.
	
	Terminal Emulation: The telnetd has access to the terminfo database. Over one
	hundred terminals are described, and new ones may be added.
	
	Connections: The number of connections permitted is determined by the software
	license. The maximum is set by the number of pseudo terminals available on the
	computer (256 pairs in Interix 2.2, 64 in earlier releases). Note that if other
	programs (such as xterm) are using pseudo terminals, fewer are available for
	telnetd connections.
	
	Maximum Attempts: The telnetd permits 10 consecutive log on attempts. After the
	fourth failure, it sleeps for 5 seconds before prompting. After the fifth, it
	sleeps for 10 seconds, then 15, and so on.
	
	If you have installed the pre-release package of Inetd, please see the following
	Interix Web site for instructions about how to integrate telnetd with the Inetd
	package:
	
	  http://www.interix.com/NewInterix/technotes/note0008.html
	
	For additional information about Interix Telnetd, see the following Interix Web
	site:
	
	  http://www.interix.com/NewInterix/technotes/note0005.html
	
	Additional query words: 2.2.10 2.2.20 2.2.30 2.2.40
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbinfo
	
	=============================================================================
	
