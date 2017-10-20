---
layout: page
title: "Q321725: Err Msg: Unable to Determine the Computer File System Type (3.2)"
permalink: /kb/321/Q321725/
---

## Q321725: Err Msg: Unable to Determine the Computer File System Type (3.2)

{% raw %}

	Article: Q321725
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbSecurity
	Last Modified: 17-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Baseline Security Analyzer (MBSA) tool tries to determine if
	a remote Windows NT 4.0-based computer contains hard disks that do not use the
	NTFS file system, you receive the following error message:
	
	  Unable to determine the computer file system type.(3.2)
	
	CAUSE
	=====
	
	This error message occurs because the MBSA tool enumerates the drives, but a
	registry check cannot verify whether the drives are hard disks because of a
	missing registry key in Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the MBSA tool.
	
	
	MORE INFORMATION
	================
	
	For additional information about the MBSA tool, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q320454 Microsoft Baseline Security Analyzer (MBSA) Version 1.0 Is Available
	
	Additional query words: type
	
	======================================================================
	Keywords          : kberrmsg kbtool kbSecurity 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
