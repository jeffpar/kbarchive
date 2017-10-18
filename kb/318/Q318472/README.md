---
layout: page
title: "Q318472: Cannot obtain an IP address from a DHCP server"
permalink: kb/318/Q318472/
---

## Q318472: Cannot obtain an IP address from a DHCP server

	Article: Q318472
	Product(s): The Microsoft Network
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 2000 
	- the operating system: Microsoft Windows XP 
	- MSN DSL, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may have problems obtaining an IP address from a DHCP server if:
	
	- You are using the Arescom 860 external DSL Modem with either Windows 2000 or
	  Windows XP and are unable to obtain an IP address automatically from the
	  modem's DHCP server.
	
	- You previously had a working connection when using MSN DSL Broadband service
	  but after changing a setting or using another computer, you are now seeing an
	  error message in your Internet browser when trying to access the Web.
	
	CAUSE
	=====
	
	The IP address for your current connection is not the correct IP address for the
	Arescom 860 external DSL Modem.
	
	RESOLUTION
	==========
	
	To reset your IP address
	
	1. From the Start menu, click Run, and then type "cmd".
	
	2. In the Command window, type "ipconfig/release" to view the current IP
	  address.
	
	3. Type "ipconfig/renew". Your IP address should now be listed as "192.168.1.2".
	  If it is not, go to
	
	  Q318473 Verify Settings in Internet Protocol Properties
	
	  for additional troubleshooting steps.
	
	4. If the IP address is listed as "192.168.1.2", then attempt to connect to the
	  Internet using your Internet browser.
	
	Additional query words: kbimu;
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin2000 kbOSWinSearch kbOSWinXP kbMSNSearch kbOSWinXPSearch kbMSNDSL200
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
