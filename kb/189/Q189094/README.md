---
layout: page
title: "Q189094: FIX: Calling CHttpFile::ErrorDlg Function Causes Errors 127 &amp; 2"
permalink: /kb/189/Q189094/
---

## Q189094: FIX: Calling CHttpFile::ErrorDlg Function Causes Errors 127 &amp; 2

	Article: Q189094
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:; winnt:5.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC500bug kbVC600fix kbGrpDSInet
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- Microsoft Internet Explorer (Programming) 
	- Microsoft Windows Internet Services (WinInet) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling CHttpFile::ErrorDlg results in one of the following error messages:
	
	  Error: (127) The specified procedure could not be found.
	
	  Error: (2) The system cannot find the file specified.
	
	CAUSE
	=====
	
	MFC attempts to call the Unicode or American National Standards Institute (ANSI)
	versions of most Win32 Internet Extensions (WinInet) functions when appropriate.
	In the case of the ErrorDlg function, MFC attempts to call the Unicode or ANSI
	version of the InternetErrorDlg function. For InternetErrorDlg, Unicode and ANSI
	versions are not necessary (no character data is passed in) and in fact, not
	available. When MFC attempts to call the Unicode or ANSI version of the
	function, the function is not found in the DLL.
	
	RESOLUTION
	==========
	
	It is possible to call the InternetErrorDlg function yourself. Following is a
	section of the Tear sample modified to do so:
	
	     if (dwRet == HTTP_STATUS_DENIED)
	     {
	         DWORD dwPrompt;
	
	         //dwPrompt = pFile->ErrorDlg(NULL,
	         //ERROR_INTERNET_INCORRECT_PASSWORD,
	         //FLAGS_ERROR_UI_FLAGS_GENERATE_DATA |
	         //FLAGS_ERROR_UI_FLAGS_CHANGE_OPTIONS, NULL);
	
	         LPVOID lpEmpty;
	
	         dwPrompt = ::InternetErrorDlg(GetDesktopWindow(), *pFile,
	                                       ERROR_INTERNET_INCORRECT_PASSWORD,
	                                       FLAGS_ERROR_UI_FLAGS_GENERATE_DATA
	                                     | FLAGS_ERROR_UI_FLAGS_CHANGE_OPTIONS,
	                                       &lpEmpty);
	
	         if (dwPrompt != ERROR_INTERNET_FORCE_RETRY)
	     ...
	
	In some cases, you may want different parameters for InternetErrorDlg. See the
	WinInet documentation for InternetErrorDlg and the MFC source code for
	CHttpFile::ErrorDlg. Note that you must change your project setting to link with
	wininet.lib in order to use InternetErrorDlg.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual C++ 6.0
	
	MORE INFORMATION
	================
	
	When you run the MFC Internet Tear sample, an error is reported and the program
	fails if the site being accessed uses Basic Authentication without allowing
	anonymous access and with NTLM turned off.
	
	It is also possible to collect the User Name and Password yourself and send a new
	request for data, as in the following example:
	
	     if (dwRet == HTTP_STATUS_DENIED)
	     {
	         cerr << "This page is password protected. " << endl;
	         CHAR szUser[50]="";
	         CHAR szPass[50]="";
	
	         cerr << "User: "; cin  >> szUser;
	         // This should really not show the password on the screen.
	         cerr << "Pass: "; cin  >> szPass;
	
	         // You have to read all outstanding data on the Internet handle
	         // before you can resubmit the request. Just discard the data.
	
	         CString strBuff;
	         while (pFile->ReadString(strBuff))
	         {
	         }
	
	         pServer->SetOption(INTERNET_OPTION_USERNAME, szUser,
	                            lstrlen(szUser));
	         pServer->SetOption(INTERNET_OPTION_PASSWORD, szPass,
	                            lstrlen(szPass));
	
	         pFile->SendRequest();
	     ...
	
	Notice that SetOption is being called on the CHttpConnection per the
	InternetSetOption documentation in Visual C++ which states the following:
	
	  Sets the user name associated with a handle returned by InternetConnect.
	
	Calling SetOption on the CInternetSession will result in an Access violation in
	WinInet.dll.
	
	REFERENCES
	==========
	
	The Internet Client SDK: Internet Tools and Technologies; WinInet API
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Robert
	Duke, Microsoft Corporation
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Robert Duke, Microsoft Corporation
	
	
	Additional query words: InternetErrorDlg ErrorDlg CHttpFile
	
	======================================================================
	Keywords          : kbMFC kbVC500bug kbVC600fix kbGrpDSInet 
	Technology        : kbVCsearch kbIEsearch kbAudDeveloper kbSDKIESearch kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:; winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
