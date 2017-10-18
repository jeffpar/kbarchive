---
layout: page
title: "Q127058: Cannot Use Novell Network After Upgrading Compaq DOS"
permalink: kb/127/Q127058/
---

## Q127058: Cannot Use Novell Network After Upgrading Compaq DOS

	Article: Q127058
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
	
	After you install Windows 95 on a computer running Compaq DOS, you cannot log on
	to the Novell network using EMSNETX.EXE as the network redirector.
	
	CAUSE
	=====
	
	EMSNETX.EXE (Novell's EMS version of NETX.EXE) requires that an EMS provider be
	loaded. Compaq DOS uses CEMM.EXE as the EMS provider. When you install Windows
	95, Setup removes the following line from the CONFIG.SYS file, disabling the EMS
	provider:
	
	  DEVICE=<path>\CEMM.EXE RAM
	
	RESOLUTION
	==========
	
	Adding the CEMM.EXE line back to the CONFIG.SYS file is not recommended.
	CEMM.EXE may not work correctly in Windows 95. The preferred solution is to
	install the Windows 95 client for NetWare networks. To do so, follow these
	steps:
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click the Network icon.
	
	3. Click the Add button on the Configuration tab.
	
	4. Click Client and then click the Add button.
	
	5. In the Manufacturers box, click Microsoft. In the Network Clients box, click
	  Client For NetWare Networks. Click the OK button.
	
	6. Click the OK button, and then when you are prompted to, restart the computer.
	
	You could also use NETX.EXE instead of EMSNETX.EXE.
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
