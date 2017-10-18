---
layout: page
title: "Q241852: PRB: ERR C2535 When Compiling ATL Project with VC++ 6.0"
permalink: kb/241/Q241852/
---

## Q241852: PRB: ERR C2535 When Compiling ATL Project with VC++ 6.0

	Article: Q241852
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbVC600 kbATL300 kbDSupport kbGrpDSMFCATL
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may get compiler error C2535 on a class developed in Active Template Library
	(ATL) when compiled in ATL version 3.0. In previous versions of ATL, a compiler
	error was not generated for the same class. For example, if your class looks
	like the following, you will get the error with Visual C++ version 6.0.
	
	  //CCOMTest
	  class CCOMTest : public CComObjectRootEx<CComMultiThreadModel>
	  {
	  public:
	      // Constructor, Destructor
	      CCOMTest() {};
	      ~CCOMTest() {};
	      
	      // Interface Map
	      BEGIN_COM_MAP(CCOMTest)
	      END_COM_MAP()
	
	      DECLARE_NO_REGISTRY()
	          
	      // IUnknown methods
	      STDMETHODIMP QueryInterface(REFIID piid, void **ppv);
	      STDMETHODIMP_(ULONG) AddRef(void);
	      STDMETHODIMP_(ULONG) Release(void);
	
	   private:
	      LONG   mlRef;         //Reference count
	  };
	
	CAUSE
	=====
	
	The implementation of END_COM_MAP between Visual C++ version 5.0 and Visual C++
	version 6.0 has changed. In Visual C++ 5.0, END_COM_MAP was defined as the
	following:
	
	  #ifdef _ATL_DEBUG_QI
	  #define END_COM_MAP()   {NULL, 0, 0} };	return &_entries[1];}
	  #else
	  #define END_COM_MAP()   {NULL, 0, 0} };	return _entries;}
	  #endif // _ATL_DEBUG_QI
	
	In Visual C++ 6.0, it is defined as this:
	
	  #define END_COM_MAP() {NULL, 0, 0} }; 
	  return _entries;} 	
	  virtual ULONG STDMETHODCALLTYPE AddRef( void) = 0; 	
	  virtual ULONG STDMETHODCALLTYPE Release( void) = 0; 	
	  STDMETHOD(QueryInterface)(REFIID, void**) = 0;
	  #endif // _ATL_DEBUG
	
	RESOLUTION
	==========
	
	In Visual C++ version 6.0, you can comment out the IUnknown methods that were
	implemented or add something like the following code sample:
	
	  #ifdef _ATL_DEBUG
	  #define END_MY_COM_MAP() {NULL, 0, 0} }; return &_entries[1];} 
	  #else
	  #define END_MY_COM_MAP() {NULL, 0, 0} }; return _entries;} 
	  #endif // _ATL_DEBUG
	
	  // CCOMTest
	  class CCOMTest: public CComObjectRootEx<CComMultiThreadModel>
	  {
	  public:
	
	      // Constructor, Destructor
	      CCOMTest() {};
	      ~CCOMTest() {};
	
	      // Interface Map
	      BEGIN_COM_MAP(CCOMTest)
	      END_MY_COM_MAP()
	
	      DECLARE_NO_REGISTRY()
	          
	      // IUnknown methods
	      STDMETHODIMP QueryInterface(REFIID piid, void **ppv);
	      STDMETHODIMP_(ULONG) AddRef(void);
	      STDMETHODIMP_(ULONG) Release(void);
	
	  private:
	      LONG   mlRef;     //Reference count
	  };
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: C4661
	
	======================================================================
	Keywords          : kbCOMt kbVC600 kbATL300 kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbVCNET
	Version           : :3.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
