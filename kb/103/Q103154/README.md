---
layout: page
title: "Q103154: Nbf Received an Unexpected FRMR Packet in Event Viewer"
permalink: /kb/103/Q103154/
---

## Q103154: Nbf Received an Unexpected FRMR Packet in Event Viewer

	Article: Q103154
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	The following error may occur in the event log when a logical link
	connection (LLC) entity receives an invalid data unit:
	
	  Nbf received an unexpected FRMR packet from a remote computer.
	
	FRMR is the Frame Reject frame sent by the NetBEUI Frames (NBF) LLC
	layer when one of the following conditions causes a data unit to
	become invalid:
	
	- Invalid sequence number
	
	- Invalid presence of an information field
	
	- Maximum allowable length for an LLC data unit is exceeded
	
	These errors cannot be corrected by retransmission. In response to the
	FRMR frame, the workstation sends a Disconnect (DISC) command to
	terminate the link connection. The workstation may then reestablish
	the connection.
	
	Additional query words: prodnt Event:9011
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
