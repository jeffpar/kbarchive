---
layout: page
title: "Q250566: Unable to Connect to Internet When Connected to Network with RAS"
permalink: /kb/250/Q250566/
---

## Q250566: Unable to Connect to Internet When Connected to Network with RAS

{% raw %}

	Article: Q250566
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:2000,5,5.01; winnt:2.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Explorer versions 5, 5.01 for Windows 98 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a local area network (LAN) using RAS or PPTP, you may be
	unable to gain access to the Internet if your LAN is using a Proxy server.
	
	CAUSE
	=====
	
	This issue can occur if the Proxy server configuration is not set up on the
	client computer for each connection made using RAS.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Right-click the Internet Explorer icon on your desktop, and then click
	  Properties.
	
	2. On the Connections tab, click the Dial-Up Networking connection that you use
	  to connect to your LAN, and then click Settings.
	
	3. Under "Proxy server", click the "Use a Proxy server" box, and then add the
	  correct address and port that your proxy server uses. In most cases, you may
	  also want to click to select the "Bypass proxy server for local connections"
	  check box. Check with your network administrator if you are unsure whether
	  this entry should be selected. Click to clear the "Automatically detect
	  settings" check box. Even if this entry is used on local connections, it
	  causes RAS and PPTP connections to fail to connect to the proxy server.
	
	4. Click OK, and then click OK.
	
	Additional query words: smallbiz vpn
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbIEsearch kbIE500Search kbWinAdvServSearch kbZNotKeyword3 kbIE98Search kbIE500Win98 kbIE501Win98
	Version           : WINDOWS:2000,5,5.01; winnt:2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
