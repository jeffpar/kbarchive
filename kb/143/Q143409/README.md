---
layout: page
title: "Q143409: DOC: CFile::GetFileTitle May Return with File Extension"
permalink: /kb/143/Q143409/
---

## Q143409: DOC: CFile::GetFileTitle May Return with File Extension

	Article: Q143409
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0; :
	Operating System(s): 
	Keyword(s): kbdocfix kbFileIO kbMFC kbVC400bug kbVC410fix kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the GetFileTitle() CFile member function to return the file's title may
	return the extension as well. However, the documentation for this member
	function does not fully describe this "by design" behavior.
	
	This was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	The behavior of CFile::GetFileTitle() member function has changed in Windows 95.
	The expected behavior is described here.
	
	From the Win32 SDK GetFileTitle() documentation:
	
	In Windows 95, the GetFileTitle() function retrieves the same text that the
	system would compose in displaying a file name to the user. This text is
	intended to be used for display purposes only and is in accordance with the
	user's preferences for display of filenames. There are two important
	implications of this enhancement: First, an application cannot expect to use the
	resultant text to call file system functions because it is merely a display
	name; Second, in preserving the function's "insufficient buffer" case, the
	return value for that code path reflects the size of the text that would be
	composed in the normal case such that the caller may attempt to allocate
	sufficient storage and retrieve the result with a subsequent call to
	GetFileTitle(). More generally, there is no guaranteed connection between the
	resultant text or return value and the characters in the original buffer passed
	by the application.
	
	In porting applications to Windows 95, you need to update any code that relies on
	such behavior in previous versions of the operating system. The most common case
	is code that deliberately calls GetFileTitle() with a NULL return buffer,
	passing size 0, and then uses the return value as an index into the original
	string. This technique is no longer supported. Applications can usually achieve
	similar results (and superior performance) with run-time library functions such
	as strrchr, wcsrchr, and _mbsrchr.
	
	Additional query words: dskbsweep 4.00 4.10
	
	======================================================================
	Keywords          : kbdocfix kbFileIO kbMFC kbVC400bug kbVC410fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbMFC
	Version           : winnt:4.0; :
	
	=============================================================================
	
