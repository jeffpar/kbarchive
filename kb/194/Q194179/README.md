---
layout: page
title: "Q194179: SAMPLE: AtlEvnt.exe Creates ATL Sinks Using IDispEventImpl"
permalink: /kb/194/Q194179/
---

## Q194179: SAMPLE: AtlEvnt.exe Creates ATL Sinks Using IDispEventImpl

	Article: Q194179
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbActiveX kbActivexEvents kbCOMt kbConnPts kbVC600 kbATL300 kbFAQ MSGRA
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	AtlEvnt.exe shows you how to implement an event sink using the ATL
	IDispEventImpl and IDispEventSimpleImpl classes. For composite controls or ATL
	dialogs, the wizard inserts IDispEventImpl in the inheritance list to set up the
	sink. So the focus of this sample is to create sinks for other types of COM
	objects and clients. This is only applicable to source interfaces of type
	dispinterface.
	
	Use IDispEventImpl when you have access to a type library. Use
	IDispEventSimpleImpl when you do not have access to the type library or when you
	want to be more efficient by not loading the type library.
	
	In addition to a link to the sample, the MORE INFORMATION section of this article
	includes an overview of the project and information on how to implement each
	class.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Atlevnt.exe now
	  (http://download.microsoft.com/download/vc60pro/sample7/1/WIN98/EN-US/AtlEvnt.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Atlevntvcnet.exe now
	  (http://download.microsoft.com/download/visualstudionet/sample/1.11/win98mexp/en-us/Atlevntvcnet.exe)
	
	Release Date: June 25, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The ATLEVNT workspace consists of two projects, AtlEvnt and EventSrc. Use the -d
	option when you run AtlEvnt.exe:
	
	  AtlEvnt.exe -d
	
	Project Overview
	----------------
	
	The AtlEvnt Workspace consists of two projects, AtlEvnt and EventSrc.
	
	The EventSrc project is a default ATL DLL project with one "Simple Object." The
	simple object has no methods and has been modified to support connection points
	and the IPersist interface. The COM object exposes a default source interface
	(below) which has a single method called Tick. The COM object calls this method
	on all sink objects connected to it, based on a timer:
	
	     dispinterface _EventSink
	     {
	
	        properties:
	        methods:
	        [id(1), helpstring("method Tick")] HRESULT Tick([in] long tckcnt);
	
	     }
	
	The AltEvnt project is an ATL EXE project. An ATL CDialogImpl class was added to
	turn the project into a simple dialog application. Four sinks were added to the
	project (two using IDispEventImpl and two using IDispEventSimpleImpl). Each sink
	illustrates a different way of providing a sink object to handle the Tick event
	fired by the EventSrc COM object.
	
	The dialog box has four buttons and clicking a button enables connecting the
	corresponding sink to the EventSrc COM object. The list box displays a string of
	form "Sinkn : Tick Event Received - x" each time the Tick event handler in the
	sink is called. Once a connection is established, the button is disabled. If
	there is any problem establishing the connection then the button text is
	replaced with a string of form "Connect Err-hr" where "hr" represents the
	failure HRESULT. Use the "Error LookUp" tool that ships with Visual C++, version
	6.0 to get an explanation of the error.
	
	To run this sample, first build the EventSrc project and ensure the EventSrc
	object is successfully registered. Then build the AtlEvnt project and run it. A
	dialog box with four buttons (apart from OK and Cancel) and a list box is
	displayed. The four buttons represent four sinks. Clicking a button connects the
	sink to the source. Once the connection is made, strings are added to the list
	box each time a handler is called.
	
	Steps to Implement IDispEventImpl
	---------------------------------
	
	1. Create a new class derived from IDispEventImpl. You can click New Class on
	  the Insert menu to generate a new class. For each different sink, add an
	  IDispEventImpl class to the inheritance list with a unique ID as the first
	  parameter. The sink class can either be a COM object (as in a composite
	  control) or a class that just derives from IdispEventImpl:
	
	        // Just a sink.
	        class CSinkObj : public IDispEventImpl<IDC_OBJ, CSinkObj>
	        {
	           ...
	        }
	
	  -or-
	
	        // COM object that also implements a sink (as in a composite
	        // control).
	        class ATL_NO_VTABLE CSinkObj :
	           public CComObjectRootEx<CComSingleThreadModel>,
	           public CComCoClass<CSinkObj, &CLSID_SinkObj>,
	           public IDispatchImpl<ISinkObj, &IID_ISinkObj, &LIBID_SINKPROJLib>,
	           public IDispEventImpl<IDC_SRCOBJ, CSinkObj>
	        {
	           ...
	        }
	
	2. You can either specify the source interface ID, the type library ID, major
	  and minor version numbers of the type library containing the source interface
	  explicitly as parameters of IdispEventImpl, or use the
	  AtlGetObjectSourceInterface() to extract this information from the type
	  library. Use of AtlGetObjectSourceInterface() requires that the COM object
	  firing the event implement either IProvideClassInfo2 or IPersist*:
	
	  class CSinkObj : public IDispEventImpl<IDC_OBJ, CSinkObj>
	        {
	           ...
	        }
	
	  -or-
	
	  class CSinkObj : public IDispEventImpl<IDC_OBJ, CSinkObj,
	           &DIID__EventSink, // Source interface GUID.
	           &LIBID_COMOBJLib, // typelib ID containing source interface.
	           1,                // Major version # of LIBID_COMOBJLib.
	           0>                // Minor version # of LIBID_COMOBJLib.
	        {
	           ...
	        }
	
	3. Add a sink map to the above class and a sink entry corresponding to each
	  event of a source interface that you would like to handle. Use
	  SINK_ENTRY_EX() when the source interface is specified as a parameter in
	  IDispEventImpl, otherwise, use SINK_ENTRY():
	
	  class CSinkObj : public IDispEventImpl<IDC_SRCOBJ, CSinkObj>
	        {
	        public:
	           BEGIN_SINK_MAP(CSinkObj)
	              SINK_ENTRY(IDC_SRCOBJ, 1 /*DISPID*/, OnTick /*Event Handler*/)
	           END_SINK_MAP()
	           ...
	        }
	
	-or-
	
	  class CSinkObj : public IDispEventImpl<IDC_OBJ, CSinkObj,
	                                &DIID__EventSink, &LIBID_COMOBJLib, 1, 0>
	        {
	        public:
	           BEGIN_SINK_MAP(CSinkObj)
	              SINK_ENTRY_EX(IDC_SRCOBJ, DIID__EventSink, 1, OnTick)
	           END_SINK_MAP()
	           ...
	        }
	
	4. Add event handler methods to your class. Make sure they have the __stdcall
	  calling convention:
	
	        class CSinkObj : public IDispEventImpl<IDC_SRCOBJ, CSinkObj3>
	        {
	        public:
	           BEGIN_SINK_MAP(CSinkObj)
	              SINK_ENTRY(IDC_SRCOBJ, 1 , OnTick)
	           END_SINK_MAP()
	
	           // event handler for event defined in idl as
	           // [id(1)] HRESULT Tick([in] long tckcnt);
	           HRESULT __stdcall OnTick(long tickcnt)
	           {
	              ATLTRACE("CSinkObj::OnTick\n");
	              return S_OK;
	           }
	           ...
	        }
	
	5. Connect the sink to the COM object by calling DispEventAdvise(). If the
	  source interface is specified as a parameter to IDispEventImpl then call:
	
	     // pUnk is the IUnknown pointer of the COM object that fires events.
	     // pSinkObj is an instance of the CSinkObj class.
	        pSinkObj->DispEventAdvise(pUnk);
	
	or else call:
	
	        // Make sure the COM object corresponding to pUnk implements
	        // IProvideClassInfo2 or IPersist*.
	        // Call this method to extract info about source type library if you
	        // specified only two parameters to IdispEventImpl.
	        AtlGetObjectSourceInterface(pUnk, &pSinkObj->m_libid,
	           &pSinkObj->m_iid, &pSinkObj->m_wMajorVerNum,
	           &pSinkObj->m_wMinorVerNum);
	
	        hr = pSinkObj->DispEventAdvise(pUnk, &pSinkObj->m_iid);
	
	6. Disconnect the sink by calling DispEventUnadvise():
	
	  pSinkObj->DispEventUnadvise(pUnk);
	
	Steps to Implement IDispEventSimpleImpl
	---------------------------------------
	
	1. Create a class derived from IDispEventSimpleImpl. The source interface has to
	  be specified.
	
	2. Follow step 3 above except add SINK_ENTRY_INFO() for each method of a source
	  interface that you would like to handle. Since IDispEventSimpleImpl does not
	  have access to the type library you have to provide information about each
	  event handler through an _ATL_FUNC_INFO structure, one for each event
	  handler.
	
	  Instead of specifying an _ATL_FUNC_INFO structure in SINK_ENTRY_INFO(), you
	  can use the SINK_ENTRY_EX() macro and override the virtual function
	  GetFuncInfoFromId() to fill in the _ATL_FUNC_INFO structure, as shown in the
	  following code.
	
	3. Follow steps 4 through 6 from above:
	
	  static _ATL_FUNC_INFO OnTickInfo = {
	           CC_STDCALL,   // Calling convention.
	           VT_I4,        // Return type.
	           1,            // Number of arguments.
	           {VT_I4}       // Argument types.
	        };
	
	        class CSinkObj :
	           public IDispEventSimpleImpl<IDC_SRCOBJ, CSinkObj,
	                  &DIID__EventSink>
	        {
	        public:
	        BEGIN_SINK_MAP(CSinkObj)
	           SINK_ENTRY_INFO(IDC_SRCOBJ, DIID__EventSink, 1, OnTick,
	                           &OnTickInfo)
	        END_SINK_MAP()
	
	           HRESULT __stdcall OnTick(long tickcnt)
	           {
	              ATLTRACE("CSinkObj::OnTick\n");
	              return S_OK;
	           }
	           ...
	
	        }
	
	-or-
	
	        class CSinkObj :
	           public IDispEventSimpleImpl<IDC_SRCOBJ, CSinkObj,
	                  &DIID__EventSink>
	        {
	        public:
	        BEGIN_SINK_MAP(CSinkObj4)
	           SINK_ENTRY_EX(IDC_SRCOBJ, DIID__EventSink, 1, OnTick)
	           // Equivalent to:
	           // SINK_ENTRY_INFO(IDC_SRCOBJ, DIID__EventSink, 1, OnTick, NULL)
	        END_SINK_MAP()
	
	           HRESULT GetFuncInfoFromId(const IID& iid, DISPID dispidMember,
	              LCID lcid, _ATL_FUNC_INFO& info)
	           {
	              if (InlineIsEqualGUID(iid, DIID__EventSink))
	              {
	                 info.cc = CC_STDCALL;
	                 switch(dispidMember)
	                 {
	                    case 1:
	                       info.vtReturn = VT_I4;
	                       info.nParams = 1;
	                       info.pVarTypes[0] =  VT_I4;
	                       return S_OK;
	
	                    default:
	                       return E_FAIL;
	                 }
	              }
	              return E_FAIL;
	           }
	
	           HRESULT __stdcall OnTick(long tickcnt)
	           {
	              ATLTRACE("CSinkObj::OnTick\n");
	              return S_OK;
	           }
	           ...
	        }
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q181277 SAMPLE: AtlSink Uses ATL to Create a Dispinterface Sink
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jaganathan
	Thangavelu, Microsoft Corporation.
	
	
	Additional query words: listbox Atlevnt Atlevntvcnet
	
	======================================================================
	Keywords          : kbfile kbSample kbActiveX kbActivexEvents kbCOMt kbConnPts kbVC600 kbATL300 kbFAQ MSGRAPH kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
