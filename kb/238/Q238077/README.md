---
layout: page
title: "Q238077: HOWTO: Set Blank Date as Initial Value for Date Time Control"
permalink: /kb/238/Q238077/
---

## Q238077: HOWTO: Set Blank Date as Initial Value for Date Time Control

	Article: Q238077
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbCtrl kbDateTime kbMFC kbVC kbDSupport kbGrpDSMFCATL
	Last Modified: 12-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Both Windows Date Time Picker control (CDateTimeCtrl) and Microsoft Date Time
	Picker ActiveX controls have the current date as the initial value by default.
	This article explains how to set a blank date as initial value for these
	controls.
	
	MORE INFORMATION
	================
	
	Windows Date Time Picker control and Microsoft Date Time Picker ActiveX controls
	change the time back to the current date even if you set it to blank by calling
	SetWindowText with a blank string as parameter.
	
	The following steps describe a way to set a blank date as the initial value for
	Microsoft Date Time Picker ActiveX control.
	
	1. Change the format type to custom format (3) and set the custom format to
	  where one blank string.m_datePicker is a member variable created for the
	  Windows Date Time Picker control placed on a dialog box.
	
	     BOOL CDtpickerDlg::OnInitDialog()
	     {
	         CDialog::OnInitDialog();
	
	         SetIcon(m_hIcon, TRUE);                 // Set big icon
	         SetIcon(m_hIcon, FALSE);                // Set small icon
	         
	         m_datePicker.SetFormat(3);         // Change the format type to    custom format.
	         m_datePicker.SetCustomFormat(" "); // One blank string.
	
	         return TRUE;  // return TRUE  unless you set the focus to a control
	     }
	
	2. Add an event handler for the Change event in your dialog class using
	  ClassWizard.
	
	     ON_EVENT(CDtpickerDlg, IDC_DTPICKER1, 2,OnChangeDtpicker1,VTS_NONE)
	
	  NOTE: If using Visual Studio.NET do the following: In the Property browser, on
	  the Events tav, add an event handler for the Change event in your dialog
	  class.
	
	3. In the event handler (OnChangeDtPicker1) change the format back to the format
	  you want.
	
	     void CDtpickerDlg::OnChangeDtpicker1() 
	     {
	         m_datePicker.SetFormat(1);
	     }
	
	You could use similar logic to set a blank date as an initial value for Windows
	Standard Date Time Picker control.
	
	1. Call SetFormat with one blank string as parameter.
	
	  m_dateCtrl.SetFormat(" "); //one blank
	
	2. Add a notification message handler for the DTN_DATETIMECHANGE message in your
	  dialog class and add the following code to it. Change the format type to the
	  format you want.
	
	     void CDateTimeCtrlDlg::OnDateTimeChange(NMHDR *pNotifyStruct, LRESULT    *result)
	     {
	          m_dateCtrl.SetFormat(DTS_SHORTDATEFORMAT);
	          *pResult = 0;
	     }
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Sreedhar
	Pelluru, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnCtrls kbCtrl kbDateTime kbMFC kbVC kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
