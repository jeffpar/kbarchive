---
layout: page
title: "Q181838: XADM: Jet97 Database Header Does Not Contain Last Repaired Date"
permalink: /kb/181/Q181838/
---

## Q181838: XADM: Jet97 Database Header Does Not Contain Last Repaired Date

	Article: Q181838
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Eseutil.exe program with the /MH switch to dump the header of a
	Jet97 database to a file, one of the fields in the header is Repair Count. This
	field indicates the number of times the database has been repaired using
	Eseutil.exe with the /P switch. However, the header does not contain a field
	that indicates when the database was last repaired. Knowing when the database
	was last repaired can be helpful when you are troubleshooting a problem that may
	be related to a damaged database.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: jet 97
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
