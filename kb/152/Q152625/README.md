---
layout: page
title: "Q152625: Ibmtok.sys Generates Event Message ID:5002 Error"
permalink: /kb/152/Q152625/
---

## Q152625: Ibmtok.sys Generates Event Message ID:5002 Error

	Article: Q152625
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbhw kbusage kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Windows NT version 3.51 may fill up your system event log with the
	following stop error message.
	
	  Event ID 5002
	  Source IBMTOK
	  IbmTokMC3: Has determined that the adapter is not functioning correctly.
	
	Although the event log entries are critical, the functioning of the computer is
	not affected and the network connection is working without any problem.
	
	CAUSE
	=====
	
	The Ibmtok.sys driver is generating an Access Error interrupt. This is the
	result of a write to a read-only space on the CARD memory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt NDIS IBM
	
	======================================================================
	Keywords          : kbhw kbusage kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
