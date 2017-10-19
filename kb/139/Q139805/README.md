---
layout: page
title: "Q139805: Err Msg: DHCP Client Unable to Obtain IP Network Address"
permalink: /kb/139/Q139805/
---

## Q139805: Err Msg: DHCP Client Unable to Obtain IP Network Address

	Article: Q139805
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Internet Setup Wizard to set up a computer to access the
	Internet over a local area network (LAN), you may receive the following error
	message:
	
	  This DHCP client was unable to obtain an IP network address from a DHCP
	  server. Do you want to see future DHCP messages?
	
	CAUSE
	=====
	
	This error can occur if there is no DHCP server available.
	
	RESOLUTION
	==========
	
	Continue through the wizard as normal. When you are done, follow these steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click the TCP/IP protocol bound to your network adapter, and then click
	  Properties.
	
	3. On the IP Address tab, make sure the Obtain An IP Address Automatically
	  option is not selected.
	
	
	MORE INFORMATION
	================
	
	When you use the Internet Setup Wizard to set up a computer to access the
	Internet over a LAN, the TCP/IP network protocol is loaded dynamically after the
	necessary files have been copied. When Windows 95 loads TCP/IP, the default
	TCP/IP settings are used. By default, TCP/IP is configured to use DHCP. If there
	is no DHCP server available, you receive the error message stated above.
	
	Additional query words: iexplore
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
