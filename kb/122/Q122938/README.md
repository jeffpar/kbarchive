---
layout: page
title: "Q122938: Telnet is Not a Valid Option in Windows NT 3.5 Terminal"
permalink: /kb/122/Q122938/
---

## Q122938: Telnet is Not a Valid Option in Windows NT 3.5 Terminal

	Article: Q122938
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under Windows NT version 3.5x, if you attempt to set up Telnet in Terminal
	(rather than using the new Telnet utility), the following error message appears
	after you select Telnet:
	
	  Terminal failed to open the Telnet session. Please use the Services option in
	  the Control Panel to make sure that the Telnet service is started.
	
	The only option you can select is OK.
	
	Under Windows NT version 3.1, this was a valid selection.
	
	CAUSE
	=====
	
	Under Windows NT version 3.5x, you need to run TELNET.EXE.
	
	NOTE: By default, Telnet is not installed until you select to install TCP/IP
	connectivity utilities.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here as it
	becomes available.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
