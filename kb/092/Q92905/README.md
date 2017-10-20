---
layout: page
title: "Q92905: DlgTab.exe - Infinite Loop Moving Through Dialog Ctrl"
permalink: /kb/092/Q92905/
---

## Q92905: DlgTab.exe - Infinite Loop Moving Through Dialog Ctrl

{% raw %}

	Article: Q92905
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbDlg kbGrpDSUser kbOSWin310
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application enters an infinite loop when you use the TAB or arrow keys to
	navigate through dialog box controls. The problem occurs only when the dialog
	box has another dialog box as a child. When you use the TAB key, the problem
	occurs only when the child dialog box has the WS_MAXIMIZEBOX or WS_TABSTOPS
	style.
	
	This article describes the problem in detail together with two possible
	solutions. DlgTab.exe demonstrates the problem and one of the workarounds.
	
	Problem 1
	---------
	
	When arrow keys are used to maneuver through a dialog box's last control (the
	last control in the parent dialog box), the focus is passed to the next child
	(in this case, the child dialog box) and the application goes into an infinite
	loop.
	
	Problem 2
	---------
	
	When the TAB key is used to maneuver through the dialog box's last control, the
	focus is then passed to the next child (again the child dialog box) and the
	application goes into an infinite loop.
	
	The infinite loop is clearly visible when spying on the child dialog box window.
	The child dialog box window continually receives WM_GETDLGCODE messages. The
	dialog box manager confuses the child dialog box window with a child control.
	
	When maneuvering through controls in a dialog box, the dialog box manager looks
	through its children and checks for the next child to pass focus to. In order to
	do that, the dialog box manager sets the focus to the child control and
	generates messages to complete the process.
	
	Using the Arrow Keys to Navigate Through Controls
	-------------------------------------------------
	
	WS_GROUP defines the start of a group within a dialog box. All controls defined
	between two WS_GROUP styles are members of a group. Arrow keys can then be used
	to navigate between members of a group.
	
	Normally a dialog box does not have WS_GROUP for a style; therefore, the child
	dialog box does not have a WS_GROUP but a previous control does have one. Based
	on the definition of a group, the child dialog box is considered a member of the
	last group by the dialog box manager. When the arrow key is used on the last
	control, the dialog box manager checks for the next child control in that group
	to pass the focus to, in this case the child dialog box window. The dialog box
	manager then tries to set focus to the window and generates necessary messages
	to complete the process. These generated messages are meaningful to a control
	but not to a window. One of these generated messages is WM_GETDLGCODE, which
	causes the infinite loop.
	
	Using the TAB Key to Navigate Through Controls
	----------------------------------------------
	
	WS_TABSTOPS defines which control has a tab stop. When you tab through controls,
	the dialog box manager looks for the next child that has the WS_TABSTOPS style
	and changes the focus to that child.
	
	Normally a dialog box does not use WS_TABSTOPS for a style. It is quite normal,
	however, to use WS_MAXIMIZEBOX for a dialog box style. The child dialog box in
	this case has WS_MAXIMIZEBOX. The values for WS_TABSTOPS and WS_MAXIMIZEBOX are
	the same in WINDOWS.H. Because the dialog box manager expects a child control
	and not another window, the WS_MAXIMIZEBOX is interpreted as WS_TABSTOPS. So,
	when you tab on the last control of the parent dialog box, the dialog box
	manager tries to set the focus to the next child with WS_TABSTOPS, in this case
	the child dialog box. Then the dialog box manager generates the necessary
	messages to complete the process. These generated messages are meaningful to a
	control but not to a window. One of these messages is WM_GETDLGCODE, which
	causes the infinite loop. Workarounds are described in the MORE INFORMATION
	section below.
	
	MORE INFORMATION
	----------------
	
	- Do not include the WS_MAXIMIZEBOX style for the child dialog box to resolve
	  the TAB key problem, and add WS_GROUP to the child dialog box to resolve the
	  arrow key problem.
	
	- Subclass the last control and handle the change of focus in the dialog box.
	  This method is outlined below:
	
	  1. Subclass the last control in the parent dialog box.
	
	  2. In the subclass procedure for the control, process the WM_GETDLGCODE
	     message by:
	
	     a. Passing the WM_GETDLGCODE to the button window procedure.
	
	     b. Or'ing the return value of (a.) with DLGC_WANTMESSAGE and returning
	        it.
	
	        The following is sample code demonstrating the WM_GETDLGCODE message:
	
	           lpButtonProcOrg is a pointer to the button window
	           procedure. This is a global and was set before setting
	           the pointer to the subclass procedure for the button.
	           To do this call:
	
	                    lpButtonProgOrg = (FARPROC)
	                    GetWindowLong(GetDlgItem(hCancelBtn,GWL_WNDPROC);
	                    :
	                    :
	
	             case WM_GETDLGCODE:
	               lRet = CallWindowProc(lpButtonProcOrg,hWnd,iMessage,
	                                     wParam,lParam);
	               if (lParam)
	                 {
	                 lpmsg= (LPMSG) lParam;
	                 if (lpmsg->message == WM_KEYDOWN)
	                  {
	                  if ( (lpmsg->wParam == VK_TAB)   ||
	                       (lpmsg->wParam == VK_DOWN)  ||
	                       (lpmsg->wParam == VK_UP)    ||
	                       (lpmsg->wParam == VK_RIGHT) ||
	                       (lpmsg->wParam == VK_LEFT) )
	                    lRet |= DLGC_WANTMESSAGE;
	                  }
	                 }
	               return (lRet);
	
	        For more information on WM_GETDLGCODE, please see the following article
	        in the Microsoft Knowledge Base:
	
	  Q83302 Using the WM_GETDLGCODE Message
	
	  3. In the subclass procedure, process the WM_KEYDOWN message by:
	
	     a. Set the focus to the first control.
	
	     b. If the first control is not a push button, then the process is
	        complete; otherwise, the dark border needs to be removed from whichever
	        button that has it, and placed on the first button, as follows:
	
	        1. First send a WM_GETDLGCODE.
	
	        2. If the return value is DLGC_DEFPUSHBUTTON, then send a BM_SETSTYLE
	           message to the button that has the dark border, with BS_PUSHBUTTON
	           for wParam. This will cause the dark border to be removed.
	
	        3. Now the dark border needs to be placed on the button that has the
	           focus (that is, the first button). To do this, send BM_SETSTYLE to
	           the first button, with BS_DEFPUSHBUTTON for wParam.
	
	           Sample Code Demonstrating the WM_KEYDOWN Message
	           ------------------------------------------------
	
	           case WM_KEYDOWN:
	
	              // Check for keys that need this processing such as the
	              // TAB and arrow keys.
	              if ( (wParam == VK_TAB)   ||
	                   (wParam == VK_DOWN)  || (wParam == VK_UP) ||
	                   (wParam == VK_RIGHT) || (wParam == VK_LEFT) )
	                 {
	                 // Set the focus to the first control, Button #1
	                 // in this case.
	                 hwndBtn1 = GetDlgItem(hParentDlg,IDBUTTON1);
	                 SetFocus(hwndBtn1);
	
	                 // Loop through all the controls and remove the
	                 // dark border that the previous default push
	                 // button has.
	                 hwndCtrls = GetWindow(hParentDlg, GW_CHILD);
	                 while (hwndCtrls)
	                     {
	                     wRet = (WORD)(DWORD)SendMessage(hwndCtrls,
	                                             WM_GETDLGCODE, 0, 0L);
	
	                    if (wRet & DLGC_DEFPUSHBUTTON)
	                      SendMessage(hwndCtrls, BM_SETSTYLE,
	                                 (WPARAM)BS_PUSHBUTTON, TRUE);
	
	                    hwndCtrls = GetWindow(hwndCtrls, GW_HWNDNEXT);
	                    }
	
	                // Give the hwndBtn1 button the default push button
	                // border.
	                 SendMessage(hwndBtn1,  BM_SETSTYLE,
	                             (WPARAM)BS_DEFPUSHBUTTON, TRUE);
	
	                 return(0L);
	                 }
	
	              break;
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	DlgTab.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	To get the dialog boxes, from the File menu, choose Dialog Tab. Two dialog boxes
	will be displayed: one is the Parent dialog box and the other is the Child
	dialog box.
	
	There are two option buttons in the Parent dialog box: one demonstrates the
	problem and the other the solution. When the Demo Problem option button is
	selected, the sample demonstrates the problem. When the Fix Problem option
	button is selected, the sample demonstrates the workaround. The default button
	is the workaround for the problem.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbDlg kbGrpDSUser kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
