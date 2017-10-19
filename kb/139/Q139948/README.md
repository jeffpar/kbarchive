---
layout: page
title: "Q139948: DNS Settings in Dial-Up Networking Connectoid Are Not Used"
permalink: /kb/139/Q139948/
---

## Q139948: DNS Settings in Dial-Up Networking Connectoid Are Not Used

	Article: Q139948
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 15-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The settings you choose for a DNS server in the TCP/IP settings of a Dial- Up
	Networking connectoid may not be used. Instead, the TCP/IP settings in Network
	properties are used. This can cause error messages similar to
	
	  Unable to open http://www.microsoft.com
	
	in Web browsers and other programs that use fully qualified domain names.
	
	RESOLUTION
	==========
	
	Set the TCP/IP settings you want to use for a DNS server in Network properties,
	instead of in the connectoid for a server. To access Network properties,
	double-click the Network icon in Control Panel.
	
	When you use this method, however, you cannot resolve names on the LAN while you
	are connected to your Internet service provider. To resolve this issue, create
	static entries in the Hosts file or Lmhosts file for any LAN connections that
	are needed while you are connected to the Internet service provider.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem may be apparent in the following situations:
	
	- If you have multiple Dial-Up Networking connectoids, each with its own DNS
	  address, you may not be able to access resources using fully qualified domain
	  names in one or more of the connectoids.
	
	- If your network requires specific DNS settings and you have a connectoid with
	  different DNS settings, the connectoid may not work.
	
	Additional query words:
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
