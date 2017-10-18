---
layout: page
title: "Q168710: XADM: How to Restore a 4.0 Information Store to a 5.0 Server"
permalink: kb/168/Q168710/
---

## Q168710: XADM: How to Restore a 4.0 Information Store to a 5.0 Server

	Article: Q168710
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage exc4 exc5
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some situations it may be necessary to restore an older Microsoft Exchange
	Information Store (IS) created under Microsoft Exchange Server version 4.0 to a
	version 5.0 Server. One solution would be a complete uninstallation and re-
	installation of the 4.0 Server and an upgrade of the 4.0 Server to 5.0. Since
	this would be quite time consuming another method can be used.
	
	MORE INFORMATION
	================
	
	Either of the following methods can be used after a clean install of Microsoft
	Exchange Server version 5.0.
	
	NOTE: The 5.0 Server must be installed with the same Microsoft Site and
	Organization name as the 4.0 Server that the files originated at.
	
	- Restore the online copy of the IS from the 4.0 backup set, choosing to erase
	  all existing data.
	
	- Remove all data from the current mdbdata directory including all logs, edb
	  files, and the Edb.chk file. Copy the 4.0 Priv.edb and Pub.edb files from an
	  offline backup. Start the IS.
	
	In either case, the Private and Public IS will be upgraded to version 2.35 and
	will start succesfully.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
