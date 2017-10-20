---
layout: page
title: "Q134541: PageMaker Does Not Print Large TrueType Fonts to TrueLaser"
permalink: /kb/134/Q134541/
---

## Q134541: PageMaker Does Not Print Large TrueType Fonts to TrueLaser

{% raw %}

	Article: Q134541
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to print large (Type I) TrueType fonts to a MicroTek TrueLaser
	printer from PageMaker version 5.0 or 5.0a, the fonts are not printed. The
	printer displays a "Processing" message and then goes back online without
	printing anything.
	
	CAUSE
	=====
	
	The PostScript interpreter in the MicroTek TrueLaser printer does not conform to
	standard PostScript as defined by Adobe.
	
	RESOLUTION
	==========
	
	Set the PostScript driver to download fonts to the printer as native TrueType
	fonts. To do so, follow these steps:
	
	1. In Control Panel, double-click the Printers folder.
	
	2. Use the right mouse button to click the MicroTek TrueLaser printer icon, and
	  then click Properties on the menu that appears.
	
	3. On the Fonts tab, click the Send Fonts As button.
	
	4. In the Send TrueType Fonts As box, click In Native Format.
	
	5. Click OK.
	
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
