---
layout: page
title: "Q185284: FIX: #import Does not Correctly Handle GUID Parameters"
permalink: kb/185/Q185284/
---

## Q185284: FIX: #import Does not Correctly Handle GUID Parameters

	Article: Q185284
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVC600fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the #import directive on a type library with a method containing a
	GUID as a parameter, or methods containing a structure that contains a GUID as a
	parameter, you might encounter one of the following error messages:
	
	  C2664: 'Method1' : cannot convert parameter 1 from 'struct _GUID *' to
	  'struct GUID *'
	
	  C2664: 'raw_Method2' : cannot convert parameter 1 from 'struct GUID' to
	  'struct GUID'
	
	  C2079: 'm_guid' uses undefined struct 'GUID'
	
	You might also encounter one of these error messages when you use parameters of
	type IID, CLSID, FMTID, UUID, CATID, and references to these types (REFGUID,
	REFIID, etc.).
	
	CAUSE
	=====
	
	The #import statement incorrectly interprets struct _GUID as struct GUID. GUID
	is only a typedef for struct _GUID.
	
	RESOLUTION
	==========
	
	Use the "rename" attribute with #import to replace the string GUID with _GUID.
	For example:
	
	     #import "myproject.tlb" rename("GUID", "_GUID")
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Microsoft Visual C++,
	version 6.0.
	
	REFERENCES
	==========
	
	Microsoft Visual C++ Help: search on "#import"
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jaganathan
	Thangavelu, Microsoft Corporation
	
	
	Additional query words: kbVC500bug kbCompiler kbCOMt kbDSupport kbdsd
	
	======================================================================
	Keywords          : kberrmsg kbVC600fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
