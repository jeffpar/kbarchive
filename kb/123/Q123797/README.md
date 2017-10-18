---
layout: page
title: "Q123797: PPT: Cannot Change Shadow Color of Organization Chart Object"
permalink: kb/123/Q123797/
---

## Q123797: PPT: Cannot Change Shadow Color of Organization Chart Object

	Article: Q123797
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:4.0; WINDOWS:4.0,7.0; :1.0,2.0
	Operating System(s): 
	Keyword(s): kborg
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Macintosh, version 4.0 
	- Microsoft PowerPoint for Windows, version 4.0 
	- Microsoft Organization Chart, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot change the shadow color in Microsoft Organization Chart from within
	the Organization Chart program.
	
	CAUSE
	=====
	
	Organization Chart 2.0 uses it's own shadow color of black, and does not follow
	the PowerPoint Slide Color Scheme. This shadow color cannot be modified in
	Organization Chart 2.0, nor can it be modified by changing the Slide Color
	Scheme in PowerPoint.
	
	Organization Chart 1.0 follows the Slide Color Scheme from PowerPoint. You must
	update and return to PowerPoint and then change it from the presentation's color
	scheme.
	
	WORKAROUND
	==========
	
	PowerPoint 7.0
	--------------
	
	To change the shadow color of the Organization Chart, you must ungroup the
	Organization Chart object, select each shadow box object, and change the color
	by clicking Colors And Lines on the Format menu.
	
	NOTE: Once the Organization Chart has been ungrouped, it becomes a series of
	PowerPoint shapes, and can no longer be modified or changed in the Organization
	Chart application.
	
	PowerPoint 4.0
	--------------
	
	To change the color of Organization Chart shadows, follow these steps:
	
	1. In PowerPoint, click Slide Color Scheme on the Format menu.
	
	2. Double-click the box marked Shadows.
	
	3. Select the color you want from the palette.
	
	4. Click Apply to make the change on the current slide, or click Apply To All to
	  change the color for all slides in the presentation.
	
	MORE INFORMATION
	================
	
	PowerPoint 4.0 automatically recolors the shadow to match the color scheme of
	the current presentation. As long as PowerPoint is recoloring the shadow of the
	Organization Chart object, the shadow will automatically change if the user ever
	modifies the presentation's color scheme.
	
	Additional query words: 4.00 4.00a 4.00c 1.00 ppt powerpt 2.0 macppt
	
	======================================================================
	Keywords          : kborg 
	Technology        : kbHWMAC kbOSMAC kbWordSearch kbExcelSearch kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbOrgChartSearch kbPowerPt700Search kbPowerPt400 kbPowerPt400Mac kbOrgChart100 kbOrgChart200
	Version           : MACINTOSH:4.0; WINDOWS:4.0,7.0; :1.0,2.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
