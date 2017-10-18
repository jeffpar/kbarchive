---
layout: page
title: "Q91211: How to Change LAN Server Interface to 802.3"
permalink: kb/091/Q91211/
---

## Q91211: How to Change LAN Server Interface to 802.3

	Article: Q91211
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	IBM LAN Server 1.3 and Microsoft LAN Manager must be running the same interface
	in order to communicate. Because LAN Manager uses NetBIOS and IBM LAN Server
	uses IEEE 802.2 as default, an adjustment must be made to the Communications
	Manager configuration file to change the interface to NetBIOS.
	
	MORE INFORMATION
	================
	
	The installation process for IBM OS/2 1.3 Communications Manager creates a
	configuration file that contains selected Communications Manager features. This
	configuration file is called in the following lines in CONFIG.SYS:
	
	  device = c:\cmlib\etherdd.sys cfg=c:\cmlib\lclansrv.cfg
	
	-or-
	
	  device = c:\cmlib\trnetdd.sys cfg=c:\cmlib\lclansrv.cfg
	
	-or-
	
	  device = c:\cmlib\netbdd.sys cfg=c:\cmlib\lclansrv.cfg
	
	To change the interface from 802.2 to NetBIOS, do the following from the GROUP
	MAIN screen:
	
	1. Choose Communications Manager.
	
	2. Select Advanced Options-Configuration.
	
	3. Specify the configuration filename (for example, LCLANSRV.CFG).
	
	4. Go to the LAN feature profiles section of configuration file.
	
	5. CHANGE the interface from IEEE 802.2 to NetBIOS.
	
	This will write the changes back to the *.CFG file. Stop the server and
	workstation and reboot the server for the changes to take effect.
	
	Additional query words: 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
