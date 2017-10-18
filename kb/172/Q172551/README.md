---
layout: page
title: "Q172551: PRB: CInternetSession::OpenURL() Fails with File Protocol"
permalink: kb/172/Q172551/
---

## Q172551: PRB: CInternetSession::OpenURL() Fails with File Protocol

	Article: Q172551
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbInternet kbMFC kbVC kbVC500 kbVC600 kbVS97 kbVS600 kbGrpDSMFCATL
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CInternetSession::OpenURL() fails if you use a URL that specifies a file that
	contains spaces or other unsafe characters. For example, the following will
	fail:
	
	     CMyInternetSession s("");
	     CStdioFile* p = s.OpenURL("file://c:/temp/Text Document.txt");
	
	As a result, a File Exception is thrown and the following message appears:
	
	  c:\temp\Text%20Document.txt was not found.
	
	CAUSE
	=====
	
	The specifications for a URL designate certain characters that must be escaped
	when they are present in a URL. The space character is one of the characters
	that must be escaped.
	
	The function CInternetSession::OpenURL() calls a function that converts unsafe
	characters in the URL to their escape sequences before processing the URL
	further. If the URL is using the file protocol it creates a CStdioFile and
	returns a pointer to this object. However, CStdioFile does not understand the
	escaped path and, as a result, an exception is thrown.
	
	RESOLUTION
	==========
	
	When you use the file protocol, you must not convert unsafe characters to their
	escape sequences. The following code demonstrates how to do this by writing a
	CInternetSession derived class to override OpenURL().
	
	     // class definition
	     class CMyInternetSession : CInternetSession
	     {
	     public:
	        CMyInternetSession::CMyInternetSession(LPCTSTR pstrAgent = NULL,
	           DWORD dwContext = 1, DWORD dwAccessType =
	           PRE_CONFIG_INTERNET_ACCESS, LPCTSTR pstrProxyName = NULL,
	           LPCTSTR pstrProxyBypass = NULL, DWORD dwFlags = 0);
	
	        CStdioFile* CMyInternetSession::OpenURL(LPCTSTR pstrURL,
	           DWORD dwContext = 1, DWORD dwFlags =
	           INTERNET_FLAG_TRANSFER_ASCII, LPCTSTR pstrHeaders = NULL,
	           DWORD dwHeadersLength = 0);
	     };
	
	     // CMyInternetSession constructor
	     CMyInternetSession::CMyInternetSession(LPCTSTR pstrAgent,
	        DWORD dwContext, DWORD dwAccessType, LPCTSTR pstrProxyName,
	        LPCTSTR pstrProxyBypass, DWORD dwFlags)
	     {
	        CInternetSession(pstrAgent, dwContext, dwAccessType, pstrProxyName,
	           pstrProxyBypass, dwFlags);
	     }
	
	     CStdioFile* CMyInternetSession::OpenURL(LPCTSTR pstrURL,
	        DWORD dwContext, DWORD dwFlags, LPCTSTR pstrHeaders,
	        DWORD dwHeadersLength)
	     {
	        ASSERT(pstrURL != NULL);
	        ASSERT(dwHeadersLength == 0 || pstrHeaders != NULL);
	
	        // must have TRANSFER_BINARY or TRANSFER_ASCII but not both
	        #define _AFX_TRANSFER_MASK (INTERNET_FLAG_TRANSFER_BINARY \ 
	           | INTERNET_FLAG_TRANSFER_ASCII)
	
	        ASSERT((dwFlags & _AFX_TRANSFER_MASK) != 0);
	        ASSERT((dwFlags & _AFX_TRANSFER_MASK) != _AFX_TRANSFER_MASK);
	
	        DWORD dwServiceType;
	        CString strServer;
	        CString strObject;
	        INTERNET_PORT nPort;
	
	        BOOL bParsed = AfxParseURL(pstrURL, dwServiceType,
	           strServer, strObject, nPort);
	
	        // if it turns out to be a file...
	        if (bParsed && dwServiceType == AFX_INET_SERVICE_FILE)
	        {
	           CString userName;
	           CString password;
	
	           // Get the normalized file name with out converting
	           // unsafe characters to escape sequence.
	
	           AfxParseURLEx(pstrURL, dwServiceType, strServer,
	              strObject, nPort, userName, password, ICU_NO_ENCODE);
	
	           int nMode = CFile::modeRead | CFile::shareCompat;
	           if (dwFlags & INTERNET_FLAG_TRANSFER_BINARY)
	              nMode |= CFile::typeBinary;
	           else
	              nMode |= CFile::typeText;
	
	           return new CStdioFile(strObject, nMode);
	        }
	
	        return CInternetSession::OpenURL(pstrURL,   dwContext, dwFlags,
	           pstrHeaders, dwHeadersLength);
	     }
	
	REFERENCES
	==========
	
	The specification for URL's are published by The World Wide Web Consortium
	(W3C). The specifications define the escape sequences and unsafe characters. Its
	URL is:
	
	  http://www.w3.org/
	
	NOTE: Web links may change without notice.
	
	Additional query words: 4.20b space file OpenURL filename
	
	======================================================================
	Keywords          : kbInternet kbMFC kbVC kbVC500 kbVC600 kbVS97 kbVS600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
