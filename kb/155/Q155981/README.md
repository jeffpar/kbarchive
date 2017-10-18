---
layout: page
title: "Q155981: Time Updated for Daylight Savings More Than Once"
permalink: kb/155/Q155981/
---

## Q155981: Time Updated for Daylight Savings More Than Once

	Article: Q155981
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a time change to or from Daylight Savings Time, the time on your computer
	may be updated more than once.
	
	CAUSE
	=====
	
	Multiple settings that adjust for time changes are enabled on your computer.
	
	RESOLUTION
	==========
	
	Enable one of the operating systems installed on your computer, or your
	computer's CMOS, to adjust for Daylight Savings Time, and disable all other such
	settings.
	
	For example, if your computer's CMOS has such a setting, enable the setting in
	the CMOS, and then disable the setting in Windows NT and any other operating
	system installed on your computer.
	
	MORE INFORMATION
	================
	
	You can configure Windows NT version 4.0 to automatically adjust the time on
	your computer when Daylight Saving Time begins and ends. Many computers also
	allow for this automatic adjustment in the CMOS settings. Other operating
	systems, including Microsoft Windows 95, include this functionality as well. If
	more than one operating system is set to adjust for Daylight Savings Time, or
	your computer's CMOS is set to adjust for Daylight Savings Time, the time may be
	changed more than once. This causes the time to become incorrect.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
