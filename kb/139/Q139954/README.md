---
layout: page
title: "Q139954: PRB: Unable to Run Setup Wizard From Shared Network Install"
permalink: /kb/139/Q139954/
---

## Q139954: PRB: Unable to Run Setup Wizard From Shared Network Install

	Article: Q139954
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the Setup Wizard from a shared network installation of Visual FoxPro
	results in the Setup Wizard failing and returning this error:
	
	  One or more of the source distribution files defined in <drive\ path>
	  cannot be located (BROWSE FOR !FOUND to see which files are missing). Run the
	  Visual FoxPro Professional Setup to install the files, then run the Setup
	  Wizard again.
	
	NOTE: The Browse for !Found command is executed on the compress.dbf table.
	
	CAUSE
	=====
	
	Visual FoxPro was installed as a shared network installation and by design, the
	default feature set of a workstation installation does not install the
	distribution kit.
	
	RESOLUTION
	==========
	
	Rerun the Visual FoxPro Setup program. Choose the Add/Remove option, select the
	Professional Features check box, and select Application Distribution.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For the majority of installations, the default feature set installed by the
	Visual FoxPro workstation installation will suffice. However if other native
	Visual FoxPro functionality is required, you must rerun the Setup program to add
	the missing components.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	
