---
layout: page
title: "Q191653: FP: Link to Bookmark Not Working in Browser"
permalink: /kb/191/Q191653/
---

## Q191653: FP: Link to Bookmark Not Working in Browser

{% raw %}

	Article: Q191653
	Product(s): Word Front Page
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q198155.
	
	For a Microsoft FrontPage 98 version of this article, see Q194325.
	
	SYMPTOMS
	========
	
	When you click a hyperlink that links to a bookmarked reference, nothing
	happens.
	
	CAUSE
	=====
	
	This behavior occurs if the case used to reference the bookmark in the hyperlink
	does not exactly match the case used for the bookmark name. Some browsers, such
	as Internet Explorer versions 3.x and Netscape Navigator, look for an exact case
	match. When the case does not match, nothing happens when you click the
	hyperlink.
	
	RESOLUTION
	==========
	
	You can reset the case of the hyperlink by modifying the properties of the
	hyperlink that doesn't work. To do this, follow these steps.
	
	1. Start FrontPage Editor and then open both the page with the hyperlink and the
	  page with the bookmark.
	
	2. On the Window menu, click the page that contains the hyperlink.
	
	3. Right-click the hyperlink that you want to change, and then click Hyperlink
	  Properties on the menu that appears.
	
	4. Click the Open Pages tab.
	
	5. In the Open Pages box, select the page that contains the bookmark. From the
	  Bookmark list, select the bookmark to which you want to link.
	
	6. Click OK.
	
	7. Save the page.
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPageMacSearch
	Version           : :1.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
