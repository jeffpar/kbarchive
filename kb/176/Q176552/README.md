---
layout: page
title: "Q176552: HOWTO: Set Initial Default Size of ActiveX (ATL) Control"
permalink: kb/176/Q176552/
---

## Q176552: HOWTO: Set Initial Default Size of ActiveX (ATL) Control

	Article: Q176552
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbActiveX kbATL200 kbATL210 kbCOMt kbCtrlCreate kbATL300 kbGrpDSMFCATL
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to set the default size of an Active Template Library
	(ATL) control when it is first inserted into a container. The default width and
	height of an ATL control is stored in a variable called m_sizeExtent, which is
	normally initialized to 5080x5080 himetric units in the constructor for
	CComControlBase from which CComControl is derived. You can set your own
	preferred default size in your control's constructor, as follows:
	
	     CTestControl()
	     {
	        // width = 100 pixels, height = 25 pixels
	        SIZE sz = { 100, 25 };
	        // convert pixels to himetric
	        AtlPixelToHiMetric (&sz, &m_sizeExtent);
	        // store natural extent
	        m_sizeNatural = m_sizeExtent;
	     }
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Samsom
	Tanrena, Microsoft Corporation
	
	Additional query words: kbVC500 kbVC600 kbATL200 kbATL210 kbATL300 kbctrl
	
	======================================================================
	Keywords          : kbnokeyword kbActiveX kbATL200 kbATL210 kbCOMt kbCtrlCreate kbATL300 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :2.0,2.1,3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
