---
layout: page
title: "Q131677: PC NTMMTA: Err Msg: Could Not Create Directory..."
permalink: /kb/131/Q131677/
---

## Q131677: PC NTMMTA: Err Msg: Could Not Create Directory...

	Article: Q131677
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install the Microsoft Mail Multitasking MTA for Windows NT (NT MMTA),
	and you use a Universal Naming Convention (UNC) path to the home postoffice (for
	example, \\SERVER\VOL\PATH), the option to overwrite the default EXTERNAL.INI
	file in the \MAILDATA\INI subdirectory will give the following error:
	
	  Setup Message: Could not create directory \\server\vol\ini\external.ini
	
	RESOLUTION
	==========
	
	When Setup prompts for the EXTERNAL.INI file to be overwritten, select Do Not
	Overwrite. This will prevent Setup from overwriting the EXTERNAL.INI file in the
	\MAILDATA\INI subdirectory for the home postoffice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.5 of the Microsoft
	Mail Multitasking MTA for Windows NT. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	Additional query words: 3.50 perfmon
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
