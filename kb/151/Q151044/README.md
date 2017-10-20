---
layout: page
title: "Q151044: FP: Error HTTP 404 if Page URL Contains a Space"
permalink: /kb/151/Q151044/
---

## Q151044: FP: Error HTTP 404 if Page URL Contains a Space

{% raw %}

	Article: Q151044
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
	
	For a Microsoft FrontPage 98 version of this article, see Q194255.
	
	SYMPTOMS
	========
	
	When you attempt to view a Uniform Resource Locator (URL) that contains spaces,
	you may receive one of the following error messages:
	
	  HTTP/1.0 404 Object Not Found.
	
	  -or-
	
	  HTAccess: Error accessing "url": HTTP: file/directory does not exist.
	
	
	CAUSE
	=====
	
	Some browsers do not support spaces in the URL.
	
	MORE INFORMATION
	================
	
	FrontPage Editor displays the following warning message when you attempt to save
	a page with an invalid URL
	
	  "<file name>.htm" is not a valid Page URL for the current Web. Do
	  you want to save the page with this URL?"
	
	where <file name> is the name of your file. If you receive this message
	when saving a file, you should choose a file name that does not contain spaces
	so that any browser can display your page.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : windows:1.0,1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
