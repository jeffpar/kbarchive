---
layout: page
title: "Q247073: CustWBC.exe: ATL HTML Control Customizes the WebBrowser Control"
permalink: /kb/247/Q247073/
---

## Q247073: CustWBC.exe: ATL HTML Control Customizes the WebBrowser Control

	Article: Q247073
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbhtml kbActivexEvents kbATL kbConnPts kbCtrl kbCustomHTML kbIE KbUIDes
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CustWBC.exe is a sample that illustrates how you can control the WebBrowser
	control that is embedded in an ATL HTML control. In particular, the sample
	demonstrates three points:
	
	1. How to provide a custom implementation of the IDocHostUIHandlerDispatch
	  interface. The custom implementation disables the context menu of the
	  WebBrowser control.
	
	2. How to extend the functionality of the WebBrowser control with additional
	  methods accessible through window.external from within the control's HTML.
	  This feature is present in Wizard-generated code, but take special actions to
	  integrate this feature into your custom IDocHostUIHandlerDispatch.
	
	3. How to provide a sink for the WebBrowser control events. The sink interface
	  presented here reacts when the browser notifies your control that the user
	  requested to navigate in a new browser window (by shift+clicking a link).
	  Instead of opening a new window, use the window already open to go to the
	  requested URL.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  CustWBC.exe
	
	Release Date: May 17, 2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The implementation of the HTML control actually requires four separate objects:
	the control itself, the object that implements the IDocHostUIHandlerDispatch
	interface, the object that implements the extender methods, and the object that
	implements the sink. You need all four objects because all of them need to
	implement IDispatch.
	
	The IDocHostUIHandlerDispatch implementation returns E_NOTIMPL for most of the
	methods except the ShowContextMenu method. This method returns S_OK without
	displaying anything. This convinces the WebBrowser control that it doesn't need
	to do anything about the right button click.
	
	The sink only implements the Invoke method of IDispatch as follows:
	
	     STDMETHOD (Invoke) (DISPID dispidMember, REFIID riid, LCID lcid, 
	                         WORD wFlags, DISPPARAMS* pdispparams, VARIANT* pvarResult, 
	                         EXCEPINFO* pexcepinfo, UINT* puArgErr)
	     {
	        HRESULT hr = S_OK;
	        if (pdispparams)
	        {
	           switch (dispidMember)
	           {
	           // When a request comes in asking for a new window, go to the 
	           // URL specified in the request, but within the old Web browser window.
	           case DISPID_NEWWINDOW:
	           // case DISPID_FRAMENEWWINDOW:
	              if (m_pBrowser)
	              {
	                 VARIANT defArg;
	                 defArg.vt = VT_ERROR; defArg.scode = DISP_E_PARAMNOTFOUND;
	                 m_pBrowser->Navigate(pdispparams->rgvarg[5].bstrVal,
	                             &defArg, &defArg, pdispparams->rgvarg[2].pvarVal, &defArg);
	              }
	              *(pdispparams->rgvarg[0].pboolVal) = VARIANT_TRUE;
	              hr = S_OK;
	              break;
	           default:
	              hr = DISP_E_PARAMNOTFOUND;
	              break;
	           }
	        }
	        else
	           hr = DISP_E_PARAMNOTFOUND;
	
	        return hr;
	     }
	
	Finally, the control's OnCreate method instantiates all these elements and sets
	everything up.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Cosmin
	Radu, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q202009 BUG: Error Accessing Window.external in ATL DHTML Control
	
	Additional query words: CustWBC
	
	======================================================================
	Keywords          : kbfile kbsample kbhtml kbActivexEvents kbATL kbConnPts kbCtrl kbCustomHTML kbIE KbUIDesign kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
