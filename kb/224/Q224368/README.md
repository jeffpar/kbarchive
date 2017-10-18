---
layout: page
title: "Q224368: HTMLA Web Site Friendly Names Are Truncated"
permalink: kb/224/Q224368/
---

## Q224368: HTMLA Web Site Friendly Names Are Truncated

	Article: Q224368
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new Web site using the Internet Services Manager, if certain
	characters are used (other than letters or numbers), the full name in the HTMLA
	Web Administration forms may be truncated.
	
	For example, if you create a new site using the Internet Services Manager and
	call it New"Web"Site (including the quotation marks), when you view the site in
	the HTMLA Web Administration forms ("http://localhost/iisadmin" by default),
	only "New" is viewable, instead of the Web site's full name.
	
	CAUSE
	=====
	
	The problem is caused when the string values in an ASP script are used to
	generate JavaScript literals. The characters cause a problem in the script
	itself (errors), so they are truncated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Services
	version 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
