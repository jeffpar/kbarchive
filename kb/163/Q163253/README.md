---
layout: page
title: "Q163253: BUG: &quot;Out of Memory&quot; Error When Saving to an Existing File"
permalink: /kb/163/Q163253/
---

## Q163253: BUG: &quot;Out of Memory&quot; Error When Saving to an Existing File

{% raw %}

	Article: Q163253
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbcode kbDocView kbFileIO kbMFC kbVC400bug kbVC410bug kbVC420bug kbGrpDSMFCATL
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save to an existing file in a Visual C++ MFC application, an "Out of
	memory" error occurs. The error occurs only when you save over an existing file
	on a non-NT platform, such as Windows 95, that is on a network. For example, if
	you run the Scribble sample on a Windows NT machine and try to save the scribble
	file to an existing file on a Windows 95 share, the error occurs.
	
	CAUSE
	=====
	
	MFC uses a class called CMirrorFile that protects a file in cases where an error
	may occur when you are writing to a file. MFC first writes out to a temporary
	file and then copies over to the final file when all writing is done.
	
	In the CMirrorFile::Open() function located in Doccore.cpp, the following code
	exists:
	
	      DWORD dwLength = 0;
	      PSECURITY_DESCRIPTOR pSecurityDescriptor = NULL;
	      GetFileSecurity(lpszFileName, DACL_SECURITY_INFORMATION,
	           NULL, dwLength, &dwLength);
	      pSecurityDescriptor = (PSECURITY_DESCRIPTOR) new BYTE[dwLength];
	
	In the case where a file is located on a non-NT share, the GetFileSecurity call
	fails. It may return a large value and this can cause the new statement to fail
	with an "out of memory" error. You need to select the return value for
	GetFileSecurity.
	
	RESOLUTION
	==========
	
	There are a couple of ways to work around the problem.
	
	- Override the CDocument::GetFile() function to return a CFile object rather
	  than a CMirrorFile object. You won't get the protection feature of
	  CMirrorFile which checks to see whether you can write the whole file to the
	  disk first. This may not be a problem depending upon what the application
	  does. See the code the CDocument::GetFile() in \Msdev\Mfc\Src\Doccore.cpp to
	  see the default implementation.
	
	- Create your own CMirrorFile class and check the return value of the
	  GetFileSecurity() call. If the call fails, ignore the code that modifies the
	  securities of the file. For example, you can create your own
	  CMirrorFile-derived class like the following code demonstrates:
	
	  **********
	  #include <afxpriv.h>
	  #include "c:\msdev\mfc\src\afximpl.h"
	
	  class CMyMirrorFile: public CMirrorFile
	  {
	        virtual BOOL Open(LPCTSTR lpszFileName, UINT nOpenFlags,
	        CFileException* pError = NULL);
	  };
	
	  BOOL CMyMirrorFile::Open(LPCTSTR lpszFileName, UINT nOpenFlags,
	        CFileException* pError)
	  {
	      ASSERT(lpszFileName != NULL);
	     m_strMirrorName.Empty();
	
	  #ifndef _MAC
	     CFileStatus status;
	     if (nOpenFlags & CFile::modeCreate) //opened for writing
	     {
	        if (CFile::GetStatus(lpszFileName, status))
	        {
	           CString strRoot;
	           AfxGetRoot(lpszFileName, strRoot);
	
	           DWORD dwSecPerClus, dwBytesPerSec, dwFreeClus, dwTotalClus;
	           int nBytes = 0;
	           if (GetDiskFreeSpace(strRoot, &dwSecPerClus, &dwBytesPerSec,
	  &dwFreeClus,
	              &dwTotalClus))
	           {
	              nBytes = dwFreeClus*dwSecPerClus*dwBytesPerSec;
	           }
	           if (nBytes > 2*status.m_size) // at least 2x free space avail
	           {
	              // get the directory for the file
	              TCHAR szPath[_MAX_PATH];
	              LPTSTR lpszName;
	              GetFullPathName(lpszFileName, _MAX_PATH, szPath, &lpszName);
	              *lpszName = NULL;
	
	              //let's create a temporary file name
	              GetTempFileName(szPath, _T("MFC"), 0,
	                 m_strMirrorName.GetBuffer(_MAX_PATH+1));
	              m_strMirrorName.ReleaseBuffer();
	           }
	        }
	     }
	  #endif
	
	     if (!m_strMirrorName.IsEmpty() &&
	        CFile::Open(m_strMirrorName, nOpenFlags, pError))
	     {
	        m_strFileName = lpszFileName;
	  #ifndef _MAC
	        FILETIME ftCreate, ftAccess, ftModify;
	        if (::GetFileTime((HANDLE)m_hFile, &ftCreate, &ftAccess, &ftModify))
	        {
	           AfxTimeToFileTime(status.m_ctime, &ftCreate);
	           SetFileTime((HANDLE)m_hFile, &ftCreate, &ftAccess, &ftModify);
	        }
	
	          // If GetFileSecurity returns an error, don't do anything with
	          // file securities.
	        DWORD dwLength = 0;
	        PSECURITY_DESCRIPTOR pSecurityDescriptor = NULL;
	        if (GetFileSecurity(lpszFileName, DACL_SECURITY_INFORMATION,
	           NULL, dwLength, &dwLength))
	          {
	              pSecurityDescriptor = (PSECURITY_DESCRIPTOR) new
	  BYTE[dwLength];
	            if (::GetFileSecurity(lpszFileName, DACL_SECURITY_INFORMATION,
	               pSecurityDescriptor, dwLength, &dwLength))
	            {
	               SetFileSecurity(m_strMirrorName, DACL_SECURITY_INFORMATION,
	  pSecurityDescriptor);
	            }
	            delete[] (BYTE*)pSecurityDescriptor;
	          }
	  #endif
	        return TRUE;
	     }
	     m_strMirrorName.Empty();
	     return CFile::Open(lpszFileName, nOpenFlags, pError);
	  }
	
	  *************
	
	Then you need to override CDocument::GetFile() to return an object of your new
	derived class.
	
	Please note that the work around uses the undocumented class CMirrorFile. The
	work around may have to be modified to work in a future version of MFC. Refer to
	this article again in the future for any updates and modifications that may be
	required for future versions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbDocView kbFileIO kbMFC kbVC400bug kbVC410bug kbVC420bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
