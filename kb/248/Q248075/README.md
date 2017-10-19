---
layout: page
title: "Q248075: Error: HTTP 403.12 - Access Forbidden: Mapper Denied Access"
permalink: /kb/248/Q248075/
---

## Q248075: Error: HTTP 403.12 - Access Forbidden: Mapper Denied Access

	Article: Q248075
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbiis500 kbiis500prod2web kbhttp40312 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When connecting to Internet Information Services using a browser, you may
	receive the following error:
	
	  HTTP 403.12 - Access Forbidden: Mapper denied access
	
	  The page requires a valid client certificate
	  The page you are trying to view requires the use of a valid client
	  certificate. Your client certificate map has been denied access to this Web
	  site.
	
	CAUSE
	=====
	
	Generic 403 errors are returned when access to the content has been forbidden.
	The server is refusing to fulfill the request for content. This is generally not
	related to permissions.
	
	Error 403.12 states that access to the content is not available and that the
	server requires a valid client certificate that has not been denied access.
	
	The User ID mapped to the client certificate has been denied access to the
	resource.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Check the effective date on the client certificate and ensure that the
	  certificate is valid.
	
	- Check the expiration date and ensure that the certificate has not expired.
	
	- Check with the Certificate Authority that provided the certificate to see if
	  your certificate has expired.
	
	- Verify that the certificate has not been explicitly denied access.
	
	You can also resolve this problem by requesting a new certificate from the
	Certificate Authority (either a Certificate Authority on the Internet or the
	local Certificate Server) that the server requires.
	
	For additional information on requesting a new certificate, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q186812 Error: 403.7 Forbidden: Client Certificate Required
	
	Additional query words: IIS 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbiis500 kbiis500prod2web kbhttp40312 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
