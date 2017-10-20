---
layout: page
title: "Q224570: UpDnDate DateTime Ctrl w/ Spin Button &amp; Cback Field"
permalink: /kb/224/Q224570/
---

## Q224570: UpDnDate DateTime Ctrl w/ Spin Button &amp; Cback Field

{% raw %}

	Article: Q224570
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbCtrl kbDateTime kbMFC KbUIDesign kbUpDownCtrl kbVC600 kbDSupport kbGr
	Last Modified: 03-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	UpDnDate.exe is a sample that demonstrates how the new DateTime picker control
	can be used in an MFC application. In addition to illustrating the code that
	needs to be written in order to use such a control with callback fields, the
	sample also shows how to handle notifications sent by the child spin button
	created when the DTS_UPDOWN style is specified for the date time control.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Updndata.exe now
	  (http://download.microsoft.com/download/vc60pro/Patch/2/WIN98/EN-US/UpDnDate.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Updndatevcnet.exe now
	  (http://download.microsoft.com/download/visualstudionet/sample/1.29/win98mexp/en-us/Updndatevcnet.exe)
	
	Release Date: 2-Jul-2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The code included is based on a Visual C++ version 6.0 AppWizard generated dialog
	based application. The points of interest are:
	
	- The datetime picker control inserted in the dialog template has the
	  DTS_UPDOWN style.
	
	- The WM_INITDIALOG handler for the parent dialog defines the callback field,
	  with a call to CDateTimeCtrl::SetFormat().
	
	- The CDateTimeCtrl-derived class CUDDateTimeCtrl implements handlers for the
	  relevant reflected notifications: DTN_FORMAT, DTN_FORMATQUERY, DTN_WMKEYDOWN,
	  following the guidelines from the online help.
	
	- CUDDateTimeCtrl implements a handler for the UDN_DELTAPOS notification, sent
	  to the date time control by the child spin button (created due to the
	  DTS_UPDOWN style).
	
	- CUDDateTimeCtrl::OnNotifyDeltaPos() cannot identify the field that has the
	  focus. To work around this, the control sends a WM_KEYDOWN and WM_KEYUP
	  message (with VK_UP or VK_DOWN as arguments) to itself.
	
	- CUDDateTimeCtrl::OnNotifyDeltaPos() shortcuts the default implementation,
	  even for the standard fields of the control. Instead, it posts WM_KEYDOWN,
	  WM_KEYUP messages to the control. This is done in order to work around a bug
	  that exists in the date time picker common control shipped with Internet
	  Explorer 4.0 (comctl32.dll version 4.70-4.72). The bug is fixed in the
	  Internet Explorer 5.0 release (comctl32.dll version 5.00).
	
	To see the control in action, build the project and run it. Set the focus to the
	custom field and either press the up or down arrow keys or use the mouse to
	click on the up or down buttons of the spin control. You'll see that all fields
	of the date time control are updated as expected.
	
	Additional query words: DateTimePicker UpDnDate
	
	======================================================================
	Keywords          : kbfile kbSample kbCtrl kbDateTime kbMFC KbUIDesign kbUpDownCtrl kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
