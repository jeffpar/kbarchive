---
layout: page
title: "Q177824: DHCP Client Is Assigned Subnet Broadcast Address"
permalink: kb/177/Q177824/
---

## Q177824: DHCP Client Is Assigned Subnet Broadcast Address

	Article: Q177824
	Product(s): Microsoft Windows NT
	Version(s): WinNT: 4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One or more of your Dynamic Host Control Protocol (DHCP) clients may experience
	problems communicating on the network using TCP/IP. These problems may include
	one or more of the following:
	
	- The inability to successfully ping other TCP/IP hosts.
	
	  -or-
	
	- The inability to resolve NetBIOS or Host names of other TCP/IP hosts.
	
	CAUSE
	=====
	
	Your DHCP server may have assigned the client a subnet broadcast address instead
	of a valid IP address.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following:
	
	- When creating scopes, do not include the subnet broadcast address. For
	  example:
	
	  Creating a scope of 192.168.1.1-255 with Mask 255.255.255.0 may result in a
	  DHCP client being offered the 192.168.1.255 address, which is the subnet
	  broadcast address. Instead, you should create the scope 192.168.1.1-254 with
	  Mask 255.255.255.0.
	
	  -or-
	
	- To modify an existing scope, create an exclusion for the subnet broadcast
	  address.
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q164015
	TITLE : Understanding TCP/IP Addressing and Subnetting Basics
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT: 4.0
	Issue type        : kbbug
	
	=============================================================================
	
