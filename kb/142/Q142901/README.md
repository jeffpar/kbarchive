---
layout: page
title: "Q142901: No Response Dialing Another Computer with Chat"
permalink: /kb/142/Q142901/
---

## Q142901: No Response Dialing Another Computer with Chat

{% raw %}

	Article: Q142901
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11,95
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to dial another computer using the Chat tool (Winchat.exe), you may
	receive the following message:
	
	  The other computer did not respond
	
	CAUSE
	=====
	
	You may receive the above message for any of the following reasons:
	
	- There is no one at the other computer to answer.
	
	- You are not logged on to the network.
	
	- The other computer is not logged on to the network.
	
	- The two computers are not configured to use a common network protocol.
	
	- When you dialed the other computer, you typed an extra space at the end of
	  the computer name.
	
	- The other computer is running Windows 95 and Netdde.exe has not been run on
	  that computer during this session.
	
	RESOLUTION
	==========
	
	To resolve the problem, follow these steps:
	
	1. Make sure that someone is available at the other computer to answer.
	
	2. Make sure both computers are logged on to the network.
	
	3. Double-click the Network icon in Control Panel on each computer, and make
	  sure there is a common network protocol in the list of installed network
	  components.
	
	4. Make sure that you do not type an extra space at the end of the name of the
	  computer you are calling.
	
	5. If you are using Windows 95, you must run Netdde.exe before you can receive a
	  chat. When you run Winchat.exe, it automatically starts Netdde.exe. However,
	  if you have not run Winchat.exe during a session, Netdde.exe is not loaded
	  and Chat cannot notify you that another user is calling. You may want to
	  place a shortcut to Netdde.exe in your Startup folder to prevent this. For
	  information about creating shortcuts, search for "shortcut" in Windows 95
	  Help.
	
	  NOTE: If you are using only the Microsoft Client for NetWare Networks, NetBIOS
	  must be enabled in the properties for the IPX/SPX protocol for Netdde.exe to
	  load.
	
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11,95
	
	=============================================================================
	

{% endraw %}
