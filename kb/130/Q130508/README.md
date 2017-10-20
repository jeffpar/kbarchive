---
layout: page
title: "Q130508: Non-White Text or Graphics Printed in Black"
permalink: /kb/130/Q130508/
---

## Q130508: Non-White Text or Graphics Printed in Black

{% raw %}

	Article: Q130508
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbgraphic kbprint win95 kbPrinting
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print colored text or graphics to a black and white printer, all
	non-white colors are printed as black. Even light gray text or graphics is
	printed as black.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	This behavior occurs when you print using the UNIDRV.DLL driver. The UNIDRV.DLL
	driver maps all non-white colors to black when you print to a black and white
	printer.
	
	Note that some printers that do not use the UNIDRV.DLL driver print light gray to
	a black and white printer.
	
	If you are using a Hewlett-Packard (HP) LaserJet 4-series printer with the
	printer drivers included with Windows 95, you can work around this behavior by
	using the Windows 3.1 printer driver from HP. This driver does not use the
	UNIDRV.DLL driver.
	
	Additional query words: grey gray scale font
	
	======================================================================
	Keywords          : kbgraphic kbprint win95 kbPrinting 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
