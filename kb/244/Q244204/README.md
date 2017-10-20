---
layout: page
title: "Q244204: BUG: ATL Events Don't Fire If Defined With Interface Alias"
permalink: /kb/244/Q244204/
---

## Q244204: BUG: ATL Events Don't Fire If Defined With Interface Alias

{% raw %}

	Article: Q244204
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbActiveX kbActivexEvents kbCOMt kbVC600bug kbATL300bug kbDSupport kbGrpDSMFCATL kbIDL
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using IDispEventImpl to sink events in an ATL container, the event does not
	fire and the IDispatch::Invoke call to fire the event returns S_OK. The event
	actually fails in the call to ITypeInfo2::GetFuncIndexOfMemId with an HRESULT of
	0x8002802B within IDispEventSimpleImpl::Invoke.
	
	CAUSE
	=====
	
	A dispinterface may be defined by explicitly listing the set of supported
	methods and properties, or by listing a single interface. Both methods are shown
	here:
	
	  [
	      [attributes]
	  ]
	  dispinterface dispinterface-name
	  {
	      properties:
	          property-list
	      methods:
	          method-list
	  };
	
	  [
	      [attributes]
	  ]
	  dispinterface dispinterface-name
	  {
	      interface interface-name
	  };
	
	The symptoms described occur if the event interface that the container is trying
	to provide a sink for is defined by listing a single interface.
	
	RESOLUTION
	==========
	
	Define the event interface, that uses IDispEventImpl to sink events, by listing
	the individual properties and methods, or derive the sink object from
	IDispEventSimpleImpl instead of IDispEventImpl. Refer to Knowledge Base article
	Q194179 for information on using IDispEventSimpleImpl.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The steps listed below require modification to files provided by the ATLEvnt
	sample described in the Knowledge Base article Q194179.
	
	1. Open the EventSrc.idl file and change the definition so it looks like this:
	
	  // EventSrc.idl : IDL source for EventSrc.dll
	  // 
	
	  // This file will be processed by the MIDL tool to
	  // produce the type library (EventSrc.tlb) and marshalling code.
	
	  import "oaidl.idl";
	  import "ocidl.idl";
	  	[
	  		object,
	  		uuid(476D8D1B-381B-11D2-A610-00AA00C14AF9),
	  		dual,
	  		helpstring("ISrcObj Interface"),
	  		pointer_default(unique)
	  	]
	  	interface ISrcObj : IDispatch
	  	{
	  	};
	
	  [
	  	uuid(476D8D0F-381B-11D2-A610-00AA00C14AF9),
	  	version(1.0),
	  	helpstring("EventSrc 1.0 Type Library")
	  ]
	  library EVENTSRCLib
	  {
	  	importlib("stdole32.tlb");
	  	importlib("stdole2.tlb");
	  	
	  	[
	  		object,
	  		uuid(ADF41C66-7795-11d3-9045-0008C76BD9D2),
	  		oleautomation,
	  		helpstring("_IMyEvents Interface"),
	  		pointer_default(unique)
	  	]
	  	interface _IMyEvents : IUnknown
	  	{
	  		[id(1), helpstring("method Tick")] HRESULT Tick([in] long tckcnt);
	  	}; 
	  	[
	  		uuid(7F3F60C1-381E-11d2-A610-00AA00C14AF9)
	  	]
	
	  	dispinterface _EventSink
	  	{
	  		interface _IMyEvents;
	  /*		properties:
	  		methods:
	  		[id(1), helpstring("method Tick")] HRESULT Tick([in] long tckcnt);
	  */ 
	  	}
	
	  	[
	  		uuid(476D8D1C-381B-11D2-A610-00AA00C14AF9),
	  		helpstring("SrcObj Class")
	  	]
	  	coclass SrcObj
	  	{
	  		[default] interface ISrcObj;
	  		[default, source] dispinterface _EventSink;
	  	};
	  };
	
	2. Rebuild the EventSrc object.
	
	3. Set ATLEvnt as the active project and rebuild the ATLEvnt.exe file.
	
	4. Run ATLEvnt.Exe, and click the buttons to connect to each sink. Notice that
	  the two event sinks (CSinkObj and CSinkObj2) that derive from IDispEventImpl
	  are not get fired correctly. However, the two event sinks (CSinkObj3 and
	  CSinkObj4) that derive from IDispEventSimpleImpl are fired correctly.
	
	Additional query words: 8002802B
	
	======================================================================
	Keywords          : kbActiveX kbActivexEvents kbCOMt kbVC600bug kbATL300bug kbDSupport kbGrpDSMFCATL kbIDL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
