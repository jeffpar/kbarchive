---
layout: page
title: "Q149891: Programmatic System Shutdown Fails"
permalink: /kb/149/Q149891/
---

## Q149891: Programmatic System Shutdown Fails

{% raw %}

	Article: Q149891
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to programmatically shut down a Windows NT 3.5 or 3.51 system on
	which no user is logged on, the shutdown does not succeed. (Shutdown APIs:
	InitiateSystemShutdown(), ExitWindows*().) After the unsuccessful shutdown, all
	system services remain operational and the system seems to be fully functional;
	however, the only ways to shut down the system are to log on and perform a
	manual shutdown or to perform a hardware reset.
	
	CAUSE
	=====
	
	When no user is logged on to the system, the default logon screen saver becomes
	active. When shutdown is initiated, the system terminates the screen saver but
	stops the shutdown process.
	
	RESOLUTION
	==========
	
	A modification was made to Winlogon.exe to correct this condition.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
