---
layout: page
title: "Q179689: Hooking into the IUnknown of a COM Object in MFC"
permalink: /kb/179/Q179689/
---

## Q179689: Hooking into the IUnknown of a COM Object in MFC

{% raw %}

	Article: Q179689
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbole kbSample kbActiveX kbAutomation kbCOMt kbMFC kbVC500 kbVC600 kbhowto kbGrp
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ .NET (2002) supports both the managed code model that is provided by the Microsoft .NET Framework and the unmanaged native Microsoft Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	This sample provides a generic technique to hook into:
	
	- The IUnknown members of the interfaces implemented by a CCmdTarget- derived
	  COM object that is not an aggregate.
	
	- The members of the inner IUnknown of a CCmdTarget-derived COM object that is
	  created as an aggregated object.
	
	By hooking into the IUnknown members of a COM object, useful debug information,
	such as the current reference of the object when it changes, and the symbolic
	names of the object's interfaces that are queried for, can be determined. Also,
	the hook gives the flexibility to control what interfaces of an object can be
	made available to other applications. The more information section details the
	use of this functionality with an example.
	
	This sample applies the hooking technique to an OLE control generated using
	ControlWizard. However, note that the same hooking technique could be applied to
	any CCmdTarget-derived COM object that provides one or more interface
	implementation(s).
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Hookctrl.exe now
	  (http://download.microsoft.com/download/vb60ent/samp23/1/WIN98/EN-US/Hookctrl.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Hookctrlvcnet.exe now
	  (http://download.microsoft.com/download/visualstudionet/sample/1.9/win98mexp/en-us/Hookctrlvcnet.exe)
	
	Release Date: June 25, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	In MFC, when a COM object instance is created in the implementation of
	IClassFactory::CreateInstance, the component pieces (that is, the aggregates) of
	this object, if any, are created by calling the virtual function
	CCmdTarget::OnCreateAggregates. The default implementation of OnCreateAggregates
	provided in CCmdTarget does nothing by returning TRUE.
	
	In COM, an object that is aggregated to an outer object stores the latter's
	IUnknown, which is called as the outer unknown or the controlling unknown. This
	is done so that the inner object can delegate all the IUnknown calls from its
	own interfaces to this outer unknown. MFC stores this controlling unknown for an
	object in a public member variable of CCmdTarget called "m_pOuterUnknown".
	
	An object that is not aggregated by any other outer object has the above variable
	set to NULL, implying that the controlling unknown for this object is the same
	as its own IUnknown. This concept of outer unknowns being NULL for an object
	that isn't aggregated can be used to hook in to its IUnknown functions. This can
	be accomplished by replacing the object's IUnknown implementation with a custom
	implementation. This custom implementation (for example, IUnknownHook) can be
	made to provide more debug information by displaying the object's current
	reference count whenever it changes, by displaying the symbolic names of the
	object's interfaces that are queried for, and so on. In addition, the IUnknown
	hook can be used to control what interfaces of an object are accessible from
	other applications.
	
	This sample illustrates the above hooking technique by applying it to an OLE
	control generated using the ControlWizard. Installing the hook to an OLE control
	gives access to the IUnknown implementation for all of its interfaces when it is
	not created as an aggregate, and to the control's inner IUnknown implementation
	when it is created as an aggregate.
	
	The sample retrieves the symbolic name of the control's interfaces by calling
	AfxGetIIDString, which is an undocumented MFC function. Also, the sample
	replaces CInnerUnknown, which provides the implementation for the inner IUnknown
	when an object is created as an aggregate, with CMyInnerUnknown in order to gain
	access to the inner IUnknown implementation.
	
	Finally, the sample also demonstrates the use of this hook to control interfaces
	that are not accessible from outside by returning E_NOINTERFACE from
	IUnknownHook::QueryInterface. For example, if an OLE control wants to use
	IPersistStorage for storing its persistence information, it can choose not to
	expose IPersistStreamInit and IPersistMemory by returning E_NOINTERFACE for the
	latter two interfaces. Note that the above example assumes that control
	container uses one of these interfaces for storing the control's persistence
	information: IPersistMemory, IPersistStreamInit, or IPersistStorage.
	
	REFERENCES
	==========
	
	For additional information on the topics discussed above, please refer to the
	following:
	
	- MFC Technical Note #38, "MFC/OLE IUnknown implementation".
	
	- Chapter-2 in "Inside OLE", Second Edition, by Kraig Brockschmidt.
	
	Additional query words: Hookctrl Hookctrlvcnet
	
	======================================================================
	Keywords          : kbfile kbole kbSample kbActiveX kbAutomation kbCOMt kbMFC kbVC500 kbVC600 kbhowto kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
