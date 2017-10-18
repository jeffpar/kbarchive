---
layout: page
title: "Q151822: PRB: Visigenic Oracle Driver Case-Sensitive w/ Catalog API"
permalink: kb/151/Q151822/
---

## Q151822: PRB: Visigenic Oracle Driver Case-Sensitive w/ Catalog API

	Article: Q151822
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the 32-bit Visigenic Oracle driver version 2.0 and call any Catalog
	API and provide the owner name and/or the table name in lowercase, you will get
	a SQL_NO_DATA_FOUND on a SQLFetch. Existing ODBC applications such as Microsoft
	Access fail to attach Oracle tables as they cannot get the catalog information
	needed to attach the table.
	
	(Note that as of 12/9/98, Visigenic has been acquired by INPRISE, Inc.)
	
	CAUSE
	=====
	
	For the 2.0 Visigenic driver, SQLGetInfo for the InfoType SQL_IDENTIFIER_CASE is
	SQL_IC_UPPER, which means that the identifiers in SQL are case-sensitive and are
	stored in uppercase in the system catalog.
	
	WORKAROUND
	==========
	
	If you are using Microsoft Access, Microsoft Word, Microsoft Excel, Microsoft
	Visual Basic, or MSQuery, and if you are prompted with a logon dialog box, type
	the logon name in uppercase. If you are using Basic code, then provide the logon
	ID in upper case.
	
	If you are calling the ODBC Catalog API, use uppercase for all the identifiers,
	including the owner name. You may, however, pass a null pointer for the
	identifiers, depending on your requirement.
	
	Note that this problem is specific to calling the Catalog API and has nothing to
	do with the Oracle server's case sensitivity.
	
	For information about how to contact INPRISE, Inc., query in the Knowledge Base
	for one of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	
	Additional query words: MFC Database Classes RDO Visigenic
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	
