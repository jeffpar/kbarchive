---
layout: page
title: "Q173929: WD97: Frame Converted from Text Box Is Gray When Header Is Open"
permalink: kb/173/Q173929/
---

## Q173929: WD97: Frame Converted from Text Box Is Gray When Header Is Open

	Article: Q173929
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbframe kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97, if you convert a text box to a frame, the frame has a gray
	background while the header is open.
	
	CAUSE
	=====
	
	This behavior is by design of Microsoft Word 97. The gray background indicates
	that the text box has a default fill color (white). In Microsoft Word for
	Windows 95, version 7.0, frames were clear by default.
	
	
	WORKAROUND
	==========
	
	To work around this problem, format the text box color to No Fill before you
	convert it to a frame. To do this, follow these steps:
	
	1. Click to select the text box.
	
	2. On the Format menu, click Text Box.
	
	3. In the Color list (under Fill), click No Fill.
	
	REFERENCES
	==========
	
	For additional information about text boxes and frames, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q159942 General Information About Text Boxes and Frames in Word97
	
	Additional query words: frames text document creation convert 8.0 8.00
	
	======================================================================
	Keywords          : kbframe kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
