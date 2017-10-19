---
layout: page
title: "Q164016: Err Msg: Event ID: 4320 Duplicate Name on Network"
permalink: /kb/164/Q164016/
---

## Q164016: Err Msg: Event ID: 4320 Duplicate Name on Network

	Article: Q164016
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your Windows NT-based computer, you may receive the following
	error message:
	
	  At least one service or driver failed during system startup.
	
	The event viewer contains the following event log:
	
	  Event ID: 4320
	  Source:   NetBT
	  Description: Another machine has sent a name release message to this
	               machine probably because a duplicate name has been
	               detected on the TCP network. The IP address of the node
	               that sent the message is in the data. Use nbtstat -n in a
	               command window to see which name is in the Conflict state.
	
	CAUSE
	=====
	
	This behavior may be caused by a static mapping in the Windows Internet Name
	Service (WINS) server, which may conflict with the multihomed registration of
	your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the static mapping in the WINS server. To do so,
	use the following steps:
	
	1. On the WINS server computer, start the WINS Manager.
	
	2. Click Mappings, click Static Mappings, and then click the entry that
	  corresponds to your computer.
	
	3. Click Delete Mapping, and then click close.
	
	4. Restart your Windows NT-based computer (not the WINS server).
	
	MORE INFORMATION
	================
	
	Microsoft recommends static mappings only for non-WINS aware computers which are
	unable to register with a WINS server automatically.
	
	A multihomed name registration allows a machine with more than one IP address to
	register on a NetBIOS network without a name conflict.
	
	
	Additional query words: entries
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
