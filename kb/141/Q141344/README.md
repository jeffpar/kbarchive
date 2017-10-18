---
layout: page
title: "Q141344: Network Connections Refused Over NetBT"
permalink: kb/141/Q141344/
---

## Q141344: Network Connections Refused Over NetBT

	Article: Q141344
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
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
	
	You experience problems connecting to Windows NT computers over NetBT (NetBIOS
	for TCP/IP). Attempting to connect to the server produces the message:
	
	  System error 53 has occurred
	  The network path was not found
	
	Alternatively, attempting to logon to a Windows NT domain from a Windows for
	Workgroups 3.11 client may produce the error:
	
	  The password you specified is incorrect or your account is inactive. See your
	  network administrator for the password or to activate your account.
	
	This occurs despite providing the correct password, and the account being active.
	Stopping and restarting the server service on the affected server resolves the
	problem temporarily.
	
	CAUSE
	=====
	
	NetBT issues a TCP connection reset (RST) on receipt of a session request
	message from the client. This was because NetBT ran out of free connections to
	the underlying transport (TCP).
	
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: nbt rst connection reset
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
