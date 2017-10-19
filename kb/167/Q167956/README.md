---
layout: page
title: "Q167956: HOWTO: Detect IE's STOP Button Click in ActiveX Control"
permalink: /kb/167/Q167956/
---

## Q167956: HOWTO: Detect IE's STOP Button Click in ActiveX Control

	Article: Q167956
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbMFC kbVC500 kbVC600 kbDSupport kbocx kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For some ActiveX controls, such as ActiveMovie, the Stop button in the toolbar
	of the Internet Explorer has special meaning to them. Those controls may want to
	stop playing the background sound or movie when the Stop button is clicked. This
	article shows how to add the IOleCommandTarget interface to an ActiveX control
	to trap the Stop button selection.
	
	MORE INFORMATION
	================
	
	ActiveX controls typically do not support the IOleCommandTarget interface. For
	ActiveX controls that support IOleCommandTarget interface, you must add the
	following code to the .h and .cpp files of the COleControl-derived class. Then,
	you can trap the OLECMDID_STOP command id (id for the Stop button in Internet
	Explorer's toolbar) in the IOleCommandTarget::Exec()function.
	
	     // In the .h file of COleControl-derived class:
	     class CMyOleControl : public COleControl
	     {
	        ...
	
	     // Interface Maps
	     protected:
	
	        // Add the following to support the IOleCommandTarget interface.
	        // NOTE:  Nested class name is called CmdTargetObj
	        DECLARE_INTERFACE_MAP()
	
	        BEGIN_INTERFACE_PART(CmdTargetObj, IOleCommandTarget)
	           STDMETHOD(QueryStatus)(const GUID*, ULONG, OLECMD[], OLECMDTEXT*);
	           STDMETHOD(Exec)(const GUID*, DWORD, DWORD, VARIANTARG*,
	              VARIANTARG*);
	        END_INTERFACE_PART(CmdTargetObj)
	     };
	
	     // In the .cpp file of COleControl-derived class:
	     BEGIN_INTERFACE_MAP(CMyOleControl, COleControl)
	        INTERFACE_PART(CMyOleControl, IID_IOleCommandTarget, CmdTargetObj)
	     END_INTERFACE_MAP()
	
	     ULONG FAR EXPORT CMyOleControl::XCmdTargetObj::AddRef()
	     {
	        METHOD_PROLOGUE(CMyOleControl, CmdTargetObj)
	        return pThis->ExternalAddRef();
	     }
	
	     ULONG FAR EXPORT CMyOleControl::XCmdTargetObj::Release()
	     {
	        METHOD_PROLOGUE(CMyOleControl, CmdTargetObj)
	        return pThis->ExternalRelease();
	     }
	
	     HRESULT FAR EXPORT CMyOleControl::XCmdTargetObj::QueryInterface(
	        REFIID iid, void FAR* FAR* ppvObj)
	     {
	        METHOD_PROLOGUE(CMyOleControl, CmdTargetObj)
	        return (HRESULT)pThis->ExternalQueryInterface(&iid, ppvObj);
	     }
	
	     STDMETHODIMP CMyOleControl::XCmdTargetObj::QueryStatus(
	        const GUID* pguidCmdGroup, ULONG cCmds, OLECMD rgCmds[],
	        OLECMDTEXT* pcmdtext)
	     {
	        METHOD_PROLOGUE(CMyOleControl, CmdTargetObj)
	        //... add YOUR own code here.
	
	        return S_OK;
	     }
	
	     STDMETHODIMP CMyOleControl::XCmdTargetObj::Exec(
	        const GUID* pguidCmdGroup, DWORD nCmdID, DWORD nCmdExecOpt,
	        VARIANTARG* pvarargIn, VARIANTARG* pvarargOut)
	     {
	        METHOD_PROLOGUE(CMyOleControl, CmdTargetObj)
	        if (nCmdID == OLECMDID_STOP)
	           {
	           // ... STOP button is clicked, add YOUR own code here.
	           // We just display a message box.
	           ::MessageBox(NULL, "STOP","CMyOleControl", MB_OK);
	           }
	
	        return S_OK;
	     }
	
	REFERENCES
	==========
	
	This article only focuses on the Stop button selection. For additional
	information about other buttons, please see the following article(s) in the
	Microsoft Knowledge Base:
	
	  Q167230 HOWTO: Detecting when IE holds Controls and Pages in Memory
	
	For information about adding the IOleCommandTarget interface to the ActiveX
	control, refer to the "Interface Map Basics" section of "TN038: MFC/OLE IUnknown
	Implementation" in Visual C++ Books Online.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Yeong-Kah
	Tam, Microsoft Corporation
	
	
	Additional query words: ocx
	
	======================================================================
	Keywords          : kbole kbActiveX kbMFC kbVC500 kbVC600 kbDSupport kbocx kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.2,4.2b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
