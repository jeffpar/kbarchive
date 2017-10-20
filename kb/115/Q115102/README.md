---
layout: page
title: "Q115102: Err Msg: Error 530: Invalid Logon Sequence"
permalink: /kb/115/Q115102/
---

## Q115102: Err Msg: Error 530: Invalid Logon Sequence

{% raw %}

	Article: Q115102
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to set up a FTP session with a HOST that requires user name,
	password and account information to log on, the following error message may
	appear:
	
	  Error 530: Invalid Logon Sequence
	
	CAUSE
	=====
	
	This problem occurs due to an extra FTP packet being sent, which is substituting
	the account information entry with a carriage return.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5.
	
	Additional query words: prodnt tcp tcpip
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
