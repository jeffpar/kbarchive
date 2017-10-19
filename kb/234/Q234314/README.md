---
layout: page
title: "Q234314: BUG: &quot;This Stub Requires an Updated Version of &lt;Rpcndr.h&gt;&quot; Error"
permalink: /kb/234/Q234314/
---

## Q234314: BUG: &quot;This Stub Requires an Updated Version of &lt;Rpcndr.h&gt;&quot; Error

	Article: Q234314
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbVC kbOSWinCEsearch kbGrpDSMFCATL
	Last Modified: 23-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a Windows CE project may generate the following compiler error:
	
	  fatal error C1189: #error : this stub requires an updated version of
	  <rpcndr.h>
	
	CAUSE
	=====
	
	You'll get this error if you include a MIDL-generated header file. These header
	files use newer macros, like MIDL_INTERFACE(), which is only defined in later
	versions of Rpcndr.h.
	
	RESOLUTION
	==========
	
	You can #include <wceatl.h> before #including any MIDL-generated header
	files. Wceatl.h contains a definition for MIDL_INTERFACE() and works around the
	compiler error by #defining __RPCNDR_H_VERSION__.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbVC kbOSWinCEsearch kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch kbWinCETK600VC
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
