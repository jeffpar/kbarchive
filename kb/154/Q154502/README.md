---
layout: page
title: "Q154502: Replication Increased by ANNOUNCE_IMMEDIATE Events"
permalink: kb/154/Q154502/
---

## Q154502: Replication Increased by ANNOUNCE_IMMEDIATE Events

	Article: Q154502
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	You may experience an increase in replication occurrences as a result of
	ANNOUNCE_IMMEDIATE events.
	
	MORE INFORMATION
	================
	
	Security account manager (SAM) and local security authority (LSA) replication
	can fall into a number of categories, including immediate (or urgent)
	replication. Most replication handled by the Net Logon service occurs at set
	intervals, but certain types of account or policy changes are considered urgent
	and must be handled immediately, causing an ANNOUNCE_IMMEDIATE event to be
	generated and acted upon by the primary domain controller (PDC). The following
	replications are considered urgent:
	
	- Changing the account lockout policy.
	
	- Changing the domain password policy.
	
	- Changing the password on a machine account.
	
	- Replicating a newly locked-out account.
	
	- Changing an LSA secret (essentially the "trusting" side of changing the
	  machine account password).
	
	These changes are immediate by necessity. For example, if a workstation were to
	change its machine account password and then lose its connection to its domain
	controller, it would not be able to connect to any other domain controller until
	the replication occurred.
	
	As a part of Windows NT security, machine account passwords are changed every
	seven days. As a side effect of this automatic machine account password change,
	a domain with a large number of computers and domain controllers may cause
	replication to occur on a frequent basis.
	
	Some administrators may want to disable these automatic machine account password
	changes. For information about how to disable automatic machine account password
	changes, please see the following article in the Microsoft Knowledge Base:
	
	Q154501How to Disable Automatic Machine Account Password Changes
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
