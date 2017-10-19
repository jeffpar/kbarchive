---
layout: page
title: "Q159468: FIX: Setup Error 915 Object 1 with VFP 5.0 Setup Wizard"
permalink: /kb/159/Q159468/
---

## Q159468: FIX: Setup Error 915 Object 1 with VFP 5.0 Setup Wizard

	Article: Q159468
	Product(s): Microsoft FoxPro
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs running Setup from disks created with the Setup
	Wizard:
	
	  Setup Error 915
	  Object 1
	  Your Setup files may be damaged. Try restarting the Setup program.
	
	CAUSE
	=====
	
	This message results from a Wzsetup.ini file created by the Setup Wizard in
	Visual FoxPro 3.x where the drive letter on the default destination directory
	(in step 5 of the new Setup Wizard) was not removed or a UNC path is used.
	
	WORKAROUND
	==========
	
	Perform one or both of the following steps:
	
	1. Remove all copies of Wzsetup.ini on your hard drive. (The default locations
	  are in your Application folder and in the Visual FoxPro folder.)
	
	2. Tab through the text box specifying the Default Destination folder in step 5
	  of the Setup Wizard. By tabbing through the field, the Setup Wizard
	  automatically removes the drive letter.
	
	NOTE: It is a good idea to perform the first step (above) in all cases because of
	other problems that may occur using an old version of the Wzsetup.ini files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a. There is also an update to the Setup Wizard available in the Microsoft
	Software Library.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q162004 PATCH: Setwiz5.exe the Updated VFP 5.0 for Windows Setup Wizard
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the Setup Wizard.
	
	2. Open the Wzsetup.ini file in the Application folder with NotePad. Change the
	  path in the line "UserDefaultDirectory" to include a drive letter, for
	  example, "C:\Source."
	
	3. Run the Setup Wizard again and accept all the default.
	
	4. Run Setup from the disk images created. The error described occurs at the
	  point when you receive the message "Searching for installed components."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
