---
layout: page
title: "Q125258: Pending Local Print Jobs May Disappear After Reboot of Server"
permalink: /kb/125/Q125258/
---

## Q125258: Pending Local Print Jobs May Disappear After Reboot of Server

	Article: Q125258
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT 3.5, if there are local print jobs pending and the server is
	rebooted or goes down (for example, a power outage without UPS), all the local
	pending print jobs in all the queues will disappear. There is still header
	(.SHD) files in \%SYSTEMROOT%\SYSTEM32\SPOOL\PRINTERS, but the corresponding
	local job (.SPL) files are gone and do not print.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
