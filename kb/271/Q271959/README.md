---
layout: page
title: "Q271959: Cannot Resolve SID Because Global Group Name Same As Domain Name"
permalink: /kb/271/Q271959/
---

## Q271959: Cannot Resolve SID Because Global Group Name Same As Domain Name

{% raw %}

	Article: Q271959
	Product(s): Microsoft Windows NT
	Version(s): 2000,2000 SP1,3.51,3.51 SP4,3.51 SP5,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 S
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 3.51 SP4, 3.51 SP5, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows versions 2000, 2000 SP1 Server 
	- Microsoft Windows versions 2000, 2000 SP1 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The security identifier (SID) cannot be resolved as expected for a global group
	name in access control lists (ACLs) on a Windows 2000-based member of a Windows
	NT 4.0-based domain.
	
	CAUSE
	=====
	
	This behavior occurs because the global group name is the same as the domain
	name.
	
	RESOLUTION
	==========
	
	To resolve this issue, copy the group to a different name and delete the
	original group.
	
	MORE INFORMATION
	================
	
	For additional information about this behavior, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q137513 User Manager Cannot Rename a Group
	
	
	Additional query words: icon question mark face
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbWinNTS351search kbWinNTS351sp4 kbWinNTS351sp5 kbWinAdvServSearch kbWin2000AdvServSP1 kbwin2000ServSP1
	Version           : :2000,2000 SP1,3.51,3.51 SP4,3.51 SP5,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
