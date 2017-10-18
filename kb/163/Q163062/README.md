---
layout: page
title: "Q163062: ODE97: Errors Executing File After Custom Setup"
permalink: kb/163/Q163062/
---

## Q163062: ODE97: Errors Executing File After Custom Setup

	Article: Q163062
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you run the Setup program for your custom application that includes a file
	to execute after Setup, you may receive the following error message:
	
	  Failed to launch process:
	  Setup has encountered a problem in launching the following command line:
	  <Path and Filename>.
	  If you have a system directory that contains a % sign, or the directory
	  name *starts* with a space (i.e. 'C:\win95\system'), then setup will
	  fail. Please restart setup and ensure that your system directory name
	  does not contain the aforementioned problems. Setup will now abort.
	
	After you click OK, you receive an additional message:
	
	  <Application Name> Setup was not completed successfully.
	
	CAUSE
	=====
	
	This error message occurs if the file name you execute at the end of your Setup
	program is not an executable file (*.exe, *.com, *.pif, *.bat).
	
	
	RESOLUTION
	==========
	
	Follow these steps if you want to execute a file at the end of Setup that is not
	actually an executable file:
	
	1. Include the file you want to run along with the rest of your setup files. For
	  example, include your custom Readme.txt if you want to open it at the end of
	  your Setup program.
	
	2. If necessary, include the executable file that runs your custom file. For
	  example, do not include Notepad.exe to open a Readme.txt file because it is
	  not on the list of files you can distribute with your application, and
	  because any Windows computer where you set up your application already has
	  that file.
	
	  NOTE: If you plan to include any Microsoft executable file, be sure it is a
	  file you are licensed to distribute with your application. For example, you
	  can include the Word Viewer or PowerPoint Viewer files if you want to include
	  a shortcut to a Microsoft Word or Microsoft PowerPoint file with your
	  application. These are royalty-free viewer programs.
	
	  For more information about the files you can include with your custom
	  application, search the Help Index for "files, distributing with run-time
	  applications."
	
	  The Word Viewer and PowerPoint Viewer are included in the Microsoft Office 97
	  ValuPack. For more information about the viewers, open the Valupk8.hlp file,
	  located in the ValuPack folder on your Microsoft Access 97 or Microsoft
	  Office 97 compact disc.
	
	3. In the "Run the following file after the Setup program is completed" box on
	  the "Do you want to run an executable file" screen of the Setup Wizard,
	  select the name of the file you want to open after Setup, such as Readme.txt.
	
	4. Customize the "Enter or edit the command line" box on the "Do you want to run
	  an executable file" screen of the Setup Wizard to reflect the command line to
	  open the file, and not just the file name itself. For example, type the
	  following command line to open Readme.txt:
	
	  "$(WinPath)\Notepad.exe" "$(AppPath)\Readme.txt"
	
	  The following sample command line starts the Setup program for the Word
	  Viewer.
	
	  "$(AppPath)\Wd95vw71.exe"
	
	  NOTE: When you include any executable that runs its own Setup program, such as
	  Wd95vw71.exe, you must click the "Allow Setup to Complete Before the file
	  Finishes Running" box on the "Do you want to run an executable file" screen
	  of the Setup Wizard. This allows your custom Setup program to complete before
	  the next Setup program begins.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the ODE Tools Setup Wizard.
	
	2. On the opening screen of the Setup Wizard, click "Create a new set of setup
	  options for my application's custom Setup program," and then click Next.
	
	3. On the "Add the files" screen of the Setup Wizard, click the Add button and
	  add the sample database Northwind.mdb. Click to select the "Set as
	  Application's Main File" check box.
	
	4. Click the Add button again and add the Microsoft Access Readme file,
	  Acread80.wri, which is installed by default in the \Program Files\Microsoft
	  Office\Office folder. Click Next.
	
	5. On the "Add the Shortcuts" screen of the Setup Wizard, click the Add button
	  and select Northwind.mdb. Type NWTest in the Description box, and then click
	  Next.
	
	6. Continue to click Next until you get to the "Do you want to run an executable
	  file" screen of the Setup Wizard. Select Acread80.wri in the "Run the
	  following file after the Setup program is completed" box, and then click
	  Next.
	
	7. On the "Where do you want the Setup Wizard to copy the files" screen, specify
	  a folder where you want to create the setup image. Under "What kind of
	  distribution disks do you want to create?", click the Network or CD Setup box
	  and click to clear the 1.44-MB Disks check box if it is selected. Click
	  Finish.
	
	8. When prompted if you want to save the Setup template, you can click No. The
	  Setup Wizard proceeds to create the setup image.
	
	9. Run the Setup program from the folder containing the setup image. Accept all
	  defaults on the Setup screens and note that you receive the error message
	  before Setup is finished.
	
	REFERENCES
	==========
	
	For more information about including an executable file with your custom Setup
	program, search the Help Index for "Setup Wizard, files to run after Setup."
	
	Additional query words: run executable
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
