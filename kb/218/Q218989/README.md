---
layout: page
title: "Q218989: Windows 95 Clients Registering in WINS as Multihomed Computers"
permalink: /kb/218/Q218989/
---

## Q218989: Windows 95 Clients Registering in WINS as Multihomed Computers

{% raw %}

	Article: Q218989
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:1.0,2.0,2.1,2.2,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95, used with:
	   - Microsoft H/PC Explorer, version 1.0 
	   - Microsoft Windows CE Services versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 clients that are configured to use statically defined Windows
	Internet Name Service (WINS) servers and have the Handheld PC (H/PC) Explorer
	software installed, register in WINS as multihomed computers with a second
	Internet Protocol (IP) address of 192.168.55.101.
	
	CAUSE
	=====
	
	This behavior occurs because the Windows 95 client registers both the network
	adapter and the dial-up adapter in WINS when you use statically defined WINS
	servers.
	
	Windows CE Services uses TCP/IP and Dial-Up Networking to allow the handheld
	computer to synchronize with a desktop computer. A dial-up adapter is added and
	is assigned an IP address of 192.168.55.101. Prior to the Winsock 2 upgrade,
	WINS settings were defined globally for all adapters configured with TCP/IP.
	
	RESOLUTION
	==========
	
	To resolve this problem, install the Winsock 2 update on the computer running
	Windows 95 and disable WINS resolution on the dial-up adapter. You can obtain
	the Winsock 2 update at the following Microsoft Web site:
	
	  http://www.microsoft.com/windows95/downloads/contents/wuadmintools/s_wunetworkingtools/w95sockets2/default.asp
	
	For more information about this update, see the following article in the
	Microsoft Knowledge Base:
	
	  Q182108 Availability of Windows Sockets 2.0 for Windows 95
	
	To disable WINS resolution on the dial-up adapter:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. In the list of network components, click "TCP/IP -> Dial-up Adapter", and
	  then click Properties.
	
	3. Click the WINS Configuration tab.
	
	4. Click Disable WINS Resolution.
	
	5. Click OK.
	
	Additional query words: wince 95 multi-homed
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:1.0,2.0,2.1,2.2,95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
