---
layout: page
title: "Q221154: CGI Application Unable to Parse STDIN During Redirection"
permalink: /kb/221/Q221154/
---

## Q221154: CGI Application Unable to Parse STDIN During Redirection

	Article: Q221154
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a CGI application does a redirection and the REQUEST_METHOD is a POST,
	information may not be available on STDIN. This can occur when a CGI application
	is processing a POST from a client and the CGI application is located on a
	computer running Microsoft Internet Information Server (IIS) 4.0. If the CGI
	application does a redirection using the full URL path, Microsoft IIS returns an
	external redirection to the client the and results are as expected. If under the
	same conditions, the CGI application does a redirection using a relative path
	URL, information may not be available in STDIN as expected.
	
	When the CGI application uses a relative path, internally IIS processes a
	redirect as a GET. This can present a problem for the CGI application. The
	information that the CGI application expects on STDIN, is not available. It is
	located in the QUERY_STRING variable instead.
	
	WORKAROUND
	==========
	
	To work around this problem, use the full URL in the CGI application instead of
	a relative path when a CGI application does a redirection.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
