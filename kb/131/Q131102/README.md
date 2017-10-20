---
layout: page
title: "Q131102: FIX: Enumerating Connection Points Causes GP Fault"
permalink: /kb/131/Q131102/
---

## Q131102: FIX: Enumerating Connection Points Causes GP Fault

{% raw %}

	Article: Q131102
	Product(s): Microsoft C Compiler
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbCtrl kbLocalSvr kbMFC kbVC500fix kbGrpDSMFCATL kbNoUpdatekbbug
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ActiveX SDK, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to enumerate connection points with the IEnumConnectionPoints
	interface results in a general protection (GP) fault. Specifically, attempting
	to call the IEnumConnectionPoints::Next() method cause a GP Fault.
	
	CAUSE
	=====
	
	The problem occurs in the CEnumConnPoints::OnNext() function located in the CDK
	source file CTLCONN.CPP.
	
	     BOOL CEnumConnPoints::OnNext(void FAR* pv)
	     {
	        if (!CEnumArray::OnNext(pv))
	           return FALSE;
	
	        // outgoing connection point needs to be AddRef'ed
	        //  (the caller has responsibility to release it)
	
	        ((LPCONNECTIONPOINT)pv)->AddRef();
	        return TRUE;
	     }
	
	AddRef() is called through an improperly dereferenced pointer. The line of code
	should be this:
	
	     (*(LPCONNECTIONPOINT*)pv)->AddRef();
	
	RESOLUTION
	==========
	
	Currently, there is no workaround for this problem. Avoid enumerating connection
	points. You can also retrieve connection points with the
	IConnectionPointContainer::FindConnectionPointFromIID() function.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual C++ version
	5.0.
	
	MORE INFORMATION
	================
	
	Visual C++ Version 2.x Sample Code to Demonstrate Problem
	---------------------------------------------------------
	
	     void CControlContainerView::OnEnumCtrlConnPoints()
	     {
	        if (!m_pSelection) // pointer to a COleClientItem derived object
	                           // that supports additional OLE Control interfaces
	
	        {
	           AfxMessageBox(_T("No Control selected!"));
	           return;
	        }
	
	        LPCONNECTIONPOINTCONTAINER lpCPC;
	        LPENUMCONNECTIONPOINTS lpEnumCPTS;
	        LPCONNECTIONPOINT lpCPT;
	
	        if (SUCCEEDED(m_lpSelection->m_lpObject->QueryInterface(
	           IID_IConnectionPointContainer,(LPVOID FAR*)&lpCPC)))
	        {
	           if (SUCCEEDED(lpCPC->EnumConnectionPoints(&lpEnumCPTS)))
	           {
	              HRESULT hr = lpEnumCPTS->Next(1,&lpCPT,NULL); //GPF occurs here
	
	              if (NOERROR == hr)
	              {
	                 AfxMessageBox(_T("Connection Point retrieved!"));
	                 lpCPT->Release();
	              }
	              lpEnumCPTS->Release();
	           }
	           else
	              AfxMessageBox(_T("EnumConnectionPoints failed!"));
	
	           lpCPC->Release
	        }
	        else
	           AfxMessageBox(_T("QI for IConnectionPointContainer failed!"));
	     }
	
	Additional query words: GPF
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbCtrl kbLocalSvr kbMFC kbVC500fix kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbZNotKeyword kbSDKSearch kbSDKActiveXsearch kbSDKActiveX
	Version           : :1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
