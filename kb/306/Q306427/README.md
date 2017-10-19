---
layout: page
title: "Q306427: DB2OLEDB Provider: AV When Doing INSERT into DB2 Table"
permalink: /kb/306/Q306427/
---

## Q306427: DB2OLEDB Provider: AV When Doing INSERT into DB2 Table

	Article: Q306427
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000 kbhis2000bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft OLE DB Provider for DB2 (DB2OLEDB) that is
	included with Host Integration Server 2000 to do an INSERT into a DB2 table from
	a SQL linked server and you are doing this by SELECTing data from a Microsoft
	SQL Server table by using either a four-part naming convention or OPENQUERY, an
	access violation (AV) occurs.
	
	This problem can occur when the INSERT contains more than 145 columns.
	
	SQL Server may generate a stack dump and write out information to the ERRORLOG
	file and a symptom dump file when the access violation occurs. The beginning of
	the stack dump in the ERRORLOG file may appear similar to the following:
	
	  Stack Dump being sent to C:\Program Files\Microsoft SQL
	  Server\MSSQL\log\SQL00097.dmp
	  2001-07-18 13:35:24.59 spid54 Error: 0, Severity: 19, State: 0
	  2001-07-18 13:35:24.59 spid54 SqlDumpExceptionHandler: Process 54 generated
	  fatal exception c0000005 EXCEPTION_ACCESS_VIOLATION.
	  SQL Server is terminating this process..
	
	  Short Stack Dump
	  752150B1 Module(MSEIDRDA+000150B1)
	  (std::deque<Xo2Db2Token,std::allocator<Xo2Db2Token>
	  >::erase+00000321) 11E04010 Module(UNKNOWN+00000000)
	
	NOTE: The INSERT into the DB2 table actually completes successfully even though
	the access violation occurs.
	
	CAUSE
	=====
	
	If the INSERT has more than 145 columns, a pointer is being overwritten when the
	OLE DB Provider's SQL parser is trying to clean up its queue after the INSERT
	has been processed. The overwriting of the pointer results in the access
	violation. Because this occurs after the INSERT is processed, the DB2 table is
	successfully updated by the INSERT command.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+-------------------------------------+
	| File name    | Date       | Time    | 
	+-------------------------------------+
	| Db2oledb.dll | 08/10/2001 | 09:10AM | 
	+-------------------------------------+
	| Mseidrda.dll | 08/10/2001 | 09:10AM | 
	+-------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
