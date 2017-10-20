---
layout: page
title: "Q181215: Unable to Pass Query String Which Contains &quot;=&quot; to CGI Program"
permalink: /kb/181/Q181215/
---

## Q181215: Unable to Pass Query String Which Contains &quot;=&quot; to CGI Program

{% raw %}

	Article: Q181215
	Product(s): Internet Information Server
	Version(s): WINNT: 3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call a Common Gateway Interface (CGI) program from an HTML form and are
	using the query string to pass parameters, a blank string is passed to the CGI
	program. The following example illustrates this behavior.
	
	  http://<servername>/cgitest.exe?parameter=value
	
	CAUSE
	=====
	
	This is a CGI rule. If an unencoded "=" is in the query string, the command line
	isn't used for passing parameters; you have to use the query string.
	
	Note that an ISAPI DLL does not encounter this issue.
	
	
	RESOLUTION
	==========
	
	If you are unable to obtain an ISAPI DLL equivalent to the CGI program when you
	are coding the HTML form, you must ensure that the parameters are separated by
	the hex substitute for the equal (=) sign. The following example demonstrates
	this:
	
	  http://<servername>/cgitest.exe?parameter%3dvalue
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server versions 3.0 and 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: CGI
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300
	Version           : WINNT: 3.0,4.0
	Hardware          : ALPHA PPC
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
