---
layout: page
title: "Q87296: Microsoft Write: Incorrect Page Breaks on Panasonic Printer"
permalink: /kb/087/Q87296/
---

## Q87296: Microsoft Write: Incorrect Page Breaks on Panasonic Printer

{% raw %}

	Article: Q87296
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from Microsoft Write to a Panasonic KX-P1124, KX-P1123, or
	KX-P1624 printer, the page breaks may not may not print correctly if you have
	changed the paper source and have not repaginated the document.
	
	CAUSE
	=====
	
	The Panasonic KX-P1124 has a different top and bottom unprintable region
	(margin) for the two different paper sources (tractor feed and manual feed).
	Tractor feed does not have an unprintable region, and manual feed has a 1/8-inch
	top and 1.1875-inch bottom unprintable region.
	
	If your printer driver is configured for tractor feed when you format your
	document in Write, you will have no top and bottom unprintable regions. If you
	then select manual feed (Called Front Sheet Feeder in the printer driver), you
	get different results when you print if you do not repaginate your document. As
	a result, it will take two pages to print what it previously took one page to
	print.
	
	RESOLUTION
	==========
	
	To correct this problem, always repaginate the document after changing the page
	source.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
