---
layout: page
title: "Q246368: How to Start Interix Daemons as Services"
permalink: kb/246/Q246368/
---

## Q246368: How to Start Interix Daemons as Services

	Article: Q246368
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
	
	This article describes how to start Interix daemons as services.
	
	MORE INFORMATION
	================
	
	You can start the following Interix daemons as services:
	
	- Telnetd
	
	- Inetd
	
	- Syslogd
	
	- Cron1
	
	Microsoft recommends that you start Inetd to start Telnetd, rather than
	/bin/telnetd. No other daemon can be started directly as a service, so the
	following from /usr/sbin are started only by Inetd:
	
	- in.fingerd
	
	- in.ftpd
	
	- in.ntalkd
	
	- in.rexecd
	
	- in.rlogind
	
	- in.rshd
	
	- in.telnetd
	
	- in.tftpd
	
	For additional information about Interix services, refer to the following Web
	sites:
	
	  http://www.interix.com/NewInterix/technotes/note0008.html
	
	  http://www.interix.com/NewInterix/technotes/note0005.html
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbInterixSearch kbUNIXSearch kbInterix221 kbInterix222 kbInterix223 kbInterix224
	Version           : :2.2.1,2.2.2,2.2.3,2.2.4
	Issue type        : kbinfo
	
	=============================================================================
	
