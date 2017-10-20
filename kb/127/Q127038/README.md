---
layout: page
title: "Q127038: FIX: CString::Format Gives Assertion Failed, Access Violation"
permalink: /kb/127/Q127038/
---

## Q127038: FIX: CString::Format Gives Assertion Failed, Access Violation

{% raw %}

	Article: Q127038
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1
	Operating System(s): 
	Keyword(s): kbcode kbMFC kbString kbVC200bug kbVC210bug kbVC220fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using CString::Format causes one of the following:
	
	- Assertion Failed: <application>: File strex.cpp, Line 360
	
	-or-
	
	- Assertion Failed: <application>: File strex.cpp, Line 348
	
	-or-
	
	- An Access Violation with output similar to this:
	
	  Unhandled Exception in <application> (MFC30D.DLL)
	  0xC0000005: Access Violation
	
	CAUSE
	=====
	
	There are three known bugs in the CString::Format() member function in MFC
	version 3.0 that can cause this behavior:
	
	- Bug One: Using a format width specifier that is greater than the length of
	  the data passed to CString::Format().
	
	- Bug Two: Using an asterisk width specifier.
	
	- Bug Three: Using an asterisk precision specifier.
	
	RESOLUTION
	==========
	
	Create an updated function by using the code listed below. To use the code,
	define a new function named Format. The new format function will take a CString
	as the first parameter. Then use the new Format function instead of
	CString::Format.
	
	For example, instead of using this:
	
	     CString str;
	     str.Format(...)
	
	use this:
	
	     CString str;
	     Format(str,...)
	
	Updated CString::Format Code with Necessary Constant Definitions
	----------------------------------------------------------------
	
	  #define FORCE_ANSI      0x10000
	  #define FORCE_UNICODE   0x20000
	
	  // formatting (using wsprintf style formatting)
	  void Format(CString& str, LPCTSTR lpszFormat, ...)
	  {
	       ASSERT(AfxIsValidString(lpszFormat, FALSE));
	
	       va_list argList;
	       va_start(argList, lpszFormat);
	
	       // make a guess at the maximum length of the resulting string
	       int nMaxLen = 0;
	       for (LPCTSTR lpsz = lpszFormat; *lpsz != '\0';
	            lpsz = _tcsinc(lpsz))
	       {
	            // handle '%' character, but watch out for '%%'
	            if (*lpsz != '%' || *(lpsz = _tcsinc(lpsz)) == '%')
	            {
	                 nMaxLen += _tclen(lpsz);
	                 continue;
	            }
	
	            int nItemLen = 0;
	
	            // handle '%' character with format
	            int nWidth = 0;
	            for (; *lpsz != '\0'; lpsz = _tcsinc(lpsz))
	            {
	                 // check for valid flags
	                 if (*lpsz == '#')
	                      nMaxLen += 2;   // for '0x'
	                 else if (*lpsz == '*')
	                      nWidth = va_arg(argList, int);
	                 else if (*lpsz == '-' || *lpsz == '+' || *lpsz == '0'
	                          || *lpsz == ' ')
	                             ;
	                 else // hit non-flag character
	                            break;
	            }
	            // get width and skip it
	            if (nWidth == 0)
	            {
	                 // width indicated by
	                 nWidth = _ttoi(lpsz);
	                 for (; *lpsz != '\0' && _istdigit(*lpsz);
	                          lpsz = _tcsinc(lpsz))
	                       ;
	            }
	            ASSERT(nWidth >= 0);
	
	            int nPrecision = 0;
	            if (*lpsz == '.')
	            {
	                 // skip past '.' separator (width.precision)
	                 lpsz = _tcsinc(lpsz);
	
	                 // get precision and skip it
	                 if (*lpsz == '*')
	                 {
	                      nPrecision = va_arg(argList, int);
	                      lpsz = _tcsinc(lpsz);
	                 }
	                 else
	                 {
	                      nPrecision = _ttoi(lpsz);
	                      for (; *lpsz != '\0' && _istdigit(*lpsz);
	                      lpsz = _tcsinc(lpsz))
	                              ;
	                 }
	                 ASSERT(nPrecision >= 0);
	            }
	
	            // should be on type modifier or specifier
	            int nModifier = 0;
	            switch (*lpsz)
	            {
	            // modifiers that affect size
	            case 'h':
	                 nModifier = FORCE_ANSI;
	                 lpsz = _tcsinc(lpsz);
	                 break;
	            case 'l':
	                 nModifier = FORCE_UNICODE;
	                 lpsz = _tcsinc(lpsz);
	                 break;
	
	            // modifiers that do not affect size
	            case 'F':
	            case 'N':
	            case 'L':
	                 lpsz = _tcsinc(lpsz);
	                 break;
	            }
	
	            // now should be on specifier
	            switch (*lpsz | nModifier)
	            {
	            // single characters
	            case 'c':
	            case 'C':
	                 nItemLen = 2;
	                 va_arg(argList, TCHAR);
	                 break;
	            case 'c'|FORCE_ANSI:
	            case 'C'|FORCE_ANSI:
	                 nItemLen = 2;
	                 va_arg(argList, char);
	                 break;
	            case 'c'|FORCE_UNICODE:
	            case 'C'|FORCE_UNICODE:
	                 nItemLen = 2;
	                 va_arg(argList, WCHAR);
	                 break;
	
	            // strings
	            case 's':
	            case 'S':
	                 nItemLen = lstrlen(va_arg(argList, LPCTSTR));
	                 nItemLen = max(1, nItemLen);
	                 break;
	            case 's'|FORCE_ANSI:
	            case 'S'|FORCE_ANSI:
	                 nItemLen = lstrlenA(va_arg(argList, LPCSTR));
	                 nItemLen = max(1, nItemLen);
	                 break;
	  #ifndef _MAC
	            case 's'|FORCE_UNICODE:
	            case 'S'|FORCE_UNICODE:
	                 nItemLen = wcslen(va_arg(argList, LPWSTR));
	                 nItemLen = max(1, nItemLen);
	                 break;
	  #endif
	            }
	
	            // adjust nItemLen for strings
	            if (nItemLen != 0)
	            {
	                 nItemLen = max(nItemLen, nWidth);
	                 if (nPrecision != 0)
	                 nItemLen = min(nItemLen, nPrecision);
	            }
	            else
	            {
	                 switch (*lpsz)
	                 {
	                 // integers
	                 case 'd':
	                 case 'i':
	                 case 'u':
	                 case 'x':
	                 case 'X':
	                 case 'o':
	                      va_arg(argList, int);
	                      nItemLen = 32;
	                      nItemLen = max(nItemLen, nWidth+nPrecision);
	                      break;
	
	                 case 'e':
	                 case 'f':
	                 case 'g':
	                 case 'G':
	                      va_arg(argList, _AFX_DOUBLE);
	                      nItemLen = 32;
	                      nItemLen = max(nItemLen, nWidth+nPrecision);
	                      break;
	
	                 case 'p':
	                      va_arg(argList, void*);
	                      nItemLen = 32;
	                      nItemLen = max(nItemLen, nWidth+nPrecision);
	                      break;
	
	                 // no output
	                 case 'n':
	                      va_arg(argList, int*);
	                      break;
	
	                 default:
	                      ASSERT(FALSE);  // unknown formatting option
	                 }
	            }
	
	            // adjust nMaxLen for output nItemLen
	            nMaxLen += nItemLen;
	       }
	       va_end(argList);
	
	       // finally, set the buffer length and format the string
	       va_start(argList, lpszFormat);  // restart the arg list
	       str.GetBuffer(nMaxLen);
	       VERIFY(_vstprintf(str.GetBuffer(1), lpszFormat, argList) <= nMaxLen);
	       str.ReleaseBuffer();
	       va_end(argList);
	  }
	
	STATUS
	======
	
	Microsoft has confirmed these to be bugs in the Microsoft products listed at the
	beginning of this article. The first two bugs were fixed in MFC version 3.1 that
	shipped with Microsoft Visual C++, 32-bit Edition, version 2.1, and the third
	was fixed in Visual C++, 32-bit Edition, version 2.2.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problems
	---------------------------------
	
	The following code fragments illustrate the bugs.
	
	Bug One: Using width format specifier greater than data length causes failure:
	
	     char *pstr = "four";
	     CString string;
	
	     string.Format("%4s", pstr);    // Okay
	     string.Format("%10s", pstr);   // Causes failure
	     string.Format("%-10s", pstr);  // Causes failure
	
	Bug Two: Using asterisk width specifier causes failure:
	
	     char *pstr = "data";
	     CString string;
	     string.Format("%*s", 4, pstr);     // Causes error
	
	Bug Three: Using an asterisk precision specifier causes failure:
	
	     CString str;
	     str.Format("%*.*s",5,5,"Hello World"); // Causes assertion
	
	Additional query words: 2.00 3.00 2.10 3.10
	
	======================================================================
	Keywords          : kbcode kbMFC kbString kbVC200bug kbVC210bug kbVC220fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
