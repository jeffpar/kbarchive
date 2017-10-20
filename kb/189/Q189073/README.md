---
layout: page
title: "Q189073: BUG: Step 2 of the MFC AppWizard Does Not Set Macro Values"
permalink: /kb/189/Q189073/
---

## Q189073: BUG: Step 2 of the MFC AppWizard Does Not Set Macro Values

{% raw %}

	Article: Q189073
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbide kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The AppWizard, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Custom AppWizard that uses the Standard AppWizard step defined by
	the APWZDLG_DLGAPPOPTIONS dialog box (Step 2), the macro values associated with
	this dialog box do not get set when the Next button is clicked.
	
	RESOLUTION
	==========
	
	The macro values are set when the Next button or the Back button of the
	APWZDLG_PROJOPTIONS dialog is clicked (Step 3). The TITLE macro is an exception.
	This macro is not set until the Finish button is selected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The APWZDLG_DLGAPPOPTIONS dialog has the following associated macros:
	
	  ABOUT        Whether the standard MFC AppWizard user or Custom AppWizard
	               user has specified that the dialog-based application
	               include an About box. Default value is ON.
	
	  HELP         Whether the standard MFC AppWizard user or custom AppWizard
	               user has specified that the application have
	               context-sensitive help. Default value is OFF.
	
	  3D           Whether the standard MFC AppWizard user or custom AppWizard
	               user has specified that the application use 3D controls.
	               Default value is ON.
	
	  AUTOMATION   Whether the standard MFC AppWizard user or custom AppWizard
	               user has selected Automation support. Default value is OFF.
	
	  OLECTL       Whether the application supports using ActiveX Controls.
	               Default value is ON.
	
	  SOCKETS      Whether the standard MFC AppWizard user or custom AppWizard
	               user has specified that the project have Windows Sockets
	               support. Default value is OFF.
	
	  TITLE        The caption string for an application's main title bar or,
	               in a dialog-based application, the dialog's title. Default
	               value is the name of the project.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Custom AppWizard based on Standard MFC AppWizard steps.
	
	2. In your Custom AppWizard's CDialogChooser::Next and CDialogChooser::Back
	  functions, add the following code:
	
	        // Look up the value associated with the ABOUT macro.
	        // Replace <MyCustomAWProj> with your custom AppWizard project name.
	        // See "CCustomAppWiz::m_Dictionary" in the on-line documentation.
	        CString strAbout;
	        if( !<MyCustomAWProj>aw.m_Dictionary.Lookup(_T("ABOUT"), strAbout) )
	           strAbout = "ABOUT is not defined in the dictionary";
	        else
	           strAbout = "ABOUT is " + strAbout;
	        AfxMessageBox( strAbout );
	
	3. Build your Custom AppWizard by selecting Build from the main menu or by
	  entering F7.
	
	4. Create a new project based on a Custom AppWizard.
	
	5. In Step 1, select "Dialog based" as the type of application to create, and
	  click the Next button. The message box will show that the ABOUT macro is set.
	
	6. In Step 2, clear the About Box check box, and click the Next button. The
	  message box still shows the ABOUT macro is set.
	
	7. In Step 3, click the Next button or the Back button. The message box now
	  shows that the ABOUT macro is undefined.
	
	This behavior is the same for the macros in the MORE INFORMATION section of this
	article with the exception of TITLE. This macro is not defined until the Finish
	button is clicked.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q186895 BUG: Custom AppWizard Errors with Applications That Have Help
	
	Visual C++ Programmer's Guide: Beginning Your Program; Creating Custom
	AppWizards
	
	Visual C++ Programmer's Guide: Beginning Your Program; Details
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbide kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbAppWizard
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
