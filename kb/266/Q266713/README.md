---
layout: page
title: "Q266713: BUG: IDispatch::GetIDsOfNames() May Return E_FAIL When Successfu"
permalink: /kb/266/Q266713/
---

## Q266713: BUG: IDispatch::GetIDsOfNames() May Return E_FAIL When Successfu

	Article: Q266713
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbATL kbVC600 kbVC600bug kbATL300 kbATL300bug kbGrpDSMFCATL
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
	
	The way in which ATL implements the IDispatch::GetIDsOfNames function may result
	in E_FAIL being returned, even when the call succeeds.
	
	CAUSE
	=====
	
	When multiple threads call into an object's IDispatch::GetIDsOfNames function,
	the CComTypeInfoHolder::GetTI function is eventually called to load the type
	library and get the ITypeInfo interface. Because loading the type library and
	retrieving the interface are protected by a critical section, the second thread
	waits for the first thread to finish. Once the first thread releases the
	critical section, the second thread enters the critical section, finds m_pInfo
	is non-NULL (set by the first thread), and returns the hRes, which is set to
	E_FAIL. The IDispatch::GetIDsNames function eventually returns this E_FAIL.
	
	RESOLUTION
	==========
	
	To work around this problem, the CComTypeInfoHolder::GetTI function in the
	Atlcom.h file must be modified as follows (all changes are marked with the
	comments "ADD" and "END ADD"):
	
	  inline HRESULT CComTypeInfoHolder::GetTI(LCID lcid)
	  {
	     // If this assert occurs, probably didn't initialize properly.
	     ATLASSERT(m_plibid != NULL && m_pguid != NULL);
	     ATLASSERT(!InlineIsEqualGUID(*m_plibid, GUID_NULL)
	         && "Did you forget to pass the LIBID to CComModule::Init?");
	
	     if (m_pInfo != NULL)
	        return S_OK;
	     HRESULT hRes = E_FAIL;
	     EnterCriticalSection(&_Module.m_csTypeInfoHolder);
	     if (m_pInfo == NULL)
	     {
	        ITypeLib* pTypeLib;
	        hRes = LoadRegTypeLib(*m_plibid, m_wMajor, m_wMinor, lcid, &pTypeLib);
	        if (SUCCEEDED(hRes))
	        {
	  	 CComPtr<ITypeInfo> spTypeInfo;
	  	 hRes = pTypeLib->GetTypeInfoOfGuid(*m_pguid, &spTypeInfo);
	  	 if (SUCCEEDED(hRes))
	  	 {
	  	    CComPtr<ITypeInfo> spInfo(spTypeInfo);
	  	    CComPtr<ITypeInfo2> spTypeInfo2;
	  	    if (SUCCEEDED(spTypeInfo->QueryInterface(&spTypeInfo2)))
	  	        spInfo = spTypeInfo2;
	
	    	    LoadNameCache(spInfo);
	  	    m_pInfo = spInfo.Detach();
	  	 }
	  	 pTypeLib->Release();
	        }
	      }
	      //ADD
	      else
	      {
	   	hRes = S_OK;
	      }
	      //END ADD
	      LeaveCriticalSection(&_Module.m_csTypeInfoHolder);
	      _Module.AddTermFunc(Cleanup, (DWORD)this);
	      return hRes;
	  }
	
	Make these modifications to a copy of the Atlcom.h file (for example,
	Fixatlcom.h). Comment out Atlcom.h in the Stdafx.h file, and then use
	Fixatlcom.h instead, as follows:
	
	  //#include <atlcom.h>
	  #include "FixAtlCom.h"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: IDispatch Invoke 0x80004005 80004005
	
	======================================================================
	Keywords          : kbATL kbVC600 kbVC600bug kbATL300 kbATL300bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
