---
layout: page
title: "Q184352: HOWTO: Upload Files to the Internet Information Server"
permalink: kb/184/Q184352/
---

## Q184352: HOWTO: Upload Files to the Internet Information Server

	Article: Q184352
	Product(s): Internet Information Server
	Version(s): 1.0,4.0,4.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Client SDK, versions 4.0, 4.01 
	- Microsoft ActiveX SDK, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are several options available for uploading files to Internet Information
	Server (IIS) programmatically from client applications. This articles presents
	some of these options, and describes how to employ HTTP PUT functionality.
	
	MORE INFORMATION
	================
	
	Using the WebPost APIs
	----------------------
	
	One method for uploading files is by using the WebPost APIs, with either the HTTP
	POST method or the ActiveX upload control. The WebPost APIs are fully documented
	and explained in Internet Client SDK.
	
	The drawback is that both of these methods require that the server have a special
	component that handles posted data and saves it in a file on the server's file
	system. The exceptions are WebPost and ActiveX control uploading when using an
	FTP posting provider. However, this requires installing and configuring an FTP
	server in addition to the WWW server.
	
	The Microsoft Posting Acceptor shipped with Windows NT 4.0 Option Pack (NTOP)
	provides the back-end functionality for file uploads via the methods described
	above. Please see the NTOP documentation and Microsoft Posting Acceptor release
	notes (also shipped with NTOP) for information on how to configure and use
	Posting Acceptor and File upload control.
	
	By Using HTTP Protocol PUT Functionality
	----------------------------------------
	
	The HTTP protocol PUT functionality method does not require any components on the
	server to handle upload data. The PUT functionality is built-in to IIS 4.0.
	Please note that not all Internet Browsers can handle the HTTP PUT verb. The
	following discussion applies to applications written with the WinInet APIs,
	which give the programmer the ability to create and send an HTTP request
	programmatically.
	
	The PUT method is described in the HTTP/1.1 RFC 2068
	(http://www.w3c.org/Protocols/rfc2068/rfc2068)
	
	With this method the client supplies a URL and sends the data in the body of the
	request. The main difference between POST and PUT is that with PUT, the URL is
	not the name of a server application that will handle the client's data.
	Instead, the URL is the name of the file that will be created by the server to
	store the received data. If the URL already exists, then it will be overwritten
	by the server. Please note that the virtual directory referred to in the URL
	must have WRITE permission set (for IIS 4.0, this is configurable via Directory
	Properties in MMC).
	
	For example, the following HTTP request (only verb and URL is shown) creates
	Page.htm file in the /test virtual directory. File will contain data sent with
	the request:
	
	     PUT /Test/Page.htm
	
	Because WinInet APIs enable the programmer to create any valid HTTP request, they
	can be easily used to upload data to the server. The following steps need to
	take place:
	
	1. A Request must be opened with the verb PUT.
	
	2. The object of the request may not be NULL and should be a valid URL on the
	  server (although the file does not need to exist at the time of the request).
	
	3. The newly created URL will contain data supplied with the request.
	
	Following is a snippet of the sample code that can be used:
	
	     ...
	     hReq = HttpOpenRequest (hConnect, "PUT", "/test/page.htm", ...)
	     CHAR szContent [] = "Hello, World!"
	     HttpSendRequest (hReq, NULL, 0, szContent, lstrlen (szContent))
	     ...
	
	Upon running this code, IIS 4.0 will create the file Page.htm in virtual
	directory /test. The file will contain the "Hello, World!" string.
	
	Please note that HttpSendRequest can be used only with a single buffer of limited
	size. HttpSendRequestEx and InternetWriteFile can be used to send buffers of any
	size as follows:
	
	  BOOL UseHttpSendReqEx(HINTERNET hConnect, TCHAR *upFile)
	     {
	       INTERNET_BUFFERS BufferIn = {0};
	       DWORD dwBytesRead;
	       DWORD dwBytesWritten;
	       BYTE pBuffer[1024]; // Read from file in 1K chunks
	       BOOL bRead, bRet;
	
	       BufferIn.dwStructSize = sizeof( INTERNET_BUFFERS );
	
	       HINTERNET hRequest = HttpOpenRequest (hConnect, "PUT",
	           "/test/page.htm", NULL, NULL, NULL,  0, 0);
	       if (!hRequest)
	       {
	         printf("Failed to open request handle: %lu\n", GetLastError ());
	         return FALSE;
	       }
	
	       HANDLE hFile = CreateFile (upFile, GENERIC_READ, FILE_SHARE_READ,
	           NULL, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, NULL);
	       if (hFile == INVALID_HANDLE_VALUE)
	       {
	         printf("\nFailed to open local file %s.", upFile);
	         return FALSE;
	       }
	
	       BufferIn.dwBufferTotal = GetFileSize (hFile, NULL);
	       printf ("File size is %d\n", BufferIn.dwBufferTotal );
	
	       if(!HttpSendRequestEx( hRequest, &BufferIn, NULL, HSR_INITIATE, 0))
	       {
	         printf( "Error on HttpSendRequestEx %lu\n",GetLastError() );
	         return FALSE;
	       }
	
	       DWORD sum = 0;
	       do
	       {
	         if  (!(bRead = ReadFile (hFile, pBuffer, sizeof(pBuffer),
	             &dwBytesRead, NULL)))
	         {
	           printf ("\nReadFile failed on buffer %lu.",GetLastError());
	           break;
	         }
	         if (!(bRet=InternetWriteFile( hRequest, pBuffer, dwBytesRead,
	             &dwBytesWritten)))
	         {
	           printf ("\nInternetWriteFile failed %lu", GetLastError());
	           break;
	         }
	         sum += dwBytesWritten;
	       }
	       while (dwBytesRead == sizeof(pBuffer)) ;
	
	       CloseHandle (hFile);
	       printf ("Actual written bytes: %d\n", sum);
	
	       if(!HttpEndRequest(hRequest, NULL, 0, 0))
	       {
	         printf( "Error on HttpEndRequest %lu \n", GetLastError());
	         return FALSE;
	       }
	       return TRUE;
	     }
	
	NOTE: IIS may lock a file immediately after it processes the GET request.
	Therefore, in the following sequence of requests, the second PUT may fail:
	
	     PUT /page.test
	     GET /page.test
	     PUT /page.test
	
	Even though the failure is caused by locking violation, IIS may report it as
	error caused by ACL on the resource (error 401.3). To prevent this problem, the
	following methods can be used:
	
	- On failure of the second request, wait and retry the request later. Note that
	  the time needed for IIS to unlock a file may vary.
	
	- PUT file to the URL with different name.
	
	- The preferred method it to use the HTTP method DELETE to delete the file and
	  then PUT it again. You can find more information about DELETE in HTTP RFC
	  referred in the beginning of this article. The following code demonstrates
	  how to create DELETE request:
	
	  HttpOpenRequest (hConnect,
	                          "DELETE",  // HTTP Verb
	                          "/page.test",   // Object
	                          ...)
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q177188 FILE: Using HttpSendRequestEx for Large POST Requests
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Leon
	Braginski, Microsoft Corporation
	
	
	Additional query words: UPLOAD Posting Acceptor PUT
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbAudDeveloper kbiis400 kbSDKSearch kbSDKActiveXsearch kbSDKIClient400 kbSDKIClient401 kbSDKActiveX kbIClientSearch
	Version           : :1.0,4.0,4.01
	Issue type        : kbhowto
	
	=============================================================================
	
