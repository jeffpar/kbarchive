---
layout: page
title: "Q136272: Cannot Connect to Windows NT 3.1 Computer with IPX/SPX"
permalink: /kb/136/Q136272/
---

## Q136272: Cannot Connect to Windows NT 3.1 Computer with IPX/SPX

	Article: Q136272
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using only the IPX/SPX-compatible network protocol in Windows 95,
	you find that you can connect to Microsoft Windows NT 3.5 servers and
	workstations, but not to Windows NT 3.1 servers or workstations running only the
	IPX/SPX-compatible protocol.
	
	CAUSE
	=====
	
	This problem can occur if you do not have NetBIOS support enabled.
	
	RESOLUTION
	==========
	
	To enable NetBIOS support with the IPX/SPX-compatible protocol, follow these
	steps:
	
	1. Use the right mouse button to click Network Neighborhood, and then click
	  Properties on the menu that appears.
	
	2. On the Configuration tab, double-click the IPX/SPX-compatible protocol.
	
	3. On the NetBIOS tab, click the "I want to enable NetBIOS over IPX/SPX" check
	  box to select it.
	
	4. Click OK, and then click OK again.
	
	5. When you are prompted to restart your computer, do so.
	
	REFERENCES
	==========
	
	Microsoft Windows 95 "Resource Kit," pages 430-431
	
	Additional query words: novell netware
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
