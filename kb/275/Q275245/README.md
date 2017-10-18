---
layout: page
title: "Q275245: BUG: Floppy Disks Created by PDW Repeats Prompt to Insert Disks"
permalink: kb/275/Q275245/
---

## Q275245: BUG: Floppy Disks Created by PDW Repeats Prompt to Insert Disks

	Article: Q275245
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP4
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbDeployment kbVBp kbVBp600 kbGrpDSVB kbDSupport kbVS600sp4bug
	Last Modified: 04-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Studio 6.0 SP4, used with:
	   - Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	   - Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	   - Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Package and Deployment Wizard (PDW) is used to create a distribution
	using floppy disks, the installation repeatedly prompts you to insert a disk.
	
	For example, if the setup program has three disks, it prompts to insert disk1,
	disk2, and disk3, and then asks for disk1, disk2 and disk3 again. Then the setup
	program may then proceed normally, where the second read of each disk is very
	brief, or it may repeat the requests continually and never complete.
	
	RESOLUTION
	==========
	
	This problem only occurs with version 6.00.8804 of setup.exe that shipped with
	Microsoft Visual Studio Service Pack 4. Replace this file with version 6.0.84.50
	of setup.exe that shipped with Visual Studio Service Pack 3.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Compile the project and save it to disk.
	
	3. Run the PDW, select your project, and then click the Package button. Accept
	  the defaults on the following screens, but specify Multiple cabs (1.44 MB) on
	  the Cab Options screen.
	
	4. When the Package step is complete, select the Deploy button to install the
	  files on floppy disks.
	
	5. Run the install on a target computer. Note that you are prompted for the
	  disks a second time.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbDeployment kbVBp kbVBp600 kbGrpDSVB kbDSupport kbVS600sp4bug 
	Technology        : kbVSsearch kbAudDeveloper
	Version           : :6.0,6.0 SP4
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
