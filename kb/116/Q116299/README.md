---
layout: page
title: "Q116299: FIX: Print Preview Problems for Chars with ASCII Values &gt; 127"
permalink: kb/116/Q116299/
---

## Q116299: FIX: Print Preview Problems for Chars with ASCII Values &gt; 127

	Article: Q116299
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbprint kbMFC kbPrinting kbVC100 kbVC150 kbGrpDSMFCATLkbbuglist kbfixlist
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Foundation Classes (MFC) library applications may have problems
	performing a print preview of text that contains characters with ASCII values
	greater than 127. The problems can range from uneven spacing of the characters
	to a general protection fault (GPF) when you try to activate a Print Preview.
	
	CAUSE
	=====
	
	The routine "CPreviewDC::ComputeDeltas()", located in the file DCPREV.CPP,
	passes signed char values as the second and third parameters to the function
	"::GetCharWidth()". However, ::GetCharWidth() takes unsigned integer values for
	its second and third parameters. In the process of converting from a signed char
	to an unsigned int, the wrong value is passed to ::GetCharWidth(), and the
	function either returns incorrect values or causes a GPF.
	
	RESOLUTION
	==========
	
	To avoid the problem, you can modify the file DCPREV.CPP and declare the two
	variables "lpszCurChar" and "lpszStartRun" as being long pointers to unsigned
	const characters. See the "MORE INFORMATION" section, below, to see exactly what
	changes need to be made.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in MFC version 3.0, included with
	Visual C++ version 2.0.
	
	MORE INFORMATION
	================
	
	The function CPreviewDC::ComputeDeltas(,) located in the source file DCPREV.CPP,
	declares and uses two variables called lpszCurChar and lpszStartRun. These two
	variables are declared as being of type LPCSTR (in other words, 32-bit pointers
	to a const signed char). To avoid the problem of the pointers referring the
	::GetCharWidth() function to passing characters, declare the variables
	lpszCurChar and lpszStartRun as being 32-bit pointers to const unsigned chars.
	With versions 2.0 and 2.5 of the MFC library supplied with Visual C++ for
	Windows, versions 1.0 and 1.5, this can be done when you define a new type
	called "LPCTSTR" with the following typedef:
	
	     typedef const unsigned char FAR * LPCTSTR;
	
	Place the definition of the LPCSTR type in the file DCPREV.CPP at global scope
	before the definition of the function "CPreviewDC::ComputeDeltas()". The LPCTSTR
	type is already defined in the 32-bit version of the MFC library (supplied with
	Visual C++ for Windows NT, version 1.0) and does not need to be defined in
	DCPREV.CPP with that version of the MFC library.
	
	The variables lpszCurChar and lpszStartRun should be declared as being of type
	LPCTSTR. To do this, make the changes listed below:
	
	1. In the file DCPREV.CPP supplied with Visual C++ for Windows, versions 1.0 and
	  1.5, change lines 457 and 458 to read as follows:
	
	        LPCTSTR lpszCurChar = (LPCTSTR)lpszString;
	        LPCTSTR lpszStartRun = (LPCTSTR)lpszString;
	
	2. Change lines 489 and 490 to read as follows:
	
	        CSize sizeExtent = ::GetTextExtent(m_hAttribDC,(LPCSTR)lpszStartRun,
	            nRunLength);
	
	3. In the file DCPREV.CPP, supplied with Visual C++ for Windows NT, version 1.0,
	  change lines 466 and 467 to read as follows:
	
	        LPCTSTR lpszCurChar = lpszString;
	        LPCTSTR lpszStartRun = lpszString;
	
	4. After following steps 1 through 3, rebuild the MFC library. For more
	  information on rebuilding the MFC library, refer to the Class Library User's
	  Guide or to the README.TXT file located in the MFC\SRC directory.
	
	Additional query words: international foreign extended umlaut 1.00 1.50 2.00 2.10 2.50 kbNoUpdate
	
	======================================================================
	Keywords          : kbprint kbMFC kbPrinting kbVC100 kbVC150 kbGrpDSMFCATL kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
