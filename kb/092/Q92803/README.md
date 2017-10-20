---
layout: page
title: "Q92803: Writing CR/LF Combination Using CFile::Write() Function"
permalink: /kb/092/Q92803/
---

## Q92803: Writing CR/LF Combination Using CFile::Write() Function

{% raw %}

	Article: Q92803
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0,4.1,7.0
	Operating System(s): 
	Keyword(s): kbFileIO kbMFC kbVC100 kbVC150 kbVC152 kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In an application developed with the Microsoft Foundation Classes (MFC) that
	uses the CFile class, the Write() member function may appear not to correctly
	process the carriage return-linefeed (CR/LF) combination unless both the
	carriage return and linefeed are explicitly stated.
	
	For example, the following code
	
	     CFile file;
	     // ...
	     file.Write("Hello\n", 6);
	     file.Write("Hello\n", 6);
	
	produces the following output:
	
	-------------------
	Hello
	    Hello
	-------------------
	
	However, the following code
	
	     file.Write("Hello\n\r", 7);
	     file.Write("Hello\n\r", 7);
	
	produces the following output:
	
	-------------------
	Hello
	Hello
	-------------------
	
	MORE INFORMATION
	================
	
	When an application uses the CStdioFile class derived from CFile, an application
	can open a file in either text mode or binary mode. Using a CStdioFile object is
	the preferred method to place a CR/LF combination into a file. However, if the
	application must use a CFile object, a CR/LF combination may be explicitly
	output as demonstrated above.
	
	Additional query words: kbinf 7.00 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00 4.10
	
	======================================================================
	Keywords          : kbFileIO kbMFC kbVC100 kbVC150 kbVC152 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0,4.1,7.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
