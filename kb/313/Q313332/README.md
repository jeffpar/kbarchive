---
layout: page
title: "Q313332: INFO: Qualify Table Names When You Replicate Tables to DB2"
permalink: kb/313/Q313332/
---

## Q313332: INFO: Qualify Table Names When You Replicate Tables to DB2

	Article: Q313332
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): Kbhostintegserv2000
	Last Modified: 07-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you replicate tables from Microsoft SQL Server 2000 or Microsoft SQL Server
	7 to DB2/400 on an IBM AS/400 system through the Microsoft OLE DB Provider for
	DB2, you may need to qualify the table name to ensure that the table is placed
	in the right location. The qualified table name syntax is:
	
	  COLLECTION.TABLENAME
	
	For example, the following code uses an unqualified table name:
	
	  SELECT * FROM AUTHORS
	
	To qualify the table name, modify the code as follows:
	
	  SELECT * FROM PUBS.AUTHORS
	
	MORE INFORMATION
	================
	
	If you pass a SQL statement to DB2/400 with an unqualified table name, DB2/400
	qualifies the table name with the USERID or GROUPID of the authenticated user.
	
	When you create a publication in SQL Server, the table name in the article
	definition is not qualified by default. You must qualify the table name if:
	
	- No collection exists in DB2/400 with the same name as the USERID or GROUPID.
	
	- The replicated table must be placed in a different collection.
	
	To qualify the table name, edit the article information on the publication.
	Change the table name setting from "TABLENAME" to "COLLECTION.TABLENAME"
	(without the quotes).
	
	When you replicate tables, SQL Server also creates an MSREPL7 table (or similarly
	named table) on the target system to track certain replication information.
	However, this table name is not qualified. Therefore, DB2/400 qualifies it with
	the USERID or GROUPID. Replication may fail if no collection exists with the
	same name as the USERID or GROUPID, or if the user does not have sufficient
	permissions to that collection.
	
	REFERENCES
	==========
	
	For additional information about using the Microsoft OLE DB Provider for DB2,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q269626 INFO: Permissions Needed to Create Packages Using DB2OLEDB on DB2 and
	  DB2/400
	
	  Q222937 INF: Creating a Linked Server to DB2 using Microsoft OLE DB Provider
	  for DB2
	
	  Q218590 INF: Configuring Data Sources for the Microsoft OLE DB Provider for
	  DB2
	
	Additional query words: HIS
	
	======================================================================
	Keywords          : Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
