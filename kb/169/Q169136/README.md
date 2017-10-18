---
layout: page
title: "Q169136: Multilink ISDN in WinNT 4.0 May Fail When Connect 2nd Channel"
permalink: kb/169/Q169136/
---

## Q169136: Multilink ISDN in WinNT 4.0 May Fail When Connect 2nd Channel

	Article: Q169136
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to establish a multilink connection (using multiple ISDN channels)
	to a Livingston Portmaster using Windows NT 4.0 Dial-Up Networking, the second
	channel may fail to connect and display the following error:
	
	  Error 721 remote PPP server is not responding
	
	Also, in some cases the connection may drop with no errors.
	
	
	However Windows 95 may connect both channels successfully.
	
	CAUSE
	=====
	
	This is caused by a limitation in certain versions of the firmware on the
	Livingston Portmaster, which do not allow simultaneous connections within 500
	milliseconds of one another.
	
	The reason Windows 95 clients can connect to the Livingston Portmaster and
	Windows NT clients fail is because Windows NT 4.0 tries to connect both channels
	simultaneously. Windows 95 establishes the connection on the first channel then
	dials the second channel.
	
	RESOLUTION
	==========
	
	To resolve this issue, update the code on the Livingston Portmaster to the
	latest version, which can be found at Livingston's website:
	
	  http://www.livingston.com
	
	Or contact Livingston Technical Support at 1-800-458-9966 or 510-426-0770.
	
	
	Additional query words: mulitlink multi-link ras ml
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
