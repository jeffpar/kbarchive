---
layout: page
title: "Q132599: Shortcut to Network Drive Does Not Work"
permalink: kb/132/Q132599/
---

## Q132599: Shortcut to Network Drive Does Not Work

	Article: Q132599
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
	
	Using a shortcut to a network drive repeatedly may cause the shortcut to fail
	with the following error message:
	
	  The drive or network connection that the shortcut refers to is unavailable.
	  Make sure that the disk is properly inserted or the network resource is
	  available, and then try again.
	
	CAUSE
	=====
	
	The Microsoft Network client maintains a list of the last eight network
	connections. When you try to use the shortcut to create a new link, the oldest
	of the eight previous connections is removed. However, the new connection is the
	same as the previous eight connections, so the connection that was just created
	is removed.
	
	RESOLUTION
	==========
	
	You can restart Windows 95 to correct the problem, or you can map the network
	drive manually. To map the network drive, use the following steps:
	
	1. Start Windows Explorer.
	
	2. On the Tools menu, click Map Network Drive.
	
	3. In the Drive box, click the drive letter you want for the connection.
	
	4. In the Path box, enter the path for the network connection.
	
	5. Click OK.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
