---
layout: page
title: "Q141634: BUG: Setup Parse Error &quot;Object ID 335&quot; from Distributed Setup"
permalink: /kb/141/Q141634/
---

## Q141634: BUG: Setup Parse Error &quot;Object ID 335&quot; from Distributed Setup

	Article: Q141634
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0b
	Operating System(s): 
	Keyword(s): kbMDAC250kbbuglist
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you run setup on a computer that has Microsoft Windows version 3.x (16-bit
	Windows) installed from image disks created using the Microsoft Visual FoxPro
	Setup Wizard, the following error appears:
	
	  Setup Parse Error in Initialize pass
	  Object ID 335: CopyFile-like Object: Bad INF Section Data Value.
	
	This is immediately followed by Object ID 336 through 343, and Setup will not
	complete.
	
	CAUSE
	=====
	
	While you step through the Setup Wizard, during 'Step 2 - Optional Components'
	the ODBC Drivers check box is selected, which allows the user to select from the
	list of available ODBC Drivers. By default, all of the listed drivers are
	initially selected. In this case, the 'SQL Server Driver' check box has been
	cleared, so it is not included. The error is encountered while reading from the
	Setup16.stf file that is on Disk 1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	This does not apply to Microsoft Visual FoxPro for Windows, version 3.0. Ensure
	that SQL Server Driver is one of selected ODBC Drivers.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Place a single, simple executable file in its own directory.
	
	2. Use the Setup Wizard to create disk images of that directory's contents.
	
	3. In Step 2 of the Setup Wizard, select the ODBC Drivers check box and clear
	  the SQL Server Driver check box in the list of drivers.
	
	4. Complete all the remaining Setup Wizard steps, and create the disk images.
	
	5. Run Setup from Disk 1 on a computer that has Microsoft Windows version 3.x
	  installed.
	
	6. During the process, the "Setup Parse Error in Initialize pass" error will
	  appear. When you click OK on each of the screens that follow from Object ID
	  335 to 343, setup will not complete.
	
	Additional query words: VFoxWin buglist3.00b kbvfp300b
	
	======================================================================
	Keywords          : kbMDAC250 kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300b
	Version           : WINDOWS:2.5,3.0b
	Issue type        : kbbug
	
	=============================================================================
	
