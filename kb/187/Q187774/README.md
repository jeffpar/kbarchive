---
layout: page
title: "Q187774: FP: FrontPage Editor Removes Blank Lines in Tables"
permalink: /kb/187/Q187774/
---

## Q187774: FP: FrontPage Editor Removes Blank Lines in Tables

	Article: Q187774
	Product(s): Word Front Page
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to format text with extra carriage returns inside of a table,
	FrontPage Editor removes these blank lines the next time you load the page in
	FrontPage Editor.
	
	CAUSE
	=====
	
	The HTML parser for the versions of FrontPage listed at the beginning of this
	article will remove blank lines from within tables.
	
	RESOLUTION
	==========
	
	FrontPage 97 for Windows
	------------------------
	
	To resolve this issue, upgrade to FrontPage 98, or, use the steps listed in the
	"Workaround" section.
	
	Microsoft FrontPage for the Power Macintosh
	-------------------------------------------
	
	If you are using FrontPage for the Power Macintosh, use the steps listed in the
	"Workaround" section.
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	1. Place the insertion point at the end of the line of text in FrontPage Editor.
	
	2. To format the text, press SHIFT+ENTER to add non-breaking carriage returns.
	
	The non-breaking carriage return tags will not be stripped out of the HTML code
	by the HTML parser of FrontPage.
	
	
	Additional query words: fpeditor editor nonbreaking space tables
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : :1.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
