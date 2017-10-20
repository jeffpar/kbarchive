---
layout: page
title: "Q164983: HOWTO: Do Asynchronous WinInet with MFC Classes"
permalink: /kb/164/Q164983/
---

## Q164983: HOWTO: Do Asynchronous WinInet with MFC Classes

{% raw %}

	Article: Q164983
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.0; winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbIE400 kbInternet kbMFC kbVC500 kbVC600
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Internet Explorer (Programming) version 4.0 
	- Microsoft Windows Internet Services (WinInet) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The MFC WinInet classes (CInternetSession, CInternetConnection, and so forth)
	are not designed to be used with asynchronous WinInet connections or file
	transfer. Instead, developers looking for asynchronous-like behavior in their
	MFC WinInet application should implement separate synchronous WinInet sessions
	in secondary threads.
	
	MORE INFORMATION
	================
	
	A WinInet application creates an asynchronous WinInet session by using
	INTERNET_FLAG_ASYNC in the last parameter of the CInternetSession constructor,
	dwFlags.
	
	Because some Internet operations may take a long period of time to complete, it
	is often desirable to make asynchronous WinInet calls, which return control to
	the application and run the operation in the background. This allows the
	application's user interface to continue to function. In addition, the
	application can display status updates on a lengthy download or even allow the
	user to halt an operation while it is executing. In this case, the recommended
	method for an MFC WinInet application is to not use INTERNET_FLAG_ASYNC in
	constructing the CInternetSession. Instead, for each necessary concurrent
	session, a secondary thread is spawned from the main thread. Each secondary
	thread is responsible for creating a new CInternetSession object without the
	INTERNET_FLAG_ASYNC flag and then performing any needed operations on that
	synchronous session, such as making an FTP connection and then downloading a
	file.
	
	In some cases however, true asynchronous WinInet is really the desired goal. If
	this is the case, developers are encouraged to abandon their use of the MFC
	WinInet classes and make calls to the WinInet API directly. You can get more
	information about this from the Internet Client SDK at:
	
	  http://www.microsoft.com/msdn/sdk/inetsdk/help/default.htm
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbIE400 kbInternet kbMFC kbVC500 kbVC600 
	Technology        : kbVCsearch kbIEsearch kbAudDeveloper kbSDKIESearch kbSDKIE400 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:4.0; winnt:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
