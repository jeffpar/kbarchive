---
layout: page
title: "Q185855: WD97: Graphic Is Black Box When You Open Mac Document in Word 97"
permalink: /kb/185/Q185855/
---

## Q185855: WD97: Graphic Is Black Box When You Open Mac Document in Word 97

	Article: Q185855
	Product(s): Word 97 for Windows
	Version(s): Service Release 1 (SR-1)
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, version Service Release 1 (SR-1) 
	-------------------------------------------------------------------------------
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED OR TESTED BY MICROSOFT. USE ONLY                  **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	
	SYMPTOMS
	========
	
	In Word 97 SR-1, when you open a Microsoft Word 98 Macintosh Edition file
	containing a graphic, the graphic may be displayed and printed as a black box.
	
	CAUSE
	=====
	
	This appears to be a rare problem occurring only if some special formatting
	[magic pen mode (23)] is included in the graphic.
	
	Additionally, this problem can also be recreated if a graphic is created in
	PowerPoint with the drawing tools and pasted into Word as a "picture."
	
	WORKAROUND
	==========
	
	Use one of the following methods to change the graphic from a black box to a
	correctly displayed graphic:
	
	Method 1
	--------
	
	Double-click the graphic to open the picture editor, make a small change, and
	then close the editor. This causes the graphic to be redrawn.
	
	Method 2
	--------
	
	1. In Word98 Macintosh Edition - double click on the graphic and say 'yes' to
	  converting from PostScript to a Word Object.
	
	2. On the Edit menu, click Paste Special and select as a drawing object instead
	  of a picture.
	
	Additional query words: render re-rendered drawing screen display box garbage garbled square dark
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2 kbWord97SR1
	Version           : :Service Release 1 (SR-1)
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
