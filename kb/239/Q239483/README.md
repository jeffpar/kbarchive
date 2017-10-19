---
layout: page
title: "Q239483: Err Msg: Cannot Open Internet Site Http://&lt;Site Name&gt;."
permalink: /kb/239/Q239483/
---

## Q239483: Err Msg: Cannot Open Internet Site Http://&lt;Site Name&gt;.

	Article: Q239483
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
	
	Web browser clients may receive the following error message:
	
	  Cannot open Internet site http://<site name>.
	  A connection to the server could not be established
	
	CAUSE
	=====
	
	When executed, CGI applications run in their own memory space on a Web server.
	Each CGI application uses an IIS I/0 thread. By default, IIS is set to use a
	maximum of 256 I/O threads.
	
	If a CGI application stops responding or is experiencing a slow connection when
	performing data access, then users may reissue requests to the CGI application.
	CGI applications cannot be written to stop when the Web client ends the
	connection and will continue to run on the server. By default, CGI scripts will
	time out after 300 seconds.
	
	When CGI execution does not complete under heavy load, all of the IIS I/O threads
	may be used. This can cause the above error.
	
	RESOLUTION
	==========
	
	Re-create CGI applications as ISAPI applications. Correctly written ISAPI
	applications can use a separate thread pool to handle requests and will use IIS
	I/O threads and memory much more efficiently, and allow for greater scalability.
	
	MORE INFORMATION
	================
	
	IIS does not terminate CGI applications when a HTTP connection is ends.
	
	Additional query words: iis cgi
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
