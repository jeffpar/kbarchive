---
layout: page
title: "Q116042: Compatibility Layer Doesn't Support Some Paradox 4.x Types"
permalink: kb/116/Q116042/
---

## Q116042: Compatibility Layer Doesn't Support Some Paradox 4.x Types

	Article: Q116042
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Jet 2.0/Visual Basic 3.0 Compatibility Layer for Visual Basic
	version 3.0 provides an updated Paradox ISAM driver that allows access to
	Paradox 4.x tables. However, the following Paradox 4.x data types are not
	supported by the Paradox ISAM driver. Therefore, fields that use these data
	types will not be available in Visual Basic:
	
	- BINARY BLOB (type B)
	
	- FORMATTED MEMO (type F)
	
	- GRAPHIC BLOB (type G)
	
	MORE INFORMATION
	================
	
	If you attempt to open a Paradox 4.x table that contains a field that has an
	unsupported data type, that field will be ignored by Visual Basic. The field
	will not appear at all in the fields collection of any Visual Basic data access
	object (tabledef, table, dynaset, or snapshot).
	
	NOTE: Visual Basic does recognize and work with Paradox OLE BLOB fields, just not
	BINARY BLOB or GRAPHIC BLOB fields.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	
	=============================================================================
	
