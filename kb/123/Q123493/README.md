---
layout: page
title: "Q123493: OutputDebugString() Without &#92;n May GP Fault in MSVC.EXE"
permalink: kb/123/Q123493/
---

## Q123493: OutputDebugString() Without &#92;n May GP Fault in MSVC.EXE

	Article: Q123493
	Product(s): Microsoft C Compiler
	Version(s): 1.5,2.0
	Operating System(s): 
	Keyword(s): kbfile kbpatch kbDebug kbide
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.5 
	   - Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If character strings passed as arguments to the OutputDebugString() API do not
	end with a newline character \n, corrupt output appears in the Integrated
	Debugger's Output Window. In addition, a general protection fault (GP) fault can
	occur in MSVC.EXE. The Microsoft Foundation Classes (MFC) TRACE() macro and
	CDumpContext class both use the OutputDebugString() API to send information to
	the Integrated Debugger's Output window. Therefore, using a character string
	without a newline character with the MFC TRACE() macro or CDumpContext class,
	will also cause this problem. Avoid passing strings that do not have an appended
	newline character to OutputDebugString(), TRACE(), and CDumpContext objects.
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was not reproducible in Microsoft Visual
	C++, 32-bit Edition, version 4.0.
	
	NOTE: Microsoft has released a patch to Visual C++ version 1.5 that will fix this
	problem. This patch will modify the Visual Workbench 1.50, the new one will be
	version 1.50.01.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	VC1501.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Add the following code to an executable portion of your application:
	
	        int i;
	        for (i=0; i<500; i++)
	           OutputDebugString( "This is a test!!!" );
	
	2. Rebuild the application, and run it (press the F5 key) such that the Debug
	  Output window is hidden.
	
	3. While the loop of code is executing, switch to the Debug Output window, and
	  scroll through the text. Or attempt to select a portion of the text using the
	  mouse. You'll see garbage in the Output Window. Prolonged scrolling will
	  occasionally generate a GP fault in MSVC.EXE.
	
	Additional query words: GPF
	
	======================================================================
	Keywords          : kbfile kbpatch kbDebug kbide 
	Technology        : kbVCsearch kbAudDeveloper kbIntegratedDebugger
	Version           : :1.5,2.0
	Solution Type     : kbfix
	
	=============================================================================
	
