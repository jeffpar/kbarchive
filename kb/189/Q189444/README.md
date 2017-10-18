---
layout: page
title: "Q189444: FP97: Font Size Increase Not Reflected in Web Browser"
permalink: kb/189/Q189444/
---

## Q189444: FP97: Font Size Increase Not Reflected in Web Browser

	Article: Q189444
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhtmlkbfaq
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft  version of this article, see Q194240.
	
	SYMPTOMS
	========
	
	When you increase the size of text in FrontPage Editor by using the Increase
	Text Size button on the Formatting toolbar, the font size is not reflected in
	the Web browser.
	
	CAUSE
	=====
	
	FrontPage nests as many levels of the increase font size tag (<BIG>) as
	specified in FrontPage Editor; however, Netscape Navigator and Microsoft
	Internet Explorer only use this tag when it is nested five times.
	
	
	Additional query words: 97 Font Size Increase browser IE navigator
	
	======================================================================
	Keywords          : kbhtml kbfaq
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb kbinfo
	
	=============================================================================
	
