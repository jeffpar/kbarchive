---
layout: page
title: "Q267238: XADM: Directory Service Does Not Start After Restore Operation"
permalink: kb/267/Q267238/
---

## Q267238: XADM: Directory Service Does Not Start After Restore Operation

	Article: Q267238
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you restore the information store or the directory database, the services
	for these items do not start, and the following message is logged in the
	Application event log:
	
	  The errors JET_errDatabaseCorrupted (-1206 = 0xfffffb4a = 4294966090) and
	  JET_errDatabaseInconsistent (-550 = 0xFFFFFDDA = 4294966746)
	
	In addition, if you use the Eseutil tool with the /r option, the tools fails.
	
	CAUSE
	=====
	
	This error message described in the "Symptoms" section is a generic message; it
	can occur if you restore a database to a recovery server and databases already
	exist in the database folders. In this case, the database on the tape is not
	actually corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue, restore the database in an empty corresponding database
	folder. For example, if the directory service does not start, stop the directory
	service, rename the existing Dsadata folder on all drives, create new Dsadata
	folders on the drives, and then perform another restore operation.
	
	Additional query words: JET ESE damage exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
