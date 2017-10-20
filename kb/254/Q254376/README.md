---
layout: page
title: "Q254376: PRB: Err Msg: &quot;Access Is Denied&quot; When Client Accesses ASP Page"
permalink: /kb/254/Q254376/
---

## Q254376: PRB: Err Msg: &quot;Access Is Denied&quot; When Client Accesses ASP Page

{% raw %}

	Article: Q254376
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbIIS kbiis400
	Last Modified: 13-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When clients connect to Internet Information Server and attempt to view an
	Active Server Pages (ASP) page, they may receive the following error message:
	
	  Error: Access is denied
	
	HTML pages do not generate the same error from within the same folder.
	
	CAUSE
	=====
	
	The problem happens because the user account or anonymous account does not have
	the correct permissions to run an ASP application.
	
	RESOLUTION
	==========
	
	To resolve the problem, give the user account or anonymous account read
	permissions to the root folder of the Web site or the folder that contains the
	ASP page.
	
	For additional information about permissions, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q187506 List of NTFS Permissions Required for IIS Site to Work
	
	
	WORKAROUND
	==========
	
	If this problem occurs, a way to work around it is to "create" the application
	under the admin account. To do so, go into the Internet Service manager,
	right-click the folder where the ASP page resides, and choose Properties. Select
	the Directory tab, and then click Create.
	
	
	MORE INFORMATION
	================
	
	The problem occurs if the account used does not have the right permissions for
	the folder where the top application is running. If the default Web site is
	pointing to Wwwroot and the folder Testdir is under Wwwroot, the user account
	might have permissions to read Testdir but not Wwwroot. When the user calls an
	ASP page under Testdir, Internet Information Server will look for the first
	available application along the hierarchy. The first one it finds is for
	Wwwroot. Because the account does not have read permissions to Wwwroot, the user
	receives the error message. Giving permissions for the account to Wwwroot or
	creating an application to Testdir both solve the problem.
	
	
	Additional query words: iis 4 iis4
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbIIS kbiis400 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
