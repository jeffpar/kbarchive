---
layout: page
title: "Q152319: FIX: ReadString Gives Wrong Result Reading Long Strings"
permalink: /kb/152/Q152319/
---

## Q152319: FIX: ReadString Gives Wrong Result Reading Long Strings

	Article: Q152319
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbFileIO kbMFC kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdatekbbuglist kbfixlist
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Reading long strings (greater than 128 characters) from a CStdioFile with the
	ReadString method can result in truncated or incorrect data being returned in
	the string.
	
	CAUSE
	=====
	
	The pointer math used in calculating buffer offsets was incorrect in the code
	for CStdioFile::ReadString(CString& rString) in FILETXT.CPP.
	
	RESOLUTION
	==========
	
	The solution was a rewriting of the MFC code for
	CStdioFile::ReadString(CString& rString). The following code is from the MFC
	4.1 source:
	
	     BOOL CStdioFile::ReadString(CString& rString)
	     {
	          ASSERT_VALID(this);
	
	          rString = &afxChNil;    // empty string without deallocating
	          const int nMaxSize = 128;
	          LPTSTR lpsz = rString.GetBuffer(nMaxSize);
	          LPTSTR lpszResult;
	          int nLen;
	          for (;;)
	          {
	               lpszResult = _fgetts(lpsz, nMaxSize+1, m_pStream);
	               rString.ReleaseBuffer();
	
	               // handle error/eof case
	               if (lpszResult == NULL && !feof(m_pStream))
	               {
	                    clearerr(m_pStream);
	                    AfxThrowFileException(CFileException::generic, _doserrno,
	                         m_strFileName);
	               }
	
	               // if string is read completely or EOF
	               if (lpszResult == NULL ||
	                    (nLen = lstrlen(lpsz)) < nMaxSize ||
	                    lpsz[nLen-1] == '\n')
	               {
	                    break;
	               }
	
	               nLen = rString.GetLength();
	               lpsz = rString.GetBuffer(nMaxSize + nLen) + nLen;
	          }
	
	          // remove '\n' from end of string if present
	          lpsz = rString.GetBuffer(0);
	          nLen = rString.GetLength();
	          if (nLen != 0 && lpsz[nLen-1] == '\n')
	               rString.GetBufferSetLength(nLen-1);
	
	          return lpszResult != NULL;
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the Microsoft Foundation
	Classes (MFC), included with: Microsoft Visual C++, 32-bit Edition, version 4.1.
	
	MORE INFORMATION
	================
	
	When you invoke ReadString, CStdioFile::ReadString(CString& rString) enters
	an infinite loop that breaks when the string is completely read in or EOF is
	reached. It reads your string in chunks of 128 bytes, but the pointer that
	ReadString uses to position the next read into the string is being shifted by
	256 bytes. This results in bytes 129 through 256 being undefined.
	
	Since only 128 of the 140 bytes have been read before the shifting, the last 12
	bytes (140 - 128 = 12) are read into the wrong location in the string. Depending
	upon what happens to be in positions 129-256, the string is either truncated or
	shows invalid characters.
	
	Sample Code
	-----------
	
	The following code demonstrates the problem. It assumes you have a CString that
	has a large buffer already allocated for it, such as 256 bytes. You want to read
	a line that contains 140 bytes:
	
	     void ReadStringBug()
	     {
	          CString strBuffer;
	          CStdioFile sfMyFile( "C:\\test.txt", CFile::modeRead );
	
	          sfMyFile.ReadString( strBuffer );
	          AfxMessageBox( strBuffer );
	          sfMyFile.ReadString( strBuffer );
	          AfxMessageBox( strBuffer );
	     }
	
	You must supply a file (titled c:\test.txt in the example) that contains at least
	two strings with more than 128 characters in each string for the problem to be
	manifested.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFileIO kbMFC kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
