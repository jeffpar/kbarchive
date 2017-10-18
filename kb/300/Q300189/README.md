---
layout: page
title: "Q300189: PRB: Paradox ISAM Does Not Support Some Paradox 4.x Types"
permalink: kb/300/Q300189/
---

## Q300189: PRB: Paradox ISAM Does Not Support Some Paradox 4.x Types

	Article: Q300189
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.51,3.6,5.0,6.0,6.0 SP3,6.0 SP4,6.0 SP5
	Operating System(s): 
	Keyword(s): kbJET kbGrpDSVB kbDSupport
	Last Modified: 27-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, 6.0 SP3, 6.0 SP4, 6.0 SP5 
	- The DAO SDK, versions 3.51, 3.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Jet versions 3.51 and 4.0 provide a Paradox ISAM driver that allows
	access to Paradox 4.x tables. However, the Paradox ISAM driver does not support
	the BINARY BLOB (type B) Paradox 4.x data type. Thus, fields that use this data
	type will not be available in Visual Basic.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If you try to open a Data Access Objects (DAO) recordset against Paradox 4.x
	table that contains a field that has an unsupported data type, that field will
	be ignored. The field will not appear in the fields collection of any DAO object
	(TableDef, Table, dynaset, or snapshot).
	
	NOTE: Although DAO does not recognize or work with Paradox BINARY BLOB fields,
	DAO does recognize and work with Paradox OLE BLOB fields.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbJET kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbDAOsearch kbZNotKeyword6 kbSDKDAOSearch kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbSDKSearch kbSDKDAO360 kbSDKDAO351 kbVB600SP3 kbVB600SP4 kbVB600SP5
	Version           : :3.51,3.6,5.0,6.0,6.0 SP3,6.0 SP4,6.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
