---
layout: page
title: "Q137597: PPT7: Preview Not Available for PowerPoint 4.0 Template"
permalink: /kb/137/Q137597/
---

## Q137597: PPT7: Preview Not Available for PowerPoint 4.0 Template

	Article: Q137597
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbinterop kbdta
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to apply a PowerPoint 4.0 Presentation Template in PowerPoint
	for Windows 95, version 7.0, you may see the "Preview Not Available" message in
	the Preview area of the Apply Design Template dialog box.
	
	CAUSE
	=====
	
	PowerPoint 7.0 saves a Device Independent Bitmap (DIB) image of the first slide
	in your presentation as a preview image. In contrast, PowerPoint 4.0 uses a
	Windows Metafile (WMF) image of slide one as the preview image. This behavior
	occurs with templates that shipped with PowerPoint 4.0. It does not occur with
	templates that you create in PowerPoint 4.0
	
	Additional query words: 97 8.00 powerp preview DIB template w_powerpt powerpnt
	
	======================================================================
	Keywords          : kbinterop kbdta 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
