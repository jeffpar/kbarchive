---
layout: page
title: "Q125758: Logon Failure on SMP Computer with GSNW or CSNW Installed"
permalink: /kb/125/Q125758/
---

## Q125758: Logon Failure on SMP Computer with GSNW or CSNW Installed

{% raw %}

	Article: Q125758
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When logging on at the console of a Windows NT version 3.1 computer, the logon
	may stop responding (hang) after entering the logon information and choosing
	'OK' in the Welcome dialog box. Remote clients can access the computer via the
	network, but the console is unavailable.
	
	This has been observed on Symmetric Multi-Processor (SMP) systems with Gateway
	Services for NetWare (GSNW) or Client Services for Netware (CSNW) installed. The
	problem is intermittent in that a variable, random number of logon attempts will
	succeed before the failure occurs.
	
	This has been confirmed on Windows NT version 3.1, Service Pack 2.
	
	CAUSE
	=====
	
	There is a problem in WINLOGON.EXE.
	
	
	RESOLUTION
	==========
	
	Once the logon failure has occurred, the console is unavailable until the system
	is restarted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	Additional query words: prodnt 3.10 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
