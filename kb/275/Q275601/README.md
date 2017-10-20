---
layout: page
title: "Q275601: Virtual Directory Names with Executable Extensions Are Not Used"
permalink: /kb/275/Q275601/
---

## Q275601: Virtual Directory Names with Executable Extensions Are Not Used

{% raw %}

	Article: Q275601
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a virtual directory name ends with an executable extension (such as .com,
	.exe, .dll or .sh), the files in this virtual directory cannot be viewed with a
	Web browser.
	
	If the execution rights are not set in this virtual directory, the following
	error message occurs:
	
	  403.1 - Forbidden: Execute Access Forbidden
	
	If the execution rights are set, then the following error message occurs:
	
	  404 - File not found
	
	Under some circumstances the source code of an Active Server Pages (ASP) page may
	be returned to the client if it is placed in a virtual directory with an
	executable extension.
	
	CAUSE
	=====
	
	IIS interprets the virtual directory with an executable extension as an
	executable file and tries to run this file. The rest of the URL is passed in the
	Path_Info variable. Tools such as the FrontPage Server Extensions make use of
	this functionality.
	
	
	Additional query words: kbDotCom
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : :3.0,4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
