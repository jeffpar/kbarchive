---
layout: page
title: "Q183368: Requirements to Browse Network with Dial-Up Networking"
permalink: /kb/183/Q183368/
---

## Q183368: Requirements to Browse Network with Dial-Up Networking

	Article: Q183368
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbnetwork win95 kbAPI _IK12469 kbSDKPlatform kbGrpDSNet
	Last Modified: 12-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the requirements to view (or browse) other computers on
	the network from a Microsoft Windows 95, Windows 98, or Windows Millennium
	Edition (Me) client using a Dial-Up Networking connection.
	
	MORE INFORMATION
	================
	
	There are three methods by which a Windows client logging onto a network with a
	Dial-Up Networking connection can browse other computers on the network.
	
	Method 1
	--------
	
	Before making a Dial-Up Networking connection to the network, select NetBEUI or
	IPX/SPX as the default network protocol. These protocols act as a gateway,
	allowing the Windows 95 client to browse other computers on the network.
	
	Method 2
	--------
	
	If you want to use TCP/IP as your network protocol, enable the WIN Server (WINS)
	service on the Dial-Up Networking server to which the Windows 95 clients
	connects. Disable WINS if it is installed on the Windows 95 client. To disable
	WINS, follow these steps:
	
	1. Click Start, point to Programs, and then click Control Panel.
	
	2. Double-click the Network icon.
	
	3. On the Configuration tab, click TCP/IP, and then click Properties.
	
	4. On the WINS Configuration tab, click Disable WINS Resolution.
	
	5. Click OK, and then click OK.
	
	Method 3
	--------
	
	With WINS disabled, you need special LMHOSTS entries that designate all the
	domain controllers. To do this, use the following convention
	
	  199.199.199.1  <MyDomainController>   #PRE  #DOM:<DomainName>
	
	where <MyDomainController> is the name of the primary domain controller for
	a domain whose resources you want to browse, and 199.199.199.1 is the IP address
	of the primary domain controller.
	
	For additional information about LMHOSTS files, see the following article in the
	Microsoft Knowledge Base:
	
	  Q150800 Domain Browsing with TCP/IP and LMHOSTS Files
	
	Additional query words: ras remote access services
	
	======================================================================
	Keywords          : kbenv kbnetwork win95 kbAPI _IK12469 kbSDKPlatform kbGrpDSNet 
	Technology        : kbWinMEsearch kbWin95search kbWin98search kbZNotKeyword3 kbWin98 kbWinME
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
