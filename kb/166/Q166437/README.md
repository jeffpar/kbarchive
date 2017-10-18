---
layout: page
title: "Q166437: Cannot Install Internet Mail Service for Microsoft Exchange"
permalink: kb/166/Q166437/
---

## Q166437: Cannot Install Internet Mail Service for Microsoft Exchange

	Article: Q166437
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbsetup kbtool win95
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are setting up the Internet Mail information service for Microsoft
	Exchange using the Inbox Setup Wizard and you connect to the Internet Mail
	server using a modem, you are prompted to select the connection for accessing
	Internet Mail or click New to create a connection. However, there may be no
	connections listed in the box and the New button may not create a new
	connection. If you click Next, you receive the following message:
	
	  Internet Mail
	  Click a Connection from the list, or click New to create a connection.
	
	CAUSE
	=====
	
	Dial-Up Networking is not installed.
	
	RESOLUTION
	==========
	
	To install the Internet Mail service for Microsoft Exchange, first install
	Dial-Up Networking. To do so, follow these steps:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. Click the Windows Setup tab.
	
	3. Click Communications, and then click Details.
	
	4. Click the Dial-Up Networking check box to select it.
	
	5. Click OK, and then click OK.
	
	After Dial-Up Networking is installed, double-click the Inbox icon on the desktop
	to start the Inbox Setup Wizard and install the Internet Mail service.
	
	MORE INFORMATION
	================
	
	Dial-Up Networking is not installed during a typical installation, but it is
	required to install Internet Mail.
	
	Additional query words: 2 2.1
	
	======================================================================
	Keywords          : kbsetup kbtool win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
