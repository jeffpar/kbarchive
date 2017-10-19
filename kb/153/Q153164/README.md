---
layout: page
title: "Q153164: MS-DOS Compatibility Mode on National Semiconductor Controller"
permalink: /kb/153/Q153164/
---

## Q153164: MS-DOS Compatibility Mode on National Semiconductor Controller

	Article: Q153164
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhw win95 kbHardware
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Device Manager may display an exclamation point (!) in a yellow circle for a
	controller labeled "National Semiconductor Dual PCI IDE Controller RMM Support
	Only." When this occurs, an exclamation point may also be displayed for COM2.
	
	MORE INFORMATION
	================
	
	The driver included with Windows 95 does not provide protected-mode support for
	the National Semiconductor Dual Channel PCI IDE Controller. All drives using
	this controller use the real-mode mapper (RMM).
	
	An updated Windows 95 driver that provides protected-mode support for the
	National Semiconductor Dual Channel PCI IDE Controller is available from Tekram
	Technology.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw win95 kbHardware 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
