---
layout: page
title: "Q142203: DOC: GetFileTitle() &amp; GetFileName() Docs Are Switched"
permalink: /kb/142/Q142203/
---

## Q142203: DOC: GetFileTitle() &amp; GetFileName() Docs Are Switched

	Article: Q142203
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbCmnDlgFileO kbMFC kbVC400bug kbVC410fix kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The description of the string returned by the CFileDialog member functions
	GetFileTitle() and GetFileName() in the Visual C++ 4.0 documentation is
	switched.
	
	This documentation error was corrected in Visual C++ version 4.1.
	
	MORE INFORMATION
	================
	
	The Visual C++ 4.0 documentation for CFileDialog::GetFileTitle() states:
	
	  "The title of the filename includes both the name and the extension.
	   For example, GetFileTitle will return "TEXT.DAT" for the file
	   C:\FILES\TEXT.DAT."
	
	This is incorrect. Calling CFileDialog::GetFileTitle() for the file mentioned
	will return TEXT.
	
	Similarly, the Visual C++ 4.0 documentation for CFileDialog::GetFileName()
	states:
	
	  "The name of the file includes only its prefix, without the path or
	   the extension.  For example, GetFileName will return "TEXT" for the
	   file C:\FILES\TEXT.DAT."
	
	This is also incorrect. Calling CFileDialog::GetFileName() for the above file
	will return "TEXT.DAT".
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbCmnDlgFileO kbMFC kbVC400bug kbVC410fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Solution Type     : kbfix
	
	=============================================================================
	
