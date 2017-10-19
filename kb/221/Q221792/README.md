---
layout: page
title: "Q221792: PRB: &quot;Library Not Registered&quot; Error Calling Method in ATL Server"
permalink: /kb/221/Q221792/
---

## Q221792: PRB: &quot;Library Not Registered&quot; Error Calling Method in ATL Server

	Article: Q221792
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbActiveX kbAutomation kbCOMt kbCtrlCreate kbRegistry kbVC600 kbATL300 kbFAQ kbGrpDSMFC
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After changing the type library version in the .idl file, any method you call in
	an ATL COM object returns an error of 0x8002801D (TYPE_E_LIBNOTREGISTERED or
	"Library not registered").
	
	CAUSE
	=====
	
	For dual interfaces, the ATL Object Wizard generates code that derives your COM
	class from IDispatchImpl. IDispatchImpl's fourth and fifth arguments are default
	arguments that map to the major and minor versions of the type library. These
	default to version 1.0. ATL uses this version to call LoadRegTypeLib(), which
	fails with TYPE_E_LIBNOTREGISTERED if the version in the type library doesn't
	match.
	
	RESOLUTION
	==========
	
	Add the appropriate version number to the template arguments for IDispatchImpl
	and IProvideClassInfo2Impl, if you are deriving from this class. For example, to
	set the type library version number to 2.5, your class declaration might
	resemble the following:
	
	  class ATL_NO_VTABLE CMyControl : 
	  	public IDispatchImpl<IMyControl, &IID_IMyControl, &LIBID_MyControlLib, 2, 5>,
	  	public IProvideClassInfo2Impl<&CLSID_MyControl, NULL, &LIBID_MyControlLib, 2, 5>...
	
	If your class derives from CStockPropImpl instead of IDispatchImpl, you need to
	set the type library version number via member variables, because CStockPropImpl
	derives from IDispatchImpl but it doesn't provide any template arguments for
	setting the version number. The major and minor version numbers are actually
	stored in CComTypeInfoHolder::m_wMajor and CComTypeInfoHolder::m_wMinor.
	IDispatchImpl contains a CComTypeInfoHolder member called _tih. You can set the
	version number in your class constructor:
	
	  	CMyControl()
	  	{
	  		_tih.m_wMajor = 2;
	  		_tih.m_wMinor = 5;
	  	}
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The same problem may exhibit different symptoms in different containers
	depending on what you are doing:
	
	- Attempting to insert an ATL control from the "Components and Controls
	  Gallery" causes the following error:
	
	  Unable to open this ActiveX Control. Make sure the control contains a valid
	  type library.
	
	- Attempting to call a method from Internet Explorer causes the error:
	
	  Error: Object doesn't support this property or method.
	
	- Attempting to insert an ATL control into Test Container causes the following
	  error:
	
	  Failed to create control. Unspecified error.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Samson
	Tanrena, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbAutomation kbCOMt kbCtrlCreate kbRegistry kbVC600 kbATL300 kbFAQ kbGrpDSMFCATL kbIDL 
	Technology        : kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	
