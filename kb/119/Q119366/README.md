---
layout: page
title: "Q119366: Drawing Object Does Not Cover Text When Printing in Word 6.0a"
permalink: /kb/119/Q119366/
---

## Q119366: Drawing Object Does Not Cover Text When Printing in Word 6.0a

	Article: Q119366
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:6.0a,95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word for Windows, version 6.0a 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Word version 6.0a for Windows includes drawing objects that can be
	filled and placed over text so that the text not visible. The filled object
	should be opaque, but when the document is printed, the text shows through the
	filled drawing object.
	
	CAUSE
	=====
	
	This problem is caused by a limitation of printing text and graphics on PCL
	printers.
	
	WORKAROUND
	==========
	
	You can avoid this problem by setting the printer to print TrueType fonts as
	graphics. To do this:
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Use the right (secondary) mouse button to click the desired printer.
	
	3. Click Properties and then click the Fonts tab.
	
	4. Click the Print TrueType Fonts As Graphics option.
	
	5. Click OK to accept the changes.
	
	Additional query words: wwt true type true-type tt ttf winword
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWordSearch kbWin95search kbZNotKeyword2 kbZNotKeyword3 kbWord600a
	Version           : WINDOWS:6.0a,95
	
	=============================================================================
	
