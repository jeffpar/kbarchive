---
layout: page
title: "Q190686: FIX: ATL Server Registration May Fail for Non-Administrators"
permalink: kb/190/Q190686/
---

## Q190686: FIX: ATL Server Registration May Fail for Non-Administrators

	Article: Q190686
	Product(s): Microsoft C Compiler
	Version(s): 2.1,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL210bug kbCOMt kbRegistry kbVC500bug kbVC600bug kbATL300bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.1, 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Registration or unregistration of ATL servers may fail on a machine if the
	logged-on user doesn't have appropriate registry access rights. In-process
	servers may fail and display the following message:
	
	  DllRegisterServer in projectname.dll failed. Return code was:
	  0x80020009.
	
	Debug EXE servers, linked statically to the registrar code and run in the
	debugger, may display the following trace messages:
	
	  Failed to register, cleaning up!
	  The thread 0xnn has exited with code -2147352567 (0x80020009).
	
	CAUSE
	=====
	
	CRegKey is a class used by ATL for manipulating the registry. It's Open() and
	Create() methods have a REGSAM argument that specifies the security access to
	the particular registry key.
	
	The REGSAM argument defaults to KEY_ALL_ACCESS. In several places in the ATL
	code, Open() and Create() are called without specifying the REGSAM, which means
	it defaults to KEY_ALL_ACCESS. KEY_ALL_ACCESS is a combination of other flags
	including WRITE_DAC and WRITE_OWNER.
	
	For a non-administrator, you may not have WRITE_DAC and WRITE_OWNER permissions,
	which causes registration to fail.
	
	RESOLUTION
	==========
	
	In ATLBASE.H, change the default REGSAM for CRegKey::Create() and
	CRegKey::Open() to KEY_READ|KEY_WRITE:
	
	     class CRegKey
	     {
	        ...
	        LONG Create(HKEY hKeyParent, LPCTSTR lpszKeyName, LPTSTR lpszClass =
	           REG_NONE, DWORD dwOptions = REG_OPTION_NON_VOLATILE,
	           REGSAM samDesired = KEY_READ | KEY_WRITE, // changed REGSAM
	           LPSECURITY_ATTRIBUTES lpSecAttr = NULL,
	           LPDWORD lpdwDisposition = NULL);
	        LONG Open(HKEY hKeyParent, LPCTSTR lpszKeyName,
	           REGSAM samDesired = KEY_READ | KEY_WRITE);  // changed REGSAM
	        ...
	     };
	
	You need to link statically to the registrar. Building for ReleaseMinDependency
	will statically link to the registrar. Debug builds link dynamically to the
	registrar via Atl.dll. You need to add _ATL_STATIC_REGISTRY to the list of
	Preprocessor definitions. You can do this on the Project menu by clicking
	Settings. Click the C/C++ tab and select General under Category.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q166717 DOC: Instructions for Statically Linking to Registrar Code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	REFERENCES
	==========
	
	Other articles related to ATL registration:
	
	  Q166217 PRB: ATL EXE Server Built On Windows 95 Errors While Registering
	
	  Q167927 BUG: Building ATL Service Project Does Not Register the Service
	
	  Q179688 PRB: ATL Servers Do Not Unregister Their Type Library
	
	  Q185677 BUG: ATL Service with Space in Name Is Not Registered Correctly
	
	  Q186391 BUG: ATL Controls Don't Remove CLSID Key During Unregistration
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Samson
	Tanrena, Microsoft Corporation
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Samson Tanrena, Microsoft Corporation
	
	
	Additional query words: kbDSupport user poweruser administration nonadministrator rights
	
	======================================================================
	Keywords          : kbActiveX kbATL210bug kbCOMt kbRegistry kbVC500bug kbVC600bug kbATL300bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :2.1,3.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
