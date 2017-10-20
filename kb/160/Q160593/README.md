---
layout: page
title: "Q160593: PRB: Setup from Setup Wizard May Install OCX in Wrong Folder"
permalink: /kb/160/Q160593/
---

## Q160593: PRB: Setup from Setup Wizard May Install OCX in Wrong Folder

{% raw %}

	Article: Q160593
	Product(s): Microsoft FoxPro
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): kbsetup kbvfp500 kbvfp600
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Setup program created by the Setup Wizard you may receive the
	following error message:
	
	  <control.ocx> was unable to Register itself in the System Registry
	
	CAUSE
	=====
	
	The .ocx files that the application needs were placed in a subdirectory of the
	distribution directory.
	
	WORKAROUND
	==========
	
	Make sure all .ocx files that your application needs are placed in the root
	distribution directory.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For more information on distributing applications and the Setup Wizard please
	see chapters 25 and 26 in the Developer's Guide.
	
	The following Steps to Reproduce Behavior assume that you have already created an
	application that uses .ocx controls.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create the following Directory structure:
	
	   MyApp
	    |
	    |--Controls
	
	2. Place your .exe in the MyApp folder.
	
	3. Place the .ocxs your application uses in the Controls folder.
	
	4. Run the Setup Wizard.
	
	5. Use the MyApp folder for the Distribution Tree Directory in Step 1 of the
	  Setup Wizard.
	
	6. On Step 6 make sure the .ocxs show WinSysDir as the TargetDir and that the
	  OLE check box is selected.
	
	7. When the Setup Wizard finishes installing the application on a machine that
	  does not have Visual FoxPro or your .ocxs installed on it.
	
	The Setup program installs all the files and just before it finishes trying to
	update the system files you get the following error message:
	
	  <control.ocx> was unable to Register itself in the System Registry
	
	If you look at the Windows\System folder you will see a folder under it named
	Controls. Inside the Controls folder is the .ocx files. Setup is looking for the
	.ocx files in the System folder, and when it does not find them there, it can't
	register them.
	
	Additional query words: vfoxwin ocx activeX kbdsd
	
	======================================================================
	Keywords          : kbsetup kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : 5.00
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
