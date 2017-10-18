---
layout: page
title: "Q105164: Proper Rights for the CAL Subdirectory"
permalink: kb/105/Q105164/
---

## Q105164: Proper Rights for the CAL Subdirectory

	Article: Q105164
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a,7.0; Win95:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you work online, Schedule+ cannot create or update the .CAL file if you
	have Read-Only access. If you have Read-Only access, Schedule+ returns the
	following error message:
	
	  Your schedule file is locked
	
	CAUSE
	=====
	
	Every Schedule+ user needs to have the following rights in the CAL subdirectory
	Read, Write, Create, Erase, Modify, and FileScan. Without these rights, you are
	unable to use Schedule+ online.
	
	Without FileScan rights, the online .CAL file may not be properly updated if
	changes are made in the offline mode. However, you can use Schedule+ off line
	without any rights for the CAL subdirectory.
	
	For more information, please refer to the Microsoft Knowledge Base article
	Q103901 "PC Adm: Minimum NetWare Trustee Assignments for Mail Database."
	
	Additional query words: schedule plus 1.00 1.00a schedplus sched online offline
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3 kbPublisher100a kbMPTMathopolis
	Version           : WINDOWS:1.0,1.0a,7.0; Win95:7.0
	
	=============================================================================
	
