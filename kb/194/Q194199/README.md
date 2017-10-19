---
layout: page
title: "Q194199: FIX: Not All Setup Wizard Options Are Saved in Wzsetup.ini"
permalink: /kb/194/Q194199/
---

## Q194199: FIX: Not All Setup Wizard Options Are Saved in Wzsetup.ini

	Article: Q194199
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbvfp600 kbVS600sp3fix
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual FoxPro Setup Wizard saves all user options in a file named
	Wzsetup.ini. The Setup Wizard uses this file to initialize itself on subsequent
	runs. However, the options for "Create a Web executable" and "Create a DEP file"
	are not saved in the Wzsetup.ini file.
	
	RESOLUTION
	==========
	
	Because these two options are not persisted, you must select them each time you
	run the Setup Wizard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in the updated version of the Setup Wizard Vfp6swiz.exe
	dated 10/08/1998. This bug was corrected in Visual Studio 6.0 Service Pack 3.
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the Setup Wizard.
	
	2. Select a directory in step 1 and click Next.
	
	3. In step 2, select nothing and click Next.
	
	4. In step 3, select a directory, select the "Websetup (compressed)" check box,
	  and then click Next.
	
	5. In step 4, enter a caption and copyright information and then click Finish.
	
	6. In step 7, select the "Create a Web executable" and "Create a DEP file" check
	  boxes, then click Finish.
	
	7. Rerun the Setup Wizard, and click Finish. Note that the "Create a Web
	  executable" and "Create a DEP file" check boxes are not selected in step 7.
	
	REFERENCES
	==========
	
	For more information on the updated Setup Wizard, please see the following URL:
	
	http://msdn.microsoft.com/vfoxpro/downloads/updates.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbvfp600 kbVS600sp3fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
