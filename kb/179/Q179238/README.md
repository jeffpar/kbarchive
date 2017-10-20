---
layout: page
title: "Q179238: MS-DOS Client 3.0 Hangs with Third-Party DHCP Server"
permalink: /kb/179/Q179238/
---

## Q179238: MS-DOS Client 3.0 Hangs with Third-Party DHCP Server

{% raw %}

	Article: Q179238
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MS-DOS 3.0 network client may stop responding (hang) during the boot
	sequence in Tcptsr.exe when using a third-party Dynamic Host Control Protocol
	(DHCP) server that does not send the DHCP options RENEWAL TIME and REBIND TIME
	for infinite leases. The problem does not occur with the Microsoft DHCP server.
	
	WORKAROUND
	==========
	
	To work around this problem, configure the DHCP server to send both fields even
	for infinite leases.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
