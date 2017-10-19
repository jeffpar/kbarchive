---
layout: page
title: "Q135288: Network Monitor Msg: Driver Does Not Support Promiscuous Mode"
permalink: /kb/135/Q135288/
---

## Q135288: Network Monitor Msg: Driver Does Not Support Promiscuous Mode

	Article: Q135288
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Network Monitor on your computer that has a NetFlex-2 network
	interface card (NIC), Network Monitor fails to start and the following message
	appears:
	
	  The Mac driver does not support Promiscuous Mode
	
	CAUSE
	=====
	
	Your NetFlex-2 NIC has the Full Duplex mode enabled.
	
	NOTE: If you enable Full Duplex mode, the network packet collision detection
	ability on your NetFlex-2 NIC is turned off.
	
	RESOLUTION
	==========
	
	To resolve this problem, disable the Full Duplex mode on your NetFlex-2 NIC by
	running your computer's EISA configuration utility.
	
	NOTE: Use EISA configuration utility version 2.20 revision C or later to
	configure this card.
	
	Additional query words: netmon prodnt
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbSMSSearch kbSMS100
	
	=============================================================================
	
