---
layout: page
title: "Q247323: BUG: BN_DOUBLECLICKED Message Handler Not Hit in MFC Dialog Box"
permalink: /kb/247/Q247323/
---

## Q247323: BUG: BN_DOUBLECLICKED Message Handler Not Hit in MFC Dialog Box

	Article: Q247323
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbButton kbMFC kbMouse kbVC600bug kbOSWinCEsearch kbWndwMsg kbOSWinCE210bug kbDSupport
	Last Modified: 14-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++ 6.0, used with:
	   - The Microsoft Foundation Classes (MFC) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On Windows CE using the MFC classes, when you add a BN_DOUBLECLICKED message
	handler for a button on a dialog box or a window, the handler is not called when
	the button is double-clicked. The handler is called on Microsoft Windows 95,
	Microsoft Windows 98, Microsoft Windows NT 4.0, and Microsoft Windows 2000.
	
	CAUSE
	=====
	
	This problem is due to a bug in the Windows CE operating system.
	
	RESOLUTION
	==========
	
	One possible resolution is to add a BN_CLICKED handler for the button. Inside of
	the handler, use code similar to the following to test whether the button has
	been clicked in the last few milliseconds:
	
	    static BOOL s_bLastClicked = TRUE;
	    static DWORD s_dwTickCount = 0;
	    if (s_bLastClicked)
	    {
	      DWORD dwTickCount = GetTickCount();
	      if ((dwTickCount - s_dwTickCount) < 500) //Last click less than 500ms?
	      {
	        s_bLastClicked = FALSE; //Was double-clicked, don't test next time...
	
	        //Assume a double click...
	        //Do your double-click code here...
	      }
	      s_dwTickCount = dwTickCount;
	    }
	    else
	       s_bLastClicked = TRUE;
	
	Manually adding CS_DBLCLKS to the window class style and adding the BS_NOTIFY
	style for the button does not help. However, this manual process does allow the
	message to be sent when running on other platforms besides Windows CE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new dialog-based application by using the WCE MFC AppWizard. Accept
	  all of the default values and click Finish.
	
	2. In the OnInitDialog method, add the following code before the return
	  statement:
	
	  SetClassLong(m_hWnd, GCL_STYLE, GetClassLong(m_hWnd, GCL_STYLE) | CS_DBLCLKS);
	
	3. Add a button to the dialog box. Right-click the button and click Properties.
	  Click the Styles tab and select the Notify check box.
	
	4. Use ClassWizard by clicking the View menu and selecting the menu item
	  ClassWizard. Under the Object IDs section, click IDC_BUTTON1. Under the
	  Messages section, click the BN_DOUBLECLICKED message. Click Add Function, and
	  then click Edit Code.
	
	5. Place a break point in the BN_DOUBLECLICKED message handler for the button.
	
	6. Build the application and run it when done building.
	
	You should notice that the breakpoint does not get hit when running in the
	emulator or when running on the device. If you perform the above steps in a
	Win32 Application not running on Windows CE, the handler works as expected.
	
	Additional query words: CE specific double click WM_LBUTTONDBLCLK BN_CLICKED BN_DOUBLECLICKED WM_LBUTTONDOWN WM_LBUTTONUP
	
	======================================================================
	Keywords          : kbButton kbMFC kbMouse kbVC600bug kbOSWinCEsearch kbWndwMsg kbOSWinCE210bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
