---
layout: page
title: "Q149395: Stop Msg: 0x0000001E in RDR.SYS Caused by Corrupted SMBs"
permalink: kb/149/Q149395/
---

## Q149395: Stop Msg: 0x0000001E in RDR.SYS Caused by Corrupted SMBs

	Article: Q149395
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Windows NT Server or Workstation shows the following Stop error message if it
	receives a corrupted Server Message Block (SMB) while connecting to a remote
	computer:
	
	  STOP: 0x0000001E (0xC0000005, 0x801353D3, 0x0, 0x00001104)
	  KMODE_EXCEPTION_NOT_HANDLED - RDR.SYS
	
	Prior to the appearance of this error message, the system event log records the
	following information:
	
	  Event ID: 8006 Source: Rdr Type: Warning
	  The browser has received an illegal datagram from the remote computer
	  <computer name> to name <domain name> on transport Nbf
	  <adapter>. The data is the datagram.
	
	The Stop message occurs on Windows NT Servers and Workstations that are connected
	to remote computers using NetBEUI.
	
	CAUSE
	=====
	
	The Windows NT machine received a corrupted SMB with an improper word count. The
	SMB from the remote computer may have been corrupted by an intermediate router.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.50 3.51 prodnt ntblue debug
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
