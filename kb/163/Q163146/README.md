---
layout: page
title: "Q163146: PPT: Run-Time Error Using the AddPicture Method"
permalink: kb/163/Q163146/
---

## Q163146: PPT: Run-Time Error Using the AddPicture Method

	Article: Q163146
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:98; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbmacro kbprogramming kbdta kbdtacode KbVBA kbpptvba
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint 98 Macintosh Edition 
	- Microsoft PowerPoint 97 for Windows 
	- Microsoft Visual Basic for Applications 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the AddPicture method to add a picture to a Microsoft PowerPoint
	slide, you receive the following error message:
	
	  Run-time error '-2147188160 (80048240)':
	  Shapes (unknown member): Out of memory error.
	
	CAUSE
	=====
	
	This error message occurs when you pass an invalid parameter to the AddPicture
	method. For example, this error occurs when the LinkToFile parameter is set to
	msoFalse (or has an integer value of 0) and the SaveWithDocument parameter is
	set to msoFalse. These settings instruct PowerPoint to embed the picture in the
	presentation, but to save the link information. An embedded picture does not
	contain link information.
	
	RESOLUTION
	==========
	
	To prevent the run-time error message, choose either of the following methods:
	
	Method 1. Link the picture and save the link information
	--------------------------------------------------------
	
	To link the picture and save the link information, set the LinkToFile parameter
	to msoTrue and the SaveWithDocument parameter to msoFalse.
	
	Method 2. Embed the picture and save the picture with the presentation
	----------------------------------------------------------------------
	
	To embed the picture and save the embedded picture with the presentation, set the
	LinkToFile parameter to msoFalse and the SaveWithDocument parameter to msoTrue.
	
	For more information about the AddPicture method, click the Office Assistant,
	type "AddPicture" (without the quotation marks) click Search, and then click to
	view "AddPictureMethod."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If PowerPoint Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: 8.00 ppt8 vba vbe macppt mac_ppt ppt98 powerpt
	
	======================================================================
	Keywords          : kbcode kberrmsg kbmacro kbprogramming kbdta kbdtacode KbVBA kbpptvba 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbZNotKeyword6 kbPowerPt97 kbPowerPt97Search kbPowerPt98Search kbPowerPt98 kbVBASearch kbZNotKeyword3
	Version           : MACINTOSH:98; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
