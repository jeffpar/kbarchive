---
layout: page
title: "Q128112: INFO: CFile::end (from CFile::Seek) Uses a Forward Offset"
permalink: kb/128/Q128112/
---

## Q128112: INFO: CFile::end (from CFile::Seek) Uses a Forward Offset

	Article: Q128112
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1; :1.0,1.5,1.51
	Operating System(s): 
	Keyword(s): kbprogramming kbdocfix kbdocerr kbFileIO kbMFC kbVC100bug kbVC151bug kbVC152bug kbVC200
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Foundation Classes (MFC) 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using CFile::Seek() with the CFile::end parameter to start seeking from the
	end of a file, a negative offset is required to seek backward in the file. The
	documentation for CFile::end states:
	
	  CFile::end  Move the file pointer backward lOff bytes from the end
	              of the file.
	
	This incorrectly indicates that a positive offset value will seek backwards in
	the file. Using 16-bit versions of MFC, CFile::Seek() performs the actual seek
	using int 21h function 42h. The "MS-DOS Encyclopedia" states that when seeking
	from the end of file, the offset:
	
	  ... can be either a positive or negative 32-bit integer ... [which] can move
	  the file pointer either forward or backward from the end of the file.
	
	When using MFC under Windows NT, CFile::Seek() calls SetFilePointer.
	Documentation for the offset parameter to SetFilePointer is as follows:
	
	  ... specifies the number of bytes to move the file pointer. A positive value
	  moves the pointer forward in the file and a negative value moves it backward.
	
	For both 16 and 32-bit versions of MFC, the code that performs the actual seek
	can be found in FILECORE.CPP.
	
	NOTE: This problem was fixed in Microsoft Visual C++, 32-bit Edition, version
	4.0. The Visual C++ 4.0 Books On-Line states the following:
	
	  CFile::end Move the file pointer lOff bytes from the end of the file. Note
	  that lOff must be negative to seek into the existing file; positive values
	  will seek past the end of the file.
	
	Additional query words: noupdate 2.5 2.50 2.51 3.0 3.00 1.00 1.50 1.51 2.00 2.10 4.00
	
	======================================================================
	Keywords          : kbprogramming kbdocfix kbdocerr kbFileIO kbMFC kbVC100bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC400fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbMFC kbvc150 kbvc100 kbVC410 kbVC151
	Version           : winnt:4.0,4.1; :1.0,1.5,1.51
	
	=============================================================================
	
