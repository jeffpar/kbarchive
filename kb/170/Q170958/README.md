---
layout: page
title: "Q170958: FP: Multiple Body Tags Not Recognized by FrontPage Editor"
permalink: kb/170/Q170958/
---

## Q170958: FP: Multiple Body Tags Not Recognized by FrontPage Editor

	Article: Q170958
	Product(s): Word Front Page
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q196142.
	
	For a Microsoft FrontPage 98 version of this article, see Q194048.
	
	SYMPTOMS
	========
	
	In FrontPage Editor, when you insert more than one <Body> tag in the HTML
	source, some of the attributes do not take effect when you open the page in a
	Web browser.
	
	CAUSE
	=====
	
	Although some browsers support this functionality, FrontPage Editor can use only
	one <Body> tag at a time. When FrontPage Editor encounters a second
	<Body> tag, it replaces the information used in the previous <Body>
	tag with the information in the subsequent <Body> tag.
	
	WORKAROUND
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Specify all of the attributes you want to use by using a single <Body>
	  tag.
	
	  -or-
	
	- Specify changes to the page elements--such as color, font, background,
	  sounds, and so on--by clicking Page Properties on the File menu.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : :1.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
