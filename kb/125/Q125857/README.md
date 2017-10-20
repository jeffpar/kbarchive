---
layout: page
title: "Q125857: NET Command Does Not Return Errorlevel"
permalink: /kb/125/Q125857/
---

## Q125857: NET Command Does Not Return Errorlevel

{% raw %}

	Article: Q125857
	Product(s): Microsoft Windows NT
	Version(s): 3.50
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
	
	The NET.EXE command fails to return an errorlevel. For example, when you run a
	batch file containing the following commands
	
	  net group group1 user1 /add
	  if errorlevel 1 echo add failed
	
	"add failed" does not get echoed, even when user1 is not successfully added to
	group1.
	
	CAUSE
	=====
	
	There is a problem in the Windows NT 3.5 version of the NET.EXE command. This
	problem does not exist in Windows NT 3.1.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt error level
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
