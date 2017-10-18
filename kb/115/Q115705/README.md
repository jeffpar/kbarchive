---
layout: page
title: "Q115705: BUG: Function Style Conversion Incorrectly Generates Errors"
permalink: kb/115/Q115705/
---

## Q115705: BUG: Function Style Conversion Incorrectly Generates Errors

	Article: Q115705
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC100bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC50
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling a class conversion function within a macro, as shown in the code
	below, the compiler may incorrectly generate the following errors:
	
	  error C2061: syntax error : identifier 'timeVal'
	  error C2066: cast to function type is illegal
	  error C2059: syntax error : ')'
	
	RESOLUTION
	==========
	
	Following are two possible workarounds for this problem:
	
	- Use temporary variables to hold an intermediate result.
	
	  unsigned int tmp1, tmp2;
	
	  tmp1 = WORD(timeVal);
	  tmp2 = WORD(dateVal);
	  m_dwVal = MAKELONG(tmp1, tmp2);
	
	-or-
	
	- Use a type cast operator instead of a conversion operator.
	
	  m_dwVal = MAKELONG((WORD)timeVal, (WORD)dateVal);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates this problem.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /c
	  */ 
	
	  typedef unsigned short      WORD;
	  typedef unsigned long       DWORD;
	
	  #define LONG long
	
	  #define MAKELONG(low, high) ((LONG)(((WORD)(low)) |  \ 
	                  (((DWORD)((WORD)(high))) << 16)))
	
	  class CMyDate
	  {
	  public:
	     operator WORD()
	     {
	        return m_wVal;
	     }
	
	  private:
	     WORD m_wVal;
	  };
	
	  class CMyTime
	  {
	  public:
	     operator WORD()
	     {
	        return m_wVal;
	     }
	
	  private:
	     WORD m_wVal;
	  };
	
	  class CMyDateTime
	  {
	     CMyDateTime(CMyDate dateVal, CMyTime timeVal)
	     {
	        m_dwVal = MAKELONG(WORD(timeVal), WORD(dateVal));
	
	     // This call works in both, even though it is identical.
	
	        m_dwVal= MAKELONG(timeVal.operator WORD(), dateVal.operator
	                 WORD());
	     }
	
	   private:
	     DWORD m_dwVal;
	  };
	
	Additional query words: kbVC400bug 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC100bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
