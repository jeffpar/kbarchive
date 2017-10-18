---
layout: page
title: "Q166505: DOC: FindNextFile Returns 0 for Last File Found"
permalink: kb/166/Q166505/
---

## Q166505: DOC: FindNextFile Returns 0 for Last File Found

	Article: Q166505
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbusage kbdocfix kbdocerr kbFileIO kbMFC kbVC420bug kbVC500bug kbVC600bug kbGrpDSMFCATL
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for CFileFind::FindNextFile, CFtpFileFind::FindNextFile, and
	CGopherFileFind::FindNextFile in the Class Library Reference with Visual C++ is
	incorrect. The documentation states:
	
	  Return Value
	
	  Nonzero if successful; otherwise 0. To get extended error information,
	  call the Win32 function GetLastError.
	
	The documentation should read:
	
	  Return Value
	
	  Nonzero if there are more files; zero if the file found is the last one
	  in the directory or if an error occurred. To get extended error
	  information, call the Win32 function GetLastError. If the file found
	  is the last file in the directory, or if no matching files can be found,
	  the GetLastError function returns ERROR_NO_MORE_FILES.
	
	MORE INFORMATION
	================
	
	The code below shows how to use CFileFind::FindNextFile to find every file in a
	directory.
	
	Sample Code
	-----------
	
	     CFileFind finder;
	     BOOL bWorking = finder.FindFile("*.*");
	     while (bWorking)
	     {
	         bWorking = finder.FindNextFile();
	         // Do processing here
	     }
	
	REFERENCES
	==========
	
	See the CFileFind overview in the Visual C++ documentation.
	
	Additional query words: FindNextFile FileFind CfileFind CftpFileFind CGopherFileFind
	
	======================================================================
	Keywords          : kbusage kbdocfix kbdocerr kbFileIO kbMFC kbVC420bug kbVC500bug kbVC600bug kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
