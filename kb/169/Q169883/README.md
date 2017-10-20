---
layout: page
title: "Q169883: FP: Extra Line Spacing Inserted after Pressing ENTER"
permalink: /kb/169/Q169883/
---

## Q169883: FP: Extra Line Spacing Inserted after Pressing ENTER

{% raw %}

	Article: Q169883
	Product(s): Word Front Page
	Version(s): windows:97, macintosh:1.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q205659.
	
	For a Microsoft FrontPage 98 version of this article, see Q194246.
	
	SYMPTOMS
	========
	
	When you press the ENTER key in Microsoft FrontPage Editor, a blank line is
	inserted before the next line of text, causing the text to look double-spaced.
	
	CAUSE
	=====
	
	When you press ENTER in FrontPage, FrontPage inserts a paragraph represented in
	HyperText Markup Language (HTML) by the <P> tag. When rendered by a Web
	browser, the paragraph is displayed with a line space above it. If your lines
	are short or you press ENTER when you reach the right margin instead of allowing
	the text to wrap to the next line, each line will be formatted with the
	<P> tag, resulting in the extra line space between paragraphs.
	
	RESOLUTION
	==========
	
	To work around this behavior, insert a normal line break (<BR>) instead of
	a paragraph (<P>), using either of the following methods:
	
	- On the Insert menu, click Break, and then click OK.
	
	  A normal line break, represented by a right-angle arrow, will appear at the
	  end of the line. The arrow does not appear when you open the page in a Web
	  browser or in FrontPage Editor if you click the Show/Hide button on the
	  Standard toolbar to turn off the display of non-printing characters.
	
	  -or-
	
	- Press SHIFT+ENTER.
	
	MORE INFORMATION
	================
	
	For additional information about HTML, please see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/workshop/author/newhtml/htmlref.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : windows:97, macintosh:1.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
