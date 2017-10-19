---
layout: page
title: "Q134668: PC NTMMTA: Monitor Option Can Be Called from a Command Line"
permalink: /kb/134/Q134668/
---

## Q134668: PC NTMMTA: Monitor Option Can Be Called from a Command Line

	Article: Q134668
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Monitor option in the Microsoft Mail Multitasking MTA for Windows NT (NT
	MMTA) can be called from the command line. As a result, several Monitor windows
	can be opened from a batch file.
	
	MORE INFORMATION
	================
	
	Monitor [external/dispatch] <\\computer_name> <instance_name>
	
	where:
	External/Dispatch - The type of service
	\\computer_name - Name of the Windows NT Server running the service
	instance_name - Name of the instance that should be monitored
	
	For example, Monitor external \\machine1 ammta1
	
	Notes:
	
	- If you want to monitor specific instances regularly, create a batch file
	  containing the preceding command, and place it on your Windows NT desktop or
	  in the Start folder.
	
	- MONITOR.EXE is located in the \WINNT35 directory, by default.
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
