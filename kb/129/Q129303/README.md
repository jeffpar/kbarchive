---
layout: page
title: "Q129303: ADT/ODE: OLE Controls Appear Blank in Run-Time Applications"
permalink: kb/129/Q129303/
---

## Q129303: ADT/ODE: OLE Controls Appear Blank in Run-Time Applications

	Article: Q129303
	Product(s): Microsoft Access Distribution Kit
	Version(s): 2.0 7.0 97
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, versions 2.0, 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you insert an ActiveX control in an application in the retail version of
	Microsoft Access, the control may appear blank when you run the application as a
	run-time application. You may also receive the error message "There is no object
	in this control."
	
	NOTE: This behavior will also occur if you make a copy of an ActiveX control that
	already exists on a form.
	
	CAUSE
	=====
	
	The ActiveX control may be blank or you may receive the error message if you do
	not specify the ActiveX control (*.OCX) file in the Setup Wizard on the screen
	marked "Add the files that you want your custom Setup program to copy and then
	set properties for each file." (Or in the Files To Include dialog box in
	Microsoft Access Developer's Toolkit 2.0 and 7.0)
	
	The Microsoft Access Developer's Toolkit (ADT) documentation does not clearly
	state that you must specify the .OCX file when you use the Setup Wizard.
	
	NOTE: The Microsoft Office 97 Developer Edition Tools Help topic, "Adding ActiveX
	Controls to Your Custom Setup Program," explains the relationship between the
	ActiveX control and its associated .OCX file.
	
	RESOLUTION
	==========
	
	In the ODE Setup Wizard
	-----------------------
	
	When you add an ActiveX control on the Add Files page, the Setup Wizard searches
	for the .dep file for this control. If it finds the .dep file, the Setup Wizard
	automatically adds the supporting files specified in the .dep file to the list
	of files on the Add Files page. If the Setup Wizard can't find a .dep file for
	the control, or if it can't find one of the supporting files specified in the
	.dep file, an error message is displayed. If the ActiveX control doesn't have a
	.dep file, and you know what files are required to use the control, you have to
	add the .OCX file and the supporting files directly on the Add files page of the
	Setup wizard.
	
	In the ADT Setup Wizard
	-----------------------
	
	When you specify the control's .OCX file, the Setup Wizard specifies which
	dependent dynamic-link libraries (DLLs) to include. Once you include them, these
	two files properly register the OLE control in all run-time applications.
	
	MORE INFORMATION
	================
	
	Some run-time applications may properly display the OLE control on computers
	that already have the ODE or ADT installed. This depends on whether that control
	has previously been registered correctly on that computer. Registration can
	occur manually or through the installation of programs such as the ODE or ADT.
	These configuration variables can account for the intermittent nature of this
	behavior.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open an existing Microsoft Access database, and then create a new blank form.
	
	2. In Microsoft Access 97:
	
	   - On the Insert menu, click ActiveX control.
	
	   - In the Insert ActiveX Control box, click Calendar Control 8.0.
	
	  In Microsoft Access 7.0:
	
	   - On the Insert menu, click Custom Control.
	
	   - In the "Insert OLE Custom Control" dialog box, in the "Select a Custom
	     Control" list, click Calendar Control.
	
	  In Microsoft Access 2.0
	
	   - On the Edit menu, click Custom Control.
	
	   - In the Control Type box, select Calendar Control, and then click OK.
	
	3. Save and close the form.
	
	4. Create and save an AutoExec macro to open the form.
	
	5. Close the database.
	
	6. To produce a run-time version of the application, run the ODE or ADT Setup
	  Wizard and include the database, but do not include the .OCX file when you
	  are prompted for the files to include.
	
	7. When the Setup Wizard finishes, install the new run-time application on a
	  computer which does not already have Microsoft Access installed.
	
	8. Open the new run-time application.
	
	If the control is displayed correctly, an application, such as the ODE or ADT,
	has previously registered the control on the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbOffice97Search kbAccessDevTK200 kbOffice97 kbZNotKeyword3 kbAccessDevTK700
	Version           : 2.0 7.0 97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
