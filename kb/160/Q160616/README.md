---
layout: page
title: "Q160616: FP: Unable to Use Scroll Bar, Page Displayed Incorrectly"
permalink: /kb/160/Q160616/
---

## Q160616: FP: Unable to Use Scroll Bar, Page Displayed Incorrectly

{% raw %}

	Article: Q160616
	Product(s): Word Front Page
	Version(s): WINDOWS:1.0,1.0a,1.1,97
	Operating System(s): 
	Keyword(s): kbdisplay kbdta
	Last Modified: 30-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	- Microsoft FrontPage for Windows, versions 1.0, 1.0a, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In FrontPage Editor, when you view a web page that is taller than 32 KB pixels,
	the page may be displayed incorrectly and you may be unable to use the scroll
	bar.
	
	NOTE: In Windows NT, the page is displayed as expected, but you cannot use the
	scroll bar. In Windows 95, the data will be wrapped from just beyond the 32 KB
	limit and it will be drawn over the beginning of the file. (The data drawn at y
	= 32 KB + 10 is drawn as if it's at y = 10. The way the data is displayed does
	not affect the contents of the HTML document tree, so saving the file doesn't
	delete any data.)
	
	CAUSE
	=====
	
	Standard Windows scroll bar support uses a 16-bit value internally, so it may
	not perform as expected on pages taller than 32 KB pixels (about 40 pages). This
	behavior occurs regardless of how big the HTML file is. FrontPage does not have
	internal routines for handling page scrolling beyond the limits of the standard
	Windows scroll bar.
	
	RESOLUTION
	==========
	
	To resolve this problem, press CTRL+PAGE DOWN or CTRL+PAGE UP on your keyboard
	to view the page.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Pages greater than 32 KB pixels may be extremely slow when they are loaded in a
	Web browser. To avoid this situation (and to make the browsing experience more
	convenient for the people accessing your web), split large pages into several,
	smaller pages.
	
	Additional query words: 1.1a 97
	
	======================================================================
	Keywords          : kbdisplay kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage1xSearch kbFrontPage97Search kbFrontPage100 kbFrontPage100a kbFrontPage110
	Version           : WINDOWS:1.0,1.0a,1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
