---
layout: page
title: "Q150682: FP: Error Browsing Page, Using WebBot Component"
permalink: /kb/150/Q150682/
---

## Q150682: FP: Error Browsing Page, Using WebBot Component

{% raw %}

	Article: Q150682
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97
	Operating System(s): 
	Keyword(s): kberrmsg kbusage kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q205632.
	
	For a Microsoft FrontPage 98 version of this article, see Q194256.
	
	SYMPTOMS
	========
	
	When you browse a page created in FrontPage, and attempt to use a custom image
	map or a browse-time WebBot component you receive an error message similar to
	the following:
	
	  file:<driveletter>/<Web|content|directory>/myWeb/_vti_bin/
	  shtml.exe/mypage.htm/ could not be found.
	
	NOTE: Browse-time WebBot components include the following:
	
	  WebBot Confirmation Field component   WebBot Discussion component    WebBot
	Registration component   WebBot Save Results component   WebBot Search component
	
	CAUSE
	=====
	
	This problem occurs when you browse a FrontPage Web page using a file location
	rather than a HyperText Transport Protocol (HTTP) Uniform Resource Locator (URL)
	if the FrontPage Web page contains browse-time FrontPage components. HTTP is
	required to access the server extensions to allow these components to run.
	
	RESOLUTION
	==========
	
	To resolve this problem, use HTTP to look at the page. To do this, start the Web
	browser and type the URL of the page. For example, type:
	
	  http://example.microsoft.com/mypage.htm
	
	MORE INFORMATION
	================
	
	To open a Web page using the location of the file, start the Web browser and
	type the location of the page on your hard disk. For example, type:
	
	  file:<drive letter>:/myweb/<Web content directory>/mypage.htm
	
	When you use this method to view a page, some features of FrontPage Web pages may
	not function properly.
	
	Additional query words: front page vermeer
	
	======================================================================
	Keywords          : kberrmsg kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
