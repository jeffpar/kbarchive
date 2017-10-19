---
layout: page
title: "Q217182: FIX: Descriptions Aren't Added to Registry with DECLARE_REGISTRY"
permalink: /kb/217/Q217182/
---

## Q217182: FIX: Descriptions Aren't Added to Registry with DECLARE_REGISTRY

	Article: Q217182
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbservicepack kbActiveX kbCOMt kbCtrlCreate kbRegistry kbVC600bug kbATL300bug kbVS600sp
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DECLARE_REGISTRY() macro in ATL allows you to pass a string resource ID,
	which serves as a description and is supposed to be added to the registry as
	default values for the following keys:
	
	HKCR\<ProgID>
	HKCR\<Version Independent ProgID>
	HKCR\CLSID\<CLSID>
	
	In ATL 3.0, the string is not added to the registry.
	
	CAUSE
	=====
	
	CComModule::RegisterProgID() and CComModule::RegisterClassHelper() are used with
	the DECLARE_REGISTRY() macro. Both functions create registry keys with only the
	KEY_READ flag, allowing only read access.
	
	RESOLUTION
	==========
	
	Modify CComModule::RegisterProgID() and CComModule::RegisterClassHelper() so
	that the calls to CRegKey::Create() take KEY_READ|KEY_WRITE instead of just
	KEY_READ. Modify the following lines from:
	
	  // line 4909 in ATLBASE.H in CComModule::RegisterProgID()
	  LONG lRes = keyProgID.Create(HKEY_CLASSES_ROOT, lpszProgID, REG_NONE, REG_OPTION_NON_VOLATILE, KEY_READ);
	
	and
	
	  // line 5033 in ATLBASE.H in CComModule::RegisterClassHelper()
	  lRes = key.Create(key, lpsz, REG_NONE, REG_OPTION_NON_VOLATILE, KEY_READ);
	
	to
	
	  LONG lRes = keyProgID.Create(HKEY_CLASSES_ROOT, lpszProgID, REG_NONE, REG_OPTION_NON_VOLATILE, KEY_READ|KEY_WRITE);
	
	and
	
	  lRes = key.Create(key, lpsz, REG_NONE, REG_OPTION_NON_VOLATILE, KEY_READ|KEY_WRITE);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.This bug was corrected in Visual Studio 6.0 Service
	Pack 3. For more information about Visual Studio service packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbActiveX kbCOMt kbCtrlCreate kbRegistry kbVC600bug kbATL300bug kbVS600sp2bug kbVS600sp3fix kbVS600SP1bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
