---
layout: page
title: "Q136935: Browser Service Causes Network Broadcast Storm After 1193 hrs"
permalink: /kb/136/Q136935/
---

## Q136935: Browser Service Causes Network Broadcast Storm After 1193 hrs

	Article: Q136935
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Server 3.51 starts a broadcast storm on the network with browser
	frames after the Windows NT Server Service has reached the System Up Time of
	1193 hours, which means it has been running continuously for 1193 hours or
	multiples thereof. These broadcast frames are sent out on all installed
	protocols. The broadcast storm typically last less than 5 or 6 minutes and then
	stops by itself. The broadcast browser frame types that appear are the "Host
	Announcements" or the "Local Master Announcements" frames, which are typically
	sent out every 12 minutes.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51.
	
	A supported fix is now available for Windows NT version 3.5, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product Support Services for more information.
	
	
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51 and Windows NT 4.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
