---
layout: page
title: "Q274754: HOWTO: Create a User Control with Licensed Components in VB"
permalink: kb/274/Q274754/
---

## Q274754: HOWTO: Create a User Control with Licensed Components in VB

	Article: Q274754
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSample kbwizard kbActiveX kbAppSetup kbCtrlCreate kbDeployment kbLicensing kbVBp kbVB
	Last Modified: 22-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes what you need to do in terms of licensing when you create
	User Controls that need to be loaded dynamically and have components that
	require license keys.
	
	MORE INFORMATION
	================
	
	If you create an ActiveX control and one or more components require a license
	key, then you need to make your own control require a license if you want to
	enable developers to load your control dynamically on a form.
	
	To make your control require a license key, on the Project Properties dialog box,
	check the Require License Key option in the General tab.
	
	To load your control dynamically on a form, you need to add its license key to
	the licenses collection explicitly because you usually do not have a reference
	to this control in your client program project and, consequently, the compiler
	cannot include any licensing information into the client program executable
	file.
	
	To better understand these statements, follow these steps. To do this, you need
	two computers, the development computer with Visual Basic installed, and a
	second computer with no special requirements.
	
	1. Create a User Control that requires a license key, and call it
	  MyBasicControl.
	
	2. Create a second User Control that uses the previous one as a component, and
	  call it MyCompositeControl.
	
	3. Create a Standard EXE application, make a reference to MyCompositeControl,
	  and then use it on a form. Call this application StaticClient.
	
	4. Create a Standard EXE application and add MyCompositeControl dynamically to
	  the form. Call this application DynamicClient.
	
	5. Deploy both applications to a second computer and show that DynamicClient is
	  unable to load the form.
	
	6. Change MyCompositeControl to require a license key and show that after this
	  change the DynamicClient works fine on the target computer.
	
	Step-by-Step Example
	--------------------
	
	Prepare Folders for Your Samples:
	
	Create the following tree of folders:
	
	  \ControlSamples
	  \ControlSamples\BasicControl
	  \ControlSamples\CompositeControl
	  \ControlSamples\DynamicClient
	  \ControlSamples\StaticClient
	  \ControlSamples\HelperApp
	
	Create a User Control That Requires a License Key:
	
	1. Open a new ActiveX Control project. UserControl1 is created by default.
	
	2. On the Project menu, select Properties to open the Project Properties dialog
	  box.
	
	3. In the Project Name field, type "MyBasicControl" (without the quotation
	  marks).
	
	4. In the Project Properties dialog box, check the Require License Key option.
	
	5. Click OK, and then close the Project Properties dialog box.
	
	6. Place a CommandButton as a component in your User Control.
	
	7. Change the caption of the CommandButton to Basic Control.
	
	8. Set the BackColor property of your control to red.
	
	9. On the File menu, save your project to the BasicControl folder.
	
	10. On the File menu, select Make MyBasicControl.ocx to compile your control.
	
	11. On the Project menu, select Properties to open the Project Properties dialog
	  box.
	
	12. On the Component tab, check the Binary Compatibility option.
	
	13. Click OK, and then close the Project Properties dialog box.
	
	14. On the File menu, save the project.
	
	Create a Control by Using the Previous Control as a Component:
	
	1. Start a new ActiveX Control project. UserControl1 is created by default.
	
	2. On the Project menu, select Properties to open the Project Properties dialog
	  box.
	
	3. In the Project Name field, type "MyCompositeControl" (without the quotation
	  marks).
	
	4. Click OK, and then close the Project Properties dialog box.
	
	5. Place a CommandButton as a component in your User Control.
	
	6. Change the caption of the button to Composite Control.
	
	7. Set the BackColor property of your control to blue.
	
	8. On the Project menu, select Components, check MyBasicControl, and then click
	  OK.
	
	9. Place an instance of MyBasicControl on your new control below the Composite
	  Control button.
	
	10. On the File menu, save your project to the CompositeControl folder.
	
	11. On the File menu, select Make MyCompositeControl.ocx to compile your
	  control.
	
	12. On the Project menu, select Properties to open the Project Properties dialog
	  box.
	
	13. On the Component tab, check the Binary Compatibility option.
	
	14. Click OK, and then close the Project Properties dialog box.
	
	15. On the File menu, save the project.
	
	Note that at this point, your CompositeControl does not require a license key.
	The next section demonstrates what occurs when you try to load this control
	dynamically.
	
	Create a Dependency File for MyCompositeControl:
	
	1. Start Package and Deployment Wizard (PDW).
	
	2. Browse to the MyCompositeControl.vbp file in the CompositeControl folder.
	
	3. Click the Package button.
	
	4. Select Dependency File in the package type window.
	
	5. Click Next in the Package Folder window. If a dialog box appears asking if
	  you want to distribute the Property Page dll, click No.
	
	6. Click OK for the Missing Dependency Information window.
	
	7. Click Next in the Included files window.
	
	8. Click Next in the Cab Information window.
	
	9. Click Next in the Install Locations window.
	
	10. Click Finish, and then close the PDW.
	
	Create a Client That References the Composite Control:
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, select Properties to open the Project Properties dialog
	  box.
	
	3. In the Project Name field, type "StaticClient" (without the quotation marks).
	
	4. Click OK, and then close the Project Properties dialog box.
	
	5. On the Project menu, select Components, check MyCompositeControl, and then
	  click OK.
	
	6. Place an instance of MyCompositeControl on Form1.
	
	7. On the File menu, save your project to the StaticClient folder.
	
	8. On the File menu, select Make StaticClient.exe to compile your application.
	
	9. Run your application, and note that the form loads without problems.
	
	Create a Client That Loads the Composite Control Dynamically:
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, select Properties to open the Project Properties dialog
	  box.
	
	3. In the Project Name field type "DynamicClient" (without the quotation marks).
	
	4. Click OK, and then close the Project Properties dialog box.
	
	5. On Form1, place a CommandButton on the top-right corner of the form.
	
	6. Type the following code in the Form1 module:
	
	  Option Explicit
	  Dim WithEvents ctlDialog As VBControlExtender
	
	  Private Sub Command1_Click()
	    Set ctlDialog = Controls.Add("MyCompositeControl.UserControl1", "myctl", Form1)
	    ctlDialog.Visible = True
	  End Sub
	
	7. On the File menu, save your project to the DynamicClient folder.
	
	8. On the File menu, select Make DynamicClient.exe to compile your application.
	
	9. Run your application, click the CommandButton, and note that you receive the
	  following error message:
	
	  Run-time error '731':
	
	  In order to use MyCompositeControl.UserControl1, you must specify a license
	  string for the control. Use Licenses.Add to add the license string to the
	  Licenses collection.
	
	At this point, you are unable to dynamically load the control on the development
	computer even if your control does not require a license key. The same behavior
	occurs if you try to deploy the DynamicClient to another computer, as
	demonstrated in the following section.
	
	Deploy the DynamicClient:
	
	1. Create a distribution package for the DynamicClient application with the
	  Package and Deployment Wizard (PDW).
	
	2. While the Package and Deployment Wizard is running, add the
	  MyCompositeControl.ocx file manually on the Included Files dialog box. You
	  need to add this manually because you do not have a reference to this control
	  (remember, you are loading it dynamically) and the PDW has no way to find out
	  that you need this file.
	
	  When you include MyCompositeControl.ocx, you are prompted for the location of
	  MyBasicControl.ocx. The PDW knows that this file is also needed because it is
	  referenced in the dependency file you created for MyCompositeControl.
	
	3. After you finish with the PDW, install this application on another computer
	  with the distribution files you just created.
	
	4. Run the application, click the CommandButton, and note that you receive the
	  following error message:
	
	  Run time error 429
	
	  You do not have an appropriate license to use this functionality.
	
	In order to load the control dynamically, you need to add the license key of the
	control to the licenses collection. See later in this article for more details.
	
	Deploy the StaticClient:
	
	1. Create a distribution package for the StaticClient with the PDW. In this
	  case, there is nothing special you need to do because the application has a
	  reference to MyCompositeControl and the PDW picks up all the information it
	  needs.
	
	2. Deploy the application to another computer and test it. Note that the
	  application works without any problems and the control is placed on the form.
	
	The reason why StaticClient works fine is that it has a reference to
	MyCompositeControl.
	
	Make the DynamicClient Work:
	
	The first thing you need to do is to change MyCompositeControl to require a
	license key, as follows:
	
	1. Open the MyCompositeControl project.
	
	2. In the Project Properties dialog box, select the Require License Key option.
	
	3. Recompile the control, and then save the project.
	
	After you recompile the control, Visual Basic generates a new file with the
	extension .VBL, which stores the registry entries that are needed to run the
	control at design time.
	
	The next step is to change the DynamicClient, but this change requires you to
	know the run-time license key for MyCompositeControl. To help with this
	requirement, you need to create a small helper function to retrieve this value
	for you, as follows:
	
	1. Start a new Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, select Properties to open the Project Properties dialog
	  box.
	
	3. In the Project Name field, type "HelperApp" (without the quotation marks).
	
	4. Click OK, and then close the Project Properties dialog box.
	
	5. Place a Label on Form1, and change its caption to ProgID:.
	
	6. Place a TextBox beside the label, change its Name to txtProgID, and then
	  clear the Text property.
	
	7. Add a CommandButton to the form, change its Name to cmdGetKey, and then
	  change its Caption to Get Key.
	
	8. Type the following code into the module of Form1:
	
	  Option Explicit
	
	  Private Sub cmdGetKey_Click()
	      Dim strKey As String, strProgID As String
	      
	      strProgID = Trim$(txtProgID.Text)
	      If strProgID = "" Then
	          MsgBox "Provide a ProgID"
	          Exit Sub
	      End If
	      
	      strKey = Licenses.Add(strProgID)
	      strKey = InputBox("Here is the license Key", "Get License Key", strKey)
	  End Sub
	
	9. On the File menu, save the project, and then compile it.
	
	This application simply uses the licenses collection object to return the
	run-time license key of a given control.
	
	When you add licensing support to your control component, two license keys
	generated; one is a design-time license and the other is a run-time license. The
	design-time license ensures that a developer is building his or her application
	with a legally purchased control; the run-time license ensures that a user is
	running an application that contains a legally purchased control. The
	design-time license is verified by control containers such as Visual Basic.
	Before these containers allow a developer to place a control on a form, they
	first verify that the control is licensed by the developer. These containers
	verify that a control is licensed by calling certain functions in the control.
	If the license is verified, the developer can add it. The run-time license is
	verified when you run your application. If you have a reference to the licensed
	Control, Visual Basic extracts the control's run-time license key from the
	control and stores it within the executable that it is building. At run time,
	the executable locates that license key and passes it back to the control to
	create a run-time instance of it. In this case, you want to add the control
	dynamically without referencing it at design-time, so you have to use the
	HelperApp to get the run-time license key and hard-code it in DynamicClient.
	
	The Licenses.Add method can be used in two ways:
	
	1. With only one parameter as you did previously. This returns the run-time
	  license key of a control. Note that this only works on a development computer
	  where the design-time license key is stored in the Registry. You can test the
	  application by providing the ProgID for any of the controls you just built,
	  such as MyBasicControl.UserControl1 or MyCompositeControl.UserControl1.
	
	2. With two parameters where the first one is the ProgID, and the second is the
	  run-time license key.
	
	Use the second syntax to hard-code the run-time license key into your
	DynamicClient, as follows:
	
	1. Open the DynamicClient project.
	
	2. In the Command1_Click event, add a line of code that adds the license key to
	  the licenses collection. The new code looks similar to this:
	
	  Licenses.Add "MyCompositeControl.UserControl1", "Here goes the license key"
	  Set ctlDialog = Controls.Add("MyCompositeControl.UserControl1", "myctl", Form1)
	  ctlDialog.Visible = True
	
	3. The second parameter is the license key for MyCompositeControl. To locate
	  this string, run the helper application, type in
	  "MyCompositeControl.UserControl1" (without the quotation marks), and then
	  click the GetKey button. Copy and paste the resulting string as the second
	  parameter of the Add method.
	
	4. On the File menu, save the project, and then recompile it.
	
	5. Run the application in the development computer, click the button, and note
	  that an instance of the CompositeControl is placed on the form.
	
	6. Recreate the distribution package, and then reinstall the application on
	  another computer.
	
	7. Run the application on the target computer, click the button, and note that
	  everything works correctly.
	
	Summary:
	
	Following is a summary of the main points that have been discussed in this
	article:
	
	1. To dynamically load a control that uses licensed controls as its constituent
	  controls, make this control require a license too.
	
	2. To make a UserControl that requires a license key, check the Require License
	  Key option in the Project Properties dialog box.
	
	3. When you check the Require License Key option, Visual Basic creates an
	  additional file with extension .VBL when it compiles the .ocx file. This file
	  contains the design-time license key entries that need to be added to the
	  Registry.
	
	4. You need to distribute the .VBL file to other developers in order for them to
	  use your control at design time. If your control wraps a third party control
	  that requires design time license, and other developers want to use your
	  control at design time by adding it to a container such as a VB Form, then
	  they must also have the third party control installed on their machines
	  including its design time license. In other words, when you place a control
	  on a form at design time, all constituents are also checked for design time
	  license.
	
	5. You should not distribute the .VBL file with final applications that use your
	  control.
	
	6. To dynamically load a control that requires a license key, you need to add
	  the run-time license key to the Licenses collection before you load the
	  control. Do this through the Add method of the Licenses collection.
	
	7. The run-time license key string you need to provide to the Add method of the
	  Licenses collection is not the same as the one that is stored in the .VBL
	  file, which is the design-time license key for the control. You can locate
	  the string you need by using the same Add method without the second parameter
	  on a computer where the design-time license key is already stored in the
	  Registry.
	
	REFERENCES
	==========
	
	For additional information about similar issues with licensed ActiveX controls,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q241126 INFO: Dynamically Add UserControls That Require Run-Time Licenses
	
	For more detailed information related to licensing ActiveX Controls please read
	the following topics in the Visual Basic Online Help:
	
	1. MSDN/Visual Studio Documentation/Visual Basic Documentation/Using Visual
	  Basic/Component Tools Guide/Creating ActiveX Components/Building ActiveX
	  Controls/Distributing Controls/Licensing Issues for controls/
	
	2. Licenses Collection - NOTE: Read the documentation for the Add method
	  carefully.
	
	Additional query words: 731 429 runtime designtime deployment
	
	======================================================================
	Keywords          : kbSample kbwizard kbActiveX kbAppSetup kbCtrlCreate kbDeployment kbLicensing kbVBp kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	
