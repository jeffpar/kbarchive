---
layout: page
title: "Q240969: NDIS May Not Return Proper Multicast Address List After a Reset"
permalink: kb/240/Q240969/
---

## Q240969: NDIS May Not Return Proper Multicast Address List After a Reset

	Article: Q240969
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you quit a program (such as Network Monitor, from the Microsoft Systems
	Management Server CD-ROM) that resets the network adapter to turn off
	Promiscuous mode, the network adapter's registers for the multicast address
	appear to be cleared. A query to NDIS for OID_802_3_MULTICAST_LIST results in
	NDIS returning an empty list. However, the proper address list is actually still
	present in the network adapter and the empty list is being returned incorrectly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : :4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
