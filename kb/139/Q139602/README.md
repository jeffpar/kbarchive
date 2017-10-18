---
layout: page
title: "Q139602: System Agent Tasks Halted by ScanDisk Results Message"
permalink: kb/139/Q139602/
---

## Q139602: System Agent Tasks Halted by ScanDisk Results Message

	Article: Q139602
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some tasks scheduled in System Agent may not be run, and the ScanDisk Results
	dialog box may remain on the screen.
	
	CAUSE
	=====
	
	The Display Summary option for a ScanDisk task is set to Always.
	
	The default ScanDisk tasks that are created when you install System Agent are set
	to display a summary only if errors are found. However, the default for new
	ScanDisk tasks is to always display the ScanDisk summary.
	
	RESOLUTION
	==========
	
	To change the summary option for a ScanDisk task, follow these steps:
	
	1. In System Agent, click the ScanDisk task you want to change, and then click
	  Change Schedule on the Program menu.
	
	2. Click Settings.
	
	3. Click Advanced.
	
	4. In the Display Summary box, click the Never or the Only If Errors Found
	  option, and then click OK.
	
	5. Click OK, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Plus! version 1.0 for
	Windows 95. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you use the Always option, ScanDisk pauses until you close the Results
	dialog box. To run tasks unattended, you should use the Never or Only If Errors
	Found option for ScanDisk tasks.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
