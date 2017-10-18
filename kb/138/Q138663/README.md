---
layout: page
title: "Q138663: PRB: GetCheckedRadioButton() Returns ID Outside Button Group"
permalink: kb/138/Q138663/
---

## Q138663: PRB: GetCheckedRadioButton() Returns ID Outside Button Group

	Article: Q138663
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbButton kbMFC kbVC150 kbVC200 kbVC400 kbprb kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Usually, the intention while using the CWnd::GetCheckedRadioButton() function is
	to retrieve, from a group of option buttons, the ID of the one that is selected.
	However, if it is not used correctly, this function may return the ID of a
	selected button that lies outside a button group.
	
	CAUSE
	=====
	
	The CWnd::GetCheckedRadioButton() function takes two arguments:
	
	  nIDFirstButton -- the ID of the first option button.
	  nIDLastButton -- the ID of the last option button in a group.
	
	It returns the ID of the selected option button in a group of option buttons if
	both the following conditions hold:
	
	- The IDs of the option buttons in the group are consecutive
	
	-and-
	
	- The IDs are in ascending order
	
	If these conditions are not met, the function may either fail (return 0) or
	return the ID of a control that is not in the option button group.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The GetCheckedRadioButton() function is designed as a counter-part to the
	CheckRadioButton() Windows API function prototyped here:
	
	       void CheckRadioButton(HWND hwndDlg,
	                             int nIDFirstButton,
	                             int nIDLastButton,
	                             int nIDCheckButton)
	
	This function clears the selection from all buttons with IDs in the range given
	by nIDFirstButton and nIDLastButton except the one whose ID is given by
	nIDCheckButton.
	
	The implementation of the CWnd::GetCheckedRadioButton() function works along the
	same lines. It cycles through each ID in the range given by nIDFirstButton and
	nIDLastButton querying each to find out which one is in a selected state. It
	returns as soon as it finds a selected option.
	
	Additional query words: 2.00 1.50 2.50 2.51 2.52 1.52b 3.00 2.10 3.10 2.20 3.20 4.00
	
	======================================================================
	Keywords          : kbButton kbMFC kbVC150 kbVC200 kbVC400 kbprb kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0
	Issue type        : kbhowto kbprb
	
	=============================================================================
	
