---
layout: page
title: "Q168326: HOWTO: Define the Display Size of an MFC ActiveX Control"
permalink: kb/168/Q168326/
---

## Q168326: HOWTO: Define the Display Size of an MFC ActiveX Control

	Article: Q168326
	Product(s): Microsoft C Compiler
	Version(s): 4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbCtrl kbMFC kbVC420 kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ .NET (2002) supports both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. Part or all of the information in this article applies to managed Visual C++ code and may be applied only by using the .NET Framework.
	
	SUMMARY
	=======
	
	Sometimes you need to limit an ActiveX control's minimum or maximum size at
	design time. This article explains how to do this by overriding the virtual
	COleControl::OnSetExtent method.
	
	MORE INFORMATION
	================
	
	The COleControl::OnSetExtent method is called by
	COleControl::XOleObject::SetExtent. COleControl::XOleObject is COleControl's
	IOleObject implementation. A container calls IOleObject::SetExtent when it needs
	to dictate to an embedded object the size at which it will be displayed.
	
	COleControl::OnSetExtent takes one parameter, a pointer to a SizeL structure. The
	SizeL structure contains the new size that the container is requesting for the
	control in HIMETRIC units.
	
	If a you need to limit a control to a certain size, you need to make it override
	COleControl::OnSetExtent and do the following:
	
	1. Make any necessary unit conversions on the SizeL structure passed in.
	
	2. Check the size in the SizeL structure that was passed in.
	
	3. If the control cannot accommodate the request, return false.
	
	4. Otherwise, pass the (unmodified) SizeL to the base class' implementation of
	  OnSetExtent.
	
	See the Sample Code section below for an example of how to override
	COleControl::OnSetExtent to limit the size of an ActiveX control.
	
	Sample Code
	-----------
	
	The following code snippet shows how to override COleControl::OnSetExtent so that
	the height of the control will never be smaller than 20 pixels.
	
	      BOOL CTestCtrl::OnSetExtent(LPSIZEL lpSizeL)
	        {
	           // This function limits the height of a control to be at
	           // least 20 pixels.
	
	           // Use the desktop window to get a DC so we can use
	           // CDC::HIMETRICtoDP and CDC::DPtoHIMETRIC
	           CWnd *pWnd = CWnd::FromHandle(::GetDesktopWindow());
	           CClientDC dc(pWnd);
	
	           CSize sz(lpSizeL->cx,lpSizeL->cy);
	           dc.HIMETRICtoDP(&sz); //Convert the size to pixels
	
	           if (sz.cy < 20)
	              return false;
	
	           return COleControl::OnSetExtent(lpSizeL);
	        }
	
	Note that the code is identical up to and including the line that says "if (sz.cy
	is greater than 20)". The new code also lacks the "TRACE" lines.
	
	REFERENCES
	==========
	
	
	Additional query words: ocx
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbCtrl kbMFC kbVC420 kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.2,4.2b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
