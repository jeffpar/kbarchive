---
layout: page
title: "Q133246: How to Install VFP300.ESL in a Distributed Application"
permalink: /kb/133/Q133246/
---

## Q133246: How to Install VFP300.ESL in a Distributed Application

	Article: Q133246
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the Setup Wizard installs the Visual FoxPro version 3.0 runtime
	library (VFP300.ESL) in the Windows System directory, instead of the directory
	where the rest of the application files are installed.
	
	For example, when you specify the following in the Setup Wizard:
	
	     Step 1: < your Distribution Tree directory >.
	     Step 2: Select the "Visual FoxPro 3.0 Runtime" and "Win32s" check boxes.
	     Step 3 - 6: Fill in the rest of the options.
	
	NOTE: In Step 6, you will not see VFP300.ESL listed in the grid. The grid in Step
	6 only lists the files that are located in < your Distribution Tree directory
	>.
	
	     Step 7: Click Finish.
	
	The Setup Wizard automatically copies the compressed version of VFP300.ESL from
	the \VFP\Distrib directory to your disk images directory. When you run SETUP.EXE
	from the disk images, it installs VFP300.ESL in the \Windows\System directory.
	
	NOTE: The advantage of keeping the VFP300.ESL in the \Windows\System directory is
	that you can have multiple Visual FoxPro applications sharing a single
	VFP300.ESL runtime library.
	
	MORE INFORMATION
	================
	
	To install the runtime library VFP300.ESL into the application directory instead
	of the \Windows\System subdirectory (which is consistent with FoxPro 2.x Setup
	Wizard behavior), do the following:
	
	1. Copy VFP300.ESL to your distribution tree directory.
	
	2. Run the Setup Wizard.
	
	3. Clear the selection in the Visual FoxPro 3.0 Runtime check box in Step 2 of
	  the Setup Wizard process.
	
	4. Ensure that VFP300.ESL is set to AppDir under the Target Directory column in
	  Step 6 of the Setup Wizard process.
	
	  NOTE: The VFP300.ESL should be listed in the grid of Step 6 of the Setup
	  Wizard process because the ESL file is now in your distribution tree
	  directory.
	
	5. Click the Finish button in Step 7 of the Setup Wizard process.
	
	6. Install the disk images.
	
	NOTE: Placing the VFP300.ESL in the application directory provides version 2.x
	compatibility for applications that have SYS(2004) references. For example:
	
	       SET LIBRARY TO SYS(2004)+"FOXTOOLS.FLL" ADDITIVE
	
	Here FOXTOOLS.FLL is a file in the application directory. This approach does have
	a disadvantage - each Visual FoxPro application must have its own copy of the
	runtime library.
	
	A better approach to resolving the issue of locating the application directory is
	to replace all SYS(2004) references with SYS(16). The SYS(16) function returns
	the application path and at the same time allows you to take advantage of having
	multiple Visual FoxPro applications sharing a single VFP300.ESL runtime library.
	
	Additional query words: VFoxWin ESL
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
