---
layout: page
title: "Q174338: Dial-Up Connection Disconnects After Downloading Messages"
permalink: kb/174/Q174338/
---

## Q174338: Dial-Up Connection Disconnects After Downloading Messages

	Article: Q174338
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Internet Mail information service in Windows Messaging, your
	dial-up connection to the Internet may disconnect after your messages have been
	downloaded, even if your connection is established before you start Windows
	Messaging.
	
	CAUSE
	=====
	
	This behavior occurs when the Internet Mail information service is configured to
	connect using your modem.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure the Internet Mail information service to
	connect using your existing connection to the network. To do so, follow these
	steps:
	
	1. Quit Windows Messaging if it is running.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Mail.
	
	4. Click Internet Mail, and then click Properties.
	
	5. Click the Connection tab, click Connect Using The Network, click OK, and then
	  click OK again.
	
	MORE INFORMATION
	================
	
	If you configure the Internet Mail information service to connect using the
	network and you have a network adapter installed, you must connect to the
	Internet before you start Windows Messaging. Otherwise, you receive the
	following error message:
	
	  You could not be logged on to mail server: <Mail Server>
	
	  Be sure your account information for this server is accurate.
	  If this problem persists, contact your Internet Service Provider.
	
	Additional query words: smtp pop3 server dun ras terminate
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	
	=============================================================================
	
