---
layout: page
title: "Q192561: PRB: Error C2787 When Building a Project Using ATL 3.0"
permalink: /kb/192/Q192561/
---

## Q192561: PRB: Error C2787 When Building a Project Using ATL 3.0

{% raw %}

	Article: Q192561
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbCOMt kbVC600 kbATL300 kbGrpDSMFCATL kbMIDL
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building a project with ATL 3.0 you may get a compiler error c2787 (no GUID
	has been associated with this object).
	
	CAUSE
	=====
	
	The newer versions of MIDL use the compiler facility [__declspec(uuid())] to tag
	a GUID to an interface in the header files it generates. ATL version 3.0 makes
	use of this fact in the implementation of COM_INTERFACE_ENRY macro; it now uses
	the keyword __uuidof() to extract the interface ID from the MIDL-generated
	header. ATL 2.1 uses the token pasting operator (IID_##IFoo) to get the
	interface ID. This action requires including the MIDL-generated header and also
	the "project_i.c", which MIDL generated.
	
	If you use an older MIDL-generated header file [which does not use
	__declspec(uuid())] with ATL 3.0, you will get this compiler error, because
	__uudiof() can't extract the interface ID.
	
	RESOLUTION
	==========
	
	Define the preprocessor symbol _ATL_NO_UUIDOF in the C/C++ tab of the Project
	Settings dialog box. This forces ATL to use the token pasting operator (##)
	rather than __uuidof() when forming the interface ID.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     COM_INTERFACE_ENTRY in ATL 2.1
	     
	        #define COM_INTERFACE_ENTRY(x)\ 
	           {&IID_##x), \ 
	           offsetofclass(x, _ComMapClass), \ 
	           _ATL_SIMPLEMAPENTRY},
	     
	     COM_INTERFACE_ENTRY in ATL 3.0
	     
	        #ifndef _ATL_NO_UUIDOF
	        #define _ATL_IIDOF(x) __uuidof(x)
	        #else
	        #define _ATL_IIDOF(x) IID_##x
	        #endif
	     
	        #define COM_INTERFACE_ENTRY(x)\ 
	           {&_ATL_IIDOF(x), \ 
	           offsetofclass(x, _ComMapClass), \ 
	           _ATL_SIMPLEMAPENTRY},
	
	Newer MIDL headers files use the macros DECLSPEC_UUID() or MIDL_INTERFACE(),
	which expand to __declspec(uuid()). MIDL versions 3.01.75 and later use the
	__declspec directive.
	
	REFERENCES
	==========
	
	"Porting from ATL 2.1" in the online help.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jaganathan
	Thangavelu, Microsoft Corporation.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jaganathan Thangavelu, Microsoft Corporation
	
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbCOMt kbVC600 kbATL300 kbGrpDSMFCATL kbMIDL 
	Technology        : kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
