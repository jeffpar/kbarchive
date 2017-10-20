---
layout: page
title: "Q103714: PRB: LNK4016: Unresolved External Symbol &quot;&#95;&#95;doserrno&quot;"
permalink: /kb/103/Q103714/
---

## Q103714: PRB: LNK4016: Unresolved External Symbol &quot;&#95;&#95;doserrno&quot;

{% raw %}

	Article: Q103714
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Building a project with Visual C++ 1.0 generates the following unresolved link
	error for __doserrno:
	
	  LNK4016: unresolved external symbol "__doserrno"
	
	Under Visual C++ 2.0 and 2.1, the following error is generated:
	
	  LNK2001: unresolved external symbol "__doserrno"
	
	NOTE: This behavior does not occur in MFC 4.0 included with Visual C++ version
	4.0 as MFC 4.0 supports multithreaded applications by default.
	
	CAUSE
	=====
	
	This error may be caused by compiling an application with /MT or /MD
	(multithreaded options) and linking with the default versions of the Microsoft
	Foundation Class (MFC) libraries. The default versions of the MFC libraries were
	not built with the multithreaded C run-time library, which results in the above
	error.
	
	The MFC Libraries do not support calling MFC code from any thread other than the
	primary thread. You can make calls to the MFC libraries or global AFX helper
	functions only from the primary thread.
	
	RESOLUTION
	==========
	
	The README.WRI file (installed by default in the \MSVCNT\ directory) describes
	how to remedy this problem. There are two possible solutions:
	
	- Rebuild a custom version of the MFC libraries with /MT or /MD defined. For
	  information on building libraries, see the section "Using the New Run-Time
	  Libraries" on page xx-xxi in the "Class Library Reference" manual. (Note that
	  the README.WRI incorrectly references this section as the "Class Library
	  User's Guide.")
	
	  For example, to build the library NAFXCWD.LIB, use following the command: "
	
	        NMAKE DEBUG=1 TARGET=W OPT="/MT" CODEVIEW=1
	
	  " (without the quotation marks)
	
	-or-
	
	- Rebuild the application using the single-threaded run-time library LIBC.LIB.
	  To select the single-threaded run-time library, choose the Runtime category
	  in the C/C++ Compiler Options dialog box.
	
	Additional query words: 1.00 2.00 2.10 LNK2001
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
