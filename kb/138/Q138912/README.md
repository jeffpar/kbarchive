---
layout: page
title: "Q138912: Cannot Run Windows 95 Setup on Invisible Net Network"
permalink: /kb/138/Q138912/
---

## Q138912: Cannot Run Windows 95 Setup on Invisible Net Network

	Article: Q138912
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
	
	When you run Windows 95 Setup from a mapped network drive on an Invisible Net
	network, you receive the following error message:
	
	  You cannot check or repair drive <X>:
	
	If you run Setup with the /IS switch to prevent ScanDisk from being run, you
	receive the following error message:
	
	  Setup could not create files on your startup drive and cannot set up Windows
	
	CAUSE
	=====
	
	You cannot run Windows 95 Setup on an Invisible Net network because Invisible
	Net maps local drives as network drives and Setup cannot be directed to a
	network drive.
	
	RESOLUTION
	==========
	
	To set up Windows 95 in an Invisible Net environment, follow these steps:
	
	1. Copy all the Windows 95 Setup files to a local hard disk.
	
	2. Disconnect the workstation from the network.
	
	3. Run Setup without the /IS switch on the local drive.
	
	MORE INFORMATION
	================
	
	You can use Windows 95 with Invisible Net (version 3.54) once Windows 95 has
	been set up. However, you must use real-mode network drivers, and Invisible LAN
	is the only network client available in Windows 95.
	
	For additional information about Invisible Net or updated Invisible Net drivers,
	please contact Invisible Software.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
