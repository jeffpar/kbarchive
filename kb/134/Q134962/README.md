---
layout: page
title: "Q134962: Performance Problems Using CSNW and GSNW &amp; Netflex Adapter"
permalink: /kb/134/Q134962/
---

## Q134962: Performance Problems Using CSNW and GSNW &amp; Netflex Adapter

	Article: Q134962
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOM
	-------
	
	After you upgrade from Windows NT version 3.50 to 3.51, your computer's
	performance degrades significantly when you use Client Services for NetWare
	(CSNW) or Gateway Services for NetWare (GSNW).
	
	This symptom occurs if your computer has a Compaq Imbedded Netflex network
	interface card (NIC).
	
	
	CAUSE
	=====
	
	The driver for your Netflex network card is from COMPAQ Computer Corporation and
	is not an updated version, and when you upgrade Windows NT version 3.50 to 3.51,
	the Netflex network card driver is not updated.
	
	WORKAROUND
	==========
	
	To work around this problem, replace your current Compaq Netflex driver with the
	following driver included in Windows NT 3.51:
	
	  AMD PCNET Family Ethernet Adapter
	
	NOTE: Advanced Micro Devices (AMD) is the manufacturer of the Compaq Imbedded
	Netflex network card.
	
	Additional query words: prodnt Novell
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
