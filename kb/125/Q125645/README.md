---
layout: page
title: "Q125645: FIX: Edit Control in Property Page Does Not Get Return Keys"
permalink: /kb/125/Q125645/
---

## Q125645: FIX: Edit Control in Property Page Does Not Get Return Keys

{% raw %}

	Article: Q125645
	Product(s): Microsoft C Compiler
	Version(s): 2.00
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A multiline edit control with the ES_WANTRETURN style set does not receive
	return key messages (WM_KEYDOWN with VK_RETURN) when placed in a CPropertyPage.
	If there is an IDOK button on the parent CPropertySheet, the dialog box will be
	dismissed when the ENTER key is pressed in the edit control.
	
	CAUSE
	=====
	
	The WM_KEYDOWN message is pre-translated in the PreTranslateMessage function of
	CPropertyPage to perform default pushbutton handling. A consequence of this is
	that the VK_RETURN key will never be sent to a child control in a CPropertyPage.
	
	RESOLUTION
	==========
	
	To work around this problem, you can override the PreTranslateMessage function
	in your CPropertyPage derived class. In this function, you can check whether the
	control is an edit control and determine whether it should receive the
	WM_KEYDOWN message when the ENTER key is pressed.
	
	NOTE: This problem may occur with other controls as well. You can check whether
	they need the message by sending a WM_GETDLGCODE message to the control and
	looking for DLGC_WANTALLKEYS or DLGC_WANTMESSAGE. The PreTranslateMessage
	function, which would accomplish both of these tasks, is included here:
	
	  BOOL CMyPropertyPage::PreTranslateMessage(MSG *pMsg)
	      {
	      if(pMsg->message==WM_KEYDOWN && pMsg->wParam==VK_RETURN)
	          {
	          static const TCHAR szEdit[] = _T("edit");
	          TCHAR szCompare[sizeof(szEdit)+1];
	          HWND hFocus = ::GetFocus();
	
	          // Check for "edit" controls which want the RETURN key.
	          // If it doesn't want the return key then let it be
	          // translated by just calling
	          // CPropertyPage::PreTranslateMessage
	          ::GetClassName(hFocus, szCompare, sizeof(szCompare));
	          if (lstrcmpi(szCompare, szEdit) == 0)
	              {
	              if(::GetWindowLong(hFocus, GWL_STYLE) & ES_WANTRETURN)
	                  return FALSE;    // Don't translate...just send on
	                                   // to control
	              else
	                  return CPropertyPage::PreTranslateMessage(pMsg);
	              }
	
	          // Check for other controls which want the return key
	          if (::SendMessage(hFocus,WM_GETDLGCODE,0,0) &
	             (DLGC_WANTALLKEYS | DLGC_WANTMESSAGE))
	              return FALSE;        // Don't translate it
	          };
	
	      return CPropertyPage::PreTranslateMessage(pMsg);
	      }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 2.1
	for Windows NT.
	
	Additional query words: 2.00 3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : 2.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
