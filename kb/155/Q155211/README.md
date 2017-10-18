---
layout: page
title: "Q155211: FIX: C2373 on getwchar/putwchar When Using UNICODE &amp; &#95;&#95;stdcall"
permalink: kb/155/Q155211/
---

## Q155211: FIX: C2373 on getwchar/putwchar When Using UNICODE &amp; &#95;&#95;stdcall

	Article: Q155211
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCRT kbMFC kbVC420bug kbVC500fix kbGrpDSVCCompiler kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build a project, the Visual C++ 4.2 compiler generates the following
	errors:
	
	  
	
	  C:\MSDEV\INCLUDE\wchar.h(590): error C2373: 'getwchar': redefinition:
	                                 different type modifiers
	
	  
	
	  C:\MSDEV\INCLUDE\wchar.h(592): error C2373: 'putwchar': redefinition:
	                                 different type modifiers
	
	The compiler errors are generated if the project does all of the following:
	
	- Directly or indirectly includes the header file wchar.h.
	
	- Defines the preprocessor identifier _UNICODE.
	
	- Specifies the __stdcall or __fastcall calling convention.
	
	The errors can also be generated for any AppWizard-generated MFC applications
	that define the _UNICODE preprocessor and use the __stdcall or __fastcall
	calling convention. To reproduce this problem, please see the More Information
	section below.
	
	CAUSE
	=====
	
	In Wchar.h, functions getwchar and putwchar are prototyped as follows on line
	467 and line 469:
	
	     _CRTIMP wint_t __cdecl getwchar(void);
	     _CRTIMP wint_t __cdecl putwchar(wint_t);
	
	There is also an inline version of these two functions defined in this file on
	line 491 and line 493.
	
	     inline wint_t getwchar() { ... }
	     inline wint_t putwchar() { ... }
	
	Notice that the inline versions of getwchar and putwchar defined on line 491 and
	line 493 are not explicitly defined to use the __cdecl calling convention, which
	resolve the above compiler errors when the __stdcall or __fastcall calling
	convention is used.
	
	RESOLUTION
	==========
	
	If enabling _UNICODE is necessary to your application, work around this problem
	by doing the following:
	
	Use the __cdecl calling convention instead of the __stdcall or the __fastcall
	calling convention.
	
	NOTE: The linker may generate error LNK2001 on the unresolved external symbol
	"_WinMain@16" when you build an MFC application with UNICODE support. This is
	because MFC UNICODE applications use wWinMain as the entry point. To solve this
	problem, in the Output category of the Link field in the Project Settings dialog
	box, set the Entry Point Symbol to wWinMainCRTStartup.
	
	For additional information on the LNK2001 link error, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q125750 PRB:Error LNK2001: '_WinMain@16': Unresolved External Symbol
	
	-or-
	
	Modify the header file Wchar.h. Change line 491 and 493 from the following:
	
	     inline wint_t getwchar() { ... }
	     inline wint_t putwchar() { ... }
	
	to the following:
	
	     inline wint_t __cdel getwchar() { ... }
	     inline wint_t __cdel putwchar() { ... }
	
	Modify the header file again if it is overwritten.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Use the following steps to reproduce this problem:
	
	1. Generate an MFC application using the AppWizard and accept all the defaults.
	
	2. Modify the build settings as follows:
	  1. Add the _UNICODE preprocessor definition under C/C++/General.
	
	  2. Delete the _MBCS preprocessor definition under C/C++/General.
	
	  3. Choose the __stdcall or __fastcall calling convention under C/C++/Code
	     Generation.
	
	  4. Build the application.
	
	Additional query words: kbVC420bug
	
	======================================================================
	Keywords          : kbCompiler kbCRT kbMFC kbVC420bug kbVC500fix kbGrpDSVCCompiler kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
