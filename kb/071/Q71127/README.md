---
layout: page
title: "Q71127: Windows: Masterpiece Requires SYSTEM.INI Modification"
permalink: /kb/071/Q71127/
---

## Q71127: Windows: Masterpiece Requires SYSTEM.INI Modification

	Article: Q71127
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use Masterpiece Studio Management Software by Burrell Business Systems
	with Microsoft Windows version 3.0 in 386 enhanced mode, you must add the
	following statement to the [386Enh] section of the SYSTEM.INI file:
	
	  UniqueDOSPSP=true
	
	If enabled, this statement tells Windows to start every application at a unique
	address (PSP).
	
	MORE INFORMATION
	================
	
	Each time Windows creates a new virtual machine to start a new application,
	Windows reserves a unique amount of memory (i bytes) below the application. For
	example, the first application is loaded at address M, the second at address
	M+i, the third at M+2i, etc. The amount of memory (i) is determined by the
	PSPIncrement setting. This setting helps assure that applications in different
	virtual machines all start at different addresses.
	
	Some networks use applications' load addresses to identify the different
	processes using the network. On such networks, failing to enable this setting
	might cause one application to fail when you exit another because the network
	interprets them as the same. However, enabling this setting will leave slightly
	less memory for non-Windows applications. If you are running a network based on
	Microsoft Network or LAN Manager, the default value is TRUE. See the
	NETWORKS.TXT online document to find out whether the network you are running is
	one of these.
	
	REFERENCES
	==========
	
	"Masterpiece Installation Instructions," page 3. Microsoft Windows Version 3.00
	SYSINI3.TXT file.
	
	The Masterpiece products included here are manufactured by a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.00 3.00a win30 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
