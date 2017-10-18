---
layout: page
title: "Q166423: Access Violation in SERVICES.EXE in EVENTLOG.DLL"
permalink: kb/166/Q166423/
---

## Q166423: Access Violation in SERVICES.EXE in EVENTLOG.DLL

	Article: Q166423
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtoolkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have a high frequency of events and the event log is set to overwrite old
	entries as needed, Services.exe might hit an access violation in Eventlog.dll.
	
	Since Services.exe hosts several essential Windows NT system services as well as
	the service control manager your computer might hang or refuse to shut down
	after such a failure.
	
	CAUSE
	=====
	
	There have been code paths in Eventlog.dll with insufficient error checking
	which only appear under stress conditions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: 4.00 3.51 prodnt
	
	======================================================================
	Keywords          : kbnetwork kbtool kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
