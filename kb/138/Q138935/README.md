---
layout: page
title: "Q138935: Using Socket Handle with Writefile() API Causes STOP Message"
permalink: /kb/138/Q138935/
---

## Q138935: Using Socket Handle with Writefile() API Causes STOP Message

{% raw %}

	Article: Q138935
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a sockets program uses a socket handle with the Writefile() application
	programming interface (API) for overlapped input/output (I/O), a STOP message
	appears in Windows NT 3.51 after about 20 to 40 megabytes (MB) of data are
	transferred.
	
	CAUSE
	=====
	
	This problem occurs due to AFD.SYS using non-paged memory and not releasing the
	memory.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use the SETSOCKOPT function to set the send buffer
	size (SO_SNDBUF option) to zero.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt Winsock Socket Sock
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbWinsock kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
