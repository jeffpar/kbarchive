---
layout: page
title: "Q260581: BUG: Installing App via PDW Generates Err Msg Creating Icons"
permalink: kb/260/Q260581/
---

## Q260581: BUG: Installing App via PDW Generates Err Msg Creating Icons

	Article: Q260581
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbDeployment kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing an application distributed through the Package and
	Deployment Wizard (PDW), the following error is encountered:
	
	  An error occurred trying to create a program icon for '<Project Name>'
	
	CAUSE
	=====
	
	Program folders and shortcuts are created at this location
	
	  C:\Windows\Start Menu\Programs
	
	or this location:
	
	  C:\Winnt\Profiles\<Loginid>\Start Menu\Programs
	
	If the Start Menu or Programs folder has a different name, setup may raise the
	preceding error when trying to add the new program icon to this list.
	
	RESOLUTION
	==========
	
	There are four potential methods to work around this problem:
	
	- Choose to ignore the error, allowing the application to complete its
	  installation. Once the install is complete, manually create the necessary
	  Start menu items.
	
	- Rename the Start menu's programs folder back to its default name, \Start
	  Menu\Programs, and then install the application.
	
	- Use a third-party installation program in place of the Package and Deployment
	  Wizard.
	
	- Modify the setup program used by the Package and Deployment Wizard. Please
	  note that modifications to the setup program are not supported by Microsoft.
	  By default, the project for the Setup1.exe file is found at this location:
	
	  C:\Program Files\Microsoft Visual Studio\VB98\Wizards\PDWizard\Setup1\
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem has occurred under all versions of Microsoft Windows. However, the
	following "Steps to Reproduce Behavior" are not always successful in generating
	the error on Microsoft Windows NT and Microsoft Windows 2000.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic and save it. Form1 is
	  created by default.
	
	2. Run the Package and Deployment Wizard to create a setup program for this
	  project. When running the wizard, accept the default choices.
	
	3. Run the Setup program. After the installation completes, on the Windows Start
	  menu, select Programs, and you should see a program group named Project1 that
	  contains a shortcut to start the Project1.exe file.
	
	4. On the Start menu, under Control Panel, use the Add/Remove Programs option to
	  remove the application.
	
	5. Confirm that the Start menu items have been successfully removed.
	
	6. Right-click on the Windows Taskbar and select Properties.
	
	7. Select the Start Menu Programs tab.
	
	8. Click the Advanced button.
	
	9. Rename the Programs folder to A.
	
	10. Re-run the application's setup. This time, you receive the error message
	  shown in the "Symptoms" section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbDeployment kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
