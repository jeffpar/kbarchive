---
layout: page
title: "Q164023: Fix for Gethostbyname() IP Address Order on Local Multihomed Mac"
permalink: kb/164/Q164023/
---

## Q164023: Fix for Gethostbyname() IP Address Order on Local Multihomed Mac

	Article: Q164023
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows Sockets application calls gethostbyname() to resolve the local
	hostname to a list of IP addresses on a multihomed computer, the list may be
	returned in an order that does not match the binding order displayed in Control
	Panel, or the order that IP addresses were assigned to network interface cards
	(NICs).
	
	CAUSE
	=====
	
	Changes made to support Windows Sockets 2 produced this behavior.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	When the new fix is applied, and gethostbyname() is used to resolve the local
	hostname on a multihomed computer, the list of IP addresses will be returned in
	the following order:
	
	- The first address from each NIC in the system. You can see the order in which
	  they will appear by clicking the Bindings tab in the Control Panel Network
	  tool.
	
	- The remainder of the IP addresses from each NIC. You can see the order in
	  which they will appear by clicking the Bindings tab in the Control Panel
	  Network tool.
	
	- Additional addresses, such as those dynmically assumed by a cluster server.
	
	So if you had a computer similar to the following:
	
	  Card A - Addresses 1,2,3
	  Card B - Addresses 4,5,6
	
	The order returned would be 1,4,2,3,5,6. That is, the first address from each NIC
	(1,4) and then the remainder from each NIC (2,3,5,6).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	
	MORE INFORMATION
	================
	
	For additional information about this issue, please see the following article in
	the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q171320
	  TITLE : How to Change the IP Address List Order Returned
	
	To Change the order that addresses are returned:
	
	1. Open Network Control Panel
	
	2. Choose the bindings tab
	
	3. Choose all protocols in the Show Bindings for drop down box
	
	4. Expand the TCP/IP protocol
	
	5. Addresses are tied to the specific Network Card. Move the NICs up or down the
	list to get the desired order.
	
	Use ipconfig /all at the command line to assist in correctly identifying the
	NICs.
	
	RAS interfaces will appear as NDISWANx . The addresses that RAS servers and RAS
	clients use are also returned in the list. This can have some adverse effects on
	applications that are not written to try other addresses when the first returned
	address fails.
	
	Additional query words: ping gethostbyname localhost multihomed multi-homed
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
