---
layout: page
title: "Q191095: BUG: Error When Attempting to Update Included Files in PDW"
permalink: kb/191/Q191095/
---

## Q191095: BUG: Error When Attempting to Update Included Files in PDW

	Article: Q191095
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbwizard kbAppSetup kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to update the included files in the Package and Deployment Wizard
	(PDW) with a newer version of a file (located in a different folder than the
	original), you receive the following error message:
	
	  A file with this name has already been added to the list of files
	
	The error occurs even if you clear the check box next to the file to be updated
	before adding the new version of the file.
	
	RESOLUTION
	==========
	
	To work around the problem, use one of the following five methods.
	
	Method 1: Modify the Project (.vbp) File
	----------------------------------------
	
	If the file you are attempting to replace in the Included Files screen of the PDW
	is the project's .exe file, the .vbp file is pointing to the wrong .exe file.
	This can occur when you make the .exe, saving it to a different location, but do
	not save the changes to the .vbp afterward.
	
	To update the .vbp file to point to the correct .exe, then follow these steps:
	
	1. Open the project in Visual Basic.
	
	2. Make the .exe in the new location again.
	
	3. Save the project.
	
	These steps update the setting of Path32 in the .vbp file. When you rerun the
	PDW, it will include the correct .exe file, even if you use an existing script.
	
	Method 2: Copy New File Over Original File
	------------------------------------------
	
	Copy the new version of the file to the location of the original version, and
	then rerun the PDW.
	
	NOTE: Back up the original file to another location first if you want to keep
	it.
	
	Method 3: Copy New File to Redist Folder
	----------------------------------------
	
	Copy the new version of the file to the VB98\Wizards\PDWizard\Redist folder, and
	then run the PDW again. By default, the PDW always looks for the files in the
	Redist folder first.
	
	Method 4: Copy New File to Support Folder and Rebuild CAB
	---------------------------------------------------------
	
	If you have previously created a Setup package for this project, you can copy the
	new version of the file to the package's Support folder and then run the .bat
	file in the same folder to re-create the Setup package.
	
	NOTES:
	
	- If the version number, date, or size of the new file is different from the
	  original, you should also modify the entries for that file in Setup.lst. For
	  additional information, please see the following articles in the Microsoft
	  Knowledge Base:
	
	
	  Q190077 : HOWTO: Set Number of .CAB's in Setup.lst After Repackaging
	
	- This method is quick, but does not affect any of your future PDW sessions.
	
	Method 5: Modify the Script (.pdm) File
	---------------------------------------
	
	You can manually modify the script (.pdm) file in a text editor, such as NotePad.
	The .pdm file contains all the scripts for a single project, and it is a
	recording of all the options you selected when packaging or deploying an
	application using the PDW.
	
	To modify the path to a folder in a script, open the project's .pdm file in a
	text editor, and modify the path in all references to the file. After saving the
	changes to the file, rerun the PDW.
	
	NOTE:
	
	- This method does not work for updating the path to the project's .exe file.
	  The PDW picks up the path from the Path32 setting of the .vbp file instead.
	
	- Make a backup copy of the .pdm file before modifying.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Place a command button on Form1.
	
	3. Save the project.
	
	4. Compile the project by selecting Make Project1.exe on the File menu.
	
	5. Run the PDW, and select the project you just created.
	
	6. Click Package, and follow the instructions in the wizard to create the setup
	  package.
	
	7. Reopen Project1.vbp in Visual Basic, recompile the project, and save the
	  executable in another location (for example, C:\Temp).
	
	8. Run the PDW, and select Project1 again. Click Package, and follow the
	  instructions in the wizard until you get to the "Included Files" screen.
	
	9. Clear the check box for the original Project1.exe, and then click Add. In the
	  Add File dialog box, select the new Project1.exe found in C:\Temp and click
	  Open.
	
	The following error message appears:
	
	  A file with this name has already been added to the list of files You cannot
	  add the new version of Project1.exe into the setup package.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbwizard kbAppSetup kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
