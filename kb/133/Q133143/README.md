---
layout: page
title: "Q133143: PRB: VFP300.ESL Goes in System Directory, Not App's Directory"
permalink: kb/133/Q133143/
---

## Q133143: PRB: VFP300.ESL Goes in System Directory, Not App's Directory

	Article: Q133143
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	By design, the Setup Wizard places the Visual FoxPro version 3.0 runtime library
	(VFP300.ESL) into the \Windows\System subdirectory instead of the directory
	where the rest of the application files are installed.
	
	NOTE: The advantage of keeping the VFP300.ESL in the \Windows\System subdirectory
	is that you can have multiple Visual FoxPro applications share a single
	VFP300.ESL runtime library.
	
	RESOLUTION
	==========
	
	To install the runtime library (VFP300.ESL) into the application directory
	instead of the \Windows\System subdirectory, as the FoxPro version 2.x Setup
	Wizard does, follow these steps:
	
	1. Copy VFP300.ESL to your distribution tree directory.
	
	2. Run the Setup Wizard.
	
	3. In step 2 of the Setup Wizard procedure, select the Visual FoxPro 3.0 Runtime
	  check box.
	
	4. In step 6 of the Setup Wizard procedure, ensure that VFP300.ESL is set to
	  AppDir under the Target Directory column.
	
	  NOTE: The VFP300.ESL file should be listed in the grid of Step 6 because the
	  .ESL file is now in your distribution tree directory.
	
	5. In step 7 of the Setup Wizard procedure, click the Finish button.
	
	6. Install the disk images.
	
	Placing the VFP300.ESL file in the application directory provides compatibility
	for FoxPro version 2.x applications that have SYS(2004) references. For example,
	consider this command:
	
	     SET LIBRARY TO SYS(2004)+"FOXTOOLS.FLL" ADDITIVE
	
	Here FOXTOOLS.FLL is a file in the application directory.
	
	This approach does have a disadvantage. Each Visual FoxPro application must have
	its own copy of the runtime library. A better approach is to replace all
	SYS(2004) references with SYS(16). The SYS(16) function returns the application
	path and at the same time allows you to take advantage of having multiple Visual
	FoxPro applications sharing a single VFP300.ESL runtime library.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Specify the following in the Setup Wizard:
	
	  Step 1: < your Distribution Tree directory >.
	  Step 2: Select the Visual FoxPro 3.0 Runtime and Win32s check boxes.
	  Steps 3 - 6: Complete as appropriate
	
	  NOTE: In Step 6, you won't see VFP300.ESL listed in the grid. The grid in Step
	  6 lists only those files located in < your Distribution Tree directory
	  >.
	
	  Step 7: Click Finish.
	
	  The Setup Wizard automatically copies the compressed version of the VFP300.ESL
	  file from the \VFP\DISTRIB directory to your disk images directory.
	
	2. Run SETUP.EXE from the disk images. It installs VFP300.ESL in the
	  \Windows\System subdirectory.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
