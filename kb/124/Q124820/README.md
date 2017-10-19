---
layout: page
title: "Q124820: PPT: Cannot Copy or Paste Objects in PowerPoint"
permalink: /kb/124/Q124820/
---

## Q124820: PPT: Cannot Copy or Paste Objects in PowerPoint

	Article: Q124820
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:4.0; WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Macintosh, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Many of the AutoLayouts for PowerPoint slides include placeholders for titles,
	body text, and OLE objects. If you include an empty object placeholder in a
	multiple selection, you can copy the selection to the Clipboard, but the Paste
	and Paste Special commands will be unavailable (dimmed) even though the objects
	are on the Clipboard.
	
	CAUSE
	=====
	
	This problem is caused when you use the Select All command on the Edit menu
	rather than selecting several objects individually while holding down the SHIFT
	key. The Select All command selects the empty placeholders first. PowerPoint
	assigns special status to the object and the title placeholders and builds
	slides from the back of the slide to the front. If the placeholders have not
	been filled in, the objects resting in front of them are copied to the
	Clipboard, but they cannot be pasted.
	
	Sending the empty placeholders to the front does not correct the problem.
	
	WORKAROUND
	==========
	
	Method 1: Use a Copy and Paste Operation
	----------------------------------------
	
	Select each of the objects by holding down the SHIFT key and clicking each object
	with the left mouse button. Do not select any empty placeholders. Copy the group
	of objects to the Clipboard and paste them into the new Slide.
	
	Method 2: Use Send to Back Before You Copy
	------------------------------------------
	
	This method only works with PowerPoint 4.0 for Windows or Macintosh.
	
	1. Select two of the objects and click Send To Back on the Draw menu.
	
	2. On the Edit menu, click Select All.
	
	3. On the Edit menu, click Copy.
	
	You can now paste the objects into other slides. With this method, the empty
	object and title placeholders are also copied but without their identifying
	text. They lose their status as fundamental PowerPoint objects.
	
	Method 3: Fill in the Placeholders
	----------------------------------
	
	Fill in the placeholders before using the Select All command. Copy the items to
	the Clipboard, and they will successfully paste.
	
	Additional query words: 4.00 4.00a 4.00c mac Object Area 95 7.0
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt400Mac kbPowerPt400c kbPowerPt400a
	Version           : MACINTOSH:4.0; WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
