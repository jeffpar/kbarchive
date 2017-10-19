---
layout: page
title: "Q129770: FIX: CString::TrimLeft Fails in a UNICODE Application"
permalink: /kb/129/Q129770/
---

## Q129770: FIX: CString::TrimLeft Fails in a UNICODE Application

	Article: Q129770
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbnokeyword kbMFC kbVC210bug kbVC220fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In a UNICODE application, CString::TrimLeft creates a string that is the same
	length as the original with the first half of the trimmed string replacing the
	first few characters of the original string.
	
	The following are examples that show the result of using TrimLeft in a UNICODE
	application. The dash (-) character represents white space.
	
	  CString::TrimLeft()
	
	  Before      After
	  -------------------
	  --A         A-A
	  --AB        ABAB
	  --ABC       ABABC
	  --ABCD      ABCBCD
	  --ABCDE     ABCBCDE
	
	CAUSE
	=====
	
	The CString::TrimLeft function trims all leading white space characters from a
	string when using ASCII, which is a single-byte character set. However, when
	using UNICODE, which is a double-byte character set, the CString::TrimLeft
	function copies only half of the non-white space characters over the white
	spaces. In addition, because the null character is not in the first half of the
	non-white space characters, you end up with a new string that is a combination
	of the copied characters and the original string. This is due to the following
	line of code in STREX.CPP, which you'll find in MSVC20\MFC\SRC:
	
	     memmove(m_pchData, lpsz, nDataLength+1);
	
	This line of code moves (nDataLength+1) bytes instead of characters.
	
	RESOLUTION
	==========
	
	The easiest solution is to create a global TrimLeft function to, in this case,
	take a CString as a parameter. An implementation for this global function is
	listed in the "Sample Code to Workaround Problem" section below.
	
	While it is possible to override the CString class and modify the functionality
	of TrimLeft so that characters are moved instead of bytes, Microsoft doesn't
	recommend it because you would also need to override the constructors,
	assignment operators, and destructors for your CString derived class. To
	override CString::TrimLeft, copy the functionality from CString::TrimLeft in
	STREX.CPP line 390 to your function, and then change the problem line of code to
	this:
	
	     memmove(m_pchData, lpsz, (nDataLength+1)*sizeof(TCHAR));
	
	Both solutions will work with both single-byte and double-byte character sets.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 2.2.
	
	MORE INFORMATION
	================
	
	Sample Code to Workaround Problem
	---------------------------------
	
	  /* Compile options needed:
	  This change does not require special options.
	  */ 
	
	  void TrimLeft(CString& str){
	
	     // Get the cstring length and buffer pointer:
	
	        int    str_length = str.GetLength();
	        LPTSTR pstr_Data =  str.GetBuffer(str_length);
	
	    // Find the first non white-space character:
	
	       LPCTSTR pstr_non_space = pstr_Data;
	       while (_istspace(*pstr_non_space))
	               pstr_non_space = _tcsinc(pstr_non_space);
	
	    // Find the new length in characters:
	
	       int nDataLength = str_length - (pstr_non_space - pstr_Data);
	
	    // Replace this line:
	
	       // memmove(m_pchData, lpsz, nDataLength + 1);
	       // WITH THE FOLLOWING TO MOVE CHARACTERS INSTEAD OF BYTES:
	
	    memmove(pstr_Data,pstr_non_space, (nDataLength+1)*sizeof(TCHAR));
	
	    // Release the buffer pointer, and adjust the cstring length:
	
	       str.ReleaseBuffer(nDataLength);
	  }
	
	Additional query words: 2.10 3.10 3.1
	
	======================================================================
	Keywords          : kbnokeyword kbMFC kbVC210bug kbVC220fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
