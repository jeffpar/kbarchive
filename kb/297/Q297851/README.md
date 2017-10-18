---
layout: page
title: "Q297851: FIX: Syntax Error in Startup Program Causes Fatal Exception"
permalink: kb/297/Q297851/
---

## Q297851: FIX: Syntax Error in Startup Program Causes Fatal Exception

	Article: Q297851
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix
	Last Modified: 17-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When there is a syntax error in a program run at startup from the Config.fpw
	file, Visual FoxPro may close without warning.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create the following program and save it as "c:\temp\vfpStart.prg":
	
	  DEFINE BAR 50 OF _MTOOLS PROMPT 'test'
	  ON SELECTION BAR 50 OF _MTOOLS x =   && Intentional error
	
	2. Compile the program:
	
	  COMPILE c:\temp\vfpStart.prg
	
	3. Create the following config file and save it as "c:\temp\config.fpw":
	
	  COMMAND=DO c:\temp\vfpStart.prg
	
	4. Run the following code in the Command window:
	
	  lcCmd = '"' + HOME() + 'vfp6.exe' + '" -cc:\temp\config.fpw'
	  RUN /N &lcCmd.
	
	Visual FoxPro opens and then closes immediately.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
