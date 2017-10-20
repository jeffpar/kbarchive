---
layout: page
title: "Q138924: FTP, WWW, and Telnet Fail over RAS Even Though Ping Works"
permalink: /kb/138/Q138924/
---

## Q138924: FTP, WWW, and Telnet Fail over RAS Even Though Ping Works

{% raw %}

	Article: Q138924
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On your computer running Windows NT or Windows 95, when you use Remote Access
	(RAS) or Dial-up networking with the PPP and TCP/IP protocols enabled, you
	cannot connect to computers on the Internet that are running the World Wide Web
	(WWW), FTP, Telnet, or other software that relies on TCP/IP packets to exchange
	information.
	
	PING.EXE and TRACERT.EXE, however, still function correctly.
	
	CAUSE
	=====
	
	You have VJ Header compression enabled and VJ Header compression is not
	compatible with the PPP server or router you are connecting to for Internet
	access.
	
	-or-
	
	Using Windows NT 4.0 you have Software Header Compression enabled, and it is not
	compatible with the PPP server or router your are connecting to for Internet
	access.
	
	RESOLUTION
	==========
	
	Perform the following steps to disable VJ header compression:
	
	Windows NT 3.5X
	---------------
	
	1. Start RAS.
	
	2. From the list of servers to call, select the entry for the Internet access
	  server where the problem occurs.
	
	3. Click Edit.
	
	4. If the Advanced button is displayed, click Advanced.
	
	5. Click Network, and then click TCP/IP Settings.
	
	6. Click to clear the Use VJ Header Compression check box.
	
	Windows NT 4.0
	--------------
	
	1. Double-click My Computer.
	
	2. Double-click Dial-Up Networking.
	
	3. Click More, and then point to Edit Entry and Modem Properties.
	
	4. Click the Server tab, and then click TCP/IP Settings.
	
	5. Click to clear the check box next to IP Header Compression.
	
	Windows 95
	----------
	
	1. Right-click the Dial-Up Networking connection with the problem and then click
	  Properties.
	
	2. Click Server Type, and then click TCP/IP Settings.
	
	3. Click to clear the Use IP Header Compression check box.
	
	MORE INFORMATION
	================
	
	VJ header compression (also referred to as IP header compression) is only used
	during the exchange of TCP/IP packets. Ping.exe and Tracert.exe use ICMP packets
	to test connectivity and, therefore, are not affected by VJ header compression.
	
	Additional query words: dialup ip
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
