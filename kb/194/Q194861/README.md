---
layout: page
title: "Q194861: FIX: &quot;AtlReportError: no overloaded function takes X parameters&quot;"
permalink: kb/194/Q194861/
---

## Q194861: FIX: &quot;AtlReportError: no overloaded function takes X parameters&quot;

	Article: Q194861
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVC600bug kbATL300bug kbGrpDSMFCATL kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Porting an ATL 2.x project to ATL 3.0 might give you the following compilation
	error:
	
	  error C2661: 'AtlReportError' : no overloaded function takes 2 parameters.
	
	CAUSE
	=====
	
	AtlReportError() does not have any default parameters in ATL 3.0.
	AtlReportError() in ATL 2.1 did have default parameters.
	
	RESOLUTION
	==========
	
	Specify all the parameters required by AtlReportError() or complete the
	following steps:
	
	1. Use the CComCoClass static member Error() which accepts default arguments.
	  For example, replace:
	
	        return AtlReportError(
	           CLSID_PolyCtl, _T("Must have between 3&100 sides"));
	
	  with:
	
	        // If your class is derived from CComCoClass<CMyClass,
	        // &CLSID_MyClass>:
	        return Error(_T("Must must have between 3 & 100 sides"));
	
	        // If not derived from CComCoClass<>:
	        return CComCoClass<CMyClass, &CLSID_MyClass>::Error(
	           _T("Must must have between 3 & 100 sides"));
	
	2. Modify \vc98\atl\include\atlcom.h so that all the function prototypes for
	  AtlReportError() accept default arguments. Essentially use the same
	  prototypes used in ATL 2.1. The following code lists the various prototypes
	  of AtlReportError and their default argument equivalents in the same order as
	  AtlCom.h:
	
	   - Replace:
	
	        inline HRESULT WINAPI AtlReportError(const CLSID& clsid, UINT nID,
	           const IID& iid, HRESULT hRes, HINSTANCE hInst)
	
	     with:
	
	        inline HRESULT WINAPI AtlReportError(const CLSID& clsid, UINT nID,
	        const IID& iid = GUID_NULL, HRESULT hRes = 0,
	        HINSTANCE hInst = _Module.GetResourceInstance())
	
	   - Replace:
	
	        inline HRESULT WINAPI AtlReportError(const CLSID& clsid, UINT nID,
	           DWORD dwHelpID, LPCOLESTR lpszHelpFile, const IID& iid, HRESULT
	              hRes,
	           HINSTANCE hInst)
	
	     with:
	
	        inline HRESULT WINAPI AtlReportError(const CLSID& clsid, UINT nID,
	           DWORD dwHelpID, LPCOLESTR lpszHelpFile, const IID& iid =
	              GUID_NULL,
	           HRESULT hRes = 0, HINSTANCE hInst = _Module.GetResourceInstance())
	
	   - Replace:
	
	        inline HRESULT WINAPI AtlReportError(const CLSID& clsid,
	           LPCSTR lpszDesc, DWORD dwHelpID, LPCSTR lpszHelpFile, const IID&
	              iid,
	           HRESULT hRes)
	
	     with:
	
	        inline HRESULT WINAPI AtlReportError(const CLSID& clsid,
	           LPCSTR lpszDesc, DWORD dwHelpID, LPCSTR lpszHelpFile,
	           const IID& iid = GUID_NULL, HRESULT hRes = 0)
	
	   - Replace:
	
	        inline HRESULT WINAPI AtlReportError(const CLSID& clsid,
	           LPCSTR lpszDesc, const IID& iid, HRESULT hRes)
	
	     with:
	
	        inline HRESULT WINAPI AtlReportError(const CLSID& clsid,
	           LPCSTR lpszDesc, const IID& iid = GUID_NULL, HRESULT hRes = 0)
	
	   - Replace:
	
	        inline HRESULT WINAPI AtlReportError(const CLSID& clsid,
	           LPCOLESTR lpszDesc, const IID& iid, HRESULT hRes)
	
	     with:
	
	        inline HRESULT WINAPI AtlReportError(const CLSID& clsid,
	           LPCOLESTR lpszDesc, const IID& iid = GUID_NULL, HRESULT hRes = 0)
	
	   - Replace:
	
	        inline HRESULT WINAPI AtlReportError(const CLSID& clsid,
	           LPCOLESTR lpszDesc, DWORD dwHelpID,LPCOLESTR lpszHelpFile,
	           const IID& iid, HRESULT hRes)
	
	     with:
	
	        inline HRESULT WINAPI AtlReportError(const CLSID& clsid,
	           LPCOLESTR lpszDesc, DWORD dwHelpID, LPCOLESTR lpszHelpFile,
	           const IID& iid = GUID_NULL, HRESULT hRes = 0)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jaganathan
	Thangavelu, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVC600bug kbATL300bug kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
