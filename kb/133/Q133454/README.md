---
layout: page
title: "Q133454: PRB: Setup Error: Setup Parse Error in Initialize Pass"
permalink: /kb/133/Q133454/
---

## Q133454: PRB: Setup Error: Setup Parse Error in Initialize Pass

{% raw %}

	Article: Q133454
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting up an EXE from distribution disks created by the Setup Wizard generates
	this error:
	
	  Setup Parse Error in Initialize pass Object ID2: AppSearch Object: Bad
	  default path field
	
	When you can click the OK button, the setup application fails.
	
	CAUSE
	=====
	
	In Step 5 of the Setup Wizard, the developer has the option of setting a
	destination directory for the application being distributed. This directory is
	where setup program places the executable when a user installs the application.
	The error is caused by the fact that the directory name specified by the
	developer contains spaces or does not conform to directory name rules for a
	particular operating system. This typically occurs when an application developed
	on Windows 95 is being set up under Windows 3.1.
	
	RESOLUTION
	==========
	
	The destination directory must be a valid directory for the platform. When
	running the Setup Wizard for Visual FoxPro be sure the destination directory
	name, in step 5, conforms to the 8.3 file/directory name format for backward
	compatibility with previous versions of the Windows operating system.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	It is assumed that the developer is running Visual FoxPro on the Windows 95
	operating system.
	
	1. Open an existing project, and build an executable file.
	
	2. Close the Project.
	
	3. On the Tools menu, click Wizards and then Setup.
	
	4. Follow the steps in the Setup Wizard to locate the desired executable.
	
	5. In Step 5 of the Setup Wizard, use the name "My Application" (without the
	  quotation marks) as the Destination Directory.
	
	6. Complete the remaining Setup Wizard steps, and build distribution disks for
	  your .EXE.
	
	7. Take the disks created by the Setup Wizard and attempt to install the
	  application on a computer running Windows version 3.1 or Windows for
	  Workgroups version 3.1 or 3.11.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
