---
layout: page
title: "Q132290: PRB: Problems Using CFile::m_hFile When Porting MFC Apps"
permalink: /kb/132/Q132290/
---

## Q132290: PRB: Problems Using CFile::m_hFile When Porting MFC Apps

{% raw %}

	Article: Q132290
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbFileIO kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbprb kbGrpDSMFCATL
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you port MFC applications that use CFile from Windows version 3.1 to
	Windows NT or Windows 95, you may encounter problems related to use of the
	m_hFile member variable.
	
	CAUSE
	=====
	
	In all versions of MFC, CFile:: m_hFile is defined as a UINT. In the 16-bit
	versions of MFC (versions 2.0 and 2.5x), m_hFile is a HANDLE that is created
	from a call to the C Runtime Library (CRT) function _dos_open(). In this case,
	other CRT functions that use the handle, such as _eof(), work correctly.
	
	In the 32-bit versions of MFC (versions 2.1 and 3.x), m_hFile is a handle that is
	created from a call to the Win32 function CreateFile(), which is incompatible
	with the C Runtime functions. In this case, you need to use the Win32 API
	function set.
	
	RESOLUTION
	==========
	
	If your MFC application must use functions outside of the CFile class to obtain
	the functionality you need, note these differences and use compatible
	functions.
	
	To obtain a C run-time file handle and set it to point to the operating system
	file handle m_hFile, you can use the _open_osfhandle() function. The handle
	returned by that function is compatible with _eof() and other C Runtime Library
	functions.
	
	REFERENCES
	==========
	
	Please see your online documentation for more information on compatible
	functions.
	
	Additional query words: 4.00 4.0 95 2.00 2.10 2.50 2.51 2.52 3.00 3.10 3.20 m_hFile
	
	======================================================================
	Keywords          : kbFileIO kbMFC kbVC100 kbVC150 kbVC200 kbVC400 kbprb kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,2.2,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
