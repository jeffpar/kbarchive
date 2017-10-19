---
layout: page
title: "Q296928: FP: Error Message During Database Search with ASP"
permalink: /kb/296/Q296928/
---

## Q296928: FP: Error Message During Database Search with ASP

	Article: Q296928
	Product(s): Word Front Page
	Version(s): (all versions and editions),4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows, used with:
	   - the operating system: Microsoft Windows NT, versions (all versions and editions), 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a user submits a Web-based form to search a database, he or she may
	receive an error message similar to one of the following:
	
	  Database error: Object required
	
	  -or-
	
	  Server object error 'ASP 0177 : 800401f3' Server.CreateObject Failed <file
	  name>, line 99 Invalid class string
	
	
	CAUSE
	=====
	
	This behavior can occur when you do the following:
	
	1. You install Microsoft FrontPage 98 Server Extensions on a Web server.
	
	2. You create an Active Server Pages (ASP) form with FrontPage 98 to search a
	  database on the server.
	
	3. You upgrade the Web server to Microsoft FrontPage 2000 Server Extensions.
	
	This behavior occurs because FrontPage 2000 Server Extensions require an updated
	version of Microsoft Data Access Components (MDAC).
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the latest version of MDAC, and then
	restart the computer. The latest version of MDAC is available at the following
	Microsoft Web site:
	
	  http://www.microsoft.com/data/
	
	MORE INFORMATION
	================
	
	FrontPage 2000 Server Extensions require MDAC version 2.1 or later.
	
	FrontPage 2000 Server Extensions can be downloaded from the following Microsoft
	Web site:
	
	  http://office.microsoft.com/downloads/2000/winfpse.aspx
	
	For additional information about database errors, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q150943 Disk or Network Error When Trying to Run Database App
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :(all versions and editions),4.0
	Issue type        : kbprb
	
	=============================================================================
	
