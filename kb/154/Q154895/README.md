---
layout: page
title: "Q154895: FIX: CInternet::File ReadString() Loses Data"
permalink: kb/154/Q154895/
---

## Q154895: FIX: CInternet::File ReadString() Loses Data

	Article: Q154895
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbInternet kbMFC kbSDKInet kbVC420bug kbVC500fix kbGrpDSInet
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling CInternetFile::ReadString() without calling SetReadBufferSize() first
	can result in lost data. If the file being read is less than 4096 bytes (the
	default read buffer size), a null string will be returned into the buffer
	specified by the first argument of ReadString(). The ReadString() function will
	also return NULL. If the file being read is greater than 4096 bytes, the first
	4096 bytes will be lost and then subsequent ReadString() calls will return the
	rest of the data.
	
	You can see this problem by running the TEAR MFC sample that is included on the
	Visual C++ 4.2 CD.
	
	CAUSE
	=====
	
	There is a bug in CInternetFile::ReadString(). It calls InternetReadFile()
	twice. The second call to InternetReadFile() removes the data retrieved by the
	first call to InternetReadFile().
	
	RESOLUTION
	==========
	
	To prevent ReadString from calling InternetReadFile() twice, call
	SetReadBufferSize() before making the first call to ReadString. This sets a read
	buffer, which means that the following code in ReadString is not executed:
	
	     if (m_pbReadBuffer == NULL)
	     {
	         if (!SetReadBufferSize(4096))   // arbitrary but reasonable
	             return NULL;
	         if (!InternetReadFile(m_hFile, m_pbReadBuffer, m_nReadBufferSize,
	                 &dwRead))
	             AfxThrowInternetException(m_dwContext);
	          m_nReadBufferBytes = dwRead;
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was fixed in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	To fix the problem in the TEAR sample, before the ReadString() call, add a call
	to SetReadBufferSize(). For example:
	
	     TCHAR sz[1024];
	     pFile->SetReadBufferSize(4096);  // Add this line
	     while (pFile->ReadString(sz, 1023))
	     {
	         if (bStripMode)
	         StripTags(sz);
	         cout << sz;
	     }
	
	Additional query words: kbVC420bug kbDSupport WinInet Tear
	
	======================================================================
	Keywords          : kbInternet kbMFC kbSDKInet kbVC420bug kbVC500fix kbGrpDSInet 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
