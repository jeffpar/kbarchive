---
layout: page
title: "Q85514: INFO: _DEBUG Must Be Defined When Linking to Debug Libraries"
permalink: /kb/085/Q85514/
---

## Q85514: INFO: _DEBUG Must Be Defined When Linking to Debug Libraries

{% raw %}

	Article: Q85514
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbDebug kbMFC kbVC kbVC100 kbVC150 kbGrpDSMFCATL
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To link an application with the debugging version of the Microsoft Foundation
	Class (MFC) libraries, the source code must define the _DEBUG macro at compile
	time. Specify the name of the appropriate MFC library on the LINK command line
	before the name of the appropriate C/C++ Run-time Library.
	
	MORE INFORMATION
	================
	
	The debugging versions of the MFC libraries provide additional debugging
	information in functions that the C/C++ run-time libraries normally provide
	(such as "new" and "delete"). An attempt to link code compiled when the_DEBUG
	macro is not defined with the debugging libraries may fail and LINK may generate
	errors similar to the following:
	
	  
	
	  C:\...\MFC\lib\safxcwd.lib(memory.cpp) : error L2025: public:
	     static void __near* __near __cdecl
	     CObject::operator new(unsigned int) : symbol defined
	     more than once
	
	  
	
	  C:\...\MFC\lib\safxcwd.lib(memory.cpp) : error L2025: public:
	     static void __near __cdecl
	     CObject::operator delete(void __near*) : symbol defined
	     more than once
	
	When compiling from the command line, use the /D compiler option to specify the
	_DEBUG macro. For example, in Microsoft C/C++ version 7.0 for MS-DOS and Windows
	or in Visual C++ version 1.0 or 1.5 for Windows, the command line might look
	like the following:
	
	     cl /AS /D_DEBUG test.cpp safxcwd.lib
	
	In Visual C++ 32-bit edition version 1.0, the command line might look like the
	following:
	
	     cl /D_DEBUG /D_X86_ test.cpp nafxcwd
	
	When you compile code that uses the Microsoft Foundation Classes in Programmer's
	WorkBench (PWB), select the Use MFC Libraries option. (To do so, choose Language
	Options from the Options menu, then choose Compiler Options, choose Additional
	Compiler Options, and select MFC Libraries. Then choose OK.) PWB automatically
	inserts the /D_DEBUG option when it compiles the debugging version of your
	application. The PWB-generated LINK command specifies the appropriate Microsoft
	Foundation Classes library and the appropriate C/C++ Run-time Library in the
	correct order.
	
	When you compile code that uses the Microsoft Foundation Classes in Visual
	Workbench (VWB) in Visual C++ 1.0 or 1.5 for Windows, or Visual C++, 32-bit
	edition, version 1.0, select the Use MFC Libraries option. (To do so, choose
	Project from the Options menu, then select Use Microsoft Foundation Classes and
	choose OK.) VWB automatically inserts the /D_DEBUG option when is compiles the
	debugging version of your application. The VWB- generated LINK command specifies
	the appropriate Microsoft Foundation Classes library and the appropriate C/C++
	run-time library in the correct order.
	
	In Visual C++, 32-bit Edition, version 2.0 and later, internal makefiles
	automatically include a /D_DEBUG option on the build line debug targets.
	Therefore, removing /D_DEBUG from the preprocessor command line options does not
	cause an error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbDebug kbMFC kbVC kbVC100 kbVC150 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
