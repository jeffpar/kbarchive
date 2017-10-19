---
layout: page
title: "Q172956: RAS Clients Fail to Connect with IP Assigned via DHCP"
permalink: /kb/172/Q172956/
---

## Q172956: RAS Clients Fail to Connect with IP Assigned via DHCP

	Article: Q172956
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Remote Access Service (RAS) clients may experience problems attempting to
	connect to your computer running Windows NT Server and running either RAS or
	Routing and Remote Access Service (RRAS). The RAS clients may receive one or
	more of the following error messages when they fail to connect:
	
	  Dial-Up Networking could not negotiate a compatible set of network protocols
	  you specified in the Server Type settings. Check your network configuration
	  in the Control Panel then try the connection again.
	
	-or-
	
	  TCP/IP CP reported error 733: the PPP control protocol for this network
	  protocol is not available on the server.
	
	NOTE: This issue has only been reported with RAS or RRAS servers that are
	configured to assign IP addresses through Dynamic Host Configuration Protocol
	(DHCP).
	
	CAUSE
	=====
	
	This issue may be caused by the RAS or RRAS server failing to successfully
	obtain a complete set of IP address leases from the DHCP server.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To resolve this issue, use one of the following methods:
	
	- Change the configuration of the RAS or RRAS Server to use a static pool of IP
	  addresses for its dial-up clients, using the following steps:
	
	  1. Click Start, point to Settings, click Control Panel, and then double-click
	     the Network icon.
	
	  2. Click the Services tab, click Remote Access Service, and then click
	     Properties.
	
	     NOTE: For an RRAS server, click Routing and Remote Access Service instead
	     of Remote Access Service.
	
	  3. Click Network in the Remote Access Setup dialog box and click Configure
	     for the TCP/IP Protocol in the Server Settings section in the Network
	     Configuration dialog box.
	
	  4. Click the Use Static Address Pool radio button and type a beginning and
	     ending range of IP addresses to use for your RAS clients.
	
	  5. Click OK twice, click Continue, click Close, and then restart your
	     computer when prompted.
	
	-or-
	
	- Obtain a new set of IP Addresses for your RAS pool by performing the
	  following steps:
	
	  1. Delete all active leases in DHCP manager for the RAS or RRAS Service by
	     performing the following steps:
	
	     a. Click Start, point to Programs, point to Administrative Tools, and then
	        click DHCP Manager.
	
	     b. Double-click the DHCP Scope.
	
	     c. Select the active leases and click Delete.
	
	  2. Delete the DHCPAddresses key from the registry by performing the following
	     steps:
	
	     a. Click Start, click Run, type "regedt32.exe" (without the quotation
	        marks), and then click OK.
	
	     b. Go to the following subkey:
	
	        HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	        \RemoteAccess\Parameters\IP\DHCPAddresses
	
	     c. Click Delete on the Edit menu and click Yes in the Warning dialog box.
	
	     d. Close Registry Editor and restart your computer.
	
	-or-
	
	- Verify that your DHCP Server is operating correctly by trying to Renew the
	  address of one of your Local Area Network (LAN) clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
