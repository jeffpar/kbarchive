---
layout: page
title: "Q166132: PRB: Dialog With RichEdit May Fail During Creation"
permalink: /kb/166/Q166132/
---

## Q166132: PRB: Dialog With RichEdit May Fail During Creation

{% raw %}

	Article: Q166132
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbui kbDlg kbMFC kbRichEdit KbUIDesign kbVC kbVC500 kbVC600 kbVS600 kbGrpDSMFC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dialog creation may fail if the dialog template has a Rich Edit control in it.
	This template may be used in a dialog, CformView, or property page.
	
	The following error messages may appear in the IDE output window when you execute
	the program in the debugger with the debug build. No error message or warning is
	given if you execute the program outside the debugger or with the release
	build.
	
	Dialog or Property Page
	-----------------------
	
	Visual C++ 5.0:
	
	  
	
	  Warning: Dialog creation failed!
	
	Visual C++ 6.0:
	
	  
	
	  If this dialog has OLE controls:
	  AfxEnableControlContainer has not been called yet.
	  You should call it in your app's InitInstance function.
	
	CFormView
	---------
	
	Visual C++ 5.0:
	
	  
	
	  Warning: Dialog creation failed!
	  Warning: could not create view for frame.
	  Failed to create client pane/view for frame.
	  Warning: CDocTemplate couldn't create a frame.
	
	Visual C++ 6.0:
	
	  
	
	  If this dialog has OLE controls:
	  AfxEnableControlContainer has not been called yet.
	  You should call it in your app's InitInstance function.
	
	In the case of a CformView, the following message also appears:
	
	  
	
	  Failed to create empty document.
	
	CAUSE
	=====
	
	The Rich Edit control is not initialized.
	
	RESOLUTION
	==========
	
	Call the MFC global function AfxInitRichEdit before you create the dialog to
	initialize the Rich Edit Control. A good place to initialize the Rich Edit
	control is in the application's InitInstance function before you create the
	dialog.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	With the new dialog editor in Visual C++ 5.0, it is possible to add a Rich Edit
	control into a dialog template by dragging the control from the control palette.
	However, doing this in the dialog editor does not ensure that the required
	Riched32.dll library will be loaded before the Rich Edit control is created. In
	Win32 SDK, it is necessary to call the LoadLibrary function to load Riched32.dll
	before the dialog creation. In MFC, the global function AfxInitRichEdit does
	this for you. All you need to do is call this function before you create the
	dialog.
	
	Please use the online help to get more information on AfxInitRichEdit function.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Dialog Scenario:
	
	The follow scenario reproduces the problem described above with a dialog.
	
	1. Create a new project as follows: File\New\Projects\MFC AppWizard(exe).
	
	2. Create a Dialog based application, and then click Finish.
	
	3. Add a Rich Edit control to the main dialog template in the dialog editor.
	
	4. Build the application.
	
	5. Press the F5 key to start the debugger. Notice that the application does not
	  display the dialog.
	
	6. Observe the following in the Output window in IDE:
	
	  
	
	     ...
	     Warning: Dialog creation failed!
	     ...
	
	CformView Scenario:
	
	The follow scenario reproduces the problem described above with a CFormView.
	
	1. Create a new project as follows: File\New\Projects\MFC AppWizard(exe).
	
	2. Create an SDI or MDI application and in step 6 of Appwizard select CFormview
	  as the Base class for the view.
	
	3. Add a Rich Edit control to the main dialog template for the formview in the
	  dialog editor.
	
	4. Build the application.
	
	5. Press the F5 key to start the debugger. Notice that a message box appears
	  indicating that the empty document could not be created.
	
	6. Observe the following in the Output window in IDE:
	
	  
	
	       ...
	     Warning: Dialog creation failed!
	     Warning: could not create view for frame.
	     Failed to create client pane/view for frame.
	     Warning: CDocTemplate couldn't create a frame.
	       ...
	
	Additional query words: CreatDialogIndirect DoModal RichEdit CFormView
	
	======================================================================
	Keywords          : kberrmsg kbui kbDlg kbMFC kbRichEdit KbUIDesign kbVC kbVC500 kbVC600 kbVS600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
