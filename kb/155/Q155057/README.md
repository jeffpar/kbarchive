---
layout: page
title: "Q155057: ScanLogicalLocksByName Supported in FPNW with Service Pack 5"
permalink: /kb/155/Q155057/
---

## Q155057: ScanLogicalLocksByName Supported in FPNW with Service Pack 5

	Article: Q155057
	Product(s): Microsoft Programming Utilities
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	ScanLogicalLocksByName is a new application programming interface (API) function
	that is supported in File and Print Services for NetWare (FPNW) with the
	installation of the update mentioned below. ScanLogicalLocksByName allows
	enumeration of connections with logical locks.
	
	This new function enumerates the connections that have a given logical lock
	logged. Given a logical lock name, it returns all connections that have the lock
	logged. Note that logical locks are different than normal MS-DOS locks. They are
	just named lock objects that different applications can use to coordinate
	locking.
	
	STATUS
	======
	
	This feature is included in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : :3.51
	
	=============================================================================
	
