---
layout: page
title: "Q216803: IIS Hidden Static Files Return HTTP 404 or Access Denied Errors"
permalink: /kb/216/Q216803/
---

## Q216803: IIS Hidden Static Files Return HTTP 404 or Access Denied Errors

{% raw %}

	Article: Q216803
	Product(s): Internet Information Server
	Version(s): winnt:3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp404 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Static files that have the hidden attribute set may return an HTTP 404 or an
	Access Denied error when browsed, while dynamic files can still be browsed.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	Configuring access control for all Web files should always be implemented
	through NTFS permissions.
	
	MORE INFORMATION
	================
	
	Dynamic files such as Active Server Pages (ASP) or Server-Side Includes (SSI)
	are implemented through script-mapped ISAPI extensions, in this case the Asp.dll
	and Ssiinc.dll files respectively. These extensions preprocess the executable
	code in the files being requested and can therefore read hidden files and return
	the expected HTML output to a client. Direct Web browsing of hidden static files
	results in a "File not Found" or an "Access Denied" error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp404 kbProd2Web 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : winnt:3.0,4.0,5.0
	
	=============================================================================
	

{% endraw %}
