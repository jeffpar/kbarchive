---
layout: page
title: "Q63356: NetWare Options in the SYSTEM.INI in Windows 3.0"
permalink: /kb/063/Q63356/
---

## Q63356: NetWare Options in the SYSTEM.INI in Windows 3.0

	Article: Q63356
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on SYSTEM.INI options that pertain to the
	Microsoft Windows 3.0 Novell NetWare driver.
	
	MORE INFORMATION
	================
	
	The SYSTEM.INI is the Windows system configuration textfile. It is also located
	in the user's personal directory on the network, and holds information on system
	level device options. The [NetWare] section holds information specifically
	related to the NetWare Windows driver. The following is an example.
	
	     [NetWare]   RestoreDrives=TRUE/false
	
	The RestoreDrives= parameter controls how NetWare drive mappings are treated when
	you exit Windows. In the default mode (RestoreDrives=TRUE), when you exit
	Windows all drive mappings are restored to their previous state before Windows
	was executed. If you had performed any additional drive mappings while within
	Windows, these are removed when you exit. Setting RestoreDrives=FALSE preserves
	on exit all drive mappings made while Windows was running.
	
	The following parameter controls how resource visibility is treated in
	enhanced-mode Windows on a NetWare system:
	
	     [NetWare]   NWShareHandles=true/FALSE
	
	In the default setting (NWShareHandles=FALSE), the NetWare system behaves with
	the inherited-visibility method. The optional NWShareHandles=TRUE setting makes
	the enhanced-mode NetWare driver use the Global visibility method instead.
	
	The Novell products included here are manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.00 3.00a 3.0 3.0a novell
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
