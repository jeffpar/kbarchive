---
layout: page
title: "Q202466: BUG: DNS Admin Reports Incorrect Time in Statistics Field"
permalink: /kb/202/Q202466/
---

## Q202466: BUG: DNS Admin Reports Incorrect Time in Statistics Field

	Article: Q202466
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbui
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	DNS Admin reports the wrong system reset time in the Statistics Last Cleared
	field
	
	CAUSE
	=====
	
	The DNS service incorrectly compensates for GMT when the system time is already
	set to local time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	MORE INFORMATION
	================
	
	The system time is incorrectly compensated for the GMT offset, which results in
	the Statistics Last Cleared field displaying the incorrect time for the DNS
	service being started. The amount of the time error is equal to your local
	offset from GMT. If your time zone is GMT, no error will observed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
