---
layout: page
title: "Q165347: FP: FrontPage Save Results Forms Altered By Web Browsers"
permalink: /kb/165/Q165347/
---

## Q165347: FP: FrontPage Save Results Forms Altered By Web Browsers

{% raw %}

	Article: Q165347
	Product(s): Word Front Page
	Version(s): MACINTOSH:1.0; WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a FrontPage WebBot Save Results Component is set up to save results to a
	publicly viewable location, the Web browser may append spurious content to pages
	within the web.
	
	CAUSE
	=====
	
	The FrontPage Server Extensions enable you to write HyperText Markup Language
	(HTML) code from the Web browser into a form and also allows the Web server to
	accurately evaluate the HTML.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain the updated version of the FrontPage Server
	Extensions. You can download the updated FrontPage Server Extensions from the
	following Microsoft web site:
	
	  http://www.msdn.microsoft.com/products
	
	The updated FrontPage Server Extensions will quote all HTML constructions so that
	they appear exactly as you typed them rather than being evaluated as HTML.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft FrontPage Server
	Extensions version 2.0.2.1112. This problem was corrected in Microsoft FrontPage
	Server Extensions version 2.0.3.209.
	
	MORE INFORMATION
	================
	
	The revised version of the FrontPage Server Extensions will convert valid
	Uniform Resource Locators (URLs) into hyperlinks. The updated FrontPage Server
	Extensions will not allow HTML tags in any feedback form. Instead, the FrontPage
	Server Extensions will convert the HTML tags into the corresponding character
	entities that represent the code. For example, the less than sign (<) will be
	converted to &lt; and the greater than sign (>) will be converted to
	&gt;. This allows you to enter the HTML code into the feedback form. When
	you browse the form, the code will appear exactly as you typed it when you
	filled out the feedback form.
	
	Any Web site that uses the FrontPage Server Extensions and where the results from
	a WebBot Discussion, WebBot Confirmation, or WebBot Save Results component are
	saved to a public HTML page, such as a guest book, can be compromised by a
	browser with a knowledge of the way FrontPage WebBot components work. For
	example, if you are browsing a web site, and you know the file names of the
	pages in the Web, you can alter the WebBot Save Results component that appends
	content to the known file.
	
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage110
	Version           : MACINTOSH:1.0; WINDOWS:1.1
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
