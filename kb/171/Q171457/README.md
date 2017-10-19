---
layout: page
title: "Q171457: FIX: SENDTIME Sample Does Not Work"
permalink: /kb/171/Q171457/
---

## Q171457: FIX: SENDTIME Sample Does Not Work

	Article: Q171457
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:4.2
	Operating System(s): 
	Keyword(s): kberrmsg kbole kbActiveX kbCOMt kbEEdition kbMFC kbVC kbVC420bug kbVC500fix kbGrpDSMFCA
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute the SENDTIME sample build with Visual C++ 4.2 Enterprise
	Edition without the Visual C++ 4.2b patch installed, it will fail in
	CoCreateInstanceEx(). If the Visual C++ 4.2b patch is installed, the sample will
	not build at all and will generate 7 compiler errors.
	
	CAUSE
	=====
	
	Some of the structures used by DCOM have changed since the Visual C++ 4.2
	Enterprise Edition shipped. As a result, the sample will fail in
	CoCreateInstanceEx() with "error invalid parameter" without the Visual C++ 4.2b
	patch applied. If the Visual C++ 4.2b patch is applied, the header files are
	updated to reflect the correct DCOM structures. However, since the SENDTIME
	source is trying to use the old structures, compilation errors will be
	generated.
	
	RESOLUTION
	==========
	
	Apply the Visual C++ 4.2b patch to update the DCOM structures in the header
	files. When you build the sample, seven compiler errors will be generated. In
	the project settings add the _WIN32_DCOM preprocessor symbol. Then, in the
	CallMachine() function in SENDTDLG.CPP, replace the following lines:
	
	     ServerInfo.dwSize = sizeof(COSERVERINFO);
	     ServerInfo.pszName = T2OLE(lpszMachine);
	
	with
	
	     memset(&ServerInfo, 0, sizeof(ServerInfo));
	     ServerInfo.pwszName = T2OLE(lpszMachine);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was fixed in Visual C++ 5.0 and later
	versions.
	
	MORE INFORMATION
	================
	
	Following are the compilation errors that are generated when you build the
	sample after applying the patch:
	
	  C2039: 'dwSize' : is not a member of '_COSERVERINFO'
	
	  C2039: 'pszName' : is not a member of '_COSERVERINFO'
	
	  C2065: 'CoCreateInstanceEx' : undeclared identifier
	
	  C2064: term does not evaluate to a function SendTime.cpp
	
	  C2065: 'CoInitializeEx' : undeclared identifier
	
	  C2065: 'COINIT_MULTITHREADED' : undeclared identifier
	
	  C2064: term does not evaluate to a function
	
	The first 2 errors are a result of the structure changing and, therefore, these
	members are no longer valid. The remaining errors occur because the function
	prototypes for CoCreateInstanceEx() and CoInitializeEx() are conditionally
	included depending on whether the preprocessor symbol _WIN32_DCOM is defined.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbole kbActiveX kbCOMt kbEEdition kbMFC kbVC kbVC420bug kbVC500fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : WINDOWS:4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
