---
layout: page
title: "Q157807: Enabling AutoDial with Internet Explorer in Windows NT 4.0"
permalink: /kb/157/Q157807/
---

## Q157807: Enabling AutoDial with Internet Explorer in Windows NT 4.0

	Article: Q157807
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	You can use the AutoDial feature in Windows NT 4.0 to automatically prompt you
	to dial a phonebook entry when you try to connect to a network or Internet path
	that is not available or cannot be found. For example, when you double-click the
	Internet Explorer icon, Microsoft Internet Explorer attempts to load your start
	page. If you are not connected to your Internet service provider (ISP), you
	receive the following error message:
	
	  Microsoft Internet Explorer
	  Internet Explorer cannot open the Internet site http://<web address>.
	  The site was not found. Make sure the address is correct, and try again.
	
	With AutoDial correctly configured, you are prompted to dial your ISP.
	
	MORE INFORMATION
	================
	
	To configure AutoDial, follow all of the steps in each of the following
	sections.
	
	Enable AutoDial By Location
	---------------------------
	
	1. Double-click My Computer and then double-click Dial-Up Networking.
	
	2. In the Phonebook Entry To Dial box, click the entry for your ISP.
	
	3. Click More, click User Preferences, and then verify that the location from
	  which you are dialing is selected. Click OK.
	
	Remote Access Services Must Be Started
	--------------------------------------
	
	1. In Control Panel, double-click Services.
	
	2. Locate the following two services and verify that they are started:
	
	   - Remote Access AutoDial Manager
	
	   - Remote Access Connection Manager
	
	Manually Set Your Start Page
	----------------------------
	
	1. Using Dial-Up Networking, connect to your ISP.
	
	2. Start Internet Explorer, and then connect to the Web page that you want to
	  use as your start page.
	
	3. On the View menu, click Options.
	
	4. Click the Navigation tab.
	
	5. In the Page box, click Start Page, and then click Use Current.
	
	6. Click OK.
	
	The next time you start Internet Explorer without being connected to your ISP,
	you will be prompted to dial the connection.
	
	For additional information about AutoDial, please see the following article in
	the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q152220
	  TITLE : How to View and Remove Information from AutoDial
	
	Additional query words: 4.0 ras dialup dun
	
	======================================================================
	Keywords          : kbnetwork kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
