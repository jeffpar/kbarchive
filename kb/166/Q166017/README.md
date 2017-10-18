---
layout: page
title: "Q166017: WD97: Color Borders Print Solid Black Instead of Gray"
permalink: kb/166/Q166017/
---

## Q166017: WD97: Color Borders Print Solid Black Instead of Gray

	Article: Q166017
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprint kbtable
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print a document that contains color borders, all or part of the border
	is printed as a line in solid black instead of in shades of gray. This problem
	occurs when you use the following printer driver:
	
	- Hewlett Packard IIIsi PS (Postscript)
	
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods.
	
	Method 1: Use the PCL Driver
	----------------------------
	
	Install and print using the printer's PCL printer driver. This is a
	non-PostScript printer driver.
	
	Method 2: Draw Your Borders
	---------------------------
	
	1. On the Drawing toolbar, click the Line or Rectangle tool, and draw the line
	  or border in the document.
	
	2. The drawing object should be selected after you draw it. If it is not
	  selected, click the object to select it.
	
	  You should see the black sizing handles for the object.
	
	3. On the Format menu, click Drawing Object.
	
	4. On the Line tab, change the "Weight" and "Color" to the settings you want,
	  and then click OK.
	
	NOTE: If you need to reposition the object, select the drawing object, hold the
	SHIFT key down, and use the mouse to drag the drawing object to the correct
	position.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: dither dithered grey
	
	======================================================================
	Keywords          : kbprint kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
