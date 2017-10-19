---
layout: page
title: "Q160669: Err. Msg: The Catalog Directory Can Not Be Found..."
permalink: /kb/160/Q160669/
---

## Q160669: Err. Msg: The Catalog Directory Can Not Be Found...

	Article: Q160669
	Product(s): Internet Information Server
	Version(s): WINNT:1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you query on Index Server, you may get the following error message:
	
	  The catalog directory can not be found in the location
	  specified by 'CiCatalog=' in file
	  \InetPub\scripts\samples\search\queryhit.idq.
	
	  (0xc0002037) encountered while processing the query "XXXX".
	
	CAUSE
	=====
	
	The # sign and <=COMMENTED OUT - Default Registry Value Used are deleted in
	the Query.idq and Queryhit.idq files.
	
	As a result, five spaces are left before your new catalog directory. When the
	query engine looks at the CiCatalog parameter, and sees spaces after the last
	"\", you get the above error message.
	
	The following is the correct line for the Query.idq and Queryhit.idq files:
	
	  # CiCatalog=e:\ <= COMMENTED OUT - default registry value used
	
	WORKAROUND
	==========
	
	Remove any trailing spaces after the "\" on the CiCatalog line in your .idq
	file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Microsoft Index Server version
	1.1. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110
	Version           : WINNT:1.1
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
