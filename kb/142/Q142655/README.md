---
layout: page
title: "Q142655: Stop Message Appears After Deleting ProductOption Registry Key"
permalink: /kb/142/Q142655/
---

## Q142655: Stop Message Appears After Deleting ProductOption Registry Key

	Article: Q142655
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you delete the ProductOption registry key, a Stop message with a blue
	screen appears and your computer stops responding (hangs).
	
	This symptom can occur anytime during any random action after the registry key
	was deleted.
	
	CAUSE
	=====
	
	Deleting this registry key leaves the system in an unknown state because Windows
	NT does not automatically recreate this key.
	
	RESOLUTION
	==========
	
	Obtain the fix mentioned below or wait for the next service pack.
	
	The fix prevents accidental deletion of this registry key and ensures that
	Windows NT operating reliability is not negatively affected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
