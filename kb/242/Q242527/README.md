---
layout: page
title: "Q242527: PRB: #import Wrapper Methods May Cause Access Violation"
permalink: /kb/242/Q242527/
---

## Q242527: PRB: #import Wrapper Methods May Cause Access Violation

{% raw %}

	Article: Q242527
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbAutomation kbCOMt kbVC600 kbATL300 kbSmartPtr
	Last Modified: 18-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a COM object has a method that returns an interface pointer (retval), and
	#import is used to generate a wrapper for the object, a smart pointer is
	returned. If a raw pointer is used for the assignment, an access violation may
	occur on the first attempt to use the interface.
	
	CAUSE
	=====
	
	The returned smart pointer object frees itself at the end of the wrapper
	function call. This releases the last reference on the object (though there was
	no corresponding AddRef), making the left hand side of the assignment an invalid
	reference. In Visual C++ 5, code generated from #import for this type of method
	simply returned the raw pointer.
	
	RESOLUTION
	==========
	
	If a Compiler COM support class is used for the assignment, it performs a
	QueryInterface() on the returned interface, retaining a reference count on the
	object. Thus, the result will be valid and the interface can be used as
	intended. The call could be made like the following:
	
	  IDispatchPtr spDisp = spServer->GetOtherInterface();
	
	Although this would be the preferred solution, an LPDISPATCH variable could still
	be used if the raw interface is detached from the smart pointer at the end of
	the function call. This could be done in the following manner:
	
	  LPDISPATCH pDisp = spServer->GetOtherInterface().Detach();
	
	The _com_ptr_t Detach() method hands back the raw interface pointer and sets the
	smart pointer's interface member to NULL so that Release() is not called.
	
	Please note that, although the example earlier is for an IDispatch pointer, this
	information pertains to wrapper methods that return any kind of interface
	pointer.
	
	Microsoft Visual C++ 6 more clearly demarcates the presence or absence of the
	raw_native_types attribute for #import. To return the raw pointer in Visual C++
	6, apply this attribute to the #import statement.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an Automation Server project. Call it "ImportServer". The steps
	  provided here represent an ATL In-Proc Automation Server, so for the ATL COM
	  AppWizard simply accept the defaults and click Finish.
	
	2. Insert a new ATL object and select a Simple Object. Name it Server1.
	
	3. Insert a second ATL object and select Simple Object again. Name it Server2.
	
	4. Add a member variable to Server1 for Server2 as in the following:
	
	  CComObject<CServer2>* m_pServer2;
	
	Don't forget to include the header file for Server2, and to initialize the
	pointer in Server1's constructor, or use an initializer.
	
	5. Override Server1's FinalConstruct() and FinalRelease() methods to create an
	  instance of Server2 when Server1 is created, and destroy the instance when it
	  is destroyed.
	
	  HRESULT FinalConstruct()
	  {
	      HRESULT hr = CComObject<CServer2>::CreateInstance(&m_pServer2);
	      if (SUCCEEDED(hr))
	          m_pServer2->AddRef();
	      return hr;
	  }
	
	  void FinalRelease()
	  {
	      if (m_pServer2)
	          m_pServer2->Release();
	  }
	
	6. Add a method to Server1 which returns an LPDISPATCH pointer for Server2. The
	  method could be prototyped as follows:
	
	  STDMETHOD(ReturnServer2)(/*[out,retval]*/ LPDISPATCH* ppDisp);
	
	The implementation simply queries Server2 for its IDispatch interface:
	
	  STDMETHODIMP CServer1::ReturnServer2(LPDISPATCH* ppDisp)
	  {
	      return m_pServer2->QueryInterface(IID_IDispatch, (void**)ppDisp);
	  }
	
	7. Add a method to Server2 so that it can be tested. For this example, add a
	  method which returns a string value, such as:
	
	  STDMETHOD(GetString)(/*[out,retval]*/ BSTR* pstr);
	
	Here is a sample implementation:
	
	  STDMETHODIMP CServer2::GetString(BSTR* pstr)
	  {
	      *pstr = SysAllocString(L"Hello from Server2");
	      return S_OK;
	  }
	
	8. Create a Win32 Console app to serve as the client. Here is some sample test
	  code:
	
	  #include "stdafx.h"
	
	  int main(int argc, char* argv[])
	  {
	      CoInitialize(NULL);
	      {
	          IServer1Ptr spServer1;
	          spServer1.CreateInstance(__uuidof(Server1));
	          TCHAR szTemp[50];
	          for (int i = 0; i < 5; i++)
	          {
	              LPDISPATCH pDisp = spServer1->ReturnServer2();
	              IServer2Ptr spServer2(pDisp);
	              BSTR str = spServer2->GetString();
	              int nRet = WideCharToMultiByte(0, 0, str, 
	                             SysStringLen(str)+1, szTemp, 50,
	                             NULL, NULL);
	              if (nRet)
	              {
	                  lstrcat(szTemp, "\n");
	                  OutputDebugString(szTemp);
	              }
	              SysFreeString(str);
	              pDisp->Release();
	          }
	      }
	      CoUninitialize();
	  	
	      return 0;
	  }
	
	9. In stdafx.h, import the type library for the server. For example:
	
	  #import "..\ImportServer.tlb" no_namespace
	
	10. Compile the server and the client. When the client is executed, an error
	  should occur on creation of spServer2, since pDisp is not valid.
	
	  To correct the problem, change the line which calls ReturnServer2 as
	  follows:
	
	  IDispatchPtr spDisp = spServer1->ReturnServer2();
	
	  Also, the call to Release() the dispatch pointer should now be removed.
	
	  As mentioned previously, the other solution could be to detach the raw
	  dispatch pointer from the smart pointer wrapper:
	
	  LPDISPATCH pDisp = spServer1->ReturnServer2().Detach();
	
	  If this method is used, then Release() would still need to be called for the
	  Dispatch interface.
	
	REFERENCES
	==========
	
	For more information on #import, see the Visual C++ Programmer's Guide in MSDN,
	under Preprocessor Reference\The Preprocessor\Preprocessor Directives.
	
	Smart pointers are implemented in the _com_ptr_t class, and documented in the
	Reference section of the Visual C++ documentation, under C/C++ Language and C++
	Libraries\C++ Language Reference\Compiler COM Support Classes.
	
	The ATL classes CComPtr and CComQIPtr are also smart pointers, and could be used
	successfully in place of IDispatchPtr. For more information, see the ATL Class
	Reference.
	
	Additional query words: #import com_ptr_t Access Violation C0000005
	
	======================================================================
	Keywords          : kbActiveX kbAutomation kbCOMt kbVC600 kbATL300 kbSmartPtr 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbVCNET
	Version           : :6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
