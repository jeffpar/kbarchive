---
layout: page
title: "Q132394: Streaming Mode NPMCA.SYS NIC Sleeps on Transmit."
permalink: /kb/132/Q132394/
---

## Q132394: Streaming Mode NPMCA.SYS NIC Sleeps on Transmit.

	Article: Q132394
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under heavy stress situations a WinNT Server with a Network Peripherals Inc.
	FDDI NIC (NPMCA.SYS) disappears from the network. Performing a NET VIEW
	\\<Server_Name> command returns Error 53, "Name not found." Existing
	connections and applications return errors.
	
	CAUSE
	=====
	
	When set for "Streaming Mode" the Network Peripherals FDDI NIC goes to sleep
	under heavy stress. Packets are indicated to the transport and the transport
	submits packets to the NIC (NPMCA.SYS) but the NIC does not put the packet on
	the network.
	
	A Network General Sniffer trace during the sleep shows retry traffic to the
	target, but no responses.
	
	When you set the card to "Normal Mode", it does not exhibit this behavior.
	
	
	RESOLUTION
	----------
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already done
	so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
	Network Peripherals Inc. provided Microsoft with the fix.
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	This problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
