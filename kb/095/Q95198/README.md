---
layout: page
title: "Q95198: PRB: C2061 Error Generated When DEBUG_NEW Used in Application"
permalink: /kb/095/Q95198/
---

## Q95198: PRB: C2061 Error Generated When DEBUG_NEW Used in Application

{% raw %}

	Article: Q95198
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1
	Operating System(s): 
	Keyword(s): kbnokeyword kbDebug kbMFC kbVC100 kbVC150 kbVC200 kbVC210 kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An attempt to compile an application that changes the definition of the "new"
	operator to DEBUG_NEW fails and the compiler generates the following message:
	
	  error C2061: syntax error : identifier 'p'
	
	CAUSE
	=====
	
	The statement "#define new DEBUG_NEW" precedes an IMPLEMENT_SERIAL or an
	IMPLEMENT_DYNACREATE macro call.
	
	RESOLUTION
	==========
	
	Modify the source code to place the DEBUG_NEW definition after all statements
	that call the IMPLEMENT_SERIAL or IMPLEMENT_DYNCREATE macros. For more
	information, see Chapter 15 of the Microsoft Visual C++ "Class Library User's
	Guide."
	
	MORE INFORMATION
	================
	
	This behavior has changed for Visual C++ version 4.0. However, if you build an
	application that makes use of DEBUG_NEW with Visual C++ 4.0, and then attempt to
	build that application in Visual C++ version 2.x, you will need to move the
	#define DEBUG_NEW as discussed above.
	
	Additional query words: 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 7.00
	
	======================================================================
	Keywords          : kbnokeyword kbDebug kbMFC kbVC100 kbVC150 kbVC200 kbVC210 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
