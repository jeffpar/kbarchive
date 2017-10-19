---
layout: page
title: "Q166197: NBTSTAT Error When Using More Than 25 Dialout Devices with RAS"
permalink: /kb/166/Q166197/
---

## Q166197: NBTSTAT Error When Using More Than 25 Dialout Devices with RAS

	Article: Q166197
	Product(s): Microsoft Windows NT
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding more than 25 dialout devices under Windows NT 4.0 RAS, the NBTSTAT
	command will return the following message:
	
	  Unable to access NBT driver; Unknown Error
	
	LMHosts resolution will fail; however, all other resolution methods (such as such
	WINS, Domain Name Service (DNS), broadcast) will succeed.
	
	CAUSE
	=====
	
	This problem is because NBTSTAT is not reading the entire contents of a registry
	key.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: netbios debug
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	
