---
layout: page
title: "Q206626: HOWTO: Change the Text Color of the Selected Property Sheet Tab"
permalink: /kb/206/Q206626/
---

## Q206626: HOWTO: Change the Text Color of the Selected Property Sheet Tab

	Article: Q206626
	Product(s): Microsoft C Compiler
	Version(s): 4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbPropSheet kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 4.2b, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 4.2b, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	To change the color of text on the selected tab of a property sheet, you need to
	subclass the tab control associated with the property sheet and make it owner
	drawn.
	
	Override the DrawItem method of your class derived from CTabCtrl and change the
	color of text before displaying it.
	
	MORE INFORMATION
	================
	
	1. Create a new class called CMyTabCtrl deriving from CTabCtrl. Override the
	  DrawItem method for CTabCtrl. Because ClassWizard does not show this method,
	  this method needs to be added manually. The sample code below shows how to
	  change the color of the text of the selected tab:
	
	  void CMyTabCtrl::DrawItem(LPDRAWITEMSTRUCT lpDIS)
	  {
	       TC_ITEM tci;
	       CDC* pDC = CDC::FromHandle(lpDIS->hDC);
	       CRect rect(lpDIS->rcItem);
	       char szTabText[256];
	       memset(szTabText,'\0',sizeof(szTabText));
	       
	       tci.mask = TCIF_TEXT;
	       tci.pszText = szTabText;
	       tci.cchTextMax = sizeof(szTabText) -1;
	       GetItem(lpDIS->itemID, &tci);
	       
	       if (lpDIS->itemAction & ODA_DRAWENTIRE)
	       {
	           pDC->TextOut(rect.left+5, rect.top+5, tci.pszText);
	       }
	       
	       if ((lpDIS->itemState & ODS_SELECTED) && 
	           (lpDIS->itemAction & (ODA_SELECT | ODA_DRAWENTIRE)))
	       {
	           //Make the color of text of the selected tab to be BLUE.
	           pDC->SetTextColor(RGB(0,0,255));
	           pDC->TextOut(rect.left+5, rect.top+5, tci.pszText);
	       }
	  }
	
	2. Create a new class, CMyPropertySheet, derived from CPropertySheet and add a
	  member variable m_myTabCtrl of type CMyTabCtrl.
	
	  Add a handler for WM_INITDIALOG message. After the call to the base class
	  OnInitDialog, add the code as shown below to subclass the tab control and
	  make it an owner-drawn control:
	
	  BOOL CMyPropertySheet::OnInitDialog()
	  {
	     BOOL bResult = CPropertySheet::OnInitDialog();
	
	     /* Subclass the tab control. */ 
	     m_myTabCtrl.SubclassWindow(GetTabControl()->m_hWnd);
	
	     /* Make it owner drawn. */ 
	     m_myTabCtrl.ModifyStyle(0,TCS_OWNERDRAWFIXED);
	
	     return bResult;
	  }
	
	Now, use CMyPropertySheet instead of CPropertySheet in your application.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Sreedhar Pelluru, Microsoft Corporation
	
	
	Additional query words: CTabCtrl CPropertySheet DrawItem owner draw
	
	======================================================================
	Keywords          : kbMFC kbPropSheet kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.2b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
