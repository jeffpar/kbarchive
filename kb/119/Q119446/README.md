---
layout: page
title: "Q119446: Repeating Image (Ghosting) with the HP LaserJet Printer"
permalink: kb/119/Q119446/
---

## Q119446: Repeating Image (Ghosting) with the HP LaserJet Printer

	Article: Q119446
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a Hewlett-Packard (HP) LaserJet printer, an effect known as
	"ghosting" occurs. Ghosting refers to an object or letter that is repeated
	several times down the length of a page at even intervals. The repeated image
	appears as a light or dark area relative to the surrounding image.
	
	CAUSE
	=====
	
	Ghosting most often occurs when a large black pattern is followed by a fine gray
	scale. The condition is caused by residual electrical charges left on the
	surface of the electro-photographic (EP) drum or a lack of toner in the
	developer region. Ghosting is a condition experienced in one form or another by
	all devices that use the electro-photographic (EP) process. Both the developer
	and the EP-drum can produce dark or light ghosting.
	
	Both light and dark types of ghosting can be caused by either the developer or
	the EP-drum. The circumference of the developer or EP-drum corresponds to the
	distance between the repeated images. Therefore, measuring this distance
	determines whether the EP-drum or the developer is the cause of the ghosting.
	
	The most common form of ghosting results from a developer condition known as
	developer starvation, which occurs when so much toner has been required to print
	the first image that the developer does not have enough time to pick up enough
	new toner and charge it sufficiently. Developer starvation produces light
	ghosting.
	
	Developer and EP-Drum Measurements
	----------------------------------
	
	  EP                 Developer              OPC
	  Cartridge          Circumference          Circumference
	  -------------------------------------------------------
	
	  EP-S (92292)          50mm                    94mm
	  EP-L (92275)          50mm                    94mm
	  EP-N (92291)          50mm                    94mm
	  EP-E (92298)          50mm                    94mm
	  EP-P (92274)          25mm                    76mm
	
	RESOLUTION
	==========
	
	To correct this problem, do the following:
	
	1. Use a different pattern. Avoid patterns that use a 50-percent gray scale or a
	  "dot-on-dot off" pattern.
	
	2. Make changes to the layout of the page so that gray-scale patterns do not
	  follow black areas. If possible, make dark patterns lighter and light
	  patterns darker. Print the image in landscape.
	
	3. Experiment with print density and resolution enhancement technology (RET)
	  settings.
	
	4. Print a completely black page immediately in front of the page that is
	  experiencing the ghosting condition. This black page must be part of the same
	  print job so that the printer's gear train does not pause between the pages.
	
	5. Check humidity and temperature: Low temperature and humidity can exaggerate a
	  ghosting condition. Make sure the printer's environment meets the
	  requirements given in the printer's user's manual. Light or dark ghosting
	  caused by the developer is HIGHLY affected by environmental conditions.
	
	6. Print at 300 dots per inch (dpi).
	
	7. In most cases of light ghosting, changing the toner cartridge does not
	  improve the condition. Dark ghosting caused by the EP-drum may be corrected
	  by replacing the toner cartridge because the EP-drum or charging roller may
	  be damaged.
	
	8. Because ghosting is mainly an issue with the EP process, switching LaserJet
	  components and assemblies does not, in most cases, correct this condition.
	
	REFERENCES
	==========
	
	This information was obtained from the Hewlett-Packard fax system. The
	information is provided to HP customers upon request.
	
	The HP products discussed here are manufactured HP, by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: 3.00 3.00a 3.11 3.10 laser jet laser-jet ghost double grey gray scale
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.1,3.11
	
	=============================================================================
	
