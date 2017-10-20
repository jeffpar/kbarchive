---
layout: page
title: "Q111026: Backup Creates Many REGXXXX Files, Can't Copy .EVT Files"
permalink: /kb/111/Q111026/
---

## Q111026: Backup Creates Many REGXXXX Files, Can't Copy .EVT Files

{% raw %}

	Article: Q111026
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using an account that is a member of the Backup Operators group, you back up a
	partition that Windows NT resides on. Windows NT Backup fails to access the
	Event Viewer files, all ending in .EVT. During these access failures, Backup
	creates many files of the form REG<xxxx> (where <xxxx> is a number
	sequence).
	
	WORKAROUND
	==========
	
	This problem does not occur if your account is a member of the Administrators
	group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	

{% endraw %}
