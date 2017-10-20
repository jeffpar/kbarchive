---
layout: page
title: "Q232567: Error 67 with NET USE Command if FQDN Exceeds 32 Characters"
permalink: /kb/232/Q232567/
---

## Q232567: Error 67 with NET USE Command if FQDN Exceeds 32 Characters

{% raw %}

	Article: Q232567
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 4 (SP4), you cannot connect to a
	downlevel server or share using a fully qualified domain name (FQDN) that is
	longer than 32 characters. The NET USE command does not work and the following
	error message is displayed:
	
	  system error 67: The network name cannot be found
	
	This behavior occurs when you connect to a downlevel server and the server
	message block (SMB) dialect negotiated is LAN Manager 2.1 (dialect number 6).
	
	CAUSE
	=====
	
	This problem occurs because there are several changes to the redirector in SP4.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
