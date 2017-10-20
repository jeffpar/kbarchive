---
layout: page
title: "Q142973: PRB: Distribution Setup Fails After Visual FoxPro 3.0b Install"
permalink: /kb/142/Q142973/
---

## Q142973: PRB: Distribution Setup Fails After Visual FoxPro 3.0b Install

{% raw %}

	Article: Q142973
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Setup Wizard to create a set of distribution disks for your
	application, you may receive the following error:
	
	  Setup Parse Error in Initialization Pass
	  Object Id 37: CopyFile-Like Object: Bad INF Key data value
	
	This error repeats for Object Ids: 39, 40, 52, and 55 and the setup program then
	fails.
	
	CAUSE
	=====
	
	The \Vfp\Distrib directory contains files from an older version of Visual
	FoxPro.
	
	RESOLUTION
	==========
	
	When you install a newer version of Visual FoxPro over an existing version of
	Visual FoxPro, delete the files in the \Distrib directory. As soon as you run
	the Setup Wizard again, the files that Visual FoxPro needs in the \Distrib
	directory are copied into the directory.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This situation occurs when the following circumstances are met:
	
	- A newer version of Visual FoxPro for Windows is installed over an existing
	  installation of an older version of Visual FoxPro for Windows.
	
	- The Setup Wizard was used to create distribution disks while the older
	  version of Visual FoxPro was installed.
	
	- The older version of Visual FoxPro was not removed or the \Distrib directory
	  under Visual FoxPro was not deleted prior to installing the newer version of
	  Visual FoxPro.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Build an .exe in Visual FoxPro for Windows, version 3.0.
	
	2. Run the Setup Wizard, and create a set of distribution disks of the .exe
	  file.
	
	3. Install Visual FoxPro version 3.0b over version 3.0 without deleting the
	  Visual FoxPro directory or removing Visual FoxPro through the Setup program.
	
	4. Rebuild your .exe in Visual FoxPro version 3.0b.
	
	5. Run the Setup Wizard again, and build a new set of distribution disks off the
	  .exe file.
	
	6. Using the distribution disks, run Setup.exe. Setup fails, and the error
	  appears.
	
	NOTE: The Wzsetup.ini file is created when the Setup Wizard is run and retains
	the user's preferences for future uses of the Setup Wizard. Two copies are
	created while running the Setup Wizard -- one in Visual FoxPro's main directory
	and another in the intended distributed application directory. If you intend to
	install a newer version of Visual FoxPro over an older version without first
	removing the existing installation, consider deleting the two copies of
	Wzsetup.ini as new ones are created the first time you run the Setup Wizard
	again. This will ensure that you have a copy of Wzsetup.ini that refers only to
	the new version of the Setup Wizard.
	
	Additional query words: 3.00 VFoxWin parse
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : WINDOWS:3.0b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
