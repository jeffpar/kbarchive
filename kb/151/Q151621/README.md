---
layout: page
title: "Q151621: Default Case of Image Map Is Case Sensitive in IIS"
permalink: kb/151/Q151621/
---

## Q151621: Default Case of Image Map Is Case Sensitive in IIS

	Article: Q151621
	Product(s): Internet Information Server
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 03-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	- Microsoft Internet Explorer version 2.0 for Windows NT 3.51 
	- Microsoft Internet Explorer version 2.0 for Windows 95 
	- Microsoft Internet Explorer version 2.0 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click an image map using Internet Explorer 2.0, the browser will get
	stuck in an infinite loop trying to go to the link on the image map. You will
	see the icon on the title bar flash and the contents of the status bar will
	flash as Internet Explorer tries to reload the page. You can break out of the
	loop using the Stop button on the browser.
	
	CAUSE
	=====
	
	Given the following image map:
	
	  DEFAULT http://server/file.htm
	  rect (0,1) (170,53) http://server/file1.htm
	  rect (264,26) (349,53) http://server/file2.htm
	  rect (187,23) (264,53) http://server/file3.htm
	
	If you click an area not defined by one of the shapes, the DEFAULT case should be
	returned by the server. Internet Information Server (IIS) returns a Location:
	header that is blank. This causes Internet Explorer to loop continuously.
	
	WORKAROUND
	==========
	
	Change the word DEFAULT in the map file to all lower case.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 1.0 and Microsoft Internet Explorer version 2.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbIEsearch kbiis100 kbZNotKeyword2 kbIENT400Search kbIENT351Search kbIE95Search kbZNotKeyword3 kbIE200Win95 kbIE200WinNT351 kbIE200WinNT400
	Version           : :1.0,2.0
	
	=============================================================================
	
