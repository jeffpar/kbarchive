---
layout: page
title: "Q122042: BUG: Fatal Error C1001 Using /Zg with Large C++ Header Files"
permalink: /kb/122/Q122042/
---

## Q122042: BUG: Fatal Error C1001 Using /Zg with Large C++ Header Files

	Article: Q122042
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVC100bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug
	Last Modified: 06-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 4.1, 4.2, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a .CPP file that includes a large amount of header file information
	may cause the compiler to generate a C1001 error when using the /Zg switch to
	generate function prototypes.
	
	- In Visual C++ 32-bit edition, version 6.0, the error message might appear as
	  follows:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 1786)
	
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information.
	- In Visual C++ 32-bit edition, version 5.0, the error message might appear as
	  follows:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 1188)
	
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information.
	- In Visual C++ 32-bit edition, version 4.x (Compiler version 10.00), the error
	  message might appear as follows:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 899)
	
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information.
	- In Visual C++ 32-bit edition, version 2.0 (Compiler version 9.00), the error
	  message appears as follows:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 1056)
	
	  Please choose the Technical Support command on the Visual C++ Help menu, or
	  open the Technical Support help file for more information.
	- In Visual C++ 32-bit edition, version 1.0 (Compiler version 8.00), the error
	  message appears as follows:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 602)
	
	  Please choose the Technical Support command on the Visual Workbench Help menu,
	  or open the Technical Support help file for more information.
	- In Visual C++ for Windows, versions 1.5 and 1.51 (Compiler version 8.00c),
	  the error message appears as follows:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 585)
	
	RESOLUTION
	==========
	
	Avoid using /Zg with a large amount of header file information, such as the MFC
	class library headers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 8.00 8.00c 9.00 10.00 10.10 10.20 afxwin afxcoll
	
	======================================================================
	Keywords          : kberrmsg kbVC100bug kbVC200bug kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC410 kbVC420 kbVC500 kbVC600 kbVC151 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVCNET kbVC500Search
	Version           : :1.0,1.5,1.51,2.0,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
