---
layout: page
title: "Q186822: FP: Bookmark Hyperlink on Same Page Appears in Visited Color"
permalink: /kb/186/Q186822/
---

## Q186822: FP: Bookmark Hyperlink on Same Page Appears in Visited Color

{% raw %}

	Article: Q186822
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
	
	For a Microsoft FrontPage 98 version of this article, see Q194329.
	
	SYMPTOMS
	========
	
	When you view a page containing a hyperlink that references a bookmark on the
	current page in a Web browser, the hyperlink appears in the color that you
	specified for the visited hyperlink even though you are viewing the page for the
	first time.
	
	CAUSE
	=====
	
	The browser logs its history on a per-page basis only. Individual bookmarks on
	the current page are not logged. Because the hyperlink points to a bookmark on
	the current page and the page is logged as having been visited, the hyperlink
	appears in the color that you specified for the visited hyperlink.
	
	
	Additional query words: hyperlink bookmark
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : MACINTOSH:1.0; WINDOWS:97
	Hardware          : ALPHA MAC MIPS x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
