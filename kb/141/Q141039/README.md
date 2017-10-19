---
layout: page
title: "Q141039: HOWTO: How to Hide the Apply Button in CPropertySheet"
permalink: /kb/141/Q141039/
---

## Q141039: HOWTO: How to Hide the Apply Button in CPropertySheet

	Article: Q141039
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbcode kbMFC kbPropSheet KbUIDesign kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kbGrpDSMFCA
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A modal CPropertySheet will automatically create an Apply button. To hide this
	button, you need to use different methods for different versions of MFC.
	
	In Visual C++ 2.2 and earlier (MFC 3.2 and earlier), you can derive a class from
	CPropertySheet, override OnCreate(), call GetDlgItem(ID_APPLY_NOW), and finally
	call ShowWindow(SW_HIDE) to hide the Apply button.
	
	In Visual C++ 4.0 (MFC 4.0), CPropertySheet has a public member called m_psh.
	m_psh is a PROPSHEETHEADER structure with a dwFlags member. One of the possible
	values of m_psh.dwFlags is PSH_NOAPPLYNOW. Setting this value before the call to
	DoModal() hides the Apply button. Another option in Visual C++ 4.0 is to call
	GetDlgItem()/ShowWindow(), but you should do it in OnInitDialog() instead of
	OnCreate().
	
	MORE INFORMATION
	================
	
	In Visual C++ 2.2 and earlier, CPropertySheet was implemented internally by MFC.
	Starting with Visual C++ 4.0, the CPropertySheet uses the Windows 95
	PropertySheet control, so the method for hiding the Apply button changed.
	
	You can hide any of the default buttons in a modal property sheet by using the
	methods in this article. The IDs for each button are IDOK (OK button), IDCANCEL
	(Cancel button), ID_APPLY_NOW (Apply button), and IDHELP (Help button). Note
	that the Apply button is disabled by default until you call SetModified(). In
	addition, in Visual C++ 4.0, the Help button is not shown by default. To show
	it, you can set m_psh.dwFlags |= PSH_HASHELP.
	
	Sample Code
	-----------
	
	  /***** this code applies to Visual C++ 4.0 and later *****/ 
	  void CMyView::OnDisplayModalSheet()
	  {
	     CMySheet sheet ("Set Properties");
	     // this hides the Apply button
	     sheet.m_psh.dwFlags |= PSH_NOAPPLYNOW;
	     sheet.DoModal ();
	  }
	
	  /* You can also do the following to hide the Apply button */ 
	
	  BOOL CMySheet::OnInitDialog()
	  {
	     CPropertySheet::OnInitDialog();
	
	     // this hides the Apply button
	     CWnd* pApplyButton = GetDlgItem (ID_APPLY_NOW);
	     ASSERT (pApplyButton);
	     pApplyButton->ShowWindow (SW_HIDE);
	
	     return TRUE;
	  }
	  /*********************************************************/ 
	
	  /***** this code applies to Visual C++ 2.2 and earlier *****/ 
	  int CMySheet::OnCreate(LPCREATESTRUCT lpCreateStruct)
	  {
	     if (CPropertySheet::OnCreate(lpCreateStruct) == -1)
	        return -1;
	
	     // this hides the Apply button
	     CWnd* pApplyButton = GetDlgItem (ID_APPLY_NOW);
	     ASSERT (pApplyButton);
	     pApplyButton->ShowWindow (SW_HIDE);
	
	     return 0;
	  }
	  /*********************************************************/ 
	
	Additional query words: kbinf 1.52 2.00 2.10 2.20 4.00
	
	======================================================================
	Keywords          : kbcode kbMFC kbPropSheet KbUIDesign kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
