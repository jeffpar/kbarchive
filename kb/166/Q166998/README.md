---
layout: page
title: "Q166998: Services for Macintosh Modifies Header Information on Print Jobs"
permalink: /kb/166/Q166998/
---

## Q166998: Services for Macintosh Modifies Header Information on Print Jobs

	Article: Q166998
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Postscript print jobs submitted from a Macintosh client to a computer running
	Windows NT Server running Services for Macintosh and setup with a Postscript
	printer may not print.
	
	CAUSE
	=====
	
	To enable the spooler to track jobs from Macintosh clients, an extra line is
	prepended to the header information of the print job.
	
	
	RESOLUTION
	==========
	
	The Services for Macintosh print service has been modified so it no longer
	tracks jobs using this method. No additions are made to a Postscript job being
	sent to a Postscript printer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
