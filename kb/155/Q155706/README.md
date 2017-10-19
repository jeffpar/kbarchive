---
layout: page
title: "Q155706: How to Use the IIS HTTP Environment Variable"
permalink: /kb/155/Q155706/
---

## Q155706: How to Use the IIS HTTP Environment Variable

	Article: Q155706
	Product(s): Internet Information Server
	Version(s): 1.0 2.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You should know how to use the Internet Database Connector (IDC) in order to use
	the HTTP environment variables. These variables are returned to a HTX file or
	can be used as variables in the IDC SQLStatement: command line.
	
	MORE INFORMATION
	================
	
	Syntax
	------
	
	Below is the proper syntax for the available variables. This requires the use of
	.HTM, .IDC, and .HTX files.
	
	The HTM document should contain a FORM with a Submit button. The Action should
	launch the .IDC file and its Method equal to POST.
	
	The IDC file, for this purpose, should be fully functional. However, it does not
	have to return any data from your DSN. In addition, this is where you place the
	reference for the HTX file.
	
	The HTX file is where you will place the variables.
	
	Variable Format
	---------------
	
	The use of these variable are a little different or cannot be used depending on
	the version of Internet Information Server (IIS) you are using. All variables
	must be in upper case.
	
	The variables format are as follows:
	
	These tags are running from IIS 1.0c and IIS 2.0 unless otherwise noted.
	
	- <%ALL_HTTP%> Returns all unparsed HTTP headers.
	
	- <%HTTP_AUTHORIZATION%> IIS 1.0 ONLY :Returns the type of authorization
	  used.
	
	- <%AUTH_TYPE%> IIS 2.0 ONLY : Returns the type of authorization used.
	
	- <%HTTP_CONNECTION%> Returns the type of connection established
	
	- <%CONTENT_LENGTH%> Returns the number of bytes expected from the client
	
	- <%CONTENT_TYPE%> Returns the content type from the body of a POST
	  request.
	
	- <%GATEWAY_INTERFACE%> Returns CGI specifications the server uses.
	
	- <%HTTP_ACCEPT%> Returns special-case header values
	
	- <%LOGON_USER%> IIS 2.0 ONLY : Returns Windows NT account
	
	- <%PATH_INFO%> Returns trailing part of the URL after the script name.
	
	- <%PATH_TRANSLATED%> Returns full path of script name.
	
	- <%HTTP_PRAGMA%> ONLY in IIS 2.0
	
	- <%QUERY_STRING%> Returns query string.
	
	- <%HTTP_REFERER%> Returns the URL of the requesting HTM.
	
	- <%REMOTE_ADDR%> Returns the clients IP address.
	
	- <%REMOTE_HOST%> Returns the client hostname
	
	- <%REMOTE_USER%> Returns the authenticated client name.
	
	- <%REQUEST_METHOD%> Returns the HTTP request method
	
	- <%SCRIPT_NAME%> Returns the name of the script program being executed
	
	- <%SERVER_NAME%> Returns the servers hostname or IP address.
	
	- <%SERVER_PORT%> Returns the TCP/IP port used.
	
	- <%HTTP_SERVER_PORT_SECURE%>DOES NOT WORK WITH OR WTIHOUT HTTP_ FROM
	  SERVER OF CLIENT(IIS 1.0) Returns a value of 1 or 0 .
	
	- <%SERVER_PROTOCOL%> Returns name and version of information retrieving
	  protocol
	
	- <%SERVER_SOFTWARE%> Returns the name and version of the Web Server
	  Software
	
	- <%HTTP_USER_AGENT%> Returns the name of the browser.
	
	Additional query words: iis http
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis200 kbiis100
	Version           : 1.0 2.0
	Issue type        : kbhowto
	
	=============================================================================
	
