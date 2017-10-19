---
layout: page
title: "Q186317: Subscriptions Fail Transferring DB2 CHAR and VARCHAR Datatype"
permalink: /kb/186/Q186317/
---

## Q186317: Subscriptions Fail Transferring DB2 CHAR and VARCHAR Datatype

	Article: Q186317
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Data Replicator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Subscriptions fail transferring DB2 CHAR & VARCHAR Datatypes to SQL Server
	TEXT Columns. No nulls were included in the data transferred. The following
	error appears in the HDR Manager:
	
	  [Microsoft][ODBC SQL Server Driver][SQL Server]Attempt to insert the value
	  NULL into column 'ColumnName', table 'TableName'; column does not allow
	  nulls. INSERT fails.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Data Replicator version
	1.0.
	
	NOTE: Effective immediately, Microsoft has granted exclusive marketing and
	distribution rights to StarQuest Software for Host Data Replicator 1.1, a
	software utility for replicating among heterogeneous databases. Microsoft will
	not be offering this product or any future versions to its customers. StarQuest
	has renamed the product, StarQuest Data Replicator. Please refer to the
	following link for more information:
	
	  http://www.microsoft.com/sna/guide/starqst.asp?A=2&B=7
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSQLServSearch kbAudDeveloper kbHostDataRep
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
