---
layout: page
title: "Q160840: Sharing Violation When Accessing User Profiles"
permalink: /kb/160/Q160840/
---

## Q160840: Sharing Violation When Accessing User Profiles

{% raw %}

	Article: Q160840
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A sharing violation may result from users logging on simultaneously and
	accessing a roaming mandatory or personal profile at exactly the same time.
	
	CAUSE
	=====
	
	When Windows NT 4.0 reads the time and date stamp of the profile, the file is
	opened in exclusive mode rather than allowing it to be shared. Because the file
	is opened in exclusive mode, another user who attemps to open the same profile
	will fail because the file cannot be accessed while opened by the first user.
	
	RESOLUTION
	==========
	
	When a roaming profile is accessed from a computer running Windows NT 4.0
	Workstation with the latest service pack applied, it is opened with shared
	access, allowing multiple users to retrieve the time and date stamp, as well as
	read the file for the copy process to the local workstation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest US Service Pack for Windows NT 4.0. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
