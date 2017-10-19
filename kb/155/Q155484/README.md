---
layout: page
title: "Q155484: PowerPoint Custom Object Fills and Word's Picture Editor"
permalink: /kb/155/Q155484/
---

## Q155484: PowerPoint Custom Object Fills and Word's Picture Editor

	Article: Q155484
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbgraphic kbinterop kbole
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft Word for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Word's picture editor to edit a non-rectangular object created in
	PowerPoint for Windows 95, version 7.0 that contains one of PowerPoint's custom
	fills, the fill takes on a rectangular shape outside of the original object's
	boundaries.
	
	CAUSE
	=====
	
	This happens to non-rectangular PowerPoint 7.0 objects when they contain fills
	that are not solid colors or patterns. This happens when the PowerPoint 7.0
	object is copied and pasted, or dragged and dropped into a Word 7.0 document.
	The picture editor in Word does not correctly process the custom fills created
	by PowerPoint tools.
	
	RESOLUTION
	==========
	
	If you need to edit a non-rectangular PowerPoint drawing object, copy and paste
	it into PowerPoint. Edit the object in PowerPoint, then copy and paste it back
	into your Word document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word for Windows 95,
	version 7.0. This problem was corrected in Microsoft Word 97 for Windows.
	
	Additional query words: w_word w_powerpt ppt7 ppt95 word7 word95
	
	======================================================================
	Keywords          : kbgraphic kbinterop kbole 
	Technology        : kbWordSearch kbPowerPtSearch kbWord700Search kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbWord700
	Version           : WINDOWS:7.0
	Issue type        : kbprb
	
	=============================================================================
	
