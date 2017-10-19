---
layout: page
title: "Q189380: FP: Text String With No Spaces Overwrites Right-aligned Image"
permalink: /kb/189/Q189380/
---

## Q189380: FP: Text String With No Spaces Overwrites Right-aligned Image

	Article: Q189380
	Product(s): Word Front Page
	Version(s): MACINTOSH:1.0; WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194445.
	
	SYMPTOMS
	========
	
	Text overwrites a right-aligned image if there are no spaces in the string of
	text.
	
	CAUSE
	=====
	
	FrontPage Editor and Web browsers wrap text only if a space appears between
	words. Therefore, if you type a long string of text that contains no spaces, the
	text will eventually overwrite the right-aligned image.
	
	RESOLUTION
	==========
	
	To prevent your text from overwriting a right-aligned image, use either of the
	following methods:
	
	- Add a space in the line of text to force it to break and wrap to the next
	  line.
	
	  -or-
	
	- Place the text and image in separate cells of a table. Because the text will
	  not exceed the cell boundary, it will not overwrite the image.
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : MACINTOSH:1.0; WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
