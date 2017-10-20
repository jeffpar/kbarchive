---
layout: page
title: "Q245099: Content Location Does Not Return the Port Number Is Not 80"
permalink: /kb/245/Q245099/
---

## Q245099: Content Location Does Not Return the Port Number Is Not 80

{% raw %}

	Article: Q245099
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbiis400 kbiis500
	Last Modified: 01-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you make a request to a Microsoft Internet Information Server (IIS), if the
	IIS is setup to use Default.htm as the default document (or any other HTML
	document), the resulting "content location" is returned to the client. However,
	when IIS is setup to use Default.asp as the default document (or any other .asp
	document), then the "content location" header is not sent to the client in the
	response from the server. This behavior is by design.
	
	CAUSE
	=====
	
	The content-location is an optional entity-header field. It is used to define
	meta- information about the entity-body with information about the resource
	identified by the request.
	
	When the Default document is an HTM file IIS returns the content location header.
	When the Default document is an ASP file it is processed by an ISAPI (ASP.dll)
	and even though it is a Microsoft DLL it still does processing on behalf of the
	Web developer. This is very similar to the concept that as a "CGI application"
	all CGI applications are required to build their own headers.
	
	RESOLUTION
	==========
	
	Adding the following ASP code inserts the content-location header into the
	default ASP document:
	
	  <% Response.AddHeader("Content-Location","http://" + Request.ServerVariables("HTTP_HOST") + ":" + Request.ServerVariables("SERVER_PORT") + Request.ServerVariables("SCRIPT_NAME"));%>
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q218180 Internet Information Server Returns IP Address in HTTP Header
	  (Content-Location)
	
	  Q244998 Port Number Is Not Returned with Content Location when Specified by
	  URL
	
	Additional query words:
	
	======================================================================
	Keywords          : kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
