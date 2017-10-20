---
layout: page
title: "Q241759: Tsspback.cmd Does Not Work on the Japanese Version of Terminal S"
permalink: /kb/241/Q241759/
---

## Q241759: Tsspback.cmd Does Not Work on the Japanese Version of Terminal S

{% raw %}

	Article: Q241759
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbsetup kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Tsspback.cmd command in Windows NT 4.0 Service Pack 4 does not work in
	Windows NT 4.0 Japanese language version, Terminal Server Edition.
	
	CAUSE
	=====
	
	This issue occurs because there is no Lserver.in_ file in the Japanese version
	of Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Terminal Server 4.0.
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	Terminal Server 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	MORE INFORMATION
	================
	
	TSSPBack.cmd is the Pre-rollback command for Terminal Server 4.0, which
	essentially rolls back the servicepack installation. If you manually run the
	rollback you receive a file missing error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
