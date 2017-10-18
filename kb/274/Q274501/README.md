---
layout: page
title: "Q274501: BUG: CRT: wcsxfrm(NULL, string, 0) Fails Outside &quot;C&quot; Locale"
permalink: kb/274/Q274501/
---

## Q274501: BUG: CRT: wcsxfrm(NULL, string, 0) Fails Outside &quot;C&quot; Locale

	Article: Q274501
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC500 kbVC500bug kbVC600 kbVC600bug kbDSupport kbGrpDSToolskbbuglist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The C/C++ run-time library (CRT) function strxfrm and its wide-character version
	wcsxfrm transform a string that is based on locale-specific information. The
	expression "1 + strxfrm(NULL, string, 0)" can be used to calculate the required
	size of the destination buffer that is large enough to hold the strxfrm/wcsxfrm
	transformation of the source string, including the terminating 0 character.
	
	The expression "wcsxfrm(NULL, string, 0)" works for the default "C" locale but
	results in an Access Violation (AV) crash (the program stops responding) for
	other locales. The strxfrm function works correctly.
	
	Please refer to the sample code in the "More Information" Section for details.
	
	CAUSE
	=====
	
	When the "C" locale is used, the source string is copied into the destination
	buffer and the length of the source string is returned by using the
	wcsncpy/wcslen and strncpy/strlen functions.
	
	Outside of the "C" locale, the national language support (NLS) API functions are
	used to map one character string to another, performing a specified
	locale-dependent transformation. The wcsxfrm function uses an internal buffer;
	after the transformation is done, each character is copied into the destination
	buffer. However, the destination buffer is not checked for NULL pointer.
	
	RESOLUTION
	==========
	
	To work around the problem, pass a small buffer to the wcsxfrm function. Replace
	the failing line of code in the following sample with the following:
	
	  wchar_t tmp;
	  printf("wcsxfrm returned: %d\n", wcsxfrm(&tmp, ws, 1));
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the bug:
	
	  #include <stdio.h>
	  #include <locale.h>   
	  #include <wchar.h>    
	
	  void main()                                                   
	  {                                                             
	    wchar_t *ws = L"Hello";
	    char *cp;
	            
	    printf("wcsxfrm returned: %d\n", wcsxfrm(NULL, ws, 0)); 
	
	    cp = setlocale(LC_ALL, "English_United States.1252");
	    printf("setlocale returned: %s\n", cp);
	
	    // The next call results in an access violation.
	    printf("wcsxfrm returned: %d\n", wcsxfrm(NULL, ws, 0)); 
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC500 kbVC500bug kbVC600 kbVC600bug kbDSupport kbGrpDSTools kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
