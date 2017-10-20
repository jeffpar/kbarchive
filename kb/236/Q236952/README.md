---
layout: page
title: "Q236952: PRB: Sort Order Has Changed with Microsoft Jet Version 4.0"
permalink: /kb/236/Q236952/
---

## Q236952: PRB: Sort Order Has Changed with Microsoft Jet Version 4.0

{% raw %}

	Article: Q236952
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5,2000,4.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDatabase kbDTL kbJET kbMFC kbODBC kbOLEDB kbVBp600 kbVC kbVJ kbGrpDSMDAC
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, version 4.0 
	- Microsoft OLE DB Provider for Jet, version 4.0 
	- Microsoft Access 2000 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Microsoft Jet version 4.0, sorting is different than in previous versions.
	For example, assume you have the following records in an Access table:
	
	+--------+
	| FIELD1 | 
	+--------+
	| W      | 
	+--------+
	| W-     | 
	+--------+
	| WB     | 
	+--------+
	| W-B    | 
	+--------+
	
	In previous versions of the Jet database engine, issuing "SELECT * FROM TABLE1
	ORDER BY field1" gives the following results:
	
	+--------+
	| FIELD1 | 
	+--------+
	| W      | 
	+--------+
	| W-     | 
	+--------+
	| W-B    | 
	+--------+
	| WB     | 
	+--------+
	
	With Jet version 4.0, you now get the following results:
	
	+--------+
	| FIELD1 | 
	+--------+
	| W      | 
	+--------+
	| W-     | 
	+--------+
	| WB     | 
	+--------+
	| W-B    | 
	+--------+
	
	CAUSE
	=====
	
	Microsoft Jet version 4.0 uses a new sorting order that treats hyphens (-) and
	single quotation marks (') as special characters. For example, Co-op and Coop
	are now considered equal when sorting. Also O'Connor is treated the same as
	OConnor.
	
	RESOLUTION
	==========
	
	This behavior is by design. You cannot change any settings to affect this
	behavior.
	
	MORE INFORMATION
	================
	
	SQL Server full-text queries and Index server have similar behavior when
	searching.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q200043 PRB: Dashes '-' Ignored in Search with SQL Full-Text and MSIDXS
	  Queries
	
	Additional query words: DAO 3.6 ODBC OLE DB dash mdac 2.1
	
	======================================================================
	Keywords          : kbDAOsearch kbDatabase kbDTL kbJET kbMFC kbODBC kbOLEDB kbVBp600 kbVC kbVJ kbGrpDSMDAC kbDSupport kbDAO360 kbGrpDSODBC 
	Technology        : kbAudDeveloper kbAccessSearch kbAccess2000 kbAccess2000Search kbODBCSearch kbOLEDBSearch kbMDACSearch kbMDAC250 kbODBCAccess400 kbOLEDBProvJet400 kbOLEDBProvSearch
	Version           : WINDOWS:2.5,2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
