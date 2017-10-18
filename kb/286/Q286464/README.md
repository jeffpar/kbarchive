---
layout: page
title: "Q286464: PRB: Error 7008 Occurs When Using DB2OLEDB Provider with DB2/400"
permalink: kb/286/Q286464/
---

## Q286464: PRB: Error 7008 Occurs When Using DB2OLEDB Provider with DB2/400

	Article: Q286464
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kb3rdparty kbOLEDB kbGrpDSVCDB kbDSupport kbsna400sp2 kbsna400sp3 kbDB2 kbhis2000 kbsna
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft OLE DB Provider for DB2 (DB2OLEDB) to try to execute
	an INSERT, UPDATE, or DELETE statement against a DB2/400 table, you may receive
	the following error message:
	
	  OLE/DB provider returned message: A SQL error has occurred. Please consult
	  the documentation for your specific DB2 version for a description of the
	  associated Native Error and SQL State. SQLSTATE: 55019, SQLCODE: -7008
	
	NOTE: You may also receive this error if you are trying to insert, update, or
	delete from a SQL Server linked server using the DB2OLEDB provider, and you are
	using the OPENQUERY syntax.
	
	If you are trying to insert, update, or delete from a SQL Server linked server by
	using the DB2OLEDB provider, you may also receive the following error when you
	are using 4-part name query:
	
	  Server: Msg 7306, Level 16, State 2, Line 1 Could not open table
	  'CATALOGNAME.SCEMANAME.TABLENAME' from OLE DB provider 'DB2OLEDB'. Unknown
	  provider error.
	
	If you turn on tracing by using DBCC TRACEON(7300), you may receive the following
	error message:
	
	  Server: Msg 7306, Level 16, State 2, Line 1 Could not open table
	  'CATALOGNAME.SCEMANAME.TABLENAME' from OLE DB provider 'DB2OLEDB'. Unknown
	  provider error. OLE DB error trace [Non-interface error: OLE DB provider
	  DB2OLEDB returned DBPROP_STRUCTUREDSTORAGE without DBPROPVAL_OO_BLOB being
	  supported]. OLE DB error trace [OLE/DB Provider 'DB2OLEDB'
	  IOpenRowset::OpenRowset returned 0x80040e14: Unknown provider error.].
	
	CAUSE
	=====
	
	This will occur under the following combination of conditions:
	
	- The data source is DB2/400.
	
	- The Auto Commit initialization property is set to FALSE. You can set the
	  initialization properties in a UDL file using Microsoft Data Links, the OLE
	  DB initialization string, or ADO connection string.
	
	- The Distributed Transaction initialization property is set to TRUE. NOTE:
	  this applies to Host Integration Server only.
	
	- The target object that you are attempting to update is an AS/400 physical
	  file or keyed physical file residing in an AS/400 library (as opposed to a
	  DB2/400 collection) for which journaling has not been enabled.
	
	
	RESOLUTION
	==========
	
	The following are two ways to prevent this problem:
	
	- Set Auto Commit to TRUE, or set Distributed Transaction to FALSE. In this
	  case, INSERT, UPDATE, and DELETE operations are automatically committed
	  whenever they are executed. Journaling is not required .
	
	- Enable journaling in AS/400 for that particular table (physical file) for
	  which you want to do an INSERT, UPDATE, or DELETE.
	
	  To enable journaling, do the following:
	
	  1. Create the journal receiver (CRTJRNRCV).
	
	  2. Create the journal (CRTJRN) by inputting the journal receiver created in
	     step 1.
	
	  3. Start the journal physical file (STRJRNPF) by inputting the journal and
	     journal receiver created in steps 1 and 2 and associating the journal to a
	     specific SQL table (physical file).
	
	IMPORTANT: If you are trying to do the INSERT from a Microsoft SQL Server Linked
	Server, you must enable journaling. SQL Server automatically starts a
	transaction and therefore setting Auto Commit to TRUE will not work.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For more information on using the commands referenced in this article, please
	refer to the IBM OS/400 Backup and Recovery (Document Number SC41-5304-03) and
	IBM OS/400 CL Reference V4R4 (Document Number SC41-5722-03).
	
	
	AS/400 and DB2 are IBM products.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: OS400 OS/400
	
	======================================================================
	Keywords          : kb3rdparty kbOLEDB kbGrpDSVCDB kbDSupport kbsna400sp2 kbsna400sp3 kbDB2 kbhis2000 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
