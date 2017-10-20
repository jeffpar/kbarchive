---
layout: page
title: "Q104649: FIX: Compiler Issues C1001 or Hangs with Missing Closing Brace"
permalink: /kb/104/Q104649/
---

## Q104649: FIX: Compiler Issues C1001 or Hangs with Missing Closing Brace

{% raw %}

	Article: Q104649
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Compiling the sample code below from the Visual Workbench in Visual C++ version
	1.0 or an MS-DOS prompt under Windows causes the compiler to hang with no error
	messages being displayed. If the sample code is compiled under MS-DOS alone the
	following error occurs:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 581)
	
	Compiling the sample code with the compiler supplied with Visual C++ for Windows
	version 1.5 causes the compiler to generate the following error message:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 585)
	
	Compiling the sample code with the compiler supplied with Visual C++ for Windows
	NT causes the following error message:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 602)
	  Please choose the Technical Support command on the Visual Workbench Help menu,
	  or open the Technical Support help file for more information.
	
	CAUSE
	=====
	
	The code being compiled is missing a closing brace on the switch statement. This
	may also occur in other situations where a closing brace is missing. For
	example, if the closing brace closes a function that is the last function in a
	file, the same errors occur. To illustrate, remove the closing brace from the
	CStroke::FinishStroke() member function in SCRIBDOC.CPP in step 5 of the
	scribble tutorial.
	
	RESOLUTION
	==========
	
	Fix the code by adding the missing closing brace.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in C/C++ version 9.0, included with
	Visual C++ 32-bit Edition version 2.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <afxwin.h>    // MFC core and standard components
	
	  class CTestApp : public CWinApp
	  {
	  public:
	      CTestApp();
	  };
	
	  CTestApp::CTestApp()
	  {
	  }
	
	  CTestApp NEAR theApp;
	
	  LPSTR FunctionName (char* pszFileName)
	  {
	      DWORD dwMaxLength;
	      unsigned int nChars;
	      LPSTR LpSrc, lpDst, lpNew;
	      static char szPath [_MAX_PATH];
	
	      while (*LpSrc)
	      {
	          switch (*LpSrc)
	          {
	              case ('\\'):
	              case ('/'):
	                  *lpDst++ = *LpSrc++;
	                  nChars = 0;
	                  break ;
	
	              case ('<'):
	              case ('>'):
	              case ('"'):
	              case ('|'):
	                  ASSERT (FALSE);
	                  LpSrc++;
	                  break;
	
	              default:
	                  if (nChars < dwMaxLength)
	                      *lpDst++ = *LpSrc++;
	                  else
	                      LpSrc++;
	                  nChars++;
	                  break;
	
	          // Without the following closing brace for the switch
	          // statement, the compiler issues the C1001 error or hangs
	          // instead of generating the appropriate syntax error message.
	
	          //}
	      }
	
	      return lpNew;
	  }
	
	Additional query words: 1.00 1.50 8.00 8.00c curly
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
