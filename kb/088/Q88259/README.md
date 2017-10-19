---
layout: page
title: "Q88259: PPT: Cannot Press TAB at Beginning of Paragraph"
permalink: /kb/088/Q88259/
---

## Q88259: PPT: Cannot Press TAB at Beginning of Paragraph

	Article: Q88259
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:4.0; WINDOWS:4.0,7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, version 4.0 
	- Microsoft PowerPoint for Macintosh, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Pressing the TAB key at the beginning of a paragraph causes unexpected behavior.
	For example, the cursor does not move to a tab stop or you receive a system
	beep.
	
	CAUSE
	=====
	
	In PowerPoint, pressing TAB has a special outlining function. It moves the
	paragraph to the next indentation level. Following are examples of what
	PowerPoint does when you press TAB.
	
	- When you press the TAB key, the cursor moves to the first line indent for the
	  next indentation level rather than to the next default or custom tab stop.
	
	- When you press TAB at the beginning of a paragraph you hear a system beep.
	  This occurs when you reach the fifth indent level, which is the maximum
	  indent level supported by PowerPoint.
	
	- When you press TAB at the beginning of a title, you hear a system beep. This
	  occurs because you cannot outline a title object in PowerPoint.
	
	RESOLUTION
	==========
	
	To insert a tab character at the beginning of a paragraph, press "CTRL+TAB"
	(without the quotation marks) or "OPTION+TAB" (without the quotation marks).
	
	Additional query words: winppt macppt ppt powerpt 7.0 95 97 4.0
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt700Search kbPowerPt400 kbPowerPt400Mac
	Version           : MACINTOSH:4.0; WINDOWS:4.0,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
