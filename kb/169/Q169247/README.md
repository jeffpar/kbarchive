---
layout: page
title: "Q169247: PPT7: Action Items/Speaker Notes Not Saved After Slide Show"
permalink: /kb/169/Q169247/
---

## Q169247: PPT7: Action Items/Speaker Notes Not Saved After Slide Show

	Article: Q169247
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you right-click a PowerPoint presentation in Windows Explorer, and click Show
	on the menu that appears, PowerPoint starts and runs the presentation as a slide
	show. While you are running the slide show, you can add an Action Items slide
	and Speaker Notes. When the slide show finishes, however, the presentation
	closes and you are not asked to save any changes. When you reopen the
	presentation, the Action Items slide and/or Speaker Notes you just added are
	missing.
	
	CAUSE
	=====
	
	The presentation file has a read-only attribute. When you use the Show command
	on the shortcut menu in Windows Explorer, PowerPoint does not display a
	read-only warning.
	
	RESOLUTION
	==========
	
	To resolve this problem and modify a presentation during a slide show, open the
	presentation in PowerPoint, and then run the slide show.
	
	Additional query words: 7.00 ppt95 ppt7 ppt7.0 slideshow deleted warning error
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
