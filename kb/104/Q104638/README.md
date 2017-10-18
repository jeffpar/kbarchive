---
layout: page
title: "Q104638: FIX: CFile::SetStatus Throws Exception When Setting Time"
permalink: kb/104/Q104638/
---

## Q104638: FIX: CFile::SetStatus Throws Exception When Setting Time

	Article: Q104638
	Product(s): Microsoft C Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbFileIO kbMFC kbVC
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to set the status of a file using the function CFile::SetStatus
	results in a CFileException. If you do not have an exception handler defined,
	the result will depend on what the target type for the application is:
	
	- If it is a Win32-based application, a modal dialog box will pop up that says
	  the command failed.
	
	- If running a console application, you will see output similar to:
	
	  CFile exception: generic, OS error information = 1812 Warning: Throwing an
	  Exception of type CFileException Error: Un-caught Exception (CFileException)
	  AfxTerminate called AfxAbort called
	
	  abnormal program termination
	
	CAUSE
	=====
	
	This behavior occurs whenever the CFileStatus member m_mtime is nonzero. There
	is a coding problem that incorrectly throws an exception when updating the file
	time.
	
	The following console application duplicates this error:
	
	     /* Build as a console application using
	     ** Microsoft Foundation Classes
	     ** Be sure that TEMP.DAT file exists in the same directory.
	     */ 
	     #include <afx.h>
	     CFileStatus fs;
	     void main(void) {
	       CFile::GetStatus("TEMP.DAT",fs);
	       CFile::SetStatus("TEMP.DAT",fs);
	     }
	
	RESOLUTION
	==========
	
	To work around this problem, update the Microsoft Foundation Class (MFC) library
	files by making a modification to the MFC source file FILEST.CPP. Remove the
	semicolon from the end of the "if" statement in line 134:
	
	Change the following:
	
	     if (!SystemTimeToFileTime((LPSYSTEMTIME)&sysTime, pFileTime));
	
	to the following:
	
	     if (!SystemTimeToFileTime((LPSYSTEMTIME)&sysTime, pFileTime))
	
	You must then rebuild the MFC libraries. For more information on building these
	library files, refer to:
	
	- Appendix B of the online "Class Library User's Guide"
	
	-or-
	
	- The README.TXT file in the MSVC\MFC\SRC directory
	
	Here are two ways to build a debug and non-debug version of the MFC Library for
	Windows NT:
	
	Run the NMAKE command from the \MSVCNT\MFC\SRC directory.
	
	The debug version:
	
	     NMAKE MODEL=N TARGET=W DEBUG=1 CODEVIEW=2
	
	The release version:
	
	     NMAKE MODEL=N TARGET=W DEBUG=0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++ 32-bit
	Edition, version 2.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFileIO kbMFC kbVC 
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
