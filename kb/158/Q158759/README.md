---
layout: page
title: "Q158759: FIX: Setup Wizard Gives Setup Error 799 Objec"
permalink: kb/158/Q158759/
---

## Q158759: FIX: Setup Wizard Gives Setup Error 799 Objec

	Article: Q158759
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
	
	The following error occurs when you run Setup from disks created by using the
	Setup Wizard:
	
	  Setup Error 799 Object <some number> Your Setup files may be damaged.
	  Try restarting the Setup program.
	
	CAUSE
	=====
	
	This message appears when you choose "Directory Only" in step 5 of the Setup
	Wizard.
	
	WORKAROUND
	==========
	
	Select "Directory and Program Group" in step 5 of the Setup Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in Visual FoxPro
	5.0a for Windows. The problem is also corrected in an updated Setup Wizard
	available for download from the Microsoft Software Library.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q162004 PATCH: Setwiz5.exe the Updated VFP 5.0 for Windows Setup Wizard
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the Setup Wizard. In step 5 of the Setup Wizard, click "Directory Only."
	
	2. Run Setup from the disks you just created. When the program begins copying
	  the files, the error occurs.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
