---
layout: page
title: "Q85847: PPT: Objects on Master Appear Behind Objects on Slide"
permalink: kb/085/Q85847/
---

## Q85847: PPT: Objects on Master Appear Behind Objects on Slide

	Article: Q85847
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:4.0; WINDOWS:4.0,7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, version 4.0 
	- Microsoft PowerPoint for Macintosh, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft PowerPoint, objects on the Slide Master always appear behind any
	objects that are actually on a slide.
	
	MORE INFORMATION
	================
	
	The Master Title object and Master Body object that appear in Slide Master view
	are simply templates for the real Title object and Body object. When the
	background objects are displayed in Slide view, the Master Title object and
	Master Body object are not included because they are not actual objects.
	
	This may sometimes cause confusion. For example, if you format your Slide Master
	so that it contains other objects layered on top of the Master Title and Master
	Body, the appearance of the presentation will change when you switch to Slide
	view. The objects that you placed on top of the Master Title and Master Body
	will appear behind every object that is actually on the slide itself, including
	the Title object and Body object.
	
	There is no way to place an object on the Slide Master so that it will appear in
	front of any object in Slide view.
	
	Additional query words: mac winppt macppt powerpt 97 4.0
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt95Search kbPowerPt400 kbPowerPt400Mac
	Version           : MACINTOSH:4.0; WINDOWS:4.0,7.0
	Hardware          : MAC x86
	Issue type        : kbinfo
	
	=============================================================================
	
