---
layout: page
title: "Q133276: FIX: ClassWizard Generates Incorrect UDN_DELTAPOS Handler"
permalink: /kb/133/Q133276/
---

## Q133276: FIX: ClassWizard Generates Incorrect UDN_DELTAPOS Handler

{% raw %}

	Article: Q133276
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbwizard kbMFC KbUIDesign kbGrpDSUser kbVC500 kbVC600kbbuglist kbfixlist
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The ClassWizard, used with:
	   - Microsoft Visual C++ 32-bit Edition, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ClassWizard creates incorrect code for a handler for the UDN_DELTAPOS
	notification message of the CSpinButtonCtrl common control.
	
	RESOLUTION
	==========
	
	The generated handler function will look like this (assuming that the
	CSpinButtonCtrl is in a dialog):
	
	    void CAboutDlg::OnDeltaposSpin1(NMHDR* pNMHDR, LRESULT* pResult)
	        {
	        NM_UPDOWN;
	        // TODO: Add your control notification handler code here
	
	        *pResult = 0;
	        }
	
	Modify the code to look like this:
	
	    void CAboutDlg::OnDeltaposSpin1(NMHDR* pNMHDR, LRESULT* pResult)
	        {
	        NM_UPDOWN* pUpDown = (NM_UPDOWN*)pNMHDR;
	
	        // TODO: Add your control notification handler code here
	
	        *pResult = 0;
	        }
	
	By typecasting the pointer to the NMHDR structure, you can access additional data
	that is passed after the NMHDR.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++, 32-bit
	Edition, version 4.0.
	
	REFERENCES
	==========
	
	For more information about the CSpinButtonCtrl and the up down common control,
	please see the Class Library Reference in Books Online and the Win32 Software
	Development Kit (SDK) documentation.
	
	Additional query words: 2.10 3.10 ClassWizard
	
	======================================================================
	Keywords          : kbwizard kbMFC KbUIDesign kbGrpDSUser kbVC500 kbVC600 kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbClassWizard
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
