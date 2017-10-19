---
layout: page
title: "Q175210: FP: Search Finds No Documents if Title Length &gt; 254 Characters"
permalink: /kb/175/Q175210/
---

## Q175210: FP: Search Finds No Documents if Title Length &gt; 254 Characters

	Article: Q175210
	Product(s): Word Front Page
	Version(s): MACINTOSH:1.0; WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you submit a search form, the search results indicate that no documents
	meeting your criteria were found.
	
	CAUSE
	=====
	
	A search will fail if the title of the page exceeds 254 characters. The
	Microsoft FrontPage 97 Server Extensions use an internal Wide Area Internet
	Search (WAIS) engine to perform keyword searches throughout a Web. The WAIS
	search engine creates a list of file names that will become corrupted if it
	finds a page title greater than 254 characters. As a result, the FrontPage
	Server extensions don't recognize the list of file names during the WAIS
	verification and the Search component displays a "No documents found" message.
	
	RESOLUTION
	==========
	
	To resolve this problem, edit the page in FrontPage Editor, and do the
	following:
	
	1. On the File menu, click Open.
	
	2. Click the Current FrontPage Web tab.
	
	3. Select the page you want to edit and click Open.
	
	4. Right-click anywhere on the page (Windows) or hold down SHIFT and click the
	  page (Macintosh). Click Page Properties on the menu that appears.
	
	5. In the Title box, enter a title that is fewer than 254 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft FrontPage
	98 for Windows.
	
	MORE INFORMATION
	================
	
	Note that the FrontPage 97 server extensions are also capable of working with
	Microsoft Index Server. Microsoft Index Server does not display the problem
	described in this article. When using the Microsoft Index Server, the form
	action within the HTML code will point to a _vti_bin/<form>.idq file,
	where <form> is the name and number of the search form.
	
	
	Additional query words: fp98 fpiis
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : MACINTOSH:1.0; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
