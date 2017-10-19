---
layout: page
title: "Q183046: FP97: Cannot Use Search Component With Active Server Pages"
permalink: /kb/183/Q183046/
---

## Q183046: FP97: Cannot Use Search Component With Active Server Pages

	Article: Q183046
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194284.
	
	SYMPTOMS
	========
	
	When you click the Search button on an Active Server Page (ASP), the results of
	your search are returned, but the ASP script on your page does not execute. In
	some cases, the following error message appears in your Web browser:
	
	  FrontPage Error. User: please report details to this site's webmaster.
	
	  Webmaster:
	  please see the server's application event log for more details.
	
	The Uniform Resource Locator (URL) in the Address box in Internet Explorer
	resembles this
	
	  http://<myserver>/<myfile>.asp/_vti_bin/shtml.dll/<myfile>.asp.
	
	where <myserver> is the location of your Web and <myfile> is the name
	of the file you are previewing.
	
	CAUSE
	=====
	
	You can not use the Search Form on an Active Server Page.
	
	When an ASP page is requested on a server, Asp.dll parses it. It finds any script
	specified to run on the server, executes it, and displays the results.
	
	When you conduct a search using the Search Form, Shtml.dll parses the search page
	and the results of the search are expanded into the search file and displayed in
	the browser.
	
	When a search is performed using the Search Form on an ASP page, Shtml.dll cannot
	parse the file because Asp.dll is already parsing it. Because Shtml.dll fails,
	it outputs the message described in the "Symptoms" section.
	
	When using Microsoft Index Server, the Search Form does not use Shtml.dll.
	
	Instead, the action for the form points to the .idq file associated with the
	file.
	
	RESOLUTION
	==========
	
	To work around this behavior, use one of the following methods
	
	Method 1: Install Microsoft Index Server
	----------------------------------------
	
	Install Microsoft Index Server on the Web server hosting your Web. For more
	information about obtaining and installing Microsoft Index Server, please see
	the following Microsoft World Wide Web site:
	
	  http://www.microsoft.com/ntserver/nts/downloads/recommended/NT4OptPk/default.asp
	
	For additional information about using Index Server with FrontPage, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q166357 FP: How to Use FrontPage with Microsoft Index Server
	
	Method 2: Use .htm or .html pages rather than .asp pages with Search Form
	-------------------------------------------------------------------------
	
	Do not use Active Server Pages with the Search Form. Use .htm or .html pages
	only.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: run time search index
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
