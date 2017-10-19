---
layout: page
title: "Q150681: FP: How to Use a Document Other Than Index.htm as Default Page"
permalink: /kb/150/Q150681/
---

## Q150681: FP: How to Use a Document Other Than Index.htm as Default Page

	Article: Q150681
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194085.
	
	SUMMARY
	=======
	
	This article describes how to use a page other than Index.htm as the default
	page when a Uniform Resource Locator (URL) is given without a page
	specification.
	
	MORE INFORMATION
	================
	
	If a specific URL is not given, the FrontPage Personal Web Server loads the
	Index.htm page. For example, if the URL, "example.microsoft.com" is received, it
	loads example.microsoft.com/index.htm by default.
	
	To change this designation, follow these steps:
	
	1. Using a text editor, such as Notepad, open the Srm.cnf file in the FrontPage
	  Webs\Server\Conf folder.
	
	2. Insert a line that specifies what you want the default page to be. For
	  example if you want your default page to be Index.html, insert a line that
	  looks like this:
	
	     DirectoryIndex index.html
	
	3. Save and close the Srm.cnf file.
	
	4. Stop and restart the Personal Web Server.
	
	The next time this Web is browsed "Index.html" will be loaded.
	
	If this page is not located in the Web, a text directory that contains hyperlinks
	to all existing pages will be loaded instead.
	
	Note that changing the extensions designation from .htm to .html in the Srm.cnf
	file works for the default page (index.htm to index.html); however, any
	additional pages in the Web will not have their extension designation changed
	(for example, mypage.htm remains as mypage.htm).
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,1.1,97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
