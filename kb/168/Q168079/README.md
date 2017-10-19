---
layout: page
title: "Q168079: FIX: _com_ptr_t::operator=(const _variant_t&amp;) AddRefs Twice"
permalink: /kb/168/Q168079/
---

## Q168079: FIX: _com_ptr_t::operator=(const _variant_t&amp;) AddRefs Twice

	Article: Q168079
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbcode kbVC500bug kbVS97sp1fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an instantiation of the _com_ptr_t template class and assign a
	_variant_t to it, the associated COM object may not be released when it should
	be.
	
	CAUSE
	=====
	
	_com_ptr_t::operator=(const _variant_t&) calls another member function,
	QueryStdInterfaces, which ultimately AddRef's upon success. The problem is that
	operator= also AddRef's upon success.
	
	RESOLUTION
	==========
	
	Call Release() explicitly before the object goes out of scope.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The sample code below demonstrates the problem with operator=(const
	_variant_t&) of the class template _com_ptr_t. The parameter vt is an
	IUnknown*. To offset the result of the second AddRef, you need to call punk-
	>Release before leaving the function below.
	
	Sample Code
	-----------
	
	     // Compile options needed: none
	     // Make an IUnknownPtr
	     _COM_SMARTPTR_TYPEDEF( IUnknown, __uuidof(IUnknown));
	     void f( const _variant_t & vt )
	     {
	         IUnknownPtr punk;
	         punk = vt;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbVC500bug kbVS97sp1fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
