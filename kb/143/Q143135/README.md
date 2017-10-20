---
layout: page
title: "Q143135: PORTUAS Err Msg: Unexpected Return Code 5 From API NetGroupAdd"
permalink: /kb/143/Q143135/
---

## Q143135: PORTUAS Err Msg: Unexpected Return Code 5 From API NetGroupAdd

{% raw %}

	Article: Q143135
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the command PORTUAS /f a:\netacc.bkpas (for example) on
	a Windows NT Server, the following error message appears:
	
	  Unexpected return code 5 from API NetGroupAdd. PortUAS returned - 5. More
	  information ahout this and other error codes greater than 2100 may be
	  available by typing NET HELPMSG 5 at the command prompt. A zero indicates
	  that no errors were detected when the database was converted.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Ensure that the Server and Netlogon services are started. Run Control Panel
	  Services to verify that these services are started.
	
	2. Ensure that you are a member of the Administrator group.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
