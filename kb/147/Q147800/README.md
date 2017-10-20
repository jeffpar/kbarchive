---
layout: page
title: "Q147800: Lotus Notes Logs &quot;Unexpected TCP/IP error 10058 or 10053&quot;"
permalink: /kb/147/Q147800/
---

## Q147800: Lotus Notes Logs &quot;Unexpected TCP/IP error 10058 or 10053&quot;

{% raw %}

	Article: Q147800
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Occasionally Lotus Notes machines receive following error message:
	
	  "Unexpected TCP/IP error 10058/10053 on function code <#>".
	
	This error appears on Notes client machines and on Notes server Consoles as a
	pop-up message, and as an entry in Notes server Error Logs.
	
	CAUSE
	=====
	
	A Lotus Notes Windows Sockets call to recv()/send() returns 10058 (WSAESHUTDOWN)
	or 10053 (WSAECONNABORTED).
	
	
	The underlying cause has yet to be determined and remains under investigation.
	
	RESOLUTION
	==========
	
	As a popup on Notes client machines this error is benign as Notes will establish
	a new connection and retry the send()/recv() call. On Notes server machines this
	error has been known to cause Notes replication to fail but later replications
	usually succeed.
	
	STATUS
	======
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.51
	
	=============================================================================
	

{% endraw %}
