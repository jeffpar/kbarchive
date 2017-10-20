---
layout: page
title: "Q126382: Bypassing Service Provider Banner In SWITCH.INF"
permalink: /kb/126/Q126382/
---

## Q126382: Bypassing Service Provider Banner In SWITCH.INF

{% raw %}

	Article: Q126382
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following statement can be used in your Remote Access Service (RAS) SLIP/PPP
	logon script (SWITCH.INF file) to bypass the banner text of your service
	provider:
	
	  LOOP=<ignore>
	
	MORE INFORMATION
	================
	
	Many service providers send a long welcome and instruction text banner each time
	you logon. You can use the LOOP=<ignore><cr> statement in your
	automated logon script, to bypass an unknown number of text banner lines.
	
	For example:
	
	  COMMAND=
	  OK=<match>"Enter User Name:"
	  ERROR_NO_CARRIER=<match>"NO CARRIER"
	  LOOP=<ignore>
	
	This set of commands causes the blank COMMAND= to be issued until Enter User
	Name: is matched. Therefore, any lines of text sent by the service provider
	before Enter User Name: are ignored by your automated logon script.
	
	For more information on using the SWITCH.INF to automate a logon, refer to
	Knowledge Base article Q125975.
	
	Additional query words: point-to-point prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	

{% endraw %}
