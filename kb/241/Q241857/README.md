---
layout: page
title: "Q241857: BUG: CComBSTR Does Not Allocate Enough Space Sometimes"
permalink: kb/241/Q241857/
---

## Q241857: BUG: CComBSTR Does Not Allocate Enough Space Sometimes

	Article: Q241857
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbString kbVC600bug kbATL300bug kbDSupport kbGrpDSMFCATL
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following fragment of code produces different results with ATL version 2.1
	and ATL version 3.0:
	
	  char rawStr[128] = "01234567839";
	  CComBSTR bstr (4, rawStr);
	
	In ATL 2.1, the new bstr is L"0123"; however, in ATL 3.0, the new bstr is L"012".
	
	CAUSE
	=====
	
	This problem is due to a bug in the A2WBSTR function in the Atlconv.h file:
	
	  inline BSTR A2WBSTR(LPCSTR lp, int nLen = -1)
	  {
	   USES_CONVERSION;
	   BSTR str = NULL;
	   int nConvertedLen= MultiByteToWideChar(_acp, 0, lp, nLen, NULL, NULL)-1;
	   str = ::SysAllocStringLen(NULL, nConvertedLen);
	   if (str != NULL)
	   {
	    MultiByteToWideChar(_acp, 0, lp, -1,
	     str, nConvertedLen);
	   }
	   return str;
	  }
	
	If the MultiByteToWideChar function's fourth argument is -1, the string is
	assumed to be NULL-terminated and the number of bytes returned will include the
	NULL character. The result of this function should not subtract 1 (one) if nLen
	does not equal -1; it should only do this if nLen is equal to -1.
	
	RESOLUTION
	==========
	
	There are two ways to correct this problem:
	
	Method 1:
	
	Use one of the conversion macros to wrap the string passed into the constructor:
	
	  CComBSTR bstr(5, T2OLE(buf));
	
	  -or-
	
	  CComBSTR bstr(5, OLESTR("01234");
	
	This method uses the CComBSTR(int nSize, LPCOLESTR sz) constructor, which calls
	::SysAllocStringLen, and then returns a BSTR with the number of characters equal
	to nSize.
	
	Method 2:
	
	Change the incorrect code in Atlconv.h for the A2WBSTR function:
	
	1. Change the code in Atlconv.h for the A2WBSTR function from the following:
	
	  inline BSTR A2WBSTR(LPCSTR lp, int nLen = -1)
	  {
	    USES_CONVERSION;
	    BSTR str = NULL;
	    int nConvertedLen = MultiByteToWideChar(_acp, 0, lp, nLen, NULL, NULL)-1;
	    str = ::SysAllocStringLen(NULL, nConvertedLen);
	    if (str != NULL)
	    {
	      MultiByteToWideChar(_acp, 0, lp, -1, str, nConvertedLen);
	    }
	    return str;
	  }
	
	  to the following:
	
	  inline BSTR A2WBSTR(LPCSTR lp, int nLen = -1)
	  {
	     USES_CONVERSION;
	     BSTR str = NULL;
	     int nConvertedLen = MultiByteToWideChar(_acp, 0, lp,
	       nLen, NULL, NULL);
	   
	     // BUG FIX #1 (from Q241857): only subtract 1 from 
	     // the length if the source data is nul-terminated
	     if (nLen == -1)
	        nConvertedLen--;
	   
	     str = ::SysAllocStringLen(NULL, nConvertedLen);
	     if (str != NULL)
	     {
	       MultiByteToWideChar(_acp, 0, lp, nLen, str, nConvertedLen);
	     }
	     return str;
	  }
	
	2. Save Atlconv.h.
	
	3. On the Build menu, click Rebuild All. You need to do this on a Debug or
	  ReleaseMinDependency build so that the modified code above is linked into
	  your code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: A2WBSTR A2BSTR A2W BSTR SysAllocString
	
	======================================================================
	Keywords          : kbString kbVC600bug kbATL300bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
