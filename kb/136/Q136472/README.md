---
layout: page
title: "Q136472: NE3200 NIC Driver Can Lose Locally Administered Address"
permalink: /kb/136/Q136472/
---

## Q136472: NE3200 NIC Driver Can Lose Locally Administered Address

	Article: Q136472
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	This problem occurs on an NE3200 Network card that has had a Locally
	Administered Address (LAA) assigned to it.
	
	If an adapter reset is issued to the card, the card will no longer accept packets
	sent to its LAA. However, it will still transmit packets using its LAA and will
	still process any broadcast/multicast packets that it sees.
	
	CAUSE
	=====
	
	This problem occurs because the LAA is not correctly rewritten to the adapter
	after an NdisReset is issued.
	
	This problem only occurs with the NDIS 3.0 miniport driver included with Windows
	NT 3.5 and 3.51. The non-miniport driver included with Windows NT 3.1 does not
	have this problem.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
