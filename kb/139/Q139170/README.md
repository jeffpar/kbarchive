---
layout: page
title: "Q139170: Event ID 5002 Appears Using Banyan Vines Client and IBMTOK"
permalink: kb/139/Q139170/
---

## Q139170: Event ID 5002 Appears Using Banyan Vines Client and IBMTOK

	Article: Q139170
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Banyan Vines client service version 5.5.6 and the IBM Token
	Ring driver (IBMTOK.SYS) in Windows NT, Event ID 5002 appears in the Event
	Viewer. The description of the system event is:
	
	  The description for Event ID (5002) in Source (IbmTok) could not be found.
	
	
	CAUSE
	=====
	
	This problem occurs when the IBMTOK.SYS driver identifies that any one of the
	bits in a particular register (ISRP_LOW) on the network adapter are set. Refer
	to Chapter 7 of the IBM LAN Technical Reference regarding ISRP- even. The event
	log data indicates that bit 2 is being set. Bit 2 is the access interrupt bit
	described as follows:
	
	  When this bit is on, it indicates that a shared RAM violation or an Illegal
	  MMIO operation by the computer to an Attachment Control Area register pair
	  has occurred. The following conditions will set this bit:
	
	  - Any workstation write to a write protected location in the shared RAM.
	
	  - Any workstation write to the shared RAM mgmt registers (WRBR, WWCR and
	  WWOR).
	
	  - Any workstation write to ISRA(even).
	
	  - Any workstation write to a non-zero field of ISRP - odd or ISRA - odd.
	  Non-zero Interrupt fields of ISRP - odd and ISRA -odd must be manipulated
	  using OR and AND MMIO commands.
	
	Windows NT logs the error and resets the ISRP_LOW byte to 0.
	
	
	RESOLUTION
	==========
	
	A new version of VNS.SYS that resolves this problem is available from Banyan
	Support Centers.
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
