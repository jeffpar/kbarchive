---
layout: page
title: "Q176113: BUG: Set-Cookie Is Ignored in CGI When Combined With Location"
permalink: /kb/176/Q176113/
---

## Q176113: BUG: Set-Cookie Is Ignored in CGI When Combined With Location

{% raw %}

	Article: Q176113
	Product(s): Internet Information Server
	Version(s): winnt:3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis300bug kbiis400bug kbiis500bug
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a CGI application sends a Set-Cookie header with "302 Object Moved"
	response and Location header, Internet Information Server (IIS) ignores the
	cookie header.
	
	RESOLUTION
	==========
	
	This behavior is in violation of the CGI specification, which states, "Any
	headers that are not server directives are sent directly back to the client.
	Currently, this specification defines three server directives..."
	
	As a workaround, make sure the file name of the EXE begins with "nph-" and
	manually create all HTTP headers in your program. "nph-" indicates to the server
	that the CGI program is to be run in non-parsed headers mode. CGI has two modes.
	In normal mode (parsed headers), you must send one of the CGI directives to
	standard output (Content-type, Location, or Status). CGI formats a valid HTTP
	response line based on the directive you sent. It formats other standard HTTP
	headers for you, and it should include any other headers that you have
	specified.
	
	The other mode is non-parsed header mode. In this mode CGI does not set any
	headers itself. The CGI program must format a full HTTP response including the
	response line and all headers. The server will not add or modify any headers for
	you in this mode.
	
	The convention is that a CGI program whose name begins with "nph-" is run in
	non-parsed header mode; otherwise, CGI programs are run in parsed header mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Compile this CGI program as a Win32 Console Application and place it in a folder
	on your IIS server where it can be executed:
	
	  #include <stdio.h>
	  int main()
	  {
	    printf("Location: %s\r\n", "http://www.yahoo.com");
	    printf("Set-Cookie: Name1=Value1; path=/;
	      expires=Fri, 22 May 1998 21:00:00 GMT\r\n\r\n");
	    return 0;
	  }
	
	Call the CGI program from your browser and observe its output (via Network
	Monitor, for example). It will be similar to this:
	
	HTTP/1.0 302 Object moved
	Location: http://www.yahoo.com
	Server: Microsoft-IIS/2.0
	Content-Type: text/html
	Content-Length: 145
	
	<head><title>Document moved</title></head>
	<body><h1>Object Moved</h1>This document may be found
	<a HREF="http://www.yahoo.com">here</a></body>
	
	Note that the Set-Cookie header has not been sent by IIS. If you have cookie
	warnings turned on in your browser, no warning appears.
	
	To allow a cookie to be set in a 302 response, use code similar to the following,
	and prefix "nph-" to the name of the executable file:
	
	  #include <stdio.h>
	  int main()
	  {
	    printf("HTTP/1.0 302 Redirect\r\n");
	    printf("Location: %s\r\n", "http://www.yahoo.com");
	    printf("Set-Cookie: Name=Value; path=/; expires=Fri, 22 May 1998 21:00:00
	     GMT\r\n\r\n");
	    return 0;
	  }
	
	The output is similar to the following. Note that the cookie is now sent, and no
	headers are added by the server.
	
	HTTP/1.0 302 Redirect
	Location: http://www.yahoo.com
	Set-Cookie: Name=Value; path=/; expires=Fri, 22 May 1998 21:00:00 GMT
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Leon
	Braginski, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbiis300bug kbiis400bug kbiis500bug 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : winnt:3.0,4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
