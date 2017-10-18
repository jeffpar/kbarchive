---
layout: page
title: "Q316907: HOW TO: Run a Post Setup Executable with InstallShield Express"
permalink: kb/316/Q316907/
---

## Q316907: HOW TO: Run a Post Setup Executable with InstallShield Express

	Article: Q316907
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbAppSetup kbGrpDSFox kbDSupport kbvfp700 kbHOWTOmasterkbfaq
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Items to Check in InstallShield
	- Use Orca to Edit the .msi File
	
	- REFERENCES
	
	SUMMARY
	=======
	
	Use this step-by-step guide to run a post-setup executable for setup programs
	you create with InstallShield Express - Visual FoxPro Limited Edition. This
	program ships with Visual FoxPro 7.0.
	
	Items to Check in InstallShield
	-------------------------------
	
	The InstallShield process has six steps. In three of these steps, you will need
	to include items:
	
	- Step 2: Specifying the files to include in the installation. In this step,
	  include the executable that you want to run at the end of the installation.
	
	- Step 4: Selecting the dialog boxes that will be displayed in the setup.
	  Include the Setup Complete Success dialog box. The following table lists the
	  options you need to set:
	
	  Option                        Setting
	  ------------------------------------------------------------------------
	
	  Show Launch Program           Yes
	  Program File                  Executable you want to run
	  Command Line Parameters       Any parameters that you need.
	
	- Step 6: Preparing the setup for release. If you are building a SingleImage
	  setup, set the Include Setup.exe option to No.
	
	Build your setup.
	
	Use Orca to Edit the .msi File
	------------------------------
	
	Every time you build the setup in InstallShield, follow these steps:
	
	1. Use the Orca tool to open the Default.msi file. For information about how to
	  obtain Orca, see the "References" section later in this article.
	
	2. In the Tables column, locate ControlCondition.
	
	3. In the Dialog column, locate SetupCompleteSuccess. In the Control_ column,
	  locate CheckLaunchProgram. In the Action column, change Show to Hide.
	
	4. In the Dialog column, locate SetupCompleteSuccess. In the Control_ column,
	  locate LaunchProgramText. In the Action column, change Show to Hide.
	
	5. In the Tables column, locate ControlEvent.
	
	6. In the Dialog_ column, locate SetupCompleteSuccess. In the Argument column,
	  locate LaunchProgramFileFromSetupCompleteSuccess. Replace all of the text in
	  the Condition column with a 1.
	
	7. Save the .msi file and quit Orca.
	
	REFERENCES
	==========
	
	For additional information about how to obtain and use Orca, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q255905 HOWTO: Use the Orca Database Editor to Edit Windows Installer Files
	
	For additional information about creating a Visual FoxPro application setup
	program by using InstallShield Express, see Help in InstallShield Express -
	Visual FoxPro Limited Edition. Or, view the Vfpdeploy.doc file located in the
	techincal acticles folder on the Microsoft Visual Fox Pro for Windows, version
	7.0, compact disc.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAppSetup kbGrpDSFox kbDSupport kbvfp700 kbHOWTOmaster kbfaq
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbhowto
	
	=============================================================================
	
