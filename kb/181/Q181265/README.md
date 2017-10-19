---
layout: page
title: "Q181265: HOWTO: Create ATL COM Objects"
permalink: /kb/181/Q181265/
---

## Q181265: HOWTO: Create ATL COM Objects

	Article: Q181265
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbATL200 kbATL210 kbCOMt kbCtrl kbVC500 kbVC600 kbATL300 kbFAQ MSGRAPH kbGrpDSMFCATL
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ATL Component Object Model (COM) objects are new instances of the CComObject,
	CcomAggObject, or CComPolyObject class. ATL COM objects are not new instances of
	your class that are multiply inherited from the CComCoClass, CComObjectRoot, and
	the ATL interface implementation (impl) classes. If you try to create a new
	instance of your class, you get all the following errors and warnings messages:
	
	  error C2259: 'CMyClass' : cannot instantiate abstract class due to following
	  members:
	
	  warning C4259: 'long __stdcall IUnknown::QueryInterface(const struct _GUID
	  &,void ** )' : pure virtual function was not defined
	
	  warning C4259: 'unsigned long __stdcall IUnknown::AddRef(void)' : pure
	  virtual function was not defined
	
	  warning C4259: 'unsigned long __stdcall IUnknown::Release(void)' : pure
	  virtual function was not defined
	
	MORE INFORMATION
	================
	
	ATL 2.x
	-------
	
	The following code illustrates how to create an instance of your ATL COM object
	without using the APIs, as in the COM creation mechanism:
	
	Sample Code:
	
	     // For CComObject you can use its CreateInstance() member.
	     CComObject<CMyClass>* pMyClass;
	     // Note that at this point the ref count for the object is 0 (zero).
	     HRESULT hRes = CComObject<CMyClass>::CreateInstance(&pMyClass);
	
	     // DECLARE_AGGREGATABLE or no macro in CMyClass indicates that the COM
	     // object is based on CComAggObject. DECLARE_POLY_AGGREGATABLE macro in
	     // CMyClass indicates that the COM object is based on CComPolyObject.
	     // The ref count of this object will be 1.
	     LPUNKNOWN m_pInnerUnk;
	     // m_pOuterUnk is the IUnknown of the outer object. It can be NULL if
	     // the COM object is based on CcomPolyObject.
	     CMyClass::_CreatorClass::CreateInstance(m_pOuterUnk, IID_IUnknown,
	        (LPVOID*)&m_pInnerUnk);
	
	Alternatively you can create an instance of your class using the "new" operator:
	
	Sample Code:
	
	     // Use CComObject, CComPolyObject, and CComAggObject as appropriate.
	     // In this case, the FinalConstruct() member is not called.
	     // Note that at this point the ref count for the object is 0 (zero).
	     // The CComAggObject constructor takes outer unknown as an argument.
	     // The CComPolyObject constructor may or may not take outer unknown as
	     // an argument depending on whether it is being aggregated or not.
	     CComObject<CMyClass>* pMyClass = new CComObject<CMyClass>();
	     HRESULT hr = pMyClass->FinalConstruct();
	
	ATL 3.0
	-------
	
	In ATL 3.0, you can use the following alternatives to create COM objects. Just as
	CComObject, CcomAggObject, and CComPolyObject also have static CreateInstance()
	methods:
	
	     CComAggObject<CMyClass>* pMyClass;
	
	     // pUnkOuter is IUnknown of the aggregate object, FinalConstruct() is
	     // called and the ref count is 0 (zero).
	     HRESULT hRes = CComAggObject<CMyClass>::CreateInstance(m_pUnkOuter,
	     &pMyClass);
	
	In ATL 3.0, the _CreateClass:CreateInstace() function is wrapped by the
	CreateInstance() method of CcomCoClass:
	
	     // The following calls increment the ref count to 1 and call
	     // FinalConstruct.
	     // If CMyClass is aggregateable, either DECLARE_AGGREGATABLE or
	     // DECLARE_POLY_AGGREGATABLE.
	     // m_pOuterUnk, the outer unknown can be NULL for the poly
	     // aggregateable case.
	     LPUNKNOWN m_pInnerUnk;
	     CComCoClass<CMyClass>::CreateInstance(m_pOuterUnk, &m_pInnerUnk);
	
	     // If CMyClass uses the DECLARE_NOT_AGGREGATABLE macro, use following
	     // version:
	     CComCoClass<CMyClass>::CreateInstance(&m_pInnerUnk);
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Jaganathan
	Thangavelu, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL200 kbATL210 kbCOMt kbCtrl kbVC500 kbVC600 kbATL300 kbFAQ MSGRAPH kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :2.0,2.1,3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
