---
layout: page
title: "Q157301: Shutdown of 16-bit Named Pipe Client Causes GPF in Netapi.dll"
permalink: /kb/157/Q157301/
---

## Q157301: Shutdown of 16-bit Named Pipe Client Causes GPF in Netapi.dll

{% raw %}

	Article: Q157301
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When two or more 16-bit named pipe clients are run, and the first instance of
	the named pipe client is terminated, all other 16-bit named pipe client
	instances may receive a general protection fault at 0001:0CE6 in Netapi.dll.
	
	CAUSE
	=====
	
	The Netapi.dll in Windows NT 3.51 and 4.0 does not handle the DosReadAsyncNmPipe
	and DosWriteAsyncNmPipe API correctly.
	
	RESOLUTION
	==========
	
	To resolve this issue, run each 16-bit named pipe client in a separate memory
	space.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	

{% endraw %}
