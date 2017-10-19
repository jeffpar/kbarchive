---
layout: page
title: "Q169828: FP: TAB Key Doesn't Work As Expected in FrontPage Editor"
permalink: /kb/169/Q169828/
---

## Q169828: FP: TAB Key Doesn't Work As Expected in FrontPage Editor

	Article: Q169828
	Product(s): Word Front Page
	Version(s): windows:97
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In FrontPage Editor, when you press the TAB key, one space is inserted instead
	of five spaces.
	
	CAUSE
	=====
	
	The functionality of the TAB key is not supported in FrontPage Editor. If you
	press TAB outside of some Hypertext Markup Language (HTML) elements, the Web
	browser that renders the HTML collapses the tab spacing to a single character
	space. However, you can use TAB inside some HTML elements, such as the
	<PRE>...</PRE> element, which render the text in a monospaced font.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1. Use a Non-breaking Space
	----------------------------------
	
	Press CTRL+SHIFT+SPACE (Windows) or OPTION+SHIFT+SPACE (Macintosh) for each non-
	breaking (&nbsp;) space you want to insert.
	
	Method 2. Use Formatted Text
	----------------------------
	
	The Formatted text option applies the <pre>...</pre> element to your
	text. To apply Formatted text, use the following steps:
	
	1. On the Format menu, click Paragraph.
	
	2. In the Paragraph Formatted list, select Formatted.
	
	3. Click OK.
	
	When you press TAB, FrontPage Editor inserts five spaces.
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : windows:97
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
