---
layout: page
title: "Q194397: Err Msg: Application Object Error 'ASP 0197 : 80004005'."
permalink: /kb/194/Q194397/
---

## Q194397: Err Msg: Application Object Error 'ASP 0197 : 80004005'.

{% raw %}

	Article: Q194397
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use an application variable to create an application-level
	object of MSWC.BrowserType, the following error is returned:
	
	  Application object error 'ASP 0197 : 80004005'
	  Disallowed object use
	  /<path>/<filename>.asp, line <line #>
	  Cannot add object with apartment model behavior to the application
	  intrinsic object
	
	CAUSE
	=====
	
	This error occurs because the MSWC.BrowserType object is set for apartment
	threading, which is not allowed for application-level objects.
	
	This behavior is by design.
	
	In actual practice, it is a bad idea to create an application-level variable for
	the MSWC.BrowserType object because this object is shared by all sessions, and
	each session may be using a separate browser.
	
	WORKAROUND
	==========
	
	To work around this problem, create all global MSWC.BrowserType objects with a
	session scope as follows:
	
	     <%Set Session("BT")= Server.CreateObject("MSWC.BrowserType")%>
	
	
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
