---
layout: page
title: "Q196586: FIX: HttpSendRequest Does Not Work Correctly on WinCE 2.0"
permalink: kb/196/Q196586/
---

## Q196586: FIX: HttpSendRequest Does Not Work Correctly on WinCE 2.0

	Article: Q196586
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbVC500 kbOSWinCE200bug kbOSWinCE210fix kbfix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE version 2.0 for the Handheld PC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There are four known bugs with HttpSendRequest API:
	
	1. When the lpOptional buffer (fourth parameter) is larger than 32 bytes and
	  less than 150 bytes, HttpSendRequest fails with the error 12004 internal
	  error.
	
	2. When the lpOptional parameter is not NULL, the HttpSentRequest API does not
	  separate the buffer from the headers with \r\n\r\n. It uses only a single
	  pair: \r\n. This violates the HTTP specification (RFC 2068); therefore, HTTP
	  servers treat the lpOptional buffer as part of the request headers, not as
	  request content.
	
	3. When lpszHeaders (second parameter) is not NULL, API corrupts the headers
	  added to the request.
	
	For example, if you call the API in the following way:
	
	  HttpSendRequest (hReq, "Header: value", -1L, NULL, 0)
	
	the following request is sent to the server:
	
	  GET /myurl.htm HTTP/1.0\r\n
	  Accept: */*\r\n
	  Header: value\r\n
	  : value\r\n
	  User-Agent: My Test Agent\r\n
	
	The correct request is:
	
	  GET /myurl.htm HTTP/1.0\r\n
	  Accept: */*\r\n
	  Header: value\r\n
	  User-Agent: My Test Agent\r\n
	
	NOTE: In the above transcript, \r\n is a Carriage Return\Line Feed symbol.
	
	4. When IP address is supplied to InternetConnect API, HttpSendRequest fails
	  with error 12004 internal error.
	
	RESOLUTION
	==========
	
	You can use one of the following workarounds:
	
	Problem 1
	---------
	
	Make sure that the lpOptional buffer is either smaller then 32 bytes or larger
	then 150 bytes. If you need to send a buffer smaller then 32 bytes, allocate a
	buffer larger than 150 bytes and zero-pad it. Make sure that the server
	component that reads the data, usually as part of the POST request, can
	correctly handle zero padding.
	
	Problem 2
	---------
	
	Start the lpOptional buffer with \r\n, as in the following sample:
	
	  ...
	  CHAR lpOptional[] = "\r\nBuffer Starts Here"
	  HttpSendRequest (hReq, lpOptional, ....);
	  ...
	
	NOTE: When you do this, the Content-Length that is sent is now two bytes larger
	than the content that you intended to send. Because HttpSendRequest always
	appends an extra \r\n after the content, server applications see this additional
	\r\n as part of the content. In the previous example, the Content-Length header
	is 20 (the length of the string "\r\nBuffer Starts Here"), but the buffer read
	by the server is the "Buffer Starts Here\r\n". Some server applications may not
	work properly with the additional \r\n.
	
	Problem 3
	---------
	
	Header corruption in HttpSendRequest is due to the problem in
	HttpAddRequestHeaders(). Therefore calling HttpAddRequestHeaders() to add
	headers does not work; corrupted headers will be added to the request. There is
	no workaround for this issue. It is not possible to add a custom header to a
	request that includes a body. Though the following may appear as a workaround,
	it should still not be used. Due to problem 2, you can start at the beginning of
	the data with headers, as in the following sample:
	
	  ...
	  CHAR lpOptional[]="Content-Type: text/html\r\n\r\nBuffer Start Here"
	  DWORD dwSize = strlen (lpOptional);
	  HttpSendRequest (hReq,..,lpOptional,dwSize)
	  ...
	
	Because the original request headers are separated by only a single \r\n pair,
	the server still treats "Content-Type: text/html" as part of the HTTP request
	headers. Please note that starting request body with header changes the
	Content-Length header that is calculated by Windows CE. In this case
	Content-Length will include the length of headers. A correctly written server
	application handling POSTs (that is, CGIs) that read amount of data specified in
	Content-Length will not work with such requests. The server application will
	block because the body of the request is smaller than specified in the
	Content-Length header.
	
	NOTE: Due to the issue above, it is not possible to invoke an Active Server Pages
	(ASP) script with the POST method. Simulating programmatic form submission
	requires adding a custom header: Content-Type: application/x-www-
	form-urlencoded, that is not possible.
	
	Problem 4
	---------
	
	If it's necessary to use IP address in the application, use WinSock API
	gethostbyaddr to convert it to host name. Use this host name in InternetConnect.
	Code similar to this converts IP address in dotted decimal notation to the host
	name:
	
	     struct hostent *hostinfo;
	      WSADATA      wsaData; 
	      u_long res;
	      
	      if (WSAStartup(MAKEWORD (1,1),&wsaData) != 0)
	      {
	           // Handle error here
	      }
	      
	      if ((res = inet_addr ( "123.123.123.123" )) != INADDR_NONE )
	      {
	          if ((hostinfo = gethostbyaddr ((char*) &res, sizeof(res),AF_INET))
	               == NULL)
	          {           
	              // Handle error here
	          }
	      }
	     else
	         // Handle error here
	
	   // At this point hostinfo->h_name contains host name in ASCII
	  //  make sure to convert it to UNICODE before calling InternetConnect.
	      
	      WSACleanup();
	  ?
	
	STATUS
	======
	
	Microsoft has confirmed these bugs in the Microsoft products listed at the
	beginning of this article. These problems have been corrected in Microsoft
	Windows CE, versions 2.1 and 2.11.
	
	NOTE: If you use workarounds 2 or 3 in your code, the HTTP request may not be
	sent correctly on Windows CE 2.1 and 2.11, where these problems have been
	corrected.
	
	REFERENCES
	==========
	
	  Q194953 INFO: Facts About WinInet API Support on Windows CE OS
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Leon
	Braginski, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC500 kbOSWinCE200bug kbOSWinCE210fix kbfix 
	Technology        : kbWinCESearch kbWinCE200HPC
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
