---
layout: page
title: "Q196236: FIX Error Generating Cab Files Error Code 3"
permalink: kb/196/Q196236/
---

## Q196236: FIX Error Generating Cab Files Error Code 3

	Article: Q196236
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbwizard kbAppSetup kbvfp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Project Manager is open or if the source directory and the disk images
	directory are pointed to the same location, the following error message appears
	when the Setup Wizard is generating the cab files for distribution:
	
	  Error generating cab files: Error code 3
	
	RESOLUTION
	==========
	
	Try one of the following to resolve this problem:
	
	- Close down the Project Manager before you run the Setup Wizard.
	
	- Do not point the disk images directory (step 3 of the Setup Wizard) to the
	  same folder that you chose in step 1 of Setup Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Method 1:
	
	1. Create a directory in your local hard drive, such as, C:\Test.
	
	2. Create a .prg file and put the following program in the .prg file:
	
	  LOCAL ln_OpenMainPrg, la_Version[1]
	
	        *- Create a "Main.prg" programmatically.
	        IF FILE("Main.prg")
	           ln_OpenMainPrg = FOPEN("Main.prg", 12)
	        ELSE
	           ln_OpenMainPrg = FCREATE("Main.prg")
	        ENDIF
	
	        IF ln_OpenMainPrg < 0  && Check for error
	           WAIT WINDOW NOWAIT "Cannot open or create output file"
	        ELSE  && If no error, write to file
	           =FWRITE(ln_OpenMainPrg, "? 'Hello, World!'")
	        ENDIF
	        =FCLOSE(ln_OpenMainPrg)  && Close file
	
	        *- Create project and build the .exe programmatically.
	        CREATE PROJECT Test NOWAIT NOSHOW
	        MODIFY PROJECT Test NOWAIT
	        Application.ActiveProject.Files.Add("Main.prg")
	        BUILD EXE Test FROM Test
	
	3. Save and run the .prg file.
	
	4. While the Project Manager is still open, start the Setup Wizard.
	
	5. Go through all the steps, and click Finish.
	
	  RESULT: About three-quarters of the way through the building process, the
	  "Error generating CAB file(s), Error code: 3" error message appears.
	
	Method 2:
	
	1. Run the Setup Wizard and have the disk images directory (chosen in step 3)
	  point to the folder that you chose in step 1, Locate Files.
	
	2. After the Setup Wizard finishes, start the Setup Wizard a second time,
	  complete all the steps and click Finish.
	
	  RESULT: The error occurs sometime during the compression process.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbwizard kbAppSetup kbvfp600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
