---
layout: page
title: "Q202855: XFOR: Exchange Migration Wizard for MS Mail Fails on Schedule+"
permalink: /kb/202/Q202855/
---

## Q202855: XFOR: Exchange Migration Wizard for MS Mail Fails on Schedule+

	Article: Q202855
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,3.2,3.2a,3.5,7.0,7.5; winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 1.0, 7.0, 7.5 
	- Microsoft Exchange Server, versions 5.0, 5.5 
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you migrate a Microsoft Mail postoffice mailbox to Exchange Server using
	the Migration Wizard, the users' schedule information may fail to migrate.
	
	CAUSE
	=====
	
	The postoffice has stranded or duplicate Schedule+ data files for the users.
	Stranded or duplicate Schedule+ data files exist when one or more of the
	following conditions apply:
	
	- Schedule+ 1.0 was originally in use, then the users were later upgraded to
	  Schedule+ 7.x. However the version 1.x files were not removed.
	
	- The Schedule.key and Schedul2.key files still exist in the Cal directory on
	  the MS Mail postoffice.
	
	- The users have never used Schedule+, but received a Schedule+ meeting request
	  at some time in the past.
	
	RESOLUTION
	==========
	
	If Schedule+ 1.0 is no longer used, remove all Cal files and Schedule.key files
	from the Cal directory.
	
	If there is still a mixture of 1.0 and 7.x users, use Dumpkey.exe to check for
	any duplicate entries. To do so:
	
	1. Copy Dumpkey.exe into the Cal directory on the postoffice.
	
	2. At a command prompt, type:
	
	  "DumpKey schedule.key > [filename.txt]" (without the quotation marks)
	
	  This will give you the users' alias and hexadecimal number for their .cal (1.0
	  calendar) file.
	
	3. Next, type the command for Schedule+ 7.x:
	
	  "Dumpkey schedul2.key > [filename.txt]" (without the quotation marks)
	
	  This will give you the users' alias and hexadecimal number for the .scd (7.x
	  calendar) file.
	
	4. If duplication is present and some of the 1.0 entries must be retained, in
	  the Schedule+ Administrator program (Adminsch.exe), on the Administration
	  menu, click Clean Up Schedule Files. This will remove the stranded entries
	  from the Schedule.key file.
	
	MORE INFORMATION
	================
	
	By default, the Schedule.key is a hidden file in the Cal sub-directory of the MS
	Mail postoffice.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbMailSearch kbScheduleSearch kbSchedule700 kbZNotKeyword3 kbSchedule100 kbSchedule750 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:1.0,3.2,3.2a,3.5,7.0,7.5; winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
