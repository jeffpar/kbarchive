---
layout: page
title: "Q221638: FIX: Setup Does Not Install Label Wizard Requests Definitions"
permalink: kb/221/Q221638/
---

## Q221638: FIX: Setup Does Not Install Label Wizard Requests Definitions

	Article: Q221638
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbwizard kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3 kbVS600sp3fix kbGrp
	Last Modified: 20-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setup does not install the default label definitions when you install Visual
	FoxPro. As a result, when you run the Label Wizard for the first time on a
	computer (the Label Wizard has never been run), the following message appears:
	
	  Some or all of your default label definitions are missing from the Registry.
	  The Label Wizard will reinstall these for you.
	
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
	
	1. Run Label Wizard on a computer where it has not been run before. To do this,
	  from the Wizards submenu on the Tools menu, click Label.
	
	2. In step 1 of the Label Wizard, select a table to create the label.
	
	RESULT: The following error message appears:
	
	  Some or all of your default label definitions are missing from the Registry.
	  The Label Wizard will reinstall these for you.
	
	In Visual FoxPro 6.0 Service Pack 3, the following message appears:
	
	  The Label Wizard needs to install default label definitions. This operation
	  is only performed the first time you run the wizard.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbwizard kbvfp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3 kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
