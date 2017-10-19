---
layout: page
title: "Q142384: HOWTO: How to Create Accelerators for CPropertyPages"
permalink: /kb/142/Q142384/
---

## Q142384: HOWTO: How to Create Accelerators for CPropertyPages

	Article: Q142384
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbcode kbMFC KbUIDesign kbVC400 kbVC410 kbVC410fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the only keystrokes that will allow you to navigate between
	CPropertyPages in a CPropertySheet are the CTRL+TAB and SHIFT+CTRL+TAB keys. It
	may be desirable to have assigned keys that jump you directly to a particular
	page. Although the CPropertySheet object doesn't contain this functionality by
	default, you can add it by overriding the CPropertySheet::PreTranslateMessage()
	function to check for the desired keystroke.
	
	In the case of ALT key combinations, check for WM_SYSKEYDOWN messages.
	OnSysKeyDown cannot be used because the messages will be handled by
	::IsDialogMessage before getting to the message handler.
	
	Mnemonics are not possible in versions of the Microsoft Foundation Classes (MFC)
	prior to 4.0 because these earlier versions of MFC creates and drew the tabs
	using their own techniques. The code uses TextOut() instead of DrawText() to
	display text on a tab. TextOut() doesn't interpret the mnemonic-prefix character
	(&) as a directive to underscore the character that follows, so you cannot
	use this method to designate accelerator keys.
	
	MFC 4.0, which comes with Visual C++ 4.0, uses the Windows 95 Tab control. This
	control properly draws mnemonics on the tabs. All you need to do is add the
	mnemonic-prefix character (&) to the tab text in the caption field of your
	dialog resource.
	
	MORE INFORMATION
	================
	
	The following sample code shows how to override the PreTranslateMessage()
	function to check for keystrokes. Use ClassWizard to override the
	PreTranslateMessage() for a CPropertySheet derived class.
	
	Sample Code
	-----------
	
	  /* compile options needed: default
	  */ 
	
	  BOOL CMyProp::PreTranslateMessage(MSG* pMsg)
	  {
	      if (pMsg->message == WM_SYSKEYDOWN)
	      {
	          switch (pMsg->wParam)
	          {
	              case 'S' :
	                  SetActivePage(0);
	                  break;
	
	              case 'C' :
	                  SetActivePage(1);
	                  break;
	
	              // ... case statements for each key being trapped
	
	              default :  // unhandled keystroke
	                  return CPropertySheet::PreTranslateMessage(pMsg);
	                  break;
	          }
	
	          return TRUE;  // msg is processed
	      }
	      return CPropertySheet::PreTranslateMessage(pMsg);
	  }
	
	Additional query words: 2.00 2.10 2.20 4.00
	
	======================================================================
	Keywords          : kbcode kbMFC KbUIDesign kbVC400 kbVC410 kbVC410fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
