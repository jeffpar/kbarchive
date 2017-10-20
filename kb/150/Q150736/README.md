---
layout: page
title: "Q150736: Stopping SNA Server Service Leads to Perpetual Stopping State"
permalink: /kb/150/Q150736/
---

## Q150736: Stopping SNA Server Service Leads to Perpetual Stopping State

{% raw %}

	Article: Q150736
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
	connections on Microsoft Windows NT 3.51 (or 3.51 Service Pack 1-4), you may
	have one of the following problems:
	
	- When you stop SNA Server, the SNA Server Admin program shows the server in a
	  perpetual Stopping state. A net start command shows the SNA Server service as
	  stopped, though one or more 802.2 link services (SNADLC1, SNADLC2, ...) will
	  still be started.
	
	- If an 802.2 connection is stopped or fails, the connection may be stuck in an
	  Inactive state and it is not possible to restart it using SNA Server Admin.
	
	CAUSE
	=====
	
	During connection shutdown, the SNA Server 802.2 link service issues commands
	(such as DIR_READ_LOG or DLC_CLOSE_STATION) to the Windows NT Dlc.sys driver
	that never completes, causing the link service to fail to respond to the SNA
	Server's Close(Link) request.
	
	When it processes these commands, the Windows NT DLC driver is waiting on a
	response from the underlying NDIS miniport driver. However, the Windows NT
	Ndis.sys wrapper request handler was not properly processing requests from the
	transport driver in some cases, causing an NDIS command to fail to complete.
	
	RESOLUTION
	==========
	
	Contact Microsoft for a Windows NT 3.51 hotfix for this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOSWinSearch kbSNAServSearch kbOSWinNTSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1; winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
