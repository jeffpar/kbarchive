---
layout: page
title: "Q166193: SAMPLE: ColorFrm Demonstrates ActiveX Control w/ Popup Toolbar"
permalink: kb/166/Q166193/
---

## Q166193: SAMPLE: ColorFrm Demonstrates ActiveX Control w/ Popup Toolbar

	Article: Q166193
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbole kbSample kbActiveX kbCOMt kbCtrl kbInprocSvr kbMFC KbUIDesign kbVC400 kbVC
	Last Modified: 03-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.0a, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ColorFrm sample demonstrates adding a popup toolbar to an ActiveX Control.
	ColorFrm uses a CMiniFrameWnd derived class to contain the toolbar that is
	visible whenever the control is UI Active. When the control is no longer active,
	the toolbar is hidden and its position is saved.
	
	The ColorFrm sample details which COleControl functions must be overridden to
	achieve this behavior. The sample also demonstrates some other basic ActiveX
	Control functionality, such as an OnDraw function that renders differently based
	on the AmbientUserMode of the control.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Colorfrm.exe now
	  (http://download.microsoft.com/download/vc40std/sample/3/WIN98/EN-US/ColorFrm.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Colorfrm.exe now
	  (http://download.microsoft.com/download/visualstudionet/sample/1.25/win98mexp/en-us/Colorfrm.exe)
	
	Release Date: 2-Jul-2002
	
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
	
	It is often useful to add a popup toolbar to an ActiveX Control that can be used
	to provide a user interface to the control. In most cases, you do not want the
	toolbar to be visible if the control is not UI Active because there may be other
	controls on the dialog or form. The ColorFrm sample demonstrates how to add a
	CMiniFrameWnd class and toolbar to an ActiveX Control.
	
	The steps listed below outline the process used to create a popup toolbar that
	hides itself when its parent control is not UI Active:
	
	1. Create a basic ActiveX Control using the ControlWizard.
	
	2. Add a new class to the control project that is derived from CMiniFramWnd. An
	  object of this class will contain the toolbar.
	
	3. Create the CMiniFrameWnd derived object in the OnCreate function for the
	  ActiveX Control.
	
	4. Insert a toolbar resource into the ActiveX Control project.
	
	5. Override OnCreate for the CMiniFrameWnd derived class and use LoadFrame() to
	  create the toolbar.
	
	6. Override the functions listed below to achieve the desired showing / hiding
	  behavior for the toolbar. Please refer to the sample code for more details.
	
	     - OnShowToolBars()
	
	     - OnHideToolBars()
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbole kbSample kbActiveX kbCOMt kbCtrl kbInprocSvr kbMFC KbUIDesign kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC400a kbVC420b kbVC500Search
	Version           : :4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	
	=============================================================================
	
