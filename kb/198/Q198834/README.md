---
layout: page
title: "Q198834: PRB: ATL Server with Singleton Object Never Unloads from Memory"
permalink: /kb/198/Q198834/
---

## Q198834: PRB: ATL Server with Singleton Object Never Unloads from Memory

	Article: Q198834
	Product(s): Microsoft C Compiler
	Version(s): 3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbActiveX kbATL210 kbCOMt kbLocalSvr kbVC500 kbVC600 kbATL300 kbGrpDSMFCATL
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ATL EXE with a singleton object doesn't unload from memory even after all
	clients release references to it.
	
	CAUSE
	=====
	
	This problem can occur if your singleton class contains an inner object that
	increments the module lock count. Consider the following code, where
	CMySingletonComponent and CMyInnerObject are ATL "Simple Objects":
	
	  class CMySingletonComponent : public CComCoClass<...>, ...
	     {
	     public:
	
	        DECLARE_CLASSFACTORY_SINGLETON(CMySingletonComponent)
	        CComObject<CMyInnerObject>* m_pInner;
	
	        HRESULT FinalConstruct ()
	        {
	           return CComObject<CMyInnerObject>::CreateInstance (&m_pInner);
	        }
	
	        void FinalRelease ()
	        {
	           delete m_pInner;
	        }
	        ...
	     };
	
	An ATL local server doesn't unload until the module lock count goes to zero,
	which in the case above never happens, because the CComObject<> contained
	inside the singleton class above increments the module lock count in its
	constructor but is never given a chance to decrement it in its destructor.
	
	The contained CComObject<>'s destructor is called only if the singleton is
	destroyed. The singleton is destroyed only if the class factory is destroyed.
	The class factory in turn is destroyed only if the module lock count goes to
	zero, which can't happen because the CComObject<> in the singleton is
	never destroyed and doesn't decrement the module lock count.
	
	RESOLUTION
	==========
	
	Use a class that doesn't increment the module lock count. You can use
	CComObjectNoLock<> in place of CComObject<> for this purpose:
	
	  class CMySingletonComponent : public CComCoClass<...>, ...
	     {
	     public:
	
	        DECLARE_CLASSFACTORY_SINGLETON(CMySingletonComponent)
	        CComObjectNoLock<CMyInnerObject>* m_pInner;
	
	        HRESULT FinalConstruct ()
	        {
	           m_pInner = new CComObjectNoLock<CMyInnerObject>;
	           ATLASSERT (m_pInner);
	           return m_pInner->FinalConstruct();
	        }
	
	        void FinalRelease ()
	        {
	           delete m_pInner;
	        }
	        ...
	
	     };
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Samson
	Tanrena, Microsoft Corporation.
	
	
	Additional query words: kbDSupport hang hangs stays exit remove removed
	
	======================================================================
	Keywords          : kbnokeyword kbActiveX kbATL210 kbCOMt kbLocalSvr kbVC500 kbVC600 kbATL300 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbVCNET
	Version           : :3.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
