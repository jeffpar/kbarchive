---
layout: page
title: "Q215297: XADM: Windows NT Version Change Rebuilds Exchange DB Indexes"
permalink: kb/215/Q215297/
---

## Q215297: XADM: Windows NT Version Change Rebuilds Exchange DB Indexes

	Article: Q215297
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you upgrade the major (that is, Microsoft Windows NT 3.51. to Windows NT
	4.0) or minor version (that is, Windows NT Service Pack 3 to Windows NT Service
	Pack 4) of Windows NT on an Exchange Server computer, the following events are
	logged in the Windows NT Event Viewer application event log:
	
	  Event ID: 172
	  Source: ESE97
	  Type: Error
	  Category: Table/Column/Index
	  Description:
	  'MSExchangeIS ((298))' The database engine is initiating index cleanup of
	  database 'c:\exchsrvr\mdbdata\priv.edb' as a result of an NT version upgrade
	  from '4.0.1381 SP3' to '4.0.1381 SP4'.
	
	  Event ID: 173
	  Source: ESE97
	  Type: Error
	  Category: Table/Column/Index
	  Description:
	  'MSExchangeIS ((298))' The database engine is initiating index cleanup of
	  database 'c:\exchsrvr\mdbdata\priv.edb' as a result of an NT version upgrade
	  to '4.0.1381 SP4'.
	
	  Event ID: 174
	  Source: ESE97
	  Type: Error
	  Category: Table/Column/Index
	  Description:
	  'MSExchangeIS ((298))' Database 'c:\exchsrvr\mdbdata\priv.edb': The secondary
	  index '+Q6749+S3001+Q6748 409' of table 'Folder' will be rebuilt as a
	  precautionary measure after the NT version upgrade of this system.
	
	NOTE: The items surrounded by single quotes in the event IDs above do not always
	match what is listed in the above example.
	
	MORE INFORMATION
	================
	
	The Exchange Server Database engine has detected a potential change (or fix) in
	the sort order for various characters in the newly installed version (major or
	minor) of Windows NT. To prevent any corruption to secondary indexes, the
	Exchange Server Database engine assumes that the sort order has changed and
	initiates the rebuilding of the indexes.
	
	Additional query words: sort order corruption JET
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	
