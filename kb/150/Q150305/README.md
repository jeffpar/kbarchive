---
layout: page
title: "Q150305: DEC FDDI Adapters Fail to Respond to Broadcasts"
permalink: /kb/150/Q150305/
---

## Q150305: DEC FDDI Adapters Fail to Respond to Broadcasts

	Article: Q150305
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Windows NT 3.51 DEFEA.SYS or DEFPA.SYS for the DEC EISA or PCI
	FDDI network adapters, the driver fails to respond to broadcast packets.
	
	CAUSE
	=====
	
	This problem occurs when the DEC FDDI adapter is reset. The problem occurs after
	a reset because the driver fails to register the broadcast address filter with
	the adapter after the reset.
	
	MORE INFORMATION
	================
	
	When the DEC FDDI adapter is initialized the device driver is responsible for
	registering the broadcast address on the adapter. In event the device driver has
	to reset the adapter for any reason, it is the drivers responsibility to
	completely reinitialize the adapter, including registering the broadcast address
	filter.
	
	The DEC FDDI adapter can be reset by the driver for a variety of reasons during
	normal use including requests to reset from a transport, and network conditions
	that generate adapter errors.
	
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
