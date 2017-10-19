---
layout: page
title: "Q135665: Connection Established in MS-DOS Session Is Not Reconnected"
permalink: /kb/135/Q135665/
---

## Q135665: Connection Established in MS-DOS Session Is Not Reconnected

	Article: Q135665
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
	
	When you establish a network connection in an MS-DOS session (using the NET USE
	command), the connection is not reestablished when you restart Windows 95.
	
	CAUSE
	=====
	
	This behavior is by design. Network connections established in an MS-DOS session
	are not persistent connections.
	
	RESOLUTION
	==========
	
	To create a persistent connection, create the network connection using the Map
	Network Drive command in Windows Explorer. When you create the connection, click
	the Reconnect At Logon check box.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
