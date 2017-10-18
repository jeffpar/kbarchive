---
layout: page
title: "Q282991: You Cannot Browse IP Addresses by Using a UNC switch in Windows"
permalink: kb/282/Q282991/
---

## Q282991: You Cannot Browse IP Addresses by Using a UNC switch in Windows

	Article: Q282991
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kburl win95
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access another computer from a Windows 95-based computer by
	using the \\<IP_Address> Uniform Naming Convention (UNC) switch (for
	example, if you run the following command from a command prompt: \\192.168.1.2),
	you may receive the following error message:
	
	  \\<IP Address>
	  The Network Name can not be found
	
	This error message occurs even if there is connectivity between the computers.
	For example, they are able to use a ping command to find each other in Network
	Neighborhood.
	
	CAUSE
	=====
	
	This error message occurs because of a problem with the Windows 95 Winsock
	files.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the Winsock2 update from the
	following Microsoft Web site:
	
	  http://www.microsoft.com/windows95/downloads/contents/wuadmintools/s_wunetworkingtools/w95sockets2/default.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kburl win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
