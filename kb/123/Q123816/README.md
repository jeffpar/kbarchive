---
layout: page
title: "Q123816: 3COM EtherLink III NIC Intermittently Fails to Start"
permalink: /kb/123/Q123816/
---

## Q123816: 3COM EtherLink III NIC Intermittently Fails to Start

{% raw %}

	Article: Q123816
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows NT version 3.5 or 3.51 with a 3Com EtherLink III
	(3C509)network adapter, the network adapter driver (ELNK3.SYS) may fail to
	recognize the network adapter and then display the following error message:
	
	  At least one service or driver failed during system startup.
	
	The following is logged in the Event Viewer:
	
	  Event ID: 5012 Source: ELNK31 Type: Error
	  Description: The I/O address supplied does not match the jumpers on the
	  adapter.
	
	  Event ID: 5003 Source: ELNK31 Type: Error
	  Description: Could not find an adapter.
	
	WORKAROUND
	==========
	
	To work around this problem, shut down and restart Windows NT to re- initialize
	the network adapter driver with the device. If the problem persists, use another
	network adapter.
	
	The EtherLink III product discussed here is manufactured by 3Com Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: mac nic prodnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
