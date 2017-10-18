---
layout: page
title: "Q112524: PPT: Lotus 1-2-3 Chart Object Fill Colors Lost in PowerPoint"
permalink: kb/112/Q112524/
---

## Q112524: PPT: Lotus 1-2-3 Chart Object Fill Colors Lost in PowerPoint

	Article: Q112524
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbole kbdta kbconversion
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you insert a Lotus 1-2-3 version 4.0 or 5.0 object into PowerPoint 7.0 or
	PowerPoint 97 using the Insert menu, clicking Object and clicking Create from
	file, you see a solid black box where your image should be.
	
	If you insert a Lotus 1-2-3 version 4.0 or 5.0 object into PowerPoint 4.0, 7.0,
	or PowerPoint 97 using Copy and Paste, the fill colors are lost. For example,
	the area inside the bars of a bar chart lose their color.
	
	CAUSE
	=====
	
	This is because Lotus 1-2-3 versions 4.0 and 5.0 put device-dependent
	information in the metafiles it uses to represent its objects. The Windows
	Software Development Kit (SDK) recommends that you do not use device- dependent
	information in metafiles.
	
	PowerPoint recognizes that the information provided is device-dependent so it
	simply ignores the information to prevent any future problems when using that
	object in PowerPoint.
	
	This problem has been reported to Lotus by Microsoft development.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 4.00 4.00a 4.00c 7.00 empty blank region 123 1 2 3 graph winppt ppt95
	
	======================================================================
	Keywords          : kb3rdparty kbole kbdta kbconversion 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
