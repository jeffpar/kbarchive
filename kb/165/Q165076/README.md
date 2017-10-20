---
layout: page
title: "Q165076: INFO: LNK2001 on CRT Symbols in ATL Release Build"
permalink: /kb/165/Q165076/
---

## Q165076: INFO: LNK2001 on CRT Symbols in ATL Release Build

{% raw %}

	Article: Q165076
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0
	Operating System(s): 
	Keyword(s): kbATL200 kbATL210 kbCRT kbVC600 kbATL300 kbFAQ kbGrpDSMFCATL
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Active Template Library COM AppWizard generates a release build of
	your project using macro _ATL_MIN_CRT. Selecting this configuration causes the C
	run-time (CRT) library startup code to not be linked into your project. If you
	use functions or code in your project that require the use of the C run-time
	library startup code, you may experience LNK2001 - unresolved external errors
	when you try to build the release version of your project.
	
	MORE INFORMATION
	================
	
	You can use some C run-time functions without requiring the CRT startup code.
	Examples include the mem* functions. Other functions require the CRT startup
	code. CRT string comparisons for example require the startup code as the CRT
	initializes some tables used for comparing. Global objects that have
	constructors also require the startup code. In Visual C++ 5.0, statically
	linking the startup code adds about 25K to your image (in Visual C++ 4.2 it is
	about 20K).
	
	Following are some suggestions for finding the cause of the LNK2001 errors:
	
	- In the linker options there is an "ignore libraries" edit box. Enter
	  Libcmt.lib into it, and build. You get several unresolved externals. This
	  list is everything that you are using from the CRT. Look for things that you
	  think may be pulling in the startup code and remove them if you can.
	
	- Don't ignore Libcmt.lib, but turn on the verbose flag for the linker. From
	  this, you can see what is triggering CRT startup code to get pulled in.
	
	If you decide that you really need the startup code, then remove the _ATL_MIN_CRT
	define from the project settings. You can also dynamically link to the CRT,
	which reduces your image size but requires the CRT's DLL. If you turn on
	exception handling you have to pull in the startup code. Even when building
	minsize the default is to statically link to the CRT and use _ATL_MIN_CRT.
	
	Additional query words: kbatl200 kbATL210 kbATL300 kbCtrl kbserver kberrmsg c-runtime
	
	======================================================================
	Keywords          : kbATL200 kbATL210 kbCRT kbVC600 kbATL300 kbFAQ kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbATL200 kbATL300 kbATL210
	Version           : :2.0,2.1,3.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
