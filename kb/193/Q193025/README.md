---
layout: page
title: "Q193025: FIX: Cannot Dynamically Add a Non-Licensed MFC Control"
permalink: /kb/193/Q193025/
---

## Q193025: FIX: Cannot Dynamically Add a Non-Licensed MFC Control

	Article: Q193025
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbActiveX kbCtrlCreate kbVBp kbVBp600bug kbVC kbVS600sp2 kbVS600SP1 kbVS6
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to dynamically add an MFC ActiveX control to a Visual Basic
	project, you may receive the following error message in the compiled project:
	
	  Run-time error '747':
	  No design-time license information is found for control 'XX.YY'. Contact the
	  vendor for control 'XX.YY' to obtain a design-time license.
	
	The error occurs even though the control does not require a license.
	
	CAUSE
	=====
	
	When adding a new control to a Form or UserControl dynamically at run-time,
	Visual Basic queries the control for the IClassFactory2 interface. This
	interface is generally used by controls that require licensing. If the control
	supports this interface, Visual Basic will then attempt to create an instance of
	the control using the IClassFactory2::CreateInstanceLic method, passing the
	developer-provided license string as a parameter. If no license is required, an
	empty string is passed.
	
	By default, all MFC ActiveX controls support the IClassFactory2 interface, even
	if the control does not require a design-time license. When Visual Basic makes
	the call to CreateInstanceLic, passing an empty string for the license, MFC
	returns the error CLASS_E_NOTLICENSED, indicating that the string passed is not
	a valid license key for this control. Visual Basic reports the error as an
	invalid or missing design-time license.
	
	RESOLUTION
	==========
	
	There are currently two workarounds for this problem:
	
	1. If you add the MFC control to the Visual Basic IDE toolbox at design-time,
	  and then uncheck the "Remove information about unused ActiveX controls"
	  option on the Make tab of the Project|Properties dialog, Visual Basic will
	  compile the licensing information of the control into your project. At
	  run-time, Visual Basic will know that the control does not require a license,
	  and therefore will call CreateInstance rather than CreateInstanceLic. This
	  will avoid the error.
	
	2. You can site the MFC control on a Visual Basic ActiveX control, expose its
	  properties and methods, and then dynamically add the Visual Basic control at
	  run-time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual C++. Create a new project and select MFC ActiveX Control Wizard.
	  Name the project MFCTest.
	
	2. From the Wizard Dialog, make sure the option "No run-time license" is
	  selected and then click Next. From the "Which window class should this
	  control subclass" drop-down box, select BUTTON. Then click Finish.
	
	3. Build the MFC control by pressing the F7 key. The control will be registered
	  on the system for you.
	
	4. Open Visual Basic 6.0 and start a Standard EXE project. Form1 is created by
	  default.
	
	5. In the code window for Form1, add the following:
	
	        Private m_MFCCtrl As VBControlExtender
	
	        Private Sub Form_Load()
	           Set m_MFCCtrl = Controls.Add("MFCTest.MFCTestCtrl.1", "xx", Me)
	           m_MFCCtrl.Visible = True
	        End Sub
	
	     NOTE: If you chose a different name than "MFCTest" for your MFC project,
	     you may need to change the ProgID passed to the Controls.Add method.
	
	6. Run the project once to see that Visual Basic can dynamically add the MFC
	  control while debugging in the IDE.
	
	7. Compile the Visual Basic project and run the compiled executable. You should
	  receive the run-time error '747' on Form load.
	
	8. To avoid the error, add your MFC control to the IDE toolbox before you
	  compile the project. Click Components on the Project menu and check "MFCTest
	  ActiveX control module" from the Components list. Click OK.
	
	9. To make sure Visual Basic doesn't remove unused references at compile- time,
	  select Project1 Properties from the Project menu and click the Make tab.
	  Uncheck the "Remove information about unused ActiveX controls" option and
	  then click OK.
	
	10. Re-compile the project and run the compiled executable. The error should no
	  longer occur.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	Q190670 HOWTO: Dynamically Add Controls to a Form with Visual Basic 6.0
	
	Q188577 HOWTO: What is the Licenses Collection Used For?
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbActiveX kbCtrlCreate kbVBp kbVBp600bug kbVC kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
