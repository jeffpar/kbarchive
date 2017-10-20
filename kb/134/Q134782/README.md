---
layout: page
title: "Q134782: PPT7: Some Filled Objects on Embedded Slides Don't Print Properl"
permalink: /kb/134/Q134782/
---

## Q134782: PPT7: Some Filled Objects on Embedded Slides Don't Print Properl

{% raw %}

	Article: Q134782
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbinterop kbole kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you embed a PowerPoint slide into an external document (for example, a Word
	for Windows 95 document) and then print it to a Hewlett-Packard (HP) LaserJet 4
	(or compatible) printer, some fills print incorrectly:
	
	- Semi-transparent and shaded fills print as rectangles around the filled
	  object.
	
	  -and-
	
	- Textured (and picture) fills print a solid black.
	
	RESOLUTION
	==========
	
	NOTE: These steps are for the HP LaserJet 4 printer driver, version 3.78,
	Universal Printer Driver, 4.00. Because there are several versions of the HP
	printer driver, the following steps may be different for your printer. If they
	are, please consult your product documentation to complete these steps.
	
	To resolve this problem, change the printer's properties to use raster graphics:
	
	1. On the File menu, click Print.
	
	2. Click Properties.
	
	3. Click the Graphics tab, and then click User Raster Graphics.
	
	4. Click OK.
	
	Additional query words: 7.00 ppt95 picture Word winppt macppt
	
	======================================================================
	Keywords          : kbinterop kbole kbprint kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}
