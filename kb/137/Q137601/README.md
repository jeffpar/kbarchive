---
layout: page
title: "Q137601: PPT: Justify Text Command Unavailable in PowerPoint"
permalink: kb/137/Q137601/
---

## Q137601: PPT: Justify Text Command Unavailable in PowerPoint

	Article: Q137601
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:4.0; WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Macintosh, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to justify text in PowerPoint, the Justify command may be
	unavailable (dimmed) when you click Alignment on the Format menu.
	
	CAUSE
	=====
	
	The Justify command is unavailable if the Word Wrap In Object option is turned
	off for the text object.
	
	Note also that PowerPoint cannot justify lines of text that end with a carriage
	return. This means that if you click the Text tool, position the insertion point
	where you want the text to begin and use carriage returns to create line breaks,
	PowerPoint cannot justify the text.
	
	RESOLUTION
	==========
	
	To resolve this problem, use any of the following methods.
	
	Method 1: Create a New Text Area with the Text Tool
	---------------------------------------------------
	
	Create a new text area by drawing a text box with the Text tool rather than
	clicking the slide.
	
	Method 2: Convert the Text Area to a Justifiable Text Box
	---------------------------------------------------------
	
	1. Click the text object, making the selection handles visible.
	
	2. Click any one of the selection handles and drag it to create a justifiable
	  text box of the size you want.
	
	3. Delete all hard carriage returns from the text area. Click at the end of the
	  text, after the last hard carriage return, press DELETE, and then press the
	  SPACEBAR.
	
	  The Justify command is now available and works as expected.
	
	Additional query words: 4.00 4.00a 7.00 powerpoint powerpnt w_powerpt m_powerpt greyed out gray grey grayed
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt400Mac kbPowerPt400c kbPowerPt400a
	Version           : MACINTOSH:4.0; WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
