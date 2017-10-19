---
layout: page
title: "Q150204: HOWTO: Retrieve the Actual Parent Window of an ActiveX Control"
permalink: /kb/150/Q150204/
---

## Q150204: HOWTO: Retrieve the Actual Parent Window of an ActiveX Control

	Article: Q150204
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCtrl kbDlg kbMFC kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCAT
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An ActiveX control is created as a child of the window of the container most
	closely associated with the site object. This article describes how to obtain
	the Parent window of an ActiveX control, and why calling GetParent or
	CWnd::GetParent for an ActiveX control may not return its actual Parent window.
	
	MORE INFORMATION
	================
	
	An ActiveX control typically gains access to the following container windows:
	
	- Frame window: the outer-most container window where the container's main menu
	  resides. An ActiveX control retrieves this window handle by calling either
	  IOleInPlaceFrame::GetWindow or IOleInPlaceSite::GetWindowContext.
	
	- Site window: the container window that contains the ActiveX control's view.
	  An ActiveX control retrieves this container window by calling
	  IOleInPlaceSite::GetWindow.
	
	However, ActiveX control containers generated using MFC and Microsoft Visual
	Basic 4.0 or 5.0 use the same window for the frame and the site object.
	
	When the MFC framework creates an ActiveX control's window, it retrieves the
	window associated with the container's site object by calling
	IOleInPlaceSite::GetWindow. The returned window is made the parent of the
	ActiveX control, except in the following two cases, where the framework creates
	a reflector window that reflects the notification messages:
	
	- The ActiveX control subclasses a Windows control, and the container does not
	  support message reflection.
	
	  -or-
	
	- The control container does not support automatic clipping of its controls.
	
	In these two scenarios, the ActiveX control is made a child of the reflector
	window whose parent is the window returned from IOleInPlaceSite::GetWindow.
	
	NOTE: If IOleObject::DoVerb with OLEIVERB_OPEN is invoked on an ActiveX control,
	and if in-place activation is not possible, an outer frame window is created and
	becomes the parent of the ActiveX control.
	
	Sample Code
	-----------
	
	     // The following code should return the
	     // actual parent window of the ActiveX control.
	     HWND CMyOleControl::GetActualParent()
	     {
	         HWND hwndParent = 0;
	
	         // Get the window associated with the in-place site object,
	         // which is connected to this ActiveX control.
	         if (m_pInPlaceSite != NULL)
	             m_pInPlaceSite->GetWindow(&hwndParent);
	
	         return hwndParent;     // Return the in-place site window handle.
	     }
	
	REFERENCES
	==========
	
	- Online Documentation for IOleWindow::GetWindow
	- MFC source code for COleControl::OnActivateInPlace and
	  COleControl::CreateControlWindow.
	
	Additional query words: ocx control
	
	======================================================================
	Keywords          : kbole kbActiveX kbCtrl kbDlg kbMFC kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
