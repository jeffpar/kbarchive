---
layout: page
title: "Q141913: PRB: Error 1915 - Collating Sequence &quot;&lt;Name&gt;&quot; is not found"
permalink: /kb/141/Q141913/
---

## Q141913: PRB: Error 1915 - Collating Sequence &quot;&lt;Name&gt;&quot; is not found

	Article: Q141913
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6,3.0b; WINDOWS:2.6,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft FoxPro for Windows, version 2.6 
	- Microsoft FoxPro for Macintosh, version 2.6 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to run an executable created with FoxPro 2.x or Visual FoxPro 3.0,
	which reads a table or .dbf file with an index, results in this error:
	
	  Error 1915 - Collating Sequence "<name>" is not found.
	
	In an .exe file created FoxPro for the Mac 2.x and Visual FoxPro 3.0 for the
	Macintosh, the following command can trigger the same error.
	
	     SET COLLATE TO "General"
	
	CAUSE
	=====
	
	The executable is not reading the Foxpro.int file at startup, and the
	application is attempting to use a table or .dbf file that has an index with a
	collating sequence and code page combination that is not internally supported.
	
	RESOLUTION
	==========
	
	Place the Foxpro.int file in the same directory as the .esl file; otherwise,
	error 1915 is generated each time a FoxPro executable uses a table or .dbf file
	that contains an index with a Collating Sequence and Code Page combination that
	is not internally supported.
	
	Perform one of the following options to get the Foxpro.int file into the
	directory with the .esl file.
	
	Option One (recommended)
	------------------------
	
	1. Include the Foxpro.int file in the application's distribution directory.
	
	2. When using FoxPro 2.x, make sure that the Foxpro.int file gets placed in the
	  directory where the .esl file is located. When using Visual FoxPro's Setup
	  Wizard to generate distribution disks (during "Step 6 - File Summary"),
	  change the TARGET DIR property for the Foxpro.int file from AppDir to
	  WinSysDir.
	
	Option Two
	----------
	
	1. Include the Foxpro.int file in the application distribution directory.
	
	2. Create a batch file to copy the Foxpro.int file from the application
	  directory to the .esl file's directory, and include the batch file in the
	  application distribution directory.
	
	3. In the Setup Wizard, Step 4 - Setup Options, change the POST-SETUP EXECUTABLE
	  entry to the name of the batch file.
	
	Option Three
	------------
	
	Manually copy the Foxpro.int file to the directory where the .esl file is.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps create a table or .dbf file that has an index with a
	collating sequence and code page combination that is not internally supported in
	FoxPro.
	
	NOTE: The following steps are performed within Microsoft Visual FoxPro for
	Windows, version 3.0, Professional Edition and the Foxpro.int file must not be
	in the Windows\System directory.
	
	1. Modify the Visual FoxPro for Windows Config.fpw file to include the following
	  line:
	
	        CODEPAGE=AUTO
	
	2. Start Visual FoxPro for Windows. If Visual FoxPro for Windows was already
	  running when the change to the Config.fpw file in step 1 was made, you will
	  need to restart Visual FoxPro for the change to take affect.
	
	3. To set collate to general, type the following command in the Command window:
	
	        SET COLLATE TO "GENERAL"
	
	4. Create a new table or .dbf file, and name it Cp850.dbf.
	
	5. Add two fields named LASTNAME and FIRSTNAME as Character type. Close the
	  Table Designer, and save the changes.
	
	6. To create an index and close the open table, type the following commands in
	  the Command window:
	
	        INDEX ON LASTNAME TAG LASTNAME
	        USE
	
	7. To set the code page, type the following command in the Command window:
	
	  DO \VFP\TOOLS\CPZERO\CPZERO with "CP850.DBF", 850
	
	8. Create an Executable to browse the CP850 table.
	
	9. Run the Executable outside of Visual FoxPro. The following error (Error 1915)
	  occurs when the Table is opened:
	
	  Collating Sequence "General" is not found.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbVFP300bMac kbVFP300 kbVFP300b
	Version           : MACINTOSH:2.6,3.0b; WINDOWS:2.6,3.0,3.0b
	Issue type        : kbprb
	
	=============================================================================
	
