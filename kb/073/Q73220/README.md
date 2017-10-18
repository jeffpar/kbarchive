---
layout: page
title: "Q73220: Link Pulse May Need to Be Disabled on 3Com TP Cards"
permalink: kb/073/Q73220/
---

## Q73220: Link Pulse May Need to Be Disabled on 3Com TP Cards

	Article: Q73220
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Depending on the hub used, the Link Pulse jumper on a 3Com TP card may need to
	be disabled to properly communicate on a LAN Manager network.
	
	MORE INFORMATION
	================
	
	Link Pulse jumpers are included on all of 3Com's TP cards (ELNKII TP, ELNK MC
	TP, ELNK16TP) for 10base-T compliance. Some hubs (for example, older Synoptics
	hubs) require that the Link Pulse jumper be disabled. The following are known
	symptoms that occur when running with this jumper enabled when it should be
	disabled:
	
	- Net view \\SERVER <= Works 20 percent of the time.
	
	- Net use \\SERVER\SHARE <= Works randomly.
	
	- NET VIEW <= Works 99 percent of the time.
	
	A general NET VIEW works correctly most of the time because LAN Manager gets this
	information from a list of server announce packets that it has collected in the
	server name table -- it does not directly query the net for this information.
	
	Note: Similar symptoms can occur if the transceiver setting in the PROTOCOL.INI
	file does not match what is being used on the board. If an external transceiver
	is used with the board, transceiver should be set to equal "external" in the
	PROTOCOL.INI file. If the internal transceiver on the board is used, transceiver
	should be set to equal "onboard" in the PROTOCOL.INI, or the transceiver line
	should be deleted from the PROTOCOL.INI file.
	
	Additional query words: twisted pair 10 base T
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
