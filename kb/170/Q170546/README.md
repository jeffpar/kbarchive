---
layout: page
title: "Q170546: FP: Blank Line Remains after Deleting Single Line Selection"
permalink: kb/170/Q170546/
---

## Q170546: FP: Blank Line Remains after Deleting Single Line Selection

	Article: Q170546
	Product(s): Word Front Page
	Version(s): ; MACINTOSH:1.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194330.
	
	SYMPTOMS
	========
	
	In FrontPage Editor, when you select a single line and then press DELETE, the
	text is deleted, but a blank line remains. In contrast, if you select two or
	more lines and press DELETE, both the text and the line space are deleted.
	
	CAUSE
	=====
	
	This behavior occurs because a single-line selection does not include the
	formatting character at the end of the line. When you have multiple lines
	selected, the selection contains the formatting character at the end of the
	line.
	
	RESOLUTION
	==========
	
	To remove the blank line, press DELETE again.
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : :; MACINTOSH:1.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
