---
layout: page
title: "Q189486: HOWTO: Expose an MFC OLE Container to VBA Automation"
permalink: kb/189/Q189486/
---

## Q189486: HOWTO: Expose an MFC OLE Container to VBA Automation

	Article: Q189486
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbcode kbole kbAutomation kbCOMt kbContainer KbVBA kbVC500 kbGrpDSMFCATL
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Visual Basic for Applications Container property returns a pointer
	to the container's dispatch interface. However, the MFC OLE container
	implementation does not support this behavior. When you attempt to access this
	property, you get the following Visual Basic for Applications error:
	
	  Run-time error 430, Class does not support automation.
	
	This occurs even if automation support has been added to the container.
	
	For example, in Microsoft Word, the Visual Basic for Applications code
	ThisDocument.Container should return the dispatch pointer of the container.
	Instead, when run while embedded inside an MFC container application, the above
	error is returned.
	
	Support for this property is necessary for Visual Basic for Applications to have
	access to automation objects that might be exposed by your MFC OLE container
	application.
	
	MORE INFORMATION
	================
	
	Steps to Expose a Dispatch Interface From an MFC OLE Container Application
	--------------------------------------------------------------------------
	
	1. Add automation to your container application. If you created your container
	  with the AppWizard and you included automation support, this is already done.
	  If you need to add automation support, see "ClassWizard: Automation Support"
	  in the Visual C++ documentation.
	
	2. Implement IServiceProvider. Since Visual Basic for Applications queries the
	  container via COleClientItem for IServiceProvider, this interface should be
	  implemented as a nested class of your COleClientItem derived class. (See code
	  below.)
	
	  Place the following code in the header file of your derived COleClientItem
	  class:
	
	        class CSomeClientItem : public COleClientItem
	        {
	        ...
	        BEGIN_INTERFACE_PART(OleServiceProvider, IServiceProvider)
	           INIT_INTERFACE_PART(CSomeClientItem, OleServiceProvider)
	            STDMETHOD(QueryService)
	            (REFGUID guidService, // Unique identifier for the requested
	                                  // service.
	            REFIID riid,    //Unique identifier for the requested interface.
	            void** ppv);    //Address of output variable.
	        END_INTERFACE_PART(OleServiceProvider)
	        DECLARE_INTERFACE_MAP()
	        ...
	        };
	
	  Place the following code in the .cpp file of your derived ColeClientItem
	  class:
	
	        BEGIN_INTERFACE_MAP(CSomeClientItem, COleClientItem)
	        INTERFACE_PART(CSomeClientItem,IID_IServiceProvider,
	                       OleServiceProvider)
	        END_INTERFACE_MAP()
	
	        STDMETHODIMP_(ULONG) CSomeClientItem::XOleServiceProvider::AddRef()
	        {
	           METHOD_PROLOGUE_EX(CSomeClientItem, OleServiceProvider)
	           return pThis->ExternalAddRef();
	        }
	
	        STDMETHODIMP_(ULONG) CSomeClientItem::XOleServiceProvider::Release()
	        {
	           METHOD_PROLOGUE_EX(CSomeClientItem, OleServiceProvider)
	           return pThis->ExternalRelease();
	        }
	
	        STDMETHODIMP CSomeClientItem::XOleServiceProvider::QueryInterface(
	        REFIID iid, LPVOID* ppvObj)
	        {
	           METHOD_PROLOGUE_EX(CSomeClientItem, OleServiceProvider)
	           return pThis->ExternalQueryInterface(&iid, ppvObj);
	        }
	
	        STDMETHODIMP CSomeClientItem::XOleServiceProvider::QueryService(
	        REFGUID guidService, REFIID riid, void** ppv)
	        {
	           METHOD_PROLOGUE_EX(CSomeClientItem, OleServiceProvider)
	           if ((guidService == SID_SContainerDispatch)&&(IID_IDispatch ==
	                                                         riid))
	           {
	           // In this example, automation support has been added to
	           // the document.
	           if (*(ppv) = (LPVOID) pThis->GetDocument()->GetIDispatch(TRUE))
	              return S_OK;
	           else
	              return E_FAIL;
	           }
	           return E_FAIL;
	        }
	
	3. Return dispatch interface in the IServiceProvider::QueryService() call.
	  IServiceProvider::QueryService is called requesting the
	  SID_SContainerDispatch service and the IID_IDispatch interface. The dispatch
	  interface to your automation class should be returned in this call. (See
	  CSomeClientItem::XOleServiceProvider::QueryService in the previous code.)
	
	REFERENCES
	==========
	
	Visual C++ Programmer's Guide: search on "Automation Support, ClassWizard"
	
	Microsoft Foundation Class Reference: MFC Technical Notes; TN038: MFC/OLE
	IUnknown Implementation
	
	Platform SDK: search on: IServiceProvider
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Mike
	Francis, Microsoft Corporation
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike Francis, Microsoft Corporation
	
	
	Additional query words: IServiceProvider QueryService 430 Container Office Automation
	
	======================================================================
	Keywords          : kbcode kbole kbAutomation kbCOMt kbContainer KbVBA kbVC500 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
