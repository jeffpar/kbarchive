---
layout: page
title: "Q137244: No LANtastic Network Access After Using Network Troubleshooter"
permalink: kb/137/Q137244/
---

## Q137244: No LANtastic Network Access After Using Network Troubleshooter

	Article: Q137244
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Windows 95 with a LANtastic network, you may be unable to
	access the network after running the Network Troubleshooter.
	
	CAUSE
	=====
	
	This problem can occur if both the LANtastic network client software and the
	Microsoft Client for Microsoft Networks is installed. The LANtastic network
	client software cannot be run in conjunction with support for other networks.
	
	RESOLUTION
	==========
	
	Remove the Microsoft Client for Microsoft Networks. To do so, follow these
	steps:
	
	1. Use the right mouse button to click Network Neighborhood, and then click
	  Properties on the menu that appears.
	
	2. Click Client For Microsoft Networks, and then click Remove.
	
	3. Click OK.
	
	
	MORE INFORMATION
	================
	
	You cannot install another network client while the LANtastic client software is
	installed. However, when you use the Network Troubleshooter, you may be asked if
	you want to install the Microsoft Client for Microsoft Networks. If you choose
	Yes, the troubleshooter installs the client software.
	
	To start the Network Troubleshooter, view the Troubleshooting Network Problems
	online Help topic.
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
