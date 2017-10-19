---
layout: page
title: "Q181277: AtlSink Uses ATL to Create a Dispinterface Sink"
permalink: /kb/181/Q181277/
---

## Q181277: AtlSink Uses ATL to Create a Dispinterface Sink

	Article: Q181277
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbActiveX kbATL200 kbATL210 kbAutomation kbCOMt kbConnPts kbVC420 kbVC5
	Last Modified: 03-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two approaches to implementing a dispinterface sink using ATL. The
	sample, AtlSink, uses both methods. The Readme.txt file included with the
	AtlSink file includes the project overview, and the "More Information" section
	of this article includes a description of how to implement both methods.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Atlsink.exe now
	  (http://download.microsoft.com/download/vc60pro/sample8/1/WIN98/EN-US/AtlSink.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Atlsinkvcnet.exe now
	  (http://download.microsoft.com/download/VisualStudioNET/sample/1.27/WIN98MeXP/EN-US/Atlsinkvcnet.exe)
	
	Release Date: 2-Jul-2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	The AtlSink workspace consists of two projects, AtlSink and AtlConnectableObject.
	Use the -d option when you run AtlSink.exe:
	
	  ATLSINK.EXE -d
	
	A Connectable Object
	--------------------
	
	A connectable object is a Component Object Model (COM) object that exposes one or
	more source interfaces, implements the IConnectionPointContainer interface, and
	provides an IConnectionPoint implementation for each source interface. The
	connectable object normally publishes the specifications for the source
	interfaces in a type library. To do this, add the "source" attribute to the
	interface definition, within the object's coclass definition.
	
	A connectable object provides no implementation for the source interface, Just a
	definition. The connectable object calls methods on the source interface (fires
	events) for each sink that is connected.
	
	A Sink
	------
	
	A sink is a COM object that is implemented and instantiated by a client of one or
	more connectable objects. The sink object may implement other interfaces, but at
	a minimum, it must implement the source interface of the connectable object that
	the client wants to connect to.
	
	Two Ways to Implement Your Sink
	-------------------------------
	
	You must implement seven methods for a dispinterface, three IUnknown methods and
	four IDispatch methods. A sink uses only one of the IDispatch methods, Invoke.
	The other three IDispatch methods, GetTypeInfoCount, GetTypeInfo, and
	GetIDsOfNames just returns E_NOTIMPL. When you use ATL, the CComObject
	constructor implements the IUnknown methods for you.
	
	You can implement a dispinterface sink in ATL in two ways:
	
	1. Use the ATL implementation of Idispatch
	
	2. Use ATL to implement IUnknown.
	
	With the first approach, you must provide a dual interface implementation with a
	type library. With the second approach, you must provide a switch and case
	statement for every DISPID you want to handle. Also with the second approach,
	you must manually extract the variants packaged in the IDispatch::Invoke call.
	If the connection point has only a few methods or you want to handle only a few,
	and you do not have a type library for your client, then you may prefer the
	second approach.
	
	The ItypeInfo interface provides a standard way of unpacking the parameters
	packed into the Invoke call. You also do not have to duplicate the code
	required. However, you must implement an .idl file, making sure each method you
	implement matches the DISPIDs specified in the connectable object's type
	library, and each call must determine how to unpack the parameter types at run
	time. If you want to handle only a few of the methods provided by a
	dispinterface connection point, then you may prefer the switch method.
	
	Using ATL to Implement IDispatch
	--------------------------------
	
	This approach uses the IDispatchImpl class to implement the IDispatch methods.
	Because IDispatchImpl::Invoke just defers to ItypeInfo::Invoke, you must have a
	registered type library with a coclass definition that describes your sink
	interface as a dual interface. You can implement a sink with IDispatchImpl by
	completing the following steps:
	
	1. Add a default (dual) ATL Simple Object to your project: With your ATL project
	  selected in the ClassView window of Visual C++, right-click the project or,
	  on the Insert menu, click New ATL Object. Click Simple Object on the ATL
	  Object Wizard dialog box. You can use any name you want as long as you avoid
	  naming conflicts, including the dispinterface name (in other words, the name
	  can not be the same as the dispinterface name).
	
	2. Add the desired connection point methods:
	
	  Add only the methods you want to handle. ATL will return DISP_E_MEMBERNOTFOUND
	  for all DISPIDs not provided.
	
	3. Change all DISPIDs to match the connection point specification:
	
	  All of the DISPIDs for the method must match the DISPIDs of the source. The
	  connectable object just calls Invoke with the DISPID it published. All
	  DISPIDs must match the connection point specification to ensure that the
	  correct event handler is called.
	
	4. Add the dispinterface IID to the object's interface map:
	
	  The ATL implementation of IConnectionPoint::Advise will perform a
	  QueryIinterface for the dispinterface IID. You need to provide an entry that
	  will map the dispinterface IID to your object's IDispatch. Use
	  COM_INTERFACE_INTRY_IID to accomplish this mapping. Other implementations
	  will perform a QueryInterface for IDispatch, which ATL has already provided.
	
	5. (OPTIONAL) Make object noncreatable:
	
	  You do not need to create your sink object outside your project. The interface
	  may be marshaled to another apartment, processor, or machine, but COM does
	  not need to know how to create your object.
	
	  To make your object noncreatable you need to perform the following three
	  steps:
	
	  a. In the .idl file, add the noncreatable attribute to the coclass.
	
	  b. n the header file, remove the CComCoClass inheritance.
	
	  c. In the project's main .cpp file, remove the object from the object map.
	
	6. Create an instance of the object:
	
	  To create a local instance of your ATL object, complete the following three
	  steps:
	
	  a. Declare a pointer to your object, such as:
	
	        CComObject<CMyObj>* pObj;
	
	  b. Call CreateInstance, such as:
	
	        CcomObject<CMyObj>::CreateInstance(&pObj);
	
	  c. Perform a QueryInterface for the object's IUnknown, such as:
	
	        pObj->QueryInterface(IID_IUnknown, &pUnknown);
	
	7. Call the AtlAdvise function:
	
	  Call AtlAdvise with the IUnknown* methods of the connectable object, the
	  IUnknown* methods of your sink, the connectable object's source IID, and the
	  address of a DWORD to store the cookie that AtlAdvise will return. Save the
	  cookie for use with the AtlUnadvise function.
	
	Using ATL to Implement Only IUnknown
	------------------------------------
	
	When you create a sink using this approach, you do not need a type library nor do
	you need to provide support for external creation. Complete the following steps
	to create a simple sink:
	
	1. Derive your class from CComObjectRootEx and IDispatch:
	
	  The sink class you create will be the template parameter for the CComObject
	  constructor, so it must derive from CComObjectRoot. Since your sink is a
	  dispinterface implementation, you must also derive from IDispatch.
	
	2. Add an interface map:
	
	  Your class needs an interface map so that the QueryInterface function can find
	  your IDispatch interface, with either the IDispatch IID or the dispinterface
	  IID. The following code represents a typical interface map:
	
	  BEGIN_COM_MAP(CDispatchSink)
	     COM_INTERFACE_ENTRY(IDispatch)
	     COM_INTERFACE_ENTRY_IID(DIID_DsomeEvents, IDispatch)
	  END_COM_MAP()
	
	  The parameter for the BEGIN_COM_MAP macro is your sink class. The first
	  parameter for the COM_INTERFACE_ENTRY_IID is the IID of the dispinterface.
	
	3. Provide implementations for the four IDispatch methods:
	
	  The first three IDispatch methods need only return E_NOTIMPL. For the Invoke
	  method, you need a switch with a case entry for each DISPID that provides
	  notification. The following code represents a typical implementation for
	  Invoke:
	
	  SAMPLE CODE:
	
	  STDMETHODIMP CDispatchSink::Invoke(DISPID dispidMember, REFIID riid,
	                                     LCID lcid, WORD wFlags,
	                                     DISPPARAMS* pdispparams, VARIANT*
	                                     pvarResult, EXCEPINFO* pexcepinfo,
	                                     UINT* puArgErr)
	  {
	     HRESULT hr = S_OK;
	     if (pdispparams)
	     {
	        switch (dispidMember)
	        {
	           case 2:
	           {
	              if (pdispparams->cArgs == 1)
	              {
	                 if (pdispparams->rgvarg[0].vt == VT_I2)
	                    Event2(pdispparams->rgvarg[0].iVal);
	                 else
	                    hr = DISP_E_TYPEMISMATCH;
	              }
	              else
	                 hr = DISP_E_BADPARAMCOUNT;
	              break;
	           }
	  // Other desired case statements
	           default:
	           {
	              hr = DISP_E_MEMBERNOTFOUND;
	              break;
	           }
	        }
	     }
	     else
	        hr = DISP_E_PARAMNOTFOUND;
	     return hr;
	  }
	
	  Each case statement should check the number of parameters and type of each
	  parameter. After error checking, you can either handle the event in the case
	  statement or call an event handler.
	
	4. Create an instance of the object:
	
	  See the "Using ATL to Implement IDispatch" section for details.
	
	5. Call the AtlAdvise function:
	
	  See the "Using ATL to Implement IDispatch" section for details.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Chuck Bell,
	Microsoft Corporation.
	
	
	Additional query words: IconnectionPointImpl kbATL200 kbATL210 kbATL300 kbVC420 kbVC500 kbvc600 kbcodesam
	
	======================================================================
	Keywords          : kbfile kbSample kbActiveX kbATL200 kbATL210 kbAutomation kbCOMt kbConnPts kbVC420 kbVC500 kbVC600 kbATL300 MSGRAPH kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :2.0,2.1,3.0,4.2b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
