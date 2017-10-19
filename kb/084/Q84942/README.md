---
layout: page
title: "Q84942: ZEOS OEM Windows 3.1 Causes Error on Network Install"
permalink: /kb/084/Q84942/
---

## Q84942: ZEOS OEM Windows 3.1 Causes Error on Network Install

	Article: Q84942
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a network installation (SETUP /A) of the ZEOS OEM version of Windows 3.1,
	the following error message may appear:
	
	  Setup is unable to copy file X:\...\MOUSE.DRV
	
	  This file already exists in the destination directory and is marked as
	  read-only. You must remove the read-only attributes from all the files in
	  your Windows directory in order to successfully complete Windows Setup.
	
	CAUSE
	=====
	
	This error is generated because ZEOS puts a second, uncompressed, mouse driver
	(MOUSE.DRV) on Disk 2 of the Windows 3.1 setup disks. Since Setup marks these
	files as read-only, it is unable to copy the second mouse driver file
	(MOUSE.DRV). ZEOS puts a second instance of the mouse driver on Disk 2 to allow
	it to be copied without having to use the Expand utility.
	
	RESOLUTION
	==========
	
	To correct this problem, delete or rename either MOUSE.DRV or MOUSE.DR_. They
	are the same file, except the MOUSE.DR_ file is compressed.
	
	Additional query words: administrator /n expall decompressed 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
