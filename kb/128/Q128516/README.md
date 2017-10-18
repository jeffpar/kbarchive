---
layout: page
title: "Q128516: Okidata OL-410ex Printout Incorrect at 600 dpi"
permalink: kb/128/Q128516/
---

## Q128516: Okidata OL-410ex Printout Incorrect at 600 dpi

	Article: Q128516
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
	
	When you print to an Okidata OL-410ex printer at 600 dots per inch (dpi)
	resolution, the printout you receive may be garbled or unintelligible.
	
	CAUSE
	=====
	
	The Okidata OL-410ex printer requires 2 megabytes (MB) of memory to print at 600
	dpi resolution. If the printer does not have 2 MB of memory, it prints at 300
	dpi resolution using 600 dpi data.
	
	RESOLUTION
	==========
	
	Verify that Windows 95 is configured to use the proper printer driver for the
	printer you are using. If you are using the correct printer driver, change the
	print resolution to 300 dpi or upgrade the printer to 2 MB or more of memory.
	
	MORE INFORMATION
	================
	
	There are two models of the Okidata OL-410e printer. The European version is the
	OL-410e and the U.S. version is the OL-410ex. The OL-410e has 1 MB of memory by
	default while the OL-410ex has 2 MB. The Windows 95 printer drivers for these
	printers have different default dpi values to compensate for the difference in
	memory between the two printers. The printer driver for the OL-410e defaults to
	300 dpi; the driver for the OL-410ex defaults to 600 dpi.
	
	Additional query words: garbage
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
