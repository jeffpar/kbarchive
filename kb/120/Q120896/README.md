---
layout: page
title: "Q120896: TCP/IP-32 LMHOSTS #INCLUDE Not Working at Logon"
permalink: /kb/120/Q120896/
---

## Q120896: TCP/IP-32 LMHOSTS #INCLUDE Not Working at Logon

{% raw %}

	Article: Q120896
	Product(s): Microsoft Windows NT
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	3.11
	
	WINDOWS
	
	kbnetwork kbbug1.00
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TCP/IP-32 for Windows for Workgroups, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The remote LMHOSTS file referenced by #INCLUDE in a TCP/IP-32 workstation's
	LMHOSTS file is not read at logon. If you run NBTSTAT -C after logon, you will
	not see any hosts referenced in the remote LMHOSTS file.
	
	WORKAROUND
	==========
	
	Use NBTSTAT -R to load remote LMHOSTS entries.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft TCP/IP-32. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodtcp32 wfw wfwg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311
	Version           : 3.11
	
	=============================================================================
	

{% endraw %}
