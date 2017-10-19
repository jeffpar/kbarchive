---
layout: page
title: "Q188821: FP: Determining if Index Server/FrontPage is Performing Search"
permalink: /kb/188/Q188821/
---

## Q188821: FP: Determining if Index Server/FrontPage is Performing Search

	Article: Q188821
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
	
	For a Microsoft FrontPage 2000 version of this article, see Q205618.
	
	For a Microsoft FrontPage 98 version of this article, see Q194262.
	
	SUMMARY
	=======
	
	When you publish a Web containing a WebBot Search component to a Web server
	hosting Microsoft Index Server, the code for the component is replaced with
	Index Server code.
	
	MORE INFORMATION
	================
	
	FrontPage uses a WebBot Search component that calls the search engine of the
	FrontPage Server Extensions. However, if you publish your Web to a Microsoft
	Internet Information Server on which Microsoft Index Server is installed, the
	Index Server replaces the functionality delivered by the WebBot Search
	component. Because the default configuration for Index Server is different from
	the FrontPage search functionality, you may experience unexpected behavior. If
	you know that Index Server is performing your searches, contact your Web
	Presence Provider for assistance in configuring Index Server.
	
	You can determine whether Index Server or FrontPage is performing your searches.
	To do this, follow these steps:
	
	1. Start your Web browser.
	
	2. Open the Web site you want to check.
	
	3. View the HTML source code and look for the following line of code
	
	  b-useindexserver="x"
	
	  where x equals a 1 or 0. If x equals 0, FrontPage is performing the search; if
	  x equals 1, Index Server is performing the search.
	
	Additional query words: 97 front page
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : MACINTOSH:1.0; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbinfo
	
	=============================================================================
	
