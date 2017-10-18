---
layout: page
title: "Q126420: NT RAS Client with TCP/IP Alone Cannot Browse the Network"
permalink: kb/126/Q126420/
---

## Q126420: NT RAS Client with TCP/IP Alone Cannot Browse the Network

	Article: Q126420
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot remotely browse the Microsoft Windows Network with a Windows NT
	version 3.5 or 3.51 Remote Access Service (RAS) client running only the TCP/IP
	network protocol.
	
	WORKAROUND
	==========
	
	Ensure that the workgroup name or domain name on the RAS client computer is the
	same as the domain name of the NT RAS server. Also, you must ensure that one of
	the following two conditions is met:
	
	1. You have configured the RAS client to use NetBEUI for the RAS connection,
	
	  or
	
	2. You have installed the Windows Internet Name Service (WINS) on the RAS server
	  or another server in the RAS server's domain, and your RAS client registers
	  with the WINS server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Using one of the two workarounds specified above is the only way you can ensure
	browsing will take place correctly if your RAS client is configured to use
	TCP/IP over the RAS connection. You cannot reliably use File Manager to browse
	the RAS server or the remote Microsoft Windows Network by trying either of these
	two methods:
	
	1. Configuring the clients' RAS PPP connection to use IPX in addition to TCP/IP.
	
	2. Configuring a valid LMHOSTS file on the RAS client that resolves the server's
	  IP address.
	
	Adding IPX to the RAS client's PPP configuration will allow you to browse a
	remote NetWare or NetWare-compatible network on the RAS server's LAN, but will
	not ensure that a RAS client running TCP/IP will be able to browse a remote
	Microsoft Windows network.
	
	Remember that if your RAS server is also the WINS server, you will need to
	identify the primary WINS server with the RAS server's own IP address. To make
	this setting in Windows NT, open Control Panel, and in the Network Settings
	dialog box, use the Configure button for the TCP/IP Protocol.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q148154: RAS Client Cannot Browse RAS Server With IPX Only
	
	  Q149907: Browsing a Remote Network From a Client Using Only TCP/IP
	
	Additional query words: browser browsing list
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
