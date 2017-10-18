---
layout: page
title: "Q183575: IDBSchemaRowset::GetSchemas Returns Inaccurate Information"
permalink: kb/183/Q183575/
---

## Q183575: IDBSchemaRowset::GetSchemas Returns Inaccurate Information

	Article: Q183575
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for AS/400 and VSAM, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Rowset Viewer sample of the OLE DB 1.5 Solution Developer Kit,
	select IDBSchemaRowset::GetSchemas, and then select the drop-down list box for
	the different schemas, you can see that the unsupported restrictions are dimmed.
	Some of the unavailable restrictions are, in fact, supported. Only one,
	TABLE_CATALOG, is unsupported and should be dimmed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft OLE DB Provider for
	AS/400 and VSAM version 1.0, included with Microsoft SNA Server version 4.0.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The schemas should return the following restrictions:
	
	Schema Columns
	
	  Supports:
	     TABLE_SCHEMA
	     TABLE_NAME
	     COLUMN_NAME
	  Not supported:
	     TABLE_CATALOG
	
	Schema Indexes
	
	  Supports:
	     TABLE_SCHEMA
	     INDEX_NAME
	     TYPE
	     TABLE_NAME
	  Not supported:
	     TABLE_CATALOG
	
	Schema Provider Types
	
	  Supports:
	     DATA_TYPE
	     BEST_MATCH
	
	Schema Tables
	
	  Supports:
	     TABLE_SCHEMA
	     TABLE_NAME
	     TABLE_TYPE
	  Not supported:
	     TABLE_CATALOG
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvSearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
