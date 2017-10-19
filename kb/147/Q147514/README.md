---
layout: page
title: "Q147514: Stopping SNA Server Service Causes Perpetual &quot;Stopping&quot; Status"
permalink: /kb/147/Q147514/
---

## Q147514: Stopping SNA Server Service Causes Perpetual &quot;Stopping&quot; Status

	Article: Q147514
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1; winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 3.51 
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When SNA Server is configured with one or more 802.2 Token Ring or Ethernet
	connections on Windows NT 3.51 (or 3.51 Service Pack 1-4), the following
	problems can occur:
	
	- When you stop SNA Server, the SNA Server Admin program shows the server in a
	  perpetual "Stopping" state. If you issue the NET START command, the command
	  shows the SNA Server service as stopped, though one or more 802.2 link
	  services (SNADLC1, SNADLC2, ...) are still started.
	
	- If you stop an 802.2 connection or and 802.2 connection fails, the connection
	  may be stuck in an "Inactive" state and it is not possible to restart it
	  using SNA Server Admin.
	
	CAUSE
	=====
	
	During connection shutdown, the SNA Server 802.2 link service issues commands
	(such as DIR_READ_LOG or DLC_CLOSE_STATION) to the Windows NT DLC.SYS driver
	which never complete, causing the link service to fail to respond to the SNA
	Server Close(Link) request.
	
	While processing these commands, the Windows NT DLC driver is waiting on a
	response from the underlying NDIS miniport driver. However, the Windows NT
	NDIS.SYS wrapper request handler is not properly processing requests from the
	transport driver in some cases, causing an NDIS command to fail to complete.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	3.51 Service Pack 4. This problem was first corrected in Microsoft Windows NT
	version 3.51 Service Pack 1. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna 2.00 2.10 2.11 SP1 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOSWinSearch kbSNAServSearch kbOSWinNTSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1; winnt:3.51
	
	=============================================================================
	
