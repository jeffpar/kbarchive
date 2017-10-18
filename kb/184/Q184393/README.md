---
layout: page
title: "Q184393: INFO: Script Errors Using HTMLA When Shift-Clicking Links"
permalink: kb/184/Q184393/
---

## Q184393: INFO: Script Errors Using HTMLA When Shift-Clicking Links

	Article: Q184393
	Product(s): Internet Information Server
	Version(s): WINDOWS:4.0; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Explorer version 4.0 for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the HTML Administrator (HTMLA) for Internet Information Server
	(IIS) version 4.0, holding down the SHIFT key while clicking links in Internet
	Explorer 4.0 (IE4) may produce the following error message in your browser:
	
	  Internet Explorer Script Error
	  An error has occurred in the script on this page.
	  Error: Object expected
	
	CAUSE
	=====
	
	Holding down the SHIFT key in Internet Explorer 4.0 forces the browser to load
	the page into a new instance of the browser, so all scripted object links to the
	referring page or frame are broken.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbIEsearch kbiis400 kbIE95Search kbZNotKeyword3 kbIE400Win95
	Version           : WINDOWS:4.0; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
