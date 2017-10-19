---
layout: page
title: "Q121921: Backup Reports Incorrect Time in Foreign Countries"
permalink: /kb/121/Q121921/
---

## Q121921: Backup Reports Incorrect Time in Foreign Countries

	Article: Q121921
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbtool kbbug3.10 kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT Backup program sometimes displays and logs a time different than
	the actual local time at your computer. This only occurs in countries with a
	daylight saving time (DST) schedule different from the United States' DST.
	
	Backup does not take the actual DST settings on a computer into account, but
	instead always assumes U.S. DST to be in effect.
	
	The result is that when you run Backup in a country with a different DST from the
	U.S., during the overlapping period, an incorrect time is reported in the Backup
	log.
	
	Daylight saving time in the U.S. is active between the first Sunday in April and
	the last Sunday in October. Daylight saving time in the Netherlands is also
	active between the first Sunday in April and the last Sunday in October:
	
	Some countries use a shorter daylight saving schedule, however. Because Backup
	assumes U.S. residency, incorrect times are displayed in countries that do not
	have daylight savings time or are on a different schedule for daylight savings
	time. Times are reported as expected when the time schedules are back in
	synchronization.
	
	Example
	-------
	
	  Current date :
	  Current time : 11
	
	Backup reports 12 as the current time.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	Additional query words: prodnt 3.10 3.50 ntbackup report
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :; winnt:3.5
	
	=============================================================================
	
