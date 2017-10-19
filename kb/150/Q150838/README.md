---
layout: page
title: "Q150838: NWLNKSPX May Reset Connection With Out-Of-Sequence Packet"
permalink: /kb/150/Q150838/
---

## Q150838: NWLNKSPX May Reset Connection With Out-Of-Sequence Packet

	Article: Q150838
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Client connections may be dropped or reset when you do a query against a Windows
	NT server running NWLNKSPX.
	
	CAUSE
	=====
	
	When an application requests data from an application running on a Windows NT
	server, the server will send multiple data packets to the client workstation
	after receiving the request from the client station.
	
	If the client fails to send an acknowledgment (ACK) packet within 0.6 seconds,
	the server will retransmit the same data packet again. If the workstation then
	sends an ACK packet to acknowledge the initial data received from the server,
	the destination address of the ACK packet will zero out, and the server will
	drop the ACK packet and try to retransmit the same data packet again until the
	retry count is exhausted.
	
	RESOLUTION
	==========
	
	NWLNKSPX has been changed to ensure that packet sequencing is checked and the
	remote ACK address is not dropped.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.50 3.51 prodnt spx ipx
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
