---
layout: page
title: "Q177103: FIX: ALT+Key Combination in Property Page Causes Stack Overflow"
permalink: /kb/177/Q177103/
---

## Q177103: FIX: ALT+Key Combination in Property Page Causes Stack Overflow

{% raw %}

	Article: Q177103
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCOMt kbDlg kbMFC kbVC500bug kbVC600fix kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you press an ALT+key combination (generating a WM_SYSCOMMAND) with keyboard
	focus on the property page for an MFC ActiveX control and the key does not
	correspond to a mnemonic on the page, you will get a stack overflow.
	
	CAUSE
	=====
	
	COlePropertyPage::WindowProc() traps the WM_SYSCOMMAND and calls
	IPropertyPageSite::TranslateAccelerator(). This function in turns sends the
	WM_SYSCOMMAND message back to the page. This results in a recursion until you
	run out of stack space.
	
	RESOLUTION
	==========
	
	Override COlePropertyPage::WindowProc() and return TRUE if the message is a
	WM_SYSCOMMAND; for example:
	
	     LRESULT CMyPropPage::WindowProc(UINT msg, WPARAM wParam, LPARAM lParam)
	     {
	
	        //Return without processing if WM_SYSCOMMAND.
	        if (WM_SYSCOMMAND == msg)
	           return TRUE;
	        else
	           return COlePropertyPage::WindowProc(msg, wParam, lParam);
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was corrected in Visual
	C++ version 6.0 for Windows.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Samson
	Tanrena, Microsoft Corporation.
	
	
	Additional query words: mfcole Stock PropertyPage CLSID_CFontPropPage CLSID_CColorPropPage CLSID_CPicturePropPage
	
	======================================================================
	Keywords          : kbole kbActiveX kbCOMt kbDlg kbMFC kbVC500bug kbVC600fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
