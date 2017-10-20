---
layout: page
title: "Q194572: HOWTO: Run an Unattended Setup of a Visual FoxPro Application"
permalink: /kb/194/Q194572/
---

## Q194572: HOWTO: Run an Unattended Setup of a Visual FoxPro Application

{% raw %}

	Article: Q194572
	Product(s): Microsoft FoxPro
	Version(s): 5.0a,6.0
	Operating System(s): 
	Keyword(s): kbcode kbAppSetup kbvfp500a kbvfp600 kbDSupport
	Last Modified: 05-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	At times, you may want to have a Visual FoxPro application install without user
	intervention. You can accomplish this by using the Quiet install mode with the
	Setup.exe command.
	
	MORE INFORMATION
	================
	
	Setup.exe has several switches that you can use to facilitate different types of
	Quiet mode setup options. To install a Visual FoxPro application with Setup.exe
	that requires no user intervention, use the /QT switch following the Setup.exe
	command. By using this switch, the user has no indication that setup has started
	or completed.
	
	You can use the following switches with Setup.exe to install a Visual FoxPro for
	Windows generated application:
	
	  
	
	     /Q[0|1|T]     Quiet install mode (0 shows exit, 1 hides exit, T hides
	                   all display)
	     /QN[1|T]      Quiet install mode with reboot suppressed
	
	Following is a synopsis of what the user will see when you execute Setup with the
	appropriate switch:
	
	Setup.exe /Q or /Q0
	-------------------
	
	When you execute using either of these switches, Setup opens a dialog box with
	"Initializing Setup..." and the user sees the progress bar of the current file
	copy status. When the setup completes, another dialog box displays indicating
	whether Setup completed successfully. This dialog box requires the user to click
	an OK button to close the dialog box and complete setup.
	
	Setup.exe /Q1 or /QN1
	---------------------
	
	Using these options displays the dialog box "Initializing Setup..." and then the
	progress bar displays. However, the completed dialog box does not display.
	
	Setup.exe /QT
	-------------
	
	This setup option does not display any dialog boxes, whether the installation
	succeeds or not.
	
	Setup.exe /QNT
	--------------
	
	This switch causes the "Initializing Setup..." dialog box to display but no other
	dialog boxes display.
	
	You can generate a full list of the options by starting the Setup.exe from the
	Run command on the Start menu with the "/" switch (the forward slash character)
	as in the following example:
	
	  
	
	     C:\MyVFPApp\SETUP.EXE / 
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173992 HOWTO: Uninstall VFP Application Installed by Setup Wizard
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words: silent hidden "out of sight" unseen unobserved unattended
	
	======================================================================
	Keywords          : kbcode kbAppSetup kbvfp500a kbvfp600 kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP500a
	Version           : :5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
