---
layout: page
title: "Q150041: Environment Variables Returned by IIS via CGI"
permalink: /kb/150/Q150041/
---

## Q150041: Environment Variables Returned by IIS via CGI

	Article: Q150041
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Custom environment variables will not be returned by Internet Information Server
	(IIS) via a CGI application.
	
	MORE INFORMATION
	================
	
	The following environment variables are returned by IIS:
	
	  AUTH_TYPE
	  ComSpec
	  GATEWAY_INTERFACE
	  All HTTP_* variables
	  CONTENT_LENGTH
	  CONTENT_TYPE
	  PATH
	  PATH_INFO
	  PATH_TRANSLATED
	  QUERY_STRING
	  REMOTE_ADDR
	  REMOTE_HOST
	  REMOTE_USER
	  REQUEST_METHOD
	  SCRIPT_NAME
	  SERVER_NAME
	  SERVER_PROTOCOL
	  SERVER_PORT
	  SERVER_SOFTWARE
	  SystemRoot
	  windir
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : :1.0
	
	=============================================================================
	
