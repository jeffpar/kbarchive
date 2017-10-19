---
layout: page
title: "Q168009: FIX: Smartptr Property in Interface Causes C2512 Error"
permalink: /kb/168/Q168009/
---

## Q168009: FIX: Smartptr Property in Interface Causes C2512 Error

	Article: Q168009
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVS97sp1fix kbVS97sp2fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler may incorrectly issue error C2512 when a class has a
	_declspec(property) member. Having a _declspec(property) member is common when
	you import type-libraries with #import. In addition to error C2512, warnings
	C4510, C4511, C4512, C4513 and C4610 may also be generated.
	
	RESOLUTION
	==========
	
	This can be avoided when doing #import by using the attributes
	raw_interfaces_only or no_native_types. Unfortunately, this also turns off major
	functionality.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97,
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	The first sample below causes the compiler to give the following messages when
	compiled at warning level 4:
	
	  warning C4510: 'B' : default constructor could not be generated
	
	  warning C4610: struct 'B' can never be instantiated - user defined
	  constructor required
	
	  error C2512: 'B' : no appropriate default constructor available
	
	Sample Code A
	-------------
	
	     // Compile option needed /W4
	     class A
	     {  A();
	     };
	     struct B
	     {  __declspec( property (get=getA)) A a;
	        A getA();
	     };
	     void f()
	     {
	        B b;
	     }
	
	The second sample generates the following errors:
	
	  warning C4510: 'IA' : default constructor could not be generated
	
	  warning C4511: 'IA' : copy constructor could not be generated
	
	  warning C4512: 'IA' : assignment operator could not be generated
	
	  warning C4513: 'IA' : destructor could not be generated
	
	  warning C4610: struct 'IA' can never be instantiated - user defined
	  constructor required
	
	  warning C4510: 'CA' : default constructor could not be generated
	
	  warning C4511: 'CA' : copy constructor could not be generated
	
	  warning C4512: 'CA' : assignment operator could not be generated
	
	  warning C4513: 'CA' : destructor could not be generated
	
	  warning C4610: class 'CA' can never be instantiated - user defined
	  constructor required
	
	  error C2512: 'CA' : no appropriate default constructor available
	
	Sample Code B
	-------------
	
	     // custom.idl
	     // MIDL options: <none>
	     #include <olectl.h>
	     #include <idispids.h>
	     #ifndef DO_NO_IMPORTS
	     import "objidl.idl";
	     import "oleidl.idl";
	     import "oaidl.idl";
	     import "ocidl.idl";
	     #endif
	     interface IB;
	     [ object, uuid(27979FD1-E576-11cf-BFAC-00A02437A6A0) ]
	     interface IA : IUnknown
	     {
	         [propput, id(1)] HRESULT Interface([in] IB* pB);
	         [propget, id(1)] HRESULT Interface([out, retval] IB** ppB);
	     }
	     [ object, uuid(27979FD0-E576-11cf-BFAC-00A02437A6A0) ]
	     interface IB : IUnknown
	     {
	         [id(5)] HRESULT Method([in] int in1);
	     }
	     [ uuid(596DBF82-2F2D-11D0-A537-00A02437A6A0), version(1.0) ]
	     library Custom
	     {
	         importlib(STDOLE_TLB);
	         importlib(STDTYPE_TLB);
	         interface IA;
	         interface IB;
	     }
	
	     // test.cpp
	     // compile options: /GX /W4 /c
	     #import "Custom.tlb" no_namespace
	     class CA : IA
	     {
	        STDMETHOD_(ULONG, AddRef)() { return 0; }
	        STDMETHOD_(ULONG, Release)() { return 0; }
	        STDMETHOD(QueryInterface)(REFIID,  LPVOID* ) { return E_NOTIMPL; }
	        // ICustom methods
	        STDMETHOD(put_Interface)(IB *) { return E_NOTIMPL; }
	        STDMETHOD(get_Interface)(IB **) { return E_NOTIMPL; }
	     };
	     class CB
	     {
	        CB(){
	           CA* pA = new CA;
	            if (pA)
	              delete pA;
	        }
	     };
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVS97sp1fix kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
