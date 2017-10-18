---
layout: page
title: "Q116338: PRB: Problem Entering Footnotes in Word for Windows 6.0"
permalink: kb/116/Q116338/
---

## Q116338: PRB: Problem Entering Footnotes in Word for Windows 6.0

	Article: Q116338
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After entering footnotes in Word for Windows version 6.0 rich-text format (RTF)
	files through the New Viewer Element dialog box, you cannot select certain
	characters in the text immediately following the footnote symbol.
	
	The following Viewer elements are affected:
	
	  (#) Context Strings
	  ($) Topic Title
	  (!) Topic Entry Command
	  (+) Topic Groups
	  (*) Build Tags
	  (K) Keywords
	
	Other Viewer elements remain unaffected.
	
	RESOLUTION
	==========
	
	You can enter footnotes for Viewer elements by following these steps:
	
	1. Choose Footnote from the Insert menu.
	
	2. Choose Custom Mark.
	
	3. Enter the mark that corresponds to the Viewer element you want to use.
	
	4. Choose the "OK" button.
	
	5. Highlight the footnote character in your document (not in the footnote
	  window).
	
	6. Invoke the Viewer Topic Editor by typing your Topic Editor hot key. Use the
	  Topic Editor dialog boxes as you normally would to add pictures, videos,
	  context strings, and other Viewer elements.
	
	7. Resume editing the document.
	
	Using the macro facility in Word for Windows, version 6.0, you can create a macro
	to automate these steps. Please refer to your Word for Windows version 6.0
	documentation for information concerning creating and using macros.
	
	Additional query words: viewer 2.00 2.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
