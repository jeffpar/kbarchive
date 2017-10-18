---
layout: page
title: "Q167662: ODE97: Uninstall Fails If Run-Time Not Shown in Component List"
permalink: kb/167/Q167662/
---

## Q167662: ODE97: Uninstall Fails If Run-Time Not Shown in Component List

	Article: Q167662
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 16-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	
	SYMPTOMS
	========
	
	You cannot remove a run-time application created with Microsoft Office 97
	Developer Edition Tools if the Microsoft Access Run-Time version is not visible
	in the component list of your Setup program.
	
	When you try to uninstall the application, you receive the following error
	message:
	
	  <Application Name> Setup was not completed successfully.
	
	RESOLUTION
	==========
	
	Verify that the "Display in Component List" check box is selected for the
	Microsoft Access Run-Time version when you create disk images with the Setup
	Wizard. For example, follow the instructions in the "Steps to Reproduce
	Behavior" section below, but omit step 7, which instructs you to clear the
	"Display in Component List" check box.
	
	MORE INFORMATION
	================
	
	The Setup Wizard in Microsoft Office 97 Developer Edition Tools allows you to
	customize your Setup program by selecting which components of your application
	appear in the component list when a user selects the Custom installation
	option.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Microsoft Office 97 Developer Edition Tools Setup Wizard.
	
	2. On the first screen of the wizard, click "Create a new set of setup options
	  for my application's custom Setup program," and then click Next.
	
	3. On the "List of Files" screen, click the Add button, and add the sample
	  database Northwind.mdb. Click to select the "Set as Application's Main File"
	  check box, and then click Next.
	
	4. On the "List of Shortcuts" screen, click the Add button to add a new shortcut
	  for the database file. Type "Uninstall Test" (without the quotation marks) in
	  the Description box. Click the Database Shortcut Properties tab, and then
	  click to select the Run-Time check box. Click Next.
	
	5. Click Yes when prompted to include the run-time executable file, and click OK
	  when prompted about including a workgroup information file.
	
	6. Click Next on the "List of Registry Values" and "Which of the following
	  components do you want to include" screens.
	
	7. On the "List of Components" screen of the Setup Wizard, select Microsoft
	  Access Run-Time Version, and then click to clear the "Display in Component
	  List" check box. Repeat for the Workgroup Administrator component, and then
	  click Next.
	
	8. Complete the Setup Wizard, following the instructions on your screen to
	  create your setup files.
	
	9. Run your custom Setup program to install the run-time application on a target
	  computer.
	
	10. Run the Setup program again, and click Remove All in the Installation
	  Maintenance dialog box. Note that you receive the error message immediately,
	  and the application is not removed from the target computer.
	
	Additional query words: ode app runtime rt
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
