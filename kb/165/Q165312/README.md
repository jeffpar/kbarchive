---
layout: page
title: "Q165312: Unable To Connect to Internet Mail over RAS with WinNT 4.0"
permalink: kb/165/Q165312/
---

## Q165312: Unable To Connect to Internet Mail over RAS with WinNT 4.0

	Article: Q165312
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you connect your Windows NT version 4.0 Remote Access Service (RAS) client
	to your Internet Service Provider (ISP), you are unable to connect to your
	Internet Mail Server using your mail application. Also, you are unable to use
	Telnet.exe to connect to TCP port 25 on your Internet Mail Server.
	
	However, you are able to successfully ping your Internet Mail Server by IP
	address and host name. You are also able to use mail applications to connect to
	your Local Area Network (LAN) mail servers.
	
	NOTE: This may affect Windows 95 Dial-Up Networking Clients and Windows NT 3.5x
	RAS Clients as specified below.
	
	CAUSE
	=====
	
	This issue may be caused by one or more of the following:
	
	- This may be caused if the router at the ISP is unable to handle the 'IP
	  Header compression' feature in Windows NT 4.0. (The final ACK packet on
	  Windows NT 3.51 and Windows 95 is 60 bytes large; in Windows NT 4.0 it is 54
	  bytes).
	
	
	  -or-
	
	- The Winsock Proxy client is installed on your Windows NT 4.0 RAS Client (this
	  may apply to Windows NT 3.5x RAS client also). In this case, you are also
	  unable to Telnet to local servers.
	
	  -or-
	
	- Your Internet Mail Server does not have an IP address assigned to the
	  Multi-channel Memorandum Distribution Facility (MMDF) . In this case, the
	  Windows NT Server 3.5x RAS client and Windows 95 DUN will also be unable to
	  Telnet to port 25 on the Internet Mail Server.
	
	RESOLUTION
	==========
	
	Depending on the cause of the problem, perform the following steps:
	
	Disable IP Header Compression
	-----------------------------
	
	Disable IP Header Compression using the following steps:
	
	1. Click Start, point to Programs, point to Accessories, and click Dial-Up
	  Networking.
	
	2. Select the appropriate entry in the Phonebook entry to dial drop-down list.
	
	3. Click More, click Edit entry and modem properties, and then click Server.
	
	4. Click Settings in the Network Protocols section and click to clear the Use IP
	  Header Compression checkbox.
	
	Uninstall the Winsock Proxy
	---------------------------
	
	To uninstall Winsock Proxy, use the Add/Remove Programs Control Panel tool and
	remove Microsoft Proxy Client.
	
	Have Your ISP Assign an IP Address to MMDF
	------------------------------------------
	
	Refer to the documentation that came with your Unix server.
	
	Disable Data Compression
	------------------------
	
	Hardware compression:
	
	1. Click Start, point to Settings, and click Control Panel.
	
	2. Double-click the Modems icon, and then click Properties.
	
	3. Click the Connection tab, then click Advanced.
	
	4. Click to select the Use Error Control checkbox, then click to select the
	  Compress Data check box.
	
	Software:
	
	1. Click Start, point to Programs, point to Accessories, and click Dial-Up
	  Networking.
	
	2. Select the appropriate entry in the Phonebook entry to dial drop-down list.
	
	3. Click More, click Edit entry and modem properties, and click Configure.
	
	4. Click to select the Enable Modem compression checkbox.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
