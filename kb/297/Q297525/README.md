---
layout: page
title: "Q297525: BUG: No ARM Option for eVB J to Create Pocket PC Setup Package"
permalink: /kb/297/Q297525/
---

## Q297525: BUG: No ARM Option for eVB J to Create Pocket PC Setup Package

	Article: Q297525
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 10-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users of the Japanese version of eMbedded Visual Basic (eVB) 3.0 cannot create
	setup packages for Pocket PC by using an Arm-type CPU (for example, a Compaq
	iPAQ). Even though the ARM runtime components exist in the Microsoft Windows
	Platform SDK for Pocket PC, Arm is not available as an option in the CPU list of
	the Application Install Wizard.
	
	CAUSE
	=====
	
	The Application Install Wizard picks up the CPU list from the file VBCE.ini. The
	Pocket PC SDK Setup program failed to add the following lines to VBCE.ini (which
	is located in the default Windows folder):
	
	  Under the section
	
	  [{6D5C6210-E14B-11D2-B72A-0000F8026CEE}]
	
	  These lines are missing:
	
	  Arm 720T (4K) v3.00=5,4,3,0,4096,1824
	  Arm 1100 (4K) v3.00=5,4,3,0,4096,2577
	
	RESOLUTION
	==========
	
	To resolve this problem, edit VBCE.ini (which is found in the Windows folder)
	with a text editor such as Microsoft Notepad. Under the section
	
	  [{6D5C6210-E14B-11D2-B72A-0000F8026CEE}]
	
	add the following lines:
	
	  Arm 720T (4K) v3.00=5,4,3,0,4096,1824
	  Arm 1100 (4K) v3.00=5,4,3,0,4096,2577
	
	After you make this change, the Application Install Wizard will list Arm as an
	available option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install the Japanese versions of eVB 3.0 and the Pocket PC SDK on a computer
	  that is running Japanese Windows 2000.
	
	2. Use eMbedded Visual Basic to write a "Hello world" application.
	
	3. Save the project.
	
	4. Make the eVB file.
	
	5. Start the Application Install Wizard. To do so, from the Tools menu, point to
	  Remote Tools, and then click Application Install Wizard.
	
	6. Step through the Wizard. Note that at the fifth step, only "MIPS 4000" and
	  "SH 3" are listed as the options. "Arm" is not.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	
	=============================================================================
	
