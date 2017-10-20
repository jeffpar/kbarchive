---
layout: page
title: "Q191663: PRB: Unresolved const type_info, &#95;&#95;CxxThrowException"
permalink: /kb/191/Q191663/
---

## Q191663: PRB: Unresolved const type_info, &#95;&#95;CxxThrowException

{% raw %}

	Article: Q191663
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0 2.1
	Operating System(s): 
	Keyword(s): kbCPPonly kbVC500 kbVC600 kbOSWinCE200 kbOSWinCE210 kbOSWinCE211
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	- Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0 
	- Microsoft Windows CE Platform Builder, version 2.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Building an application results in one or more of the following errors:
	
	  
	
	  file.obj : error LNK2001: unresolved external
	       symbol "const  type_info::`vftable'" (??_7type_info@@6B@)
	
	  
	
	  file.obj : error LNK2001: unresolved external
	       symbol __CxxThrowException
	
	CAUSE
	=====
	
	This product does not currently support C++ exception handling or run-time Type
	Information.
	
	RESOLUTION
	==========
	
	Remove all references to C++ exception handling from the project. These
	include:
	
	- /GX switch
	
	- /GR switch
	
	- Use of catch-and-throw keywords
	
	STATUS
	======
	
	This behavior is by design.
	
	NOTE: Microsoft Windows CE Toolkit for Visual C++ 6.0 now generates warning C4531
	when compiling for Windows CE version 2.10 and later.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following example generates the previously mentioned errors when built for a
	Windows CE target platform:
	
	     #include <windows.h>
	
	     int WINAPI WinMain(
	         HINSTANCE hInstance,
	         HINSTANCE hPrevInstance,
	         LPTSTR lpCmdLine,
	         int nCmdShow )
	  {
	    throw 1;
	    return 0;
	  }
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbCPPonly kbVC500 kbVC600 kbOSWinCE200 kbOSWinCE210 kbOSWinCE211 
	Technology        : kbVCsearch kbAudDeveloper kbSDKSearch kbWinCETKVCSearch kbWinCEETKSearch kbWinCESDKSearch kbWinCESearch kbWinCESDK211 kbWinCETK600VC kbWinCEETKVC500
	Version           : WINDOWS:2.0 2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
