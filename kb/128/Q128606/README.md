---
layout: page
title: "Q128606: Network Connectivity Problems with NetFlex-L ENET/PCI NIC"
permalink: /kb/128/Q128606/
---

## Q128606: Network Connectivity Problems with NetFlex-L ENET/PCI NIC

{% raw %}

	Article: Q128606
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	When you use an Integrated NetFlex-L ENET/PCI (PCNTN3.SYS) network interface
	card (NIC) in Windows NT version 3.5 on Compaq computers, the following network
	connectivity problems may occur:
	
	  - Client computers may disconnect.
	  - Your computer may not respond to client computer requests.
	
	CAUSE
	=====
	
	This problem occurs when interrupts are disabled in the deferred processing,
	interrupt processing, and reset routines.
	
	
	RESOLUTION
	==========
	
	To correct this problem, obtain and install the PCNTN3.SYS driver (version 2.27)
	included in the Compaq Support Software Diskette (SSD), version 1.14 (SP1081).
	
	The Compaq products discussed here are manufactured by Compaq Computer Corp., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding the products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
