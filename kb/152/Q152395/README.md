---
layout: page
title: "Q152395: HOWTO: Using Setup Wizard to Distribute VFP App on CD-ROM"
permalink: kb/152/Q152395/
---

## Q152395: HOWTO: Using Setup Wizard to Distribute VFP App on CD-ROM

	Article: Q152395
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp600
	Last Modified: 31-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	WARNING: The information in this article has not been confirmed or tested
	by Microsoft. Some or all of the information in this article has been
	taken from unconfirmed customer reports. ANY USE BY YOU OF THE INFORMATION
	PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK. Microsoft provides this
	information "as is" without warranty of any kind, either expressed or
	implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	SUMMARY
	=======
	
	This article describes how a developer can distribute an application on the
	CD-ROM medium using the Visual FoxPro SETUP Wizard. The Visual FoxPro for
	Windows SETUP Wizard will create the master for this kind of distribution medium
	if the developer follows the general approach described below. This approach
	uses standard SETUP Wizard options, but requires one additional, manual step of
	making a single modification to the setup.inf file created by the Wizard.
	
	Unless this modification is made, end-users installing the application from the
	CD-ROM will be asked to enter the CD Key. There will be no CD Key and setup will
	not proceed.
	
	NOTE: In Visual FoxPro 6.0, you may choose the "Websetup" option to generate a
	Netsetup file without going through the following steps.
	
	MORE INFORMATION
	================
	
	To build a CD-ROM version of the application to be distributed, the developer
	needs to specify the build to be a network build. This will put the application
	into a single CAB file in a single directory. The disk image of that build will
	be in the location specified in response to the dialog provided by the SETUP
	Wizard.
	
	Within that directory there will be a file named Setup.inf. This is a text file
	that may be edited by any text editor that will edit a file with the extension
	of .txt. Examples of Microsoft editors include Window's Notepad, the Visual
	FoxPro program editor, or the MS-DOS "Edit" editor.
	
	Toward the beginning of the .inf file, there will be a line saying:
	
	     Source Media Description
	
	Following that will be a line similar to the following:
	
	     "1","Disk 1","ACMSET16.EX_",""
	
	The character string "ACMSET16.EX_" may be replaced with a similar string that is
	not of any consequence to the purposes of building a CD-ROM distributable.
	
	The change to the line above is to insert a period between the last two quotation
	marks, as follows:
	
	  
	
	  "1","Disk 1","ACMSET16.EX_","."
	
	NOTE: To write to a CD in accordance with the ISO 9660 standard, which does not
	allow for file names to contain the "$" character, use the following
	workaround:
	
	1. Run the Setup Wizard. You may choose to run the resulting netsetup to test
	  the install.
	
	2. Edit the Setup.inf file located in netsetup subdirectory and Replace all of
	  the "$" characters with "_" (underscore) characters.
	
	3. Change the file names in netsetup subdirectory from "$" character to "_"
	  underscore character.
	
	4. Write the files to CD-ROM.
	
	Step-by-Step Example
	--------------------
	
	The behavior described above may be tested by the following steps:
	
	1. Construct a simple project containing a single .prg file.
	
	2. Build an executable from the project.
	
	3. Using the SETUP Wizard, build a network distributable and save into a folder
	  named "Disks."
	
	4. In the Disk folder, locate the Setup.inf file.
	
	5. Bring the .inf file into an editor and look at the Source Media Description
	  definition, but do not change it. Save the .inf file and close the editor.
	
	6. Run setup of the application by double-clicking the Setup.exe in the Disks
	  folder. The setup program will progress to the point of asking for the CD
	  Key. At this point, you will need to abort the setup process.
	
	7. Open the .inf file in the editor and insert the period.
	
	8. Run setup again. This time setup should progress normally.
	
	The contents of the Disks folder are ready to be burned into CD-ROMs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbhowto
	
	=============================================================================
	
