---
layout: page
title: "Q318473: Verify Settings in Internet Protocol Properties"
permalink: /kb/318/Q318473/
---

## Q318473: Verify Settings in Internet Protocol Properties

{% raw %}

	Article: Q318473
	Product(s): The Microsoft Network
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN DSL, version 2.0 
	- the operating system: Microsoft Windows 2000 
	- the operating system: Microsoft Windows XP 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may need to confirm that the settings in your Internet Protocol Properties
	(TCP/IP) are set to obtain IP addresses and DNS server addresses automatically
	if:
	
	- You are using the Arescom 860 external DSL Modem with either Windows 2000 or
	  Windows XP and are unable to obtain an IP address automatically from the
	  modem's DHCP server.
	
	- You previously had a working connection when using MSN DSL Broadband service
	  but after changing a setting or using another computer, you are now seeing an
	  error message in your Internet browser when trying to access the Web.
	
	CAUSE
	=====
	
	The IP address for your current connection is not the correct IP address to use
	for the Arescom 860 external DSL Modem.
	
	RESOLUTION
	==========
	
	To verify the settings in your Internet Protocol Properties (TCP/IP)
	
	1. On your desktop, right click the icon for My Network Places, and then click
	  Properties.
	
	2. In the Properties window, right click the adapter card your Arescom modem is
	  using. (This may read Local Area Connection or Arescom USB Network Adapter,
	  for instance.) Then click Properties.
	
	3. In the Properties dialog box, on the General tab, click Internet Protocol
	  (TCP/IP) and then click Properties.
	
	4. In the Internet Protocol (TCP/IP) dialog box, on the General tab, select both
	  Obtain an IP address automatically and Obtain DNS server address
	  automatically.
	
	5. In the Internet Protocol (TCP/IP) dialog box, on the Alternate Configuration
	  tab, select Automatic private IP address.
	
	6. Click OK to save your changes.
	
	To reset your IP address
	
	1. From the Start menu, click Run, and then type "cmd".
	
	2. In the Command window, type "ipconfig/release" to view the current IP
	  address.
	
	3. Type "ipconfig/renew". Your IP address should now be listed as "192.168.1.2".
	  If it is not, go to Verify Settings in Internet Protocol Properties for
	  additional troubleshooting steps.
	
	4. If the IP address is listed as "192.168.1.2", then attempt to connect to the
	  Internet using your Internet browser.
	
	Additional query words: kbimu
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin2000 kbOSWinSearch kbOSWinXP kbMSNSearch kbOSWinXPSearch kbMSNDSL200
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
