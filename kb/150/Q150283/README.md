---
layout: page
title: "Q150283: SysKonnect FDDI Cards and Some EISA Computers possible data"
permalink: /kb/150/Q150283/
---

## Q150283: SysKonnect FDDI Cards and Some EISA Computers possible data

{% raw %}

	Article: Q150283
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51
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
	
	Computers with an EISA bus that use SysKonnect FDDI network adapters may
	experience data corruption during some DMA write operations.
	
	CAUSE
	=====
	
	SysKonnect has confirmed that a problem exists in the application-specific
	intergrated circuit (ASIC) on their FDDI network adapters with model numbers
	SK-53xx. The problem occurs only if the Bclock signal on the EISA bus is
	extended beyond 800nS. This condition is known to occur on the following Compaq
	systems:
	
	  SystemPro XL
	  ProLiant 2000
	  ProLiant 4000
	  ProLiant 4500
	
	RESOLUTION
	==========
	
	To resolve this problem, please contact SysKonnect technical support for an ASIC
	revision. In addition to this hardware update, an enhanced Windows NT driver is
	available from SysKonnect.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
