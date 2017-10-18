---
layout: page
title: "Q84165: Novell Error Message for Persistent Connections"
permalink: kb/084/Q84165/
---

## Q84165: Novell Error Message for Persistent Connections

	Article: Q84165
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Microsoft Windows version 3.1 on a Novell network, you have
	persistent printer connections, and the print queue no longer exists or was
	renamed, then the following error message will be displayed:
	
	  <server>/<print queue> does not map to any volume/directory path
	  on server <server name>
	
	This error message appears each time Windows is started.
	
	RESOLUTION
	==========
	
	There are two ways to disable this message:
	
	Method 1
	--------
	
	1. Run Control Panel and choose the Printers icon.
	
	2. Choose the Connect button and connect the LPTx port to another available
	  print queue.
	
	3. Select the Permanent check box. This will overwrite the existing settings.
	
	If the connection is not made permanent, the error message at startup will
	continue to be displayed.
	
	Method 2
	--------
	
	Edit the WIN.INI file's [network] section and delete the LPTx port reference to
	the print queue that no longer exists.
	
	
	Additional query words: 3.10 novell 3.11 netware
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
