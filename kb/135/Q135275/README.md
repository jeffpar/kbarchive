---
layout: page
title: "Q135275: Windows NT Backup : Incorrect Date in &quot;Tape Name&quot; Text"
permalink: /kb/135/Q135275/
---

## Q135275: Windows NT Backup : Incorrect Date in &quot;Tape Name&quot; Text

	Article: Q135275
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The default "Tape Name" text generated for a tape by Windows NT Backup
	(NTBACKUP.EXE) contains an incorrect date if the backup is started close to
	midnight on a computer in a southern hemisphere time zone with the
	"Automatically Adjust for Daylight Savings Time" option selected.
	
	If Daylight Saving is in effect and the backup is started between 11:00 pm and
	midnight, Tape Name shows the following day's date.
	
	If Daylight Saving is in NOT effect and the backup is started between midnight
	and 1:00 am, Tape Name shows the previous day's date.
	
	CAUSE
	=====
	
	NTBACKUP.EXE does not take the computer's configured time zone into
	consideration.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem has been corrected in the latest U.S. Service Pack for
	Windows NT version 3.51. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base:
	
	  "SERVPACK" (without the quotation marks)
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
