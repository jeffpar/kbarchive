---
layout: page
title: "Q118658: PRB: Problem Entering Footnotes in Word 6.0"
permalink: kb/118/Q118658/
---

## Q118658: PRB: Problem Entering Footnotes in Word 6.0

	Article: Q118658
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After entering footnotes in Word version 6.0 RTF files with the New Viewer
	Element dialog box, individual characters in the text immediately following the
	footnote symbol are not selectable.
	
	The following Viewer elements are affected:
	
	  (#) Topic
	  (#) Context String
	  ($) Topic Title
	  (!) Topic Entry Command
	  (+) Topic Groups
	  (*) Build Tags
	  (K) Keywords
	
	Other Viewer elements remain unaffected.
	
	RESOLUTION
	==========
	
	You can enter footnotes for Viewer elements by following these steps:
	
	1. From the Insert menu, choose Footnote.
	
	2. Choose Custom Mark.
	
	3. Enter the mark that corresponds to the Viewer element you want to use.
	
	4. Choose OK. (You should now be in the Footnote section of the Word 6.0 main
	  window.)
	
	5. Enter the text that is to be associated with the footnote.
	
	6. Close the Footnote section and resume editing the document.
	
	Using the macro facility in Word 6.0, you can create a macro to automate these
	steps. Please refer to your Word 6.0 documentation for information concerning
	creating and using macros.
	
	Additional query words: 2.00 2.00a 6.00 KBCatetory: kbinterop kbprb
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200
	Version           : :2.0
	
	=============================================================================
	
