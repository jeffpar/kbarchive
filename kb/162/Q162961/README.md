---
layout: page
title: "Q162961: ODE97: Run-Time Application Cannot Find System.mdw After Setup"
permalink: /kb/162/Q162961/
---

## Q162961: ODE97: Run-Time Application Cannot Find System.mdw After Setup

{% raw %}

	Article: Q162961
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you use the Microsoft Office 97 Developer Edition Tools (ODE Tools) Setup
	Wizard to create a setup image for a run-time application, you may receive the
	following error message when you run your Setup program on another computer:
	
	  Couldn't find file C:\Windows\System\System.mdw
	
	NOTE: The path to System.mdw may be different in your error message; it will
	display the path to the Windows System folder on your computer.
	
	CAUSE
	=====
	
	When you created the setup image, you clicked to select the Workgroup and
	Run-Time check boxes when you let the Wizard create a command-line for your
	application's shortcut, but you did not include a workgroup information file
	with your application.
	
	
	RESOLUTION
	==========
	
	There are four methods to resolve this problem.
	
	Methods 1 and 2 prevent the error from occurring by modifying the command line
	created by the Setup Wizard or by including a workgroup information file with
	your application's setup files.
	
	Methods 3 and 4 fix the error after your application is already installed by
	modifying your application's shortcut or by moving the workgroup information
	file.
	
	Method 1: Modifying the Wizard-Created Command Line
	---------------------------------------------------
	
	1. Open your application's setup options in the Setup Wizard.
	
	2. Proceed to the "Add the shortcuts" screen in the Setup Wizard, and select
	  your application's shortcut in the List Of Shortcuts box.
	
	3. Click to select the "I would like to specify my own custom command line"
	  option.
	
	4. Edit the text in the Command Line box to change the /wrkgrp command-line
	  option. Change this portion of the command line
	
	  /wrkgrp $(WorkgroupFile)
	
	  to:
	
	  /wrkgrp "$(FilePath)\System.mdw"
	
	  Following is an example of how the modified shortcut will look with /runtime
	  and /wrkgrp command-line options:
	
	  "msaccess.exe"  /runtime  /wrkgrp "$(FilePath)\System.mdw
	     "$(FilePath)\MyNewApp.mdb"
	
	5. Proceed through the remaining screens of the Setup Wizard and create a new
	  setup image for your application.
	
	Method 2: Including a Workgroup Information File with Your Setup
	----------------------------------------------------------------
	
	1. Open your application's setup options in the Setup Wizard.
	
	2. In the Add The Files screen in the Setup Wizard, click the Add button, and
	  then add a workgroup information file.
	
	  NOTE: If you try to add the workgroup file to which you are currently joined,
	  you receive the following errors when the Setup Wizard tries to create your
	  setup image:
	
	  Permission denied
	
	  The creation of your custom Setup program was not completed successfully.
	
	  This error occurs because the workgroup file is in use by you. Use the
	  Workgroup Administrator to temporarily join another workgroup file before you
	  run the Setup Wizard, or include a different workgroup file in your setup
	  image.
	
	3. Proceed through the remaining screens of the Setup Wizard and create a new
	  setup image for your application.
	
	Method 3: Modifying Your Application's Shortcut
	-----------------------------------------------
	
	After your run-time application is installed, you can modify the shortcut to your
	application so that it looks for the workgroup information file in the correct
	location.
	
	In Microsoft Windows 95 or Microsoft Windows NT version 4.0
	-----------------------------------------------------------
	
	1. Click the Start button on the taskbar, point to Settings, and then click
	  Taskbar.
	
	2. In the Taskbar Properties dialog box, click the Start Menu Programs tab, and
	  then click the Advanced button.
	
	3. Locate your application's folder and the application shortcut in Windows
	  Explorer.
	
	4. Using the right mouse button, click the shortcut, and then click Properties
	  on the shortcut menu that appears.
	
	5. In the Properties dialog box, click the Shortcut tab.
	
	6. Modify the command line in the Target box so that the /wrkgrp option is
	  followed by the correct path to the System.mdw file. For example, change this
	  portion of the command line
	
	  /wrkgrp C:\Windows\System\System.mdw
	
	  to:
	
	  /wrkgrp "C:\My Application\System.mdw"
	
	  Note that you must place quotation marks around the path and file name if it
	  contains any spaces.
	
	7. Click OK in the Properties dialog box, and then close Windows Explorer and
	  the Taskbar Properties dialog box.
	
	In Microsoft Windows NT version 3.51
	------------------------------------
	
	1. Open your application group in Program Manager.
	
	2. Select your application's icon by clicking it once.
	
	3. On the File menu, click Properties.
	
	4. In the Program Item Properties dialog box, modify the command line in the
	  Command Line box so that the /wrkgrp option is followed by the correct path
	  to the System.mdw file. For example, change this portion of the command line
	
	  /wrkgrp C:\Windows\System\System.mdw
	
	  to:
	
	  /wrkgrp "C:\My Application\System.mdw"
	
	5. Click OK in the Program Item Properties dialog box.
	
	Method 4: Moving the Workgroup Information File
	-----------------------------------------------
	
	After your application is installed, the shortcut looks for the System.mdw file
	in the Windows System folder by default. Your Setup program installed the
	System.mdw in your application's main folder. If you copy or move the System.mdw
	file to the Windows System folder, the shortcut will work correctly as is.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Office 97 Developer
	Edition Tools.
	
	MORE INFORMATION
	================
	
	The Workgroup Administrator, Wrkgadm.exe, is included with your run-time
	application by the Setup Wizard. If you do not include a workgroup information
	file (called System.mdw by default) with your setup files, the Workgroup
	Administrator automatically creates one when you run Setup for your application.
	Workgroup Administrator creates the System.mdw file in the folder where your
	application is installed. However, the Setup Wizard incorrectly sets the /wrkgrp
	command-line option to look for System.mdw in the Windows System folder when it
	creates your application's shortcut. This only happens when you indicate to the
	Setup Wizard that you want to include the Workgroup command-line option in your
	application's shortcut, but you do not include your own workgroup information
	file.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the ODE Tools Setup Wizard.
	
	2. In the first screen of the Setup Wizard, click "Create a new set of setup
	  options for my application's custom Setup program," and then click Next.
	
	3. In the "Add the files" screen of the Setup Wizard, click the Add button, and
	  then add the sample database Northwind.mdb. Click to select the "Set as
	  Application's Main File" check box, and then click Next.
	
	4. In the Add The Shortcuts screen of the Setup Wizard, click the Add button.
	  The Setup Wizard automatically creates a new shortcut for Northwind.mdb. Type
	  Northwind Test in the Description box for the new shortcut.
	
	5. Click the Database Shortcut Properties tab, and then click Workgroup and
	  Run-Time under Database Command-Line Options.
	
	6. Click Next, answer Yes when prompted to include the Microsoft Access run-time
	  executable file, and then click OK when prompted about including a workgroup
	  information file.
	
	7. Click Next until you get to the final screen in the Setup Wizard, "Where do
	  you want the Setup Wizard to copy the files for your custom Setup program?".
	  Select a folder for the setup files, and click to select a check box for the
	  kind of distribution disks you want to create.
	
	8. Click Finish and let the Setup Wizard create your setup image. You do not
	  need to save the current Setup template when prompted.
	
	9. After the Setup Wizard finishes, run Setup for this custom application on a
	  computer that does not have Microsoft Access installed. Then start the
	  Northwind Test application and note that you receive the error message
	  mentioned in the "Symptoms" section of this article.
	
	REFERENCES
	==========
	
	For more information about using the Workgroup Administrator, search the Help
	Index for "Workgroup Administrator," or ask the Microsoft Access 97 Office
	Assistant.
	
	For more information about workgroup information files, search the Help Index for
	"workgroup information files," or ask the Microsoft Access 97 Office Assistant.
	
	Additional query words: couldn t find file C Windows System System mdw
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbOffice97Search kbAccess97Search kbOffice97 kbOffice97DevSearch
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
