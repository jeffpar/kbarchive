---
layout: page
title: "Q159431: FP97: WWW Links to Current Web Lose &quot;http://&quot; Prefix"
permalink: /kb/159/Q159431/
---

## Q159431: FP97: WWW Links to Current Web Lose &quot;http://&quot; Prefix

	Article: Q159431
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In FrontPage Editor, when you use the World Wide Web tab of the Edit Hyperlink
	dialog box to create a link, FrontPage analyzes this link. If the link points to
	the web in which the file is saved, the link is converted from a "World Wide
	Web" style link to a "current web" style link. That is, the "http://" is removed
	from the Uniform Resource Locator (URL) in the link, and the link is stored
	relative to its location in the current web.
	
	CAUSE
	=====
	
	FrontPage performs this conversion on all hyperlinks in the current web. It does
	this in order to make the web more portable. Once the shortened link is stored,
	it will function within that web no matter where the web is moved.
	
	WORKAROUND
	==========
	
	To create an absolute link to a file in the current web
	-------------------------------------------------------
	
	In the Edit Hyperlink dialog box, click the Current FrontPage Web tab, and, in
	the Page box, type the full URL to the page.
	
	To convert a link from a "current web" link to a "World Wide Web" link
	----------------------------------------------------------------------
	
	Select the link in FrontPage Editor, click HyperLink Properties on the Edit menu,
	click the Current FrontPage Web tab, and then type the full URL in the Page
	box.
	
	To modify an absolute link to a page in the current web
	-------------------------------------------------------
	
	In the Edit Hyperlink dialog box, make sure that the Page box on the Current Web
	tab contains the full URL before you click OK or Apply.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was corrected in Microsoft
	FrontPage 98 for Window.
	
	MORE INFORMATION
	================
	
	Example
	-------
	
	If you save a page called "myfile.htm" in a web called "test" on a server called
	"www.myweb.net," the full URL to that page would be the following:
	
	  http://www.myweb.net/test/myfile.htm
	
	If you link to that file from another file in the test web by typing the
	following in the URL box on the World Wide Web tab (of the Edit Hyperlink dialog
	box),
	
	  http://www.myweb.net/test/myfile.htm
	
	the link will be analyzed and will be converted automatically to this:
	
	  myfile.htm.
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
