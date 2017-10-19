---
layout: page
title: "Q93447: PRB: C2060 or C1004 Error Occurs Using TRY/CATCH Macros"
permalink: /kb/093/Q93447/
---

## Q93447: PRB: C2060 or C1004 Error Occurs Using TRY/CATCH Macros

	Article: Q93447
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0,2.1,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC151 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500
	Last Modified: 13-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling a C++ program that uses the TRY and CATCH macros to implement
	exception handling, the compilation fails with the following error message:
	
	  error C2060: syntax error : end-of-file found
	
	With Visual C++ 32-bit Edition, the following error is generated:
	
	  fatal error C1004: unexpected end of file found
	
	CAUSE
	=====
	
	A CATCH (or AND_CATCH) block is not closed with the END_CATCH macro. The CATCH
	macro creates a code block that is to be terminated by the END_CATCH macro.
	
	RESOLUTION
	==========
	
	Modify the program code to add the END_CATCH macro to the exception handling
	code.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile option needed: none if source file given .cpp extension,
	     /Tp otherwise.
	  */ 
	
	  #include <afx.h>
	  #include <afxwin.h>
	
	  void main(void)
	  {
	     TRY
	     {
	     }
	     CATCH(CFileException,e)
	     {
	     }
	     // Uncomment following line for successful compilation
	     //END_CATCH
	  }
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC151 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC410 kbVC420 kbVC500 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,1.51,2.0,2.1,4.0,4.1,4.2,5.0
	Issue type        : kbprb
	
	=============================================================================
	
