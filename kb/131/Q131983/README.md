---
layout: page
title: "Q131983: Server Halts On Invalid LPR Transaction"
permalink: /kb/131/Q131983/
---

## Q131983: Server Halts On Invalid LPR Transaction

{% raw %}

	Article: Q131983
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A remote print client sends a print job to a Windows NT 3.5 print server using
	LPR, and sends an illegal command causing the Windows NT print server to rapidly
	fill its free disk space with temporary files. The Windows NT print server then
	stops responding (hangs) without displaying an error message.
	
	
	This problem has been observed outside the test lab only on an OSF/1 2.x LPR
	client system.
	
	
	WORKAROUND
	==========
	
	To work around this problem, delete the problem print job from the print server
	print queue. Any remaining print jobs will print.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in Windows NT Workstation and Windows NT Server
	version 3.51.
	
	Additional query words: prodnt line printer remote daemon LPD
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	

{% endraw %}
