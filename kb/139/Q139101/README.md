---
layout: page
title: "Q139101: Sony ATAPI CD-ROM Drive Must Be Master Drive on IDE Adapters"
permalink: /kb/139/Q139101/
---

## Q139101: Sony ATAPI CD-ROM Drive Must Be Master Drive on IDE Adapters

{% raw %}

	Article: Q139101
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use a Sony ATAPI CD-ROM drive on a standard IDE adapter, you may have
	to configure the Sony drive as the master drive.
	
	MORE INFORMATION
	================
	
	Sony has found that there can be timing problems if a SONY ATAPI CD-ROM drive is
	connected to a standard inexpensive IDE adapter with many hard drives. They
	suggest configuring all models of SONY ATAPI drives connected to standard IDE
	adapters as master drives, which avoids the timing issues.
	
	EIDE adapters do not have the same timing issues, so the SONY ATAPI CD-ROM can be
	used as Master or Slave with those adapters.
	
	
	For more information contact Sony technical support at (408) 894-0555.
	
	The products discussed here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt ntsetup
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
