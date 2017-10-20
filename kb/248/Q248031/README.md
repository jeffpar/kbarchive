---
layout: page
title: "Q248031: Err Msg: HTTP 403.17 - Forbidden: Client Certificate Has Expired"
permalink: /kb/248/Q248031/
---

## Q248031: Err Msg: HTTP 403.17 - Forbidden: Client Certificate Has Expired

{% raw %}

	Article: Q248031
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp40317 kbProd2Web
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to an Internet Information Services (IIS) 5.0 computer, you may
	receive the following error message:
	
	  HTTP 403.17 - Forbidden: Client certificate has expired or is not yet valid
	  The page requires a valid client certificate
	
	CAUSE
	=====
	
	The page you are trying to view requires the use of a valid client certificate.
	Your client certificate has expired or is not yet valid. The client certificate
	is used for identifying you as a valid user of the resource.
	
	Generic 403 errors are returned when access to content has been forbidden. The
	server is refusing to fulfill the request for content. This is generally not
	related to NTFS permissions.
	
	RESOLUTION
	==========
	
	To resolve this, do the following:
	
	- Check the Effective Date on the client certificate.
	
	- Ensure that the certificate is valid.
	
	- Check the Expiration Date on the client certificate.
	
	- Ensure that the certificate has not expired.
	
	- Verify that the Certificate Authority has not expired your certificate.
	
	- Request a new certificate from the Certificate Authority.
	
	For additional information on requesting a new certificate, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q186812 Error: 403.7 Forbidden: Client Certificate Required
	
	Additional query words: IIS 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp40317 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
