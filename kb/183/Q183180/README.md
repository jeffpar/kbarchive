---
layout: page
title: "Q183180: DHCP Client XIDs Differ in DISCOVER and REQUEST Packets"
permalink: /kb/183/Q183180/
---

## Q183180: DHCP Client XIDs Differ in DISCOVER and REQUEST Packets

	Article: Q183180
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you capture a network trace using a network analyzer, such as Microsoft
	Network Monitor, you may see Dynamic Host Control Protocol (DHCP) traffic where
	the DHCP client does not use the same xid in its DISCOVER and REQUEST packets.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest Windows NT 4.0 Service Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base:
	
	  SERVPACK
	
	Microsoft has confirmed this to be a problem in Windows NT 3.51. We are
	researching this problem and will post additional information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The xid is the transaction identifier and is used by computers to synchronize
	communications and to identify which packet is the correct response to a
	request.
	
	
	REFERENCES
	==========
	
	For more information, please see RFC1541.
	
	RFCs may be obtained through the Internet as follows:
	
	Paper copies of all RFCs are available from the NIC, either individually or on a
	subscription basis (for more information, contact NIC@NIC.DDN.MIL). Online
	copies are available through FTP or Kermit from NIC.DDN.MIL as rfc/rfc####.txt
	or rfc/rfc####.PS (#### is the RFC number without leading zeros).
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
