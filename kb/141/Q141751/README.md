---
layout: page
title: "Q141751: Adding Control Bars to Dialog Boxes in MFC"
permalink: kb/141/Q141751/
---

## Q141751: Adding Control Bars to Dialog Boxes in MFC

	Article: Q141751
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbSample kbDlg kbMFC KbUIDesign kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbD
	Last Modified: 03-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	This is the 32-bit version of this sample.
	
	SUMMARY
	=======
	
	In a Microsoft Foundation Classes (MFC) application, you can attach control bars
	such as status bars and toolbars to a frame window. However, for many
	applications a simple dialog box-based user interface is sufficient. MFC does
	not provide built-in support for adding control bars to dialog boxes.
	
	DLGCBR32 is a sample application that demonstrates how to add a status bar and
	toolbar to a dialog box. In addition, it demonstrates a number of techniques
	related to using a modeless dialog box as the main window of an MFC application.
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Dlgcbr32.exe now
	  (http://download.microsoft.com/download/vc60pro/Sample14/1/NT4/EN-US/Dlgcbr32.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Dlgcbr32vcnet.exe now
	  (http://download.microsoft.com/download/VisualStudioNET/SAMPLE/1.23/WIN98MeXP/EN-US/Dlgcbr32vcnet.exe)
	
	Release Date: Jul-2-2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	
	MORE INFORMATION
	================
	
	To add a control bar to a dialog box, you must create the control bar as usual,
	and then make room for the control bar within the client area of the dialog box.
	For the control bar to function properly, the dialog box must duplicate some of
	the functionality of frame windows. If you want ON_UPDATE_COMMAND_UI handlers to
	work for the control bars, you also need to derive new control bar classes, and
	handle the WM_IDLEUPDATECMDUI message. If your dialog box is not the main window
	of your application, you will also need to modify its parent frame window to
	pass the WM_IDLEUPDATECMDUI message on to the dialog box's control bars.
	
	To make room for a control bar within the client area of the dialog box, follow
	these steps in your dialog box's OnInitDialog() function:
	
	1. Create the control bars.
	
	2. Figure out how much room the control bars will take by using the reposQuery
	  option of RepositionBars():
	
	        CRect rcClientStart;
	        CRect rcClientNow;
	        GetClientRect(rcClientStart);
	        RepositionBars(AFX_IDW_CONTROLBAR_FIRST,
	                       AFX_IDW_CONTROLBAR_LAST,
	                       0, reposQuery, rcClientNow);
	
	3. Move all the controls in your dialog box to account for space used by control
	  bars at the top or left of the client area. If your dialog box contains a
	  menu, you also need to account for the space used by the menu:
	
	        CPoint ptOffset(rcClientNow.left - rcClientStart.left,
	                         rcClientNow.top - rcClientStart.top);
	
	        CRect  rcChild;
	        CWnd* pwndChild = GetWindow(GW_CHILD);
	        while (pwndChild)
	        {
	           pwndChild->GetWindowRect(rcChild);
	           ScreenToClient(rcChild);
	           rcChild.OffsetRect(ptOffset);
	           pwndChild->MoveWindow(rcChild, FALSE);
	           pwndChild = pwndChild->GetNextWindow();
	        }
	
	4. Increase the dialog box window dimensions by the amount of space used by the
	  control bars:
	
	        CRect rcWindow;
	        GetWindowRect(rcWindow);
	        rcWindow.right += rcClientStart.Width() - rcClientNow.Width();
	        rcWindow.bottom += rcClientStart.Height() - rcClientNow.Height();
	        MoveWindow(rcWindow, FALSE);
	
	5. Position the control bars using RepositionBars().
	
	To update the first pane of a status bar with menu item text, you must handle
	WM_MENUSELECT, WM_ENTERIDLE, and WM_SETMESSAGESTRING in your dialog box class.
	You need to duplicate the functionality of the CFrameWnd handlers for these
	messages. See the CModelessMain class in the sample program for examples of
	these message handlers.
	
	To allow ON_UPDATE_COMMAND_UI handlers to work for other status bar panes and for
	toolbar buttons, you must derive new control bar classes and implement a message
	handler for WM_IDLEUPDATECMDUI. This is necessary because the default control
	bar implementations of OnUpdateCmdUI() assume the parent window is a frame
	window. However, it doesn't do anything but pass the parent window pointer on to
	a function which only requires a CCmdTarget pointer. Therefore, you can
	temporarily tell OnUpdateCmdUI() that the parent window pointer you are giving
	it is a CFrameWnd pointer to meet the compiler requirements. Here's an example:
	
	        LRESULT CDlgToolBar::OnIdleUpdateCmdUI(WPARAM wParam,
	                                               LPARAM lParam)
	        {
	           if (IsWindowVisible())
	           {
	              CFrameWnd* pParent = (CFrameWnd*)GetParent();
	              if (pParent)
	                 OnUpdateCmdUI(pParent, (BOOL)wParam);
	           }
	           return 0L;
	        }
	
	To pass WM_IDLEUPDATECMDUI messages on to dialog boxes other than the main
	window, save dialog pointers in your frame window class and create a
	WM_IDLEUPDATECMDUI handler in that class. The handler should send the
	WM_IDLEUPDATECMDUI message on to the dialog child windows by using
	CWnd::SendMessageToDescendants(). Then perform default processing for the
	message within the frame window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbfile kbSample kbDlg kbMFC KbUIDesign kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbDialog kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	
	=============================================================================
	
