---
layout: page
title: "Q159970: Slow List of Folders and Files with CSNW"
permalink: /kb/159/Q159970/
---

## Q159970: Slow List of Folders and Files with CSNW

	Article: Q159970
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Workstation version 4.0 takes approximately 20 seconds to display
	folders and files in Network Neighborhood when CSNW is installed. This may also
	occur if the NWLink IPX/SPX interface is disabled while the RAS interface is
	enabled. If you enable NWLink IPX/SPX on the NIC interface or disable CSNW, the
	time decreases to 1 to 2 seconds.
	
	
	CAUSE
	=====
	
	There is a problem in the Client Services for NetWare redirector (Nwrdr.sys).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt nwlink csnw nwrdr
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	
	=============================================================================
	
