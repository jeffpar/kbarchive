---
layout: page
title: "Q128148: PRB: Procedure Entry Point FDIV Not Located in MSVCRT20.DLL"
permalink: /kb/128/Q128148/
---

## Q128148: PRB: Procedure Entry Point FDIV Not Located in MSVCRT20.DLL

{% raw %}

	Article: Q128148
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.1
	Operating System(s): 
	Keyword(s): kbprogramming kbtshoot kbusage kbCRT kbVC
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a Visual C++ version 2.1 application on Windows NT, you may
	receive this error:
	
	  The procedure entry point 'symbol' could not be located in the dynamic
	  library MSVCRT20.DLL.
	
	where 'symbol' could be one or all of these:
	
	  _adjust_fdiv
	  _adj_fdiv_r
	  _adj_fdiv_m64
	  _adj_fdivr_m64
	
	
	CAUSE
	=====
	
	The MSVCRT20.DLL file shipped with Visual C++ version 2.1 includes a fix for
	Pentium floating point functions. The faulty Pentium FDIV operations are
	implemented as internal functions in MSVCRT20.DLL. The error listed above is
	caused by linking to an older version of MSVCRT20.DLL - one that does not
	contain these functions.
	
	RESOLUTION
	==========
	
	The MSVCRT20.DLL library located in the WINDOWS\SYSTEM32 directory under Windows
	NT, should be version 2.10 or greater. You can check the version by using the
	File Manager. Select (highlight) the MSVCRT20.DLL file, and press ALT-ENTER to
	get its properties. If it isn't version 2.10, copy the newer version from the
	Visual C++ version 2.1 CD.
	
	
	A patch has been made available for those who do not have the Visual C++ version
	2.1 product CD. For additional information, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q128123 PATCH: Pentium FDIV Patch for Visual C++ 2.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbtshoot kbusage kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC210
	Version           : winnt:2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
