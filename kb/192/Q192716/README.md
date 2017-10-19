---
layout: page
title: "Q192716: HOWTO: Update More Than 40 Fields in an Access (Jet) Database"
permalink: /kb/192/Q192716/
---

## Q192716: HOWTO: Update More Than 40 Fields in an Access (Jet) Database

	Article: Q192716
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.5,2.0,2.1 SP2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAccess kbADO150 kbADO200 kbDatabase kbJET _IK12473 kbVBp500 kbVBp600 kbGrpDSVBDB kbGr
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Data Access Components versions 1.5, 2.0, 2.1 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following error occurs when using RDO or ADO to update data in an Access
	(Jet) database:
	
	  Query is too complex
	
	Due to a limitation of the Jet database engine, this error can occur if the
	recordset to be updated contains more than 40 fields.
	
	Using the Jet 3.51 engine, the error occurs if the recordset to be updated
	contains more than 50 fields. With the Jet 4.0 engine and later, the error
	occurs if the recordset to be updated contains more than 99 fields.
	
	Using the Jet 4.0 engine and later, you may also see the errors:
	
	  Expression too complex
	
	-or-
	
	  Too many defined fields
	
	This article describes the problem scenario, the Jet limitation, and several
	workarounds.
	
	MORE INFORMATION
	================
	
	When executing the Update() or BatchUpdate() methods of RDO's rdoResultset
	object, or the Update() or UpdateBatch() methods of ADO's Recordset object, the
	ODBC error S1000 "Query is too complex" (Visual Basic run-time error 40002)
	occurs. An error with the same description occurs using the Microsoft Jet OLE DB
	providers versions 3.51 and later.
	
	This behavior occurs because the default behavior of ADO and RDO is to use each
	field in the recordset to determine the record to be updated on the server. That
	is, when the update is attempted, a SQL Update query is sent to the server. Part
	of this query is a WHERE clause that is used to identify the record to be
	updated. An AND clause appears within the WHERE clause for each field to be used
	in that identification. Updating a recordset with more than 40 fields involves a
	WHERE clause with more than 40 ANDs.
	
	The Jet engine allows only 40 AND clauses within a SQL WHERE or HAVING clause.
	Jet 3.51 increased this limit to 50 AND clauses, and Jet 4.0 increased the limit
	to 99 AND clauses. The Access engine returns a "Query is too complex" error when
	it encounters such a SQL statement. See the REFERENCES section of this article
	for more information.
	
	There are several ways to avoid this behavior:
	
	1. For new applications, use DAO when working with Access databases. DAO was
	  designed for this purpose, and will not issue a SQL query to perform the
	  update. Note that RDO and especially ADO were designed to operate efficiently
	  with many other types of databases and are recommended for applications that
	  will interact with various servers or that will be upsized in the future to
	  use Microsoft SQL Server, for example.
	
	2. When opening the recordset to be updated (such as the RDO OpenResultset or
	  ADO OpenRecordset methods), select specific, and 40 or fewer fields.
	
	3. Use a server-side cursor:
	
	   - To do this in ADO, set the CursorLocation location property of the
	     Recordset object to adUseServer before opening the Recordset:
	
	           ...
	           Dim rs As ADODB.Recordset
	           Set rs = New ADODB.Recordset
	           rs.CursorLocation = adUseServer
	           rs.Open ...
	              ...
	
	   - In RDO, set the CursorDriver property of the rdoEnvironment object before
	     calling the OpenConnection() method:
	
	           ...
	           Dim eng As RDO.rdoEngine
	           Dim cn As RDO.rdoConnection
	           Dim env As RDO.rdoEnvironment
	           Dim rs As RDO.rdoResultset
	
	           Set eng = New rdoEngine
	           Set env = eng.rdoCreateEnvironment(...)
	           env.CursorDriver = rdUseServer
	           Set cn = env.OpenConnection(...)
	           Set rs = cn.OpenResultset(...)
	           ...
	   
	
	4. Ensure that a unique key is used to identify the record to be updated, rather
	  than the default behavior of using every field. A unique key (though not
	  necessarily a primary key) must be defined in the underlying recordset for
	  this technique to work.
	   - To do this in ADO (this will not work in versions prior to ADO 2.0), set
	     the Recordset object's "Update Criteria" property to adCriteriaKey. This
	     will work both for the Update() and UpdateBatch() methods:
	
	           ...
	           Dim rs As ADODB.Recordset
	           Set rs = New ADODB.Recordset
	           rs.CursorLocation = adUseClient
	           rs.Properties("Update Criteria").Value = adCriteriaKey
	           rs.Open ...
	           ...
	      
	
	   - For RDO, use the ClientBatch cursor library and ensure that the Resultset
	     object's UpdateCriteria property is not set to rdCriteriaAllCols. By
	     default, this property is set to rdCriteriaKey, which will cause the use
	     of the primary key to determine the row(s) to be updated on the server:
	
	           ...
	           Dim eng As RDO.rdoEngine
	           Dim cn As RDO.rdoConnection
	           Dim env As RDO.rdoEnvironment
	           Dim rs As RDO.rdoResultset
	
	           Set eng = New rdoEngine
	           Set env = eng.rdoCreateEnvironment(...)
	           env.CursorDriver = rdUseClientBatch
	           Set cn = env.OpenConnection(...)
	           Set rs = cn.OpenResultset(...)
	           rs.Edit
	           ...
	           rs.UpdateCriteria = rdCriteriaKey
	           rs.Update
	           ...
	      
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q92690 ACC: Limit on ANDs in SQL Select Statement
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAccess kbADO150 kbADO200 kbDatabase kbJET _IK12473 kbVBp500 kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbMDAC260 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbMDACSearch kbMDAC150 kbMDAC200 kbMDAC210SP2
	Version           : :1.5,2.0,2.1 SP2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
