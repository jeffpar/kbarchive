---
layout: page
title: "Q134980: PRB: C4251 &amp; C4275 Compiler Warnings While Compiling an AFXDLL"
permalink: /kb/134/Q134980/
---

## Q134980: PRB: C4251 &amp; C4275 Compiler Warnings While Compiling an AFXDLL

	Article: Q134980
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2
	Operating System(s): 
	Keyword(s): kberrmsg kbnokeyword kbDLL kbMFC kbVC200 kbVC220 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Compiler issues the following warning for a class derived from one of the
	MFC classes:
	
	  warning C4275: non dll-interface class <XXX> used as base for
	  dll-interface class <YYY>
	
	A related warning is issued when an object of some MFC class is embedded as a
	data member of a user-defined class:
	
	  warning C4251: <identifier> : class <XXX> needs to have
	  dll-interface to be used by clients of class <YYY>
	
	See the "Sample Code" section of this article an example of a class declaration
	that generates these warnings.
	
	This problem no longer occurs in vc 4.0 or later.
	
	CAUSE
	=====
	
	The DLL version of MFC does not export its classes by declaring them with "class
	__declspec(dllexport)." Instead, it exports its classes through entries in the
	EXPORTS section of its module definition (.def) file.
	
	Because the compiler has only the header files to work with, it cannot determine
	whether the MFC classes were actually exported, and therefore it issues the
	warning.
	
	RESOLUTION
	==========
	
	Because the MFC classes are in fact exported, these warnings can be safely
	ignored. As shown in the DLLHUSK sample, you can disable these warnings by using
	the following pragma statements:
	
	 #pragma warning(disable: 4275)
	 #pragma warning(disable: 4251)
	
	On the other hand, if the warnings refer to some user-defined class rather an MFC
	class, you should ensure that the class is exported before disabling these
	warnings.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Behavior
	---------------------------------
	
	  /* Compile options needed: None
	  */ 
	
	  // The following class declaration causes a C4275 warning
	  // because the CObject class is not also declared with
	  // __declspec(dllexport).
	  class __declspec(dllexport) CMyClass : public CObject
	  {
	    ...
	    // The following data member causes a C4251 warning,
	    // because the CString class is not declared with
	    // __declspec(dllexport).
	    CString m_strName;
	    ...
	  };
	
	REFERENCES
	==========
	
	For more information, please see MFC TechNote 33 for a discussion of the reasons
	behind the decision to export MFC's classes in the module definition file rather
	than in the class declaration.
	
	Additional query words: 2.00 2.10 2.20 3.00 3.10 3.20
	
	======================================================================
	Keywords          : kberrmsg kbnokeyword kbDLL kbMFC kbVC200 kbVC220 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	
