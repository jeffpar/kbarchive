---
layout: page
title: "Q187192: ASP Pages &amp; Windows NT 4.0 Option Pack Documentation Do Not Work"
permalink: /kb/187/Q187192/
---

## Q187192: ASP Pages &amp; Windows NT 4.0 Option Pack Documentation Do Not Work

	Article: Q187192
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When browsing an .asp page, one of the following problems may occur:
	
	- Error 115 occurs.
	
	- The server stops responding.
	
	- An error occurs stating that a connection to the server could not be
	  established.
	
	Additionally, the Product Documentation for the Windows NT 4.0 Option Pack does
	not work.
	
	CAUSE
	=====
	
	Active Server Pages (ASP) for Internet Information Server (IIS) 3.0, rather than
	ASP for IIS 4.0, has been installed on the system.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Remove ASP. To do this, run the Active Server Pages Uninstall program.
	
	2. Run Windows NT 4.0 Option Pack Setup to remove all components of IIS 4.0.
	
	3. Restart the server, and then reinstall IIS 4.0.
	
	MORE INFORMATION
	================
	
	The Product Documentation for the Windows NT 4.0 Option Pack uses ASP pages,
	which is why it does not work when ASP is disabled.
	
	ASP for IIS 3.0 is included with Windows NT 4.0 Service Pack 3. ASP for IIS 4.0
	is included with the Windows NT 4.0 Option Pack.
	
	Additional query words: asp.exe hang hangs hung akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
