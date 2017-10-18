---
layout: page
title: "Q146090: Configuring Proteon ProNET-4/16 p1394 Token Ring Adapter"
permalink: kb/146/Q146090/
---

## Q146090: Configuring Proteon ProNET-4/16 p1394 Token Ring Adapter

	Article: Q146090
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
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
	
	After you install the Proteon ProNET-4/16 p1394 Token Ring adapter, the
	following error message appears when you start Windows NT:
	
	  The dependency service or group failed to start.
	  This error prevented the network from starting.
	
	In addition, the following system events appear in the Event Viewer:
	
	  Event ID: 5001 Pronet : Could not allocate the resources necessary for
	  operation. Action : The driver failed to load, because it tried to allocate
	  too many resources. Decrease the number of receive and/or transmit buffers
	  and retry the operation.
	
	  Event ID: 5003 Pronet : Could not find an adapter. Action : The adapter could
	  not be found by the MAC driver. Check I/O base settings and retry the
	  operation.
	
	CAUSE
	=====
	
	The driver provided by Proteon is an NDIS driver and not a miniport driver. In
	addition, the network adapter does not use IBM Shared Memory area.
	
	RESOLUTION
	==========
	
	To work around this problem, run the Proteon Configuration Utility software in
	MS-DOS and select No IBM Registers in Advanced Settings.
	
	For more information, contact Proteon Technical Support at (508)898-3100.
	
	The Proteon products included here are manufactured by Proteon, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
