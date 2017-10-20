---
layout: page
title: "Q145829: Print Time Is Different From Printer Available Time"
permalink: /kb/145/Q145829/
---

## Q145829: Print Time Is Different From Printer Available Time

{% raw %}

	Article: Q145829
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The printer is available either one hour earlier or later, even though the
	available time for the printer is configured properly in Print Manager. For
	example, if you set the available time of the printer from 12:00 PM to 2:00 PM,
	the printer is available at 11:00 AM or 3:00 PM.
	
	In addition, when you use the NET PRINT command, the following status information
	appears:
	
	  Queue held until <time>
	
	The <time> stamp is either one hour before or after the available time
	configured in Print Manager.
	
	CAUSE
	=====
	
	This problem occurs if you select the Automatically Adjust for Daylight Saving
	Time check box in Control Panel Date/Time, even though the daylight saving time
	in not in effect.
	
	WORKAROUND
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0.
	
	To work around this problem, clear the Automatically Adjust for Daylight Saving
	Time check box in Control Panel Date/Time and manually adjust the current time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in Windows NT Workstation or Server version
	4.0.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
