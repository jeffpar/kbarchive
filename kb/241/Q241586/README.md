---
layout: page
title: "Q241586: WD97: Bullets Not Vertically Centered in Word Document Object"
permalink: kb/241/Q241586/
---

## Q241586: WD97: Bullets Not Vertically Centered in Word Document Object

	Article: Q241586
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert a Word document object containing bullets into an Excel
	worksheet, a Word document, or a PowerPoint slide, the bullets may not be
	vertically centered with the line of text.
	
	
	CAUSE
	=====
	
	Some fonts have different display and print metrics. This is the case with some
	symbol fonts used to create bullets in Word. When Word creates the display part
	of an object, it renders a metafile based on the font's print metrics so that
	you get a satisfactory printout.
	
	The display part of the bullet font may have different characteristics than the
	font of the text, such as the baseline for the font. This difference results in
	how the bullet is displayed and printed. Microsoft Word renders the Word
	document object based on the current active printer driver.
	
	This problem is known to occur with the following printer drivers:
	
	- Hewlett-Packard LaserJet 4Si version 3.8
	
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following appropriate for your
	situation:
	
	- Double-click the Word document object. If the object is in an application
	  other than Microsoft Word (for example, Microsoft Excel), click back into the
	  document sheet to regenerate the display image. If the object is in a Word
	  document, click Close & Return to <filename>.
	
	  -or-
	
	- Set your current printer driver to a different printer.
	
	Additional query words: embedded bullet list print font symbols
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
