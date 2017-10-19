---
layout: page
title: "Q184820: FIX: Apply Button on an ATL Control's Property Page Is Disabled"
permalink: /kb/184/Q184820/
---

## Q184820: FIX: Apply Button on an ATL Control's Property Page Is Disabled

	Article: Q184820
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0,2.1
	Operating System(s): 
	Keyword(s): kbnokeyword kbActiveX kbATL200bug kbATL210bug kbCOMt kbContainer kbCtrl kbPropSheet kbV
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2b 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When embedding an ATL ActiveX control inside a container application written in
	Visual Basic (VB), the Apply button on the control's property page is never
	activated even though the property page's dirty flag is set [that is, calling
	SetDirty(TRUE)] to enable the button.
	
	CAUSE
	=====
	
	Below is the SetDirty() function copied from the Atlctl.h file:
	
	     void SetDirty(BOOL bDirty)
	     {
	        T* pT = static_cast<T*>(this);
	        if (!pT->m_bDirty && bDirty)
	           pT->m_pPageSite->OnStatusChange(
	              PROPPAGESTATUS_DIRTY | PROPPAGESTATUS_VALIDATE);
	        pT->m_bDirty = bDirty;
	     }
	
	When OnStatusChange() is called, Visual Basic in turn calls IsPageDirty(), which
	returns S_OK if m_bDirty is set to TRUE; otherwise, S_FALSE.
	
	However, as shown above, m_bDirty is not set until OnStatusChanged() returns.
	
	RESOLUTION
	==========
	
	Please note that m_bDirty must be set before OnStatusChanged() is called in
	SetDirty().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected ATL version 3.0, which
	shipped with Visual C++ version 6.0 for Windows.
	
	MORE INFORMATION
	================
	
	The following are two workarounds:
	
	1. Add an additional call to OnStatusChanged() right after SetDirty() is called.
	  Using the ATL Polygon sample code, the change is shown below: "
	
	        LRESULT OnSidesChange(WORD wNotify, WORD wID, HWND hWnd, BOOL&
	           bHandled)
	        {
	           SetDirty(TRUE);
	           m_pPageSite->OnStatusChange(
	              PROPPAGESTATUS_DIRTY | PROPPAGESTATUS_VALIDATE);
	           return 0;
	        }
	
	  " (without the quotation marks)
	
	2. Change the SetDirty() function in Atlctl.h to the following: "
	
	        void SetDirty(BOOL bDirty)
	        {
	           T* pT = static_cast<T*>(this);
	           if (pT->m_bDirty != bDirty)
	           {
	              pT-.m_bDirty = bDirty;
	              if (bDirty)
	                 pT->m_pPageSite->OnStatusChange(
	                    PROPPAGESTATUS_DIRTY | PROPPAGESTATUS_VALIDATE);
	           }
	        }
	
	  " (without the quotation marks)
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place an ATL Polygon control on a Visual Basic Form.
	
	2. Display the Polygon control's Property Pages dialog box by selecting the
	  (Custom) property from Visual Basic's Properties window.
	
	  NOTE: The Apply button on the Property Pages window is initially disabled.
	
	3. Enter an integer value in the Sides edit box.
	
	  NOTE: The Apply button remains disabled.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Yeong- Kah
	Tam, Microsoft Corporation
	
	Additional query words: ocx
	
	======================================================================
	Keywords          : kbnokeyword kbActiveX kbATL200bug kbATL210bug kbCOMt kbContainer kbCtrl kbPropSheet kbVBp kbVC420bug kbVC500bug kbVC600fix kbATL300fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
