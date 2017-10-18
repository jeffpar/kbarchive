---
layout: page
title: "Q134783: Text Entered in Second Column Not Reflected in Outline View"
permalink: kb/134/Q134783/
---

## Q134783: Text Entered in Second Column Not Reflected in Outline View

	Article: Q134783
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:4.0; WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbdisplay kbui
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Macintosh, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using the AutoLayout slide with two text objects on it, only the left
	text object will appear in outline view. The object appears this way even if you
	delete the text object on the left.
	
	NOTE: In PowerPoint 4.0, only the left text object can have a build effect
	applied to it.
	
	CAUSE
	=====
	
	In PowerPoint, only two text objects appear on a slide in outline view: the
	title and the body object. All other text objects are hidden in outline view.
	The two-column AutoLayout uses the left text object as the body object. The
	right text object is simply an additional text object that has been added to the
	slide.
	
	STATUS
	======
	
	This behavior is by design of Microsoft PowerPoint.
	
	Additional query words: 4.00 4.00a 4.00c 7.00 winppt macppt
	
	======================================================================
	Keywords          : kbdisplay kbui 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt400Mac kbPowerPt400c kbPowerPt400a
	Version           : MACINTOSH:4.0; WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
