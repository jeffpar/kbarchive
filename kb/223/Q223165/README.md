---
layout: page
title: "Q223165: FIX: GetIDsOfNames( ) Returns DISP_E_UNKNOWNNAME for Named Args"
permalink: /kb/223/Q223165/
---

## Q223165: FIX: GetIDsOfNames( ) Returns DISP_E_UNKNOWNNAME for Named Args

	Article: Q223165
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbservicepack kbActiveX kbAutomation kbCOMt kbVC600bug kbATL300 kbATL300bug kbATL300fix
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When calling IDispatch::GetIDsOfNames() for an ATL server and named arguments
	are passed in, you receive the following error:
	
	  0x80020006 (DISP_E_UNKNOWNNAME)
	
	If the client is Visual Basic and you call a method in an ATL server passing
	named arguments then you receive this error message:
	
	  Run-time error '448':
	  Named argument not found
	
	CAUSE
	=====
	
	In the function CComTypeInfoHolder::GetIDsOfNames() (called by
	IDispatch::GetIDsOfNames()), ATL looks up the DISPID through a cached array. If
	the call to GetIDsOfNames() includes named arguments then these entries are not
	in the array. In that case, CComTypeInfoHolder::GetIDsOfNames() delegates to
	ITypeInfo::GetIDsOfNames(). It calls ITypeInfo::GetIDsOfNames() once for each
	named argument in the method. To get the IDs of named arguments then
	ITypeInfo::GetIDsOfNames() needs to be called with the method name in addition
	to the named arguments.
	
	RESOLUTION
	==========
	
	This bug has been fixed in Visual Studio 6.0 Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbActiveX kbAutomation kbCOMt kbVC600bug kbATL300 kbATL300bug kbATL300fix kbVS600sp2bug kbFAQ kbVS600sp3fix kbVS600SP1bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
