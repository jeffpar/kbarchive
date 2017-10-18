---
layout: page
title: "Q143210: HOWTO: How to Add the Finish Button to a Wizard Property Sheet"
permalink: kb/143/Q143210/
---

## Q143210: HOWTO: How to Add the Finish Button to a Wizard Property Sheet

	Article: Q143210
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbMFC kbPropSheet KbUIDesign kbVC kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, a wizard style property page can have either the Back/Next buttons
	or the Finish button, but not both. To have both, you can show the Finish button
	and move the Back/Next buttons.
	
	MORE INFORMATION
	================
	
	When a Wizard-style property sheet is displayed, all of the default buttons are
	created, but the Finish button is hidden and located under the Next button. To
	display all of the default buttons, you must show the Finish button and move the
	Next button. Then move the Back button so that its relative position to the Next
	button is maintained.
	
	The following sample code displays the Finish button and moves the Next and Back
	buttons to the left of the Finish button. CMyWizardSheet is derived from
	CPropertySheet.
	
	Sample Code
	-----------
	
	  /* Compile options needed:  Default
	  */ 
	
	  BOOL CMyWizardSheet::OnInitDialog()
	  {
	      BOOL bResult = CPropertySheet::OnInitDialog();
	
	      CRect rect, tmp;
	      CSize shift;
	      CWnd* pTemp;
	      CWnd* pNext;
	
	      // Get The position of the Cancel Button
	      pTemp = GetDlgItem(IDCANCEL);
	      if (pTemp==NULL)
	          return bResult;
	      pTemp->GetWindowRect(tmp);
	
	      // Get The position of the Next Button
	      pNext = GetDlgItem(ID_WIZNEXT);
	      if (pNext==NULL)
	          return bResult;
	      pNext->GetWindowRect(rect);
	
	      // Calculate the distance to shift the Next and Back buttons
	      shift.cx = tmp.left-rect.right+rect.Width();;
	      shift.cy = 0;
	
	      // Get The position of the Back Button
	      pTemp = GetDlgItem(ID_WIZBACK);
	      if (pTemp==NULL)
	          return bResult;
	      pTemp->GetWindowRect(tmp);
	
	      // move the Back button
	      tmp -= shift;
	      ScreenToClient(tmp);
	      pTemp->MoveWindow(tmp);
	
	      // move the Next button
	      ScreenToClient(rect);
	      tmp = rect-shift;
	      pNext->MoveWindow(tmp);
	
	      // Show the Finish Button
	      pTemp = GetDlgItem(ID_WIZFINISH);
	      if (pTemp==NULL)
	      return bResult;
	      pTemp->ShowWindow(SW_SHOW);
	
	      return bResult;
	  }
	
	Additional query words: 4.00 CPropertyPage CPropertySheet
	
	======================================================================
	Keywords          : kbMFC kbPropSheet KbUIDesign kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
