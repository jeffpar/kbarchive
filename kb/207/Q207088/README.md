---
layout: page
title: "Q207088: SAMPLE: Implement a Date/Time Generic ActiveX Property Page"
permalink: kb/207/Q207088/
---

## Q207088: SAMPLE: Implement a Date/Time Generic ActiveX Property Page

	Article: Q207088
	Product(s): Microsoft C Compiler
	Version(s): 3.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbActiveX kbCOMt kbCtrlCreate kbPropSheet kbVC600 kbATL300
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NOTE: Microsoft Visual C++ NET (2002) supports both the managed code model that
	is provided by the .NET Framework and the unmanaged native Microsoft Windows
	code model. The information in this article applies to unmanaged Visual C++ code
	only.
	
	The DateTimePropPage.exe sample shows how to create a Date/Time Generic ActiveX
	Property Page by using ATL.
	
	When developing an ActiveX control, it is a common practice to include a property
	page or pages to facilitate setting design-time properties. When the ActiveX
	control has a certain type of property (for example, OLE_COLOR), it makes sense
	to save time and use the stock property pages provided by Microsoft.
	
	However, if there isn't a stock property page for the property you are working
	with and you know that you could use such a property page several times, it
	might be more efficient to create a single property page that can be re-used
	when needed.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Datetimeproppage.exe now
	  (http://download.microsoft.com/download/vc60pro/sample/1/W9XNT4/EN-US/DateTimePropPage.exe)
	
	Release Date: Jan-21-2000
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload DateTimePropPageVCNET.exe now
	  (http://download.microsoft.com/download//VisualStudioNET/smpl/1.0/WIN98MeXP/EN-US/Datetimeproppagevcnet.exe)
	
	Release Date: June 24, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	ATL allows you to use the property page for an ATL ActiveX control without having
	to move the MFC DLL.
	
	This ATL project contains two projects:
	
	- DateTimePropPage, which is an ATL project that implements a property page.
	
	- TestControl, which is an ActiveX control that uses the Date/Time property
	  page.
	
	A Month Calendar control and Date Time control are added to the property page
	dialog box resource of the DateTimePropPage project. This resource is displayed
	when the property page is invoked. Notification handlers are added to the
	CDateTime class to handle the case where the date or time are changed through
	the dialog box controls. Thus, SetDirty(TRUE) can be called, which causes the
	Apply button to be activated on the property sheet that hosts the property
	page.
	
	The key functions in the implementation of this project are OnInitDialog, Apply,
	GetProperties, and SetProperties, which are described below:
	
	- OnInitDialog: Override this function to obtain the properties from the
	  control, and initialize the Month Calendar and Date Time controls of the
	  property page.
	
	- Apply: Override this function to set the properties for each ActiveX control
	  that the property page is representing.
	
	- GetProperties: This is a helper function that is called from OnInitDialog to
	  obtain the properties from the control. It gets the IDispatch interface of
	  the first control, and gets the dispatch IDs of the "DATE" and "TIME"
	  property of the control by calling IDispatch->GetIDsOfNames. It then calls
	  IDispatch->Invoke to get the property values from the ActiveX control.
	
	- SetProperties: This is a helper function that is called from Apply. The
	  SetProperties function is called to set the properties for each ActiveX
	  control for which the properties are being changed. This function gets the
	  IDispatch interface from the control, calls IDispatch->GetIDsOfNamesto get
	  the dispatch IDs of the properties, and calls IDispatch->Invoke to set the
	  properties in the ActiveX control.
	
	The ActiveX control supplied with this sample shows how to use the property page.
	The ActiveX control has two properties, DATE and TIME. Another ActiveX control
	that uses the standard Date/Time property page just needs to add a DATE and TIME
	property to the ActiveX control. These properties must be of the DATE data type.
	
	Additional query words: Datetimeproppage Datetimeproppagevcnet
	
	======================================================================
	Keywords          : kbfile kbSample kbActiveX kbCOMt kbCtrlCreate kbPropSheet kbVC600 kbATL300 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
