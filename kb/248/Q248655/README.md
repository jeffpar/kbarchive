---
layout: page
title: "Q248655: BUG: ATL Composite Controls Do Not Meet Windows 2000 Logo"
permalink: /kb/248/Q248655/
---

## Q248655: BUG: ATL Composite Controls Do Not Meet Windows 2000 Logo

	Article: Q248655
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbAAcc kbActiveX kbATL kbCtrl kbOSWin2000 KbUIDesign kbATL300bug kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows 2000 is placed into high contrast mode, the ATL Composite controls
	do not change their background color. Due to this behavior, any application
	using an ATL Composite control fails Windows 2000 logo compliancy.
	
	CAUSE
	=====
	
	This is due to a limitation in the ATL framework for ATL Composite controls.
	CComCompositeControl handles the WM_CTLCOLORDLG and WM_CTLCOLORSTATIC messages
	in the ATL framework and uses the container's ambient background color to paint
	the background and any static controls. When Windows 2000 goes into high
	contrast mode, the WM_CTLCOLORDLG and WM_CTLCOLORSTATIC messages are sent to the
	ATL Composite control. Because the control uses the ambient background color of
	the container when the WM_CTLCOLORDLG or WM_CTLCOLORSTATICC message is received,
	the messages are not passed on to DefWindowProc(), and the background color and
	static control's color does not change.
	
	RESOLUTION
	==========
	
	The following modifications can be made to an ATL Composite control to allow it
	to pass Windows 2000 logo compliancy.
	
	1. In the composite control's header file and class declaration, add message
	  handler entries for WM_CTLCOLORDLG and WM_CTLCOLORSTATIC. It should look like
	  the following:
	
	  BEGIN_MSG_MAP(CATLCONTROLObj1)
	      MESSAGE_HANDLER(WM_CTLCOLORDLG, OnColorDlg)
	      MESSAGE_HANDLER(WM_CTLCOLORSTATIC, OnColorDlg)
	      CHAIN_MSG_MAP(CComCompositeControl<CATLCONTROLObj1>)
	  END_MSG_MAP()
	
	  Notice that the MESSAGE_HANDLER() entries appear before the CHAIN_MSG_MAP()
	  entry. With the entries in this order, the ATL message routing architecture
	  uses the OnColorDlg() function first before using any message handlers
	  provided for these messages by the ATL framework.
	
	2. Add a new message handler function, OnColorDlg(), in your ATL composite
	  control class in the control's header file for the above to entries made to
	  the message map. The function should have the following prototype and code
	  inside of it:
	
	  LRESULT OnColorDlg(UINT uMsg, WPARAM wParam, LPARAM lParam, BOOL& bHandled)
	  {
	    HIGHCONTRAST highcontrast = { 0 };
	    highcontrast.cbSize = sizeof(HIGHCONTRAST);
	    if (SystemParametersInfo(SPI_GETHIGHCONTRAST, sizeof(HIGHCONTRAST), &highcontrast, 0))
	    {
	        if (highcontrast.dwFlags & HCF_HIGHCONTRASTON) //high contrast on?
	           return DefWindowProc(); //Ignore ambient back color and pass to system.
	    }
	    //else, must be OS where SPI_GETHIGHCONTRAST not available
	
	    //Set bHandled to FALSE to allow the message to keep on being routed to base
	    bHandled = FALSE; 
	
	    return FALSE; //Let message continue to base class.
	  }
	
	3. Save the header file and rebuild the control.
	
	4. Insert the control into Test Container and place Windows 2000 into high
	  contrast mode. You can place Windows 2000 into high contrast mode using the
	  following keystrokes: LEFT ALT + LEFT SHIFT + PRINT SCREEN.
	
	Notice that the ATL Composite control's background and any static controls change
	color when Windows 2000 is placed into high contrast mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ATL project using the ATL COM AppWizard. Give the project the
	  name "TestHighCotrast" and click OK.
	
	2. On the ATL COM AppWizard Step 1 of 1 screen, accept the defaults and click
	  Finish.
	
	3. From the Insert menu, select New ATL Object.
	
	4. Click Controls under the Category section. Click Composite Control under the
	  Objects section. Click Next.
	
	5. In the ATL Object Wizard Properties dialog box, give the short name for the
	  control the name TestHighContrastControl. Accept the defaults for the
	  remaining settings and click OK.
	
	6. Build the project.
	
	7. Insert the control into Test Container and place Windows 2000 into high
	  contrast mode. You can place Windows 2000 into high contrast mode using these
	  keystrokes: LEFT ALT + LEFT SHIFT + PRINT SCREEN.
	
	Notice that the ATL Composite control's background and any static controls on the
	control do not change color when Windows 2000 is placed into high contrast mode.
	
	REFERENCES
	==========
	
	Windows Logo Program
	
	Additional query words: windows 2000 logo fail compliancy comply compliant accessability high contrast
	
	======================================================================
	Keywords          : kbAAcc kbActiveX kbATL kbCtrl kbOSWin2000 KbUIDesign kbATL300bug kbGrpDSMFCATL 
	Technology        : kbVCsearch kbOSWin2000 kbAudDeveloper kbOSWinSearch kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
