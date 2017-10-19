---
layout: page
title: "Q156569: How to Connect to Internet Service Providers from Windows NT 4.0"
permalink: /kb/156/Q156569/
---

## Q156569: How to Connect to Internet Service Providers from Windows NT 4.0

	Article: Q156569
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to configure Windows NT 4.0 Dial-Up Networking (DUN)
	to connect to your Internet Service Provider (ISP).
	
	NOTE: The procedure in this article assumes your ISP provides the PPP protocol
	for dial-up connections.
	
	MORE INFORMATION
	================
	
	The following instructions assume that you have already installed Dial-Up
	Networking on your computer. For information about installing Dial- Up
	Networking in Windows NT, see the following article in the Microsoft Knowledge
	Base:
	
	  ARTICLE-ID: Q171015
	  TITLE: How to Install and Configure Windows NT 4.0 Dial-Up Networking
	
	To configure Windows NT to connect to an ISP using PPP, follow these steps:
	
	1. If the TCP/IP protocol is installed, you can proceed with step 2. If the
	  TCP/IP protocol is not installed, double-click Network in Control Panel,
	  click the Protocols tab, click Add, click TCP/IP Protocol, click OK, and then
	  follow the instructions on your screen.
	
	2. In My Computer, double-click Dial-Up Networking.
	
	3. If you have run Dial-Up Networking before, click New to create a new
	  phonebook entry for your ISP. If this is the first time you have run Dial-Up
	  Networking, you receive the following message:
	
	  The phonebook is empty. Press OK to add an entry.
	
	  Click OK.
	
	4. Under Name The New Phonebook Entry, type a name for your ISP, and then click
	  Next.
	
	5. Click the I Am Calling The Internet check box to select it, and then click
	  Next.
	
	6. Under Phone Number, type your ISP's phone number, click Next, and then click
	  Finish.
	
	7. Click More, and then click Edit Entry And Modem Properties.
	
	8. Click the Server tab. Ensure that Dial-up Server Type is set to PPP, Windows
	  NT, Windows 95 Plus, Internet.
	
	9. Click TCP/IP Settings, modify the settings to match the settings provided by
	  your ISP, and then click OK.
	
	10. If your ISP requires a terminal window to log on, click the Script tab,
	  click Pop Up A Terminal Window, and then click OK.
	
	11. Click OK, and then click Dial to connect to your ISP.
	
	12. Type your user name and password for your ISP account, clear the Domain box,
	  and then click OK.
	
	Additional query words: IE Internet Explorer remote access service RAS
	
	======================================================================
	Keywords          : kbnetwork kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
