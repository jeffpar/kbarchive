---
layout: page
title: "Q142481: FCSVAL32 Control-by-Control Validation in MFC"
permalink: kb/142/Q142481/
---

## Q142481: FCSVAL32 Control-by-Control Validation in MFC

	Article: Q142481
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbSample kbDlg kbMFC KbUIDesign kbVC kbVC400 kbVC500 kbVC600 kbGrpDSMFCAT
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FCSVAL32 sample application was created to show how an application can do
	control-by-control validation in a dialog box.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Fcsval32.exe now
	  (http://download.microsoft.com/download/vc40pro/Sample4/1/NT4/EN-US/Fcsval32.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Fcsval32.exe now
	  (http://download.microsoft.com/download/VisualStudioNET/sample/1.20/WIN98MeXP/EN-US/Fcsval32.exe)
	
	Release Date: June 27, 2002
	
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
	
	The application itself is just a modal dialog box displayed by the
	CWinApp::InitInstance(). After displaying the dialog box, InitInstance() simply
	quits the application.
	
	The important part of the sample takes place in the dialog box class
	implementation: There are two edit controls. The first takes input of an integer
	between 1 and 20. The second takes a character string as input with length less
	than or equal to 5. When you tab or mouse-click from control to control within
	the displayed dialog box, the contents of the control that is losing focus are
	validated.
	
	The CFocusDlg Class
	-------------------
	
	The application's functionality centers around the CFocusDlg class and its
	implementation of four message handlers (discussed below). Normal data exchange
	(DDX) and validation (DDV) using the routines provided by MFC take place in
	OnInitialUpdate(), when the dialog box is first displayed, and when the user
	chooses the OK button to accept the input. This is default behavior provided by
	ClassWizard when member variables are connected to dialog box controls and can
	be examined in the dialog class DoDataExchange() function.
	
	  
	
	  Special Case 1
	  --------------
	
	  The first special case, for which this sample is written, involves validating
	  control contents when switching focus from one control to the next. This is
	  done by handling the EN_KILLFOCUS notification sent by the edit control that
	  is losing focus. The idea here is to check the contents and, if they are not
	  valid, to display the message box, inform the user, and then set the focus
	  back to the control from which it came.
	
	  Unfortunately, some difficulties arise when trying to set the focus (or
	  display the message boxes) within a Killfocus message handler. At this point,
	  Windows is in an indeterminate state as it is moving focus from one control
	  to the other. This is a bad place to do the validation and SetFocus() call.
	
	  The solution here is to post a user-defined message to the dialog box (parent)
	  and do the validation and SetFocus() there, thus waiting for a safer time to
	  do the work. (See "CFocusDlg::OnEditLostFocus()" in the file FOCUSDLG.CPP and
	  "WM_EDITLOSTFOCUS user-defined message" in the file FOCUSDLG.H.)
	
	  Another thing you will notice about this function is that it uses TRY/CATCH to
	  do the validation. The provided DDX/DDV routines throw CUserExceptions when
	  failing to validate or load a control's data. You should catch these and do
	  the SetFocus() in the CATCH block.
	
	  Special Case 2
	  --------------
	
	  The second special case is when the user clicks the Cancel button while there
	  is still invalid data in one of the controls. In this situation, the user
	  (normally) does not want to know whether his or her input is correct because
	  he or she is quitting the application. You might consider prompting the user
	  to save and validate the input, but normally Cancel means what it says. Focus
	  is sent to the Cancel button before the IDCANCEL notification is sent to the
	  dialog box, causing EN_KILLFOCUS to be generated by the control.
	
	  Because we want to do control validation, we maintain a flag called
	  "m_bValidate". When the user clicks Cancel, the dialog box is notified of the
	  mouse-click by the child button through a WM_PARENTNOTIFY message. If we
	  handle this message, we can set the m_bValidate flag to FALSE, which prevents
	  the validation from taking place in the OnEditLostFocus() function. Notice
	  the "if (m_bValidate)" right at the beginning.
	
	  IMPORTANT NOTE:
	
	  To ensure that the dialog receives the WM_PARENTNOTIFY message we have to
	  explicitly remove the WS_EX_NOPARENTNOTIFY style from the Cancel button. For
	  example:
	
	      BOOL CFocusDlg::OnInitDialog()
	      {
	         CDialog::OnInitDialog();
	
	         // Remove this style so we get the WM_PARENTNOTIFY when the
	         // user clicks on the Cancel button
	         GetDlgItem(IDCANCEL)->ModifyStyleEx(WS_EX_NOPARENTNOTIFY,0);
	
	         // Rest of OnInitDialog
	         ...
	         ...
	      }
	
	  Special Case 3
	  --------------
	
	  The third special case is when the user inputs bad data and then decides to
	  bring another application to the foreground, possibly to do some other work
	  or check some other information before completing this dialog box' form. The
	  edit control generates a EN_KILLFOCUS when the application loses activation
	  but, again, you might not necessarily want to validate. So, handle the
	  WM_ACTIVATEAPP message and based on the bActive flag that is passed as a
	  parameter, set the "m_bValidate" flag to disable validation. Upon
	  reactivation, the same message gets handled and this time the bActivate flag
	  is TRUE, causing us to re-enable validation.
	
	  Special Case 4
	  --------------
	
	  The fourth special case is when the user ends the Windows session either
	  through the Program Manager or the ExitWindows() function. In this case,
	  handle the WM_QUERYENDSESSION message. If the dialog box controls pass
	  validation (coded like the OnOK() function), then return TRUE from this
	  handler to allow Windows to terminate. Otherwise, return FALSE so that the
	  user can input the correct data.
	
	Note for Combobox
	-----------------
	
	For a combobox that is not a drop list combobox (i.e. if there is an edit control
	associated with the combobox) the code in the sample can cause infinite
	recursion.
	
	The following code (in focusdlg.cpp) is used in the sample to set the focus to
	the control if the validation fails.
	
	      CATCH(CUserException, e)
	      {
	          // Validation failed - user already alerted,
	          // setfocus() back to the original control.
	
	          ASSERT(bOK == FALSE);
	          GetDlgItem(id)->SetFocus();// Reset the focus.
	      }
	
	This should be modified so that the focus is set to the edit control of the
	combobox if the validation fails.
	
	      CATCH(CUserException, e)
	      {
	          // Validation failed - user already alerted,
	          // setfocus() back to the original control.
	
	          ASSERT(bOK == FALSE);
	          GetDlgItem(id)->GetWindow( GW_CHILD )->SetFocus();
	          // Reset the focus to the edit control in
	          // the combobox
	      }
	
	Additional query words: 4.00 killfocus queryendsession parentnotify combo box
	
	======================================================================
	Keywords          : kbcode kbfile kbSample kbDlg kbMFC KbUIDesign kbVC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbDialog 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	
	=============================================================================
	
