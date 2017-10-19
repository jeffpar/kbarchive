---
layout: page
title: "Q140639: Daylight Savings Time Not Advancing"
permalink: /kb/140/Q140639/
---

## Q140639: Daylight Savings Time Not Advancing

	Article: Q140639
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On a small percentage of computers running Windows NT, a clock or application
	running on the desktop does not reflect the Daylight Savings time change even
	though the user has set Date/Time to "Automatically Adjust for Daylight Saving
	Time" in the Control Panel. Instead, the time displayed on applications such as
	the Accessories Clock show a continuation of Daylight Saving Time while the
	Control Panel's Date/Time displays the new Standard Time.
	
	CAUSE
	=====
	
	Each hour, Windows NT runs code that examines the system time versus the time
	stored in the CMOS clock. In some computers, Windows NT's system time (which is
	computed by interrupts) can drift. If more than one minute of drift is detected
	and if this drift is detected and corrected during the one hour between 1am and
	2am on Daylight Savings Time/Standard Time switch over dates, time will not
	switch properly.
	
	
	WORKAROUND
	==========
	
	To work around this problem, open Control Panel, click the Date/Time icon, and
	click OK. Do not click the Cancel button because the system time will not change
	but the application times will jump ahead by one hour on some computers.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
