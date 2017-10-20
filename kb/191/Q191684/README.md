---
layout: page
title: "Q191684: PRB: Setup Wizard Leaves 200KB of Disk Space on 1.44 Floppies"
permalink: /kb/191/Q191684/
---

## Q191684: PRB: Setup Wizard Leaves 200KB of Disk Space on 1.44 Floppies

{% raw %}

	Article: Q191684
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Visual FoxPro 6.0 Setup Wizard to generate 1.44MB floppy disk images,
	approximately 200KB of disk space is unused on each disk that contains a .cab
	file.
	
	CAUSE
	=====
	
	The algorithms that calculate the .cab file size intentionally leave extra space
	since the compression scheme is not exact.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start the Setup Wizard.
	
	2. Point to your \VFP98\Wizards directory in Step 1 and click Next twice.
	
	3. Choose a disk images directory, and ensure that the 1.44 MB 3.5-inch option
	  is selected.
	
	4. Click Next.
	
	5. Enter the caption and copyright information and click Finish twice.
	
	6. Copy the information from the folder on the hard drive to a floppy disk.
	
	Note that each of the disks containing a .cab file have approximately 200KB of
	available disk space.
	
	Additional query words: kbAppSetup kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
