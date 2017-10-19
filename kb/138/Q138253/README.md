---
layout: page
title: "Q138253: Write-Up Does Not Display Slides in Word 95"
permalink: /kb/138/Q138253/
---

## Q138253: Write-Up Does Not Display Slides in Word 95

	Article: Q138253
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbinterop kbusage
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft Word for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Write-Up command in PowerPoint 95, the slides may not appear in
	Word 95. The notes will appear correctly, but instead of slide images, you will
	have an empty box with resize handles around it. You will also be able to see
	the slide images from print preview.
	
	RESOLUTION
	==========
	
	This problem may occur because the picture placeholders in Word 95 have been
	enabled. To disable picture placeholders, use the following steps:
	
	1. In Word, click Options on the Tools menu.
	
	2. Click the View tab.
	
	3. Clear the Picture Placeholders check box.
	
	When you change this option, slide images will be put back (you do not have to
	exit and restart Word).
	
	To disable this option by default, open the Normal.dot template, change this
	option, and save Normal.dot with this update.
	
	Additional query words: view slide image w_powerpt powerpoint powerpnt winword word7 ppt7 ppt95 NT 3.51
	
	======================================================================
	Keywords          : kbinterop kbusage 
	Technology        : kbWordSearch kbPowerPtSearch kbWord700Search kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbWord700
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
