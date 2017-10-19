---
layout: page
title: "Q296626: ASP0201: Invalid Default Script Language"
permalink: /kb/296/Q296626/
---

## Q296626: ASP0201: Invalid Default Script Language

	Article: Q296626
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you browse to an Active Server pages (ASP) page, you receive one of the
	following error messages:
	
	  ASP0201:
	  Invalid Default Script Language
	
	-or-
	
	  HTTP/1.1 Invalid Default Script Language
	
	CAUSE
	=====
	
	The default script language in your Web application settings lists a language
	that is not supported by the server.
	
	RESOLUTION
	==========
	
	1. In the Internet Services Manager, right-click the Web site or virtual folder
	  that is exhibiting these problems, and then click Properties.
	
	2. Click the Home Directory tab, and then click Configuration (located towards
	  the lower right corner of the dialog box).
	
	3. Click the App Options tab. Enter a valid script language in the Default ASP
	  Language text box.
	
	4. Click OK to close the Application Configuration dialog box, and click OK
	  again to close the Web site or virtual folder dialog box.
	
	MORE INFORMATION
	================
	
	For additional information on ASP error codes, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q294271 INFO: ASP Error Codes
	
	Additional query words: iis 4 5 kbiisSearch
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
