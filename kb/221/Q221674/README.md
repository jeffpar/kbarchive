---
layout: page
title: "Q221674: FIX: Import Wizard Fails With Excel 97 With Chinese Char"
permalink: /kb/221/Q221674/
---

## Q221674: FIX: Import Wizard Fails With Excel 97 With Chinese Char

	Article: Q221674
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbwizard kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Certain Chinese characters saved in the Excel 97 worksheet may cause the
	following error when imported into a Visual FoxPro 6.0 table using either the
	Import Wizard or the Import command:
	
	  Fatal Error: Exception Code:C0000005
	
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
	
	Only certain Chinese characters saved in the Excel worksheet will cause this
	problem.
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Excel worksheet and randomly type in a large number of Chinese
	  characters.
	
	2. Launch Visual FoxPro 6.0, and type in the following command in Command
	  window:
	
	  IMPORT FROM <worksheet name> TYPE XL8
	
	If the offensive characters are in the Excel worksheet, Visual FoxPro 6.0 will
	generate a C0000005 Fatal Error and terminate.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbwizard kbvfp600 kbvfp600bug kbXBase kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
