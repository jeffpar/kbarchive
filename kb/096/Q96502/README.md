---
layout: page
title: "Q96502: PC WSPlus: Resynchronizing Schedule+ After Network Name Change"
permalink: /kb/096/Q96502/
---

## Q96502: PC WSPlus: Resynchronizing Schedule+ After Network Name Change

	Article: Q96502
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbother
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a network name has changed in version 3.0 of Microsoft Mail for PC Networks
	and you are using schedule distribution or dynamic connections, the change must
	also be propagated into versions 1.0 and 1.0a of Microsoft Schedule+ for
	Windows.
	
	To propagate the changes into Schedule+, do the following:
	
	1. Change the network name.
	
	2. Delete the POF file for that postoffice. To do this, delete the 00000000.POF
	  file in the CAL directory of the postoffice.
	
	  NOTE: This file is a hidden file.
	
	3. The next time any user belonging to that postoffice makes a change to their
	  calendar, a new POF file gets created. This POF file will match the new
	  network name.
	
	MORE INFORMATION
	================
	
	When using schedule distribution or dynamic connections, Schedule+ must be aware
	of the complete postoffice name. If only one postoffice is using Schedule+ and
	there are no plans to add additional postoffices in the future, these steps do
	not need to be taken.
	
	Additional query words: schedule plus 1.00 1.00a resync resynch re-synch
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
