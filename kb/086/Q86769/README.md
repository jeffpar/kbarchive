---
layout: page
title: "Q86769: HP Font Files Created When Printing to File"
permalink: /kb/086/Q86769/
---

## Q86769: HP Font Files Created When Printing to File

{% raw %}

	Article: Q86769
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you print to file using the HPPCL4 driver included in Microsoft Windows
	3.1, a font summary file is created. This file includes a list of all device
	fonts, soft fonts, and cartridge fonts. The filename is the driver name with an
	extension consisting of a letter and two numbers. For example:
	
	- HPPCL.P00
	
	- HPDSKJET.P01
	
	MORE INFORMATION
	================
	
	Applications can request font information from UNIDRV.DLL for display purposes.
	Rather than have UNIDRV.DLL check the WIN.INI file each time for this
	information, it creates a list in a font summary file. This file is changed
	every time you change cartridges in the driver, add/delete soft fonts, and so
	on. The next time an application asks for this font information, UNIDRV.DLL
	responds with this previously generated list. The performance gain is directly
	proportionate to the number of soft fonts installed.
	
	
	Additional query words: 3.10 temporary hewlit packard p08 x01 p01 p02 hewlett hp
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
