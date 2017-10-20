---
layout: page
title: "Q163771: Text Printed with White Background with Matrox Video Drivers"
permalink: /kb/163/Q163771/
---

## Q163771: Text Printed with White Background with Matrox Video Drivers

{% raw %}

	Article: Q163771
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Text positioned over shading or other objects may be printed with a white
	background when you are using the Windows 95 Matrox Millennium or Mystique video
	driver version 3.22.
	
	RESOLUTION
	==========
	
	The Windows 95 Matrox (MGA) Millennium and Mystique drivers enable a feature
	called "PowerGDI" by default. This feature replaces some functions of Windows
	GDI and may cause printed output to look different from when it is previewed.
	Most notably, text positioned over shading or other objects is printed with a
	white background. To disable this feature, follow these steps:
	
	1. In Control Panel, double-click Display.
	
	2. On the MGA Settings tab, click Advanced.
	
	3. Click the Performance tab.
	
	4. Click the Use PowerGDI Acceleration check box to clear it.
	
	5. Click OK until you return to Control Panel. Note that you do not need to
	  restart the computer for this change to take effect.
	
	MORE INFORMATION
	================
	
	This problem can occur when you are printing to most non-PostScript printers,
	such as Hewlett-Packard LaserJets, DeskJets, and compatibles, and most
	dot-matrix and inkjet printers.
	
	This problem also occurs with the Beta version 3.30 video driver available on the
	Matrox Graphics Web site.
	
	Additional query words: hp
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
