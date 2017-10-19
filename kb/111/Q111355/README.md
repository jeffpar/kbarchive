---
layout: page
title: "Q111355: Repair /S Prompts for Old Emergency Repair Disk"
permalink: /kb/111/Q111355/
---

## Q111355: Repair /S Prompts for Old Emergency Repair Disk

	Article: Q111355
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the Windows NT Resource Kit repair utility to save emergency repair
	information for a computer, you will be prompted to insert your original
	Emergency Repair Disk so it can be updated. If you do not have your original
	Emergency Repair Disk or you do not want to update it and you are running the
	utility on a RISC-based computer, you can bypass this by pressing ENTER or
	choosing the Ignore button.
	
	MORE INFORMATION
	================
	
	When you run REPAIR.EXE, the /S option creates a repair directory that contains
	information that will be used to generate an Emergency Repair Disk. If you run
	repair with the /S switch only, it always assumes you want to update your
	current Emergency Repair Disk and it prompts you for the disk. On 80x86-based
	computers, pressing the ENTER key at this point bypasses this step and starts
	creating the repair directory. On RISC-based computers, such as the DEC Alpha
	and the MIPS R400, after you press ENTER, a dialog box with the option to Abort,
	Retry, or Ignore appears; choose the Ignore button.
	
	If you also use the /X switch in addition to /S (for example, REPAIR /S /X), it
	does not assume you are updating an old Emergency Repair Disk and immediately
	starts creating the repair directory.
	
	Additional query words: prodnt reskit
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : 3.1
	
	=============================================================================
	
