---
layout: page
title: "Q177590: ADT/ODE: Setup Not Completed Successfully Installing Custom App"
permalink: /kb/177/Q177590/
---

## Q177590: ADT/ODE: Setup Not Completed Successfully Installing Custom App

	Article: Q177590
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0,97
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 19-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	- Microsoft Access Developer's Toolkit, version 7.0 
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SYMPTOMS
	========
	
	When you use the Microsoft Office 97 Developer Edition Tools (ODE) Setup wizard
	or the Microsoft Access 7.0 Developer's Toolkit (ADT) to create a custom Setup
	program, and you include a database file name on the screen that asks
	
	  Do you want to run an executable file after your custom Setup program is
	  completed?
	
	you may receive the following error message when you run your custom Setup
	program on any computer:
	
	  Setup was not completed successfully
	
	CAUSE
	=====
	
	This behavior may occur if the custom Setup program cannot find or open the
	executable file (Msaccess.exe) that was specified in the "Enter or edit the
	command line that is used to run the executable file:" text box.
	
	RESOLUTION
	==========
	
	You can resolve this behavior by using one of the following methods. Both of
	these methods are described in detail later in this article.
	
	- Modify the Setup wizard program to include the correct path to the executable
	  file.
	
	- Modify the SETUP.STF file to include the correct path to the executable
	  file.
	
	  NOTE: Modifications to an STF file should be made using a backup copy of the
	  file and following the procedures outlined in the following article in the
	  Microsoft Knowledge Base:
	
	  Q111248 OFF: Saving .STF File in Excel May Cause Setup Error Messages
	
	
	Modifying the Setup Wizard Program
	----------------------------------
	
	1. Start the Setup wizard program.
	
	2. Modify the "Enter or edit the command line that will be used to run the
	  executable file:" text box to include a valid path. For example, if you are
	  adding a line similar to the following to the command line
	
	  "$(Filepath)\msaccess.exe" /runtime FilePath)\Northwind.mdb"
	
	  you should change it to the following:
	
	  "\Program Files\Microsoft Office\Office\msaccess.exe" /runtime
	  "$(FilePath)\Northwind.mdb"
	
	3. Recreate your disk images.
	
	4. Rerun your custom setup program.
	
	Modifying the SETUP.STF File
	----------------------------
	
	NOTE: This procedure makes changes to the SETUP.STF file, which is not supported
	by Microsoft. Microsoft provides this information "as is" without warranty of
	any kind, either express or implied, including but not limited to the implied
	warranties of merchantability and/or fitness for a particular purpose.
	
	1. Make a backup copy of the SETUP.STF file located in your DISK1 folder (or the
	  network folder if you chose a Network Setup), and name the backup copy
	  SETUPSTF.BAK.
	
	2. Open the SETUP.STF file that the Setup wizard program creates using Microsoft
	  Excel.
	
	3. Modify the line that contains the custom command line. For example, if the
	  CustomAction for the command line reads as follows
	
	  "msacccah.dll","AsyncEXECalloutCAH","""%1325\msaccess.exe""
	  ""/runtime"" ""%1325\Northwind.mdb"""
	
	  you should change it to the following:
	
	   In Microsoft Access 97
	   ----------------------
	
	    "msacccah.dll","AsyncEXECalloutCAH","""\Program Files\Microsoft Office\msaccess.exe"" ""/runtime"" ""%1325\Northwind.mdb"""
	
	    Note that in the example, you are modifying the first reference to
	    "%1325" with "\Program Files\Microsoft Office".
	
	   In Microsoft Access 7.0
	   -----------------------
	
	    "msacccah.dll","SyncEXECalloutCAH","""\Program Files\Common Files\Microsoft Shared\Microsoft Access Runtime\msaccess.exe"" ""/runtime""""%1325\Northwind.mdb"""
	
	Note that in the example, you are modifying the first part of the command that reads as
	
	"%825" with "\Program Files\Common Files\Microsoft Shared\Microsoft Access Runtime".
	
	1. Close and save the SETUP.STF file.
	
	  NOTE: Make sure that you replace the existing SETUP.STF file by specifying the
	  correct folder for the newly saved file.
	
	2. Rerun your custom Setup program.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Microsoft Access Developer's Toolkit 7.0 Setup wizard or the Microsoft
	  Office 97 Developer Edition Tools Setup wizard, create a custom Setup program
	  that includes the sample database Northwind.mdb.
	
	2. On the screen that asks
	
	  Do you want to run an executable file after your custom Setup program is
	  completed?
	
	  enter the Northwind database as the file that you want to run after setup
	  completes.
	
	3. Type the following command line in the "Enter or edit command line that will
	  be used to run the executable file.":
	
	  "$(AppPath)MSACCESS.EXE" /runtime "$(FilePath)\Northwind.mdb"
	
	4. Click to select the "Allow Setup to Complete Before the File Finishes
	  Executing" check box.
	
	5. Create your disk images and install them on any computer. Note that you
	  receive the message mentioned in the "Symptoms" section.
	
	NOTE: This means you may need two copies of your run-time application: one copy
	for those computers that have the retail version of Microsoft Access, and one
	copy for those computers that do not have the retail version.
	
	REFERENCES
	==========
	
	For more information about customizing the SETUP.STF file, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q119357 OFF: "How to Create a Custom Installation Script" (WC1046)
	
	
	Additional query words: prb
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbOfficeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbOffice97Search kbAccess97Search kbAccess95Search kbOffice97 kbZNotKeyword3 kbAccess700 kbAccessDevTK700 kbOffice97DevSearch
	Version           : WINDOWS:7.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
