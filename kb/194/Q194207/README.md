---
layout: page
title: "Q194207: HOWTO: How to Use Access Autonumber Column with OLE DB Templates"
permalink: kb/194/Q194207/
---

## Q194207: HOWTO: How to Use Access Autonumber Column with OLE DB Templates

	Article: Q194207
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbJET kbProvider kbVC600 kbATL300 kbConsumer kbGrpDSVCDB kbDSupport
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the OLE DB Templates with an Access database, it is often necessary
	to add records to a table that contains an autonumber column.
	
	Enabling the autonumber column to increment properly with the Microsoft OLE DB
	Provider for Jet 3.51 requires some care. To accomplish the task, two accessors
	are required:
	
	- one, for inserting new records, that contains the autonumber column so it can
	  be retrieved and used in the application.
	
	- one that does not contain the autonumber column.
	
	How to use Multiple Accessors with the OLE DB Templates is documented in the MSDN
	in the FAQ for the Consumer Templates inside the Visual C++ documentation.
	
	The following sample code displays how to define multiple accessors:
	
	     BEGIN_ACCESSOR_MAP(CProductsAccessor, 2)   // Pass number of accessors
	
	       BEGIN_ACCESSOR(0, true)         // true = an auto accessor
	         COLUMN_ENTRY(2, m_ProductName)
	         COLUMN_ENTRY(3, m_UnitPrice)
	         COLUMN_ENTRY(4, m_UnitsInStock)
	         COLUMN_ENTRY(5, m_UnitsOnOrder)
	         COLUMN_ENTRY(6, m_ReorderLevel)
	       END_ACCESSOR()
	       BEGIN_ACCESSOR(1, false)       // false = not an autoaccessor
	         COLUMN_ENTRY(1, m_ProductID)
	       END_ACCESSOR()
	
	     END_ACCESSOR_MAP()
	
	Code to add a new record to the table would resemble the following:
	
	     CProducts rs;
	
	     rs.Open();
	     rs.ClearRecord();
	     strcpy(rs.ProductName,"New product name");
	     rs.UnitPrice = 10;
	     rs.UnitsInStock = 0;
	     rs.UnitsOnOrder = 100;
	     rs.ReorderLevel = 25;
	     rs.Insert();
	
	This code inserts the new record using the auto accessor; the ProductId column,
	which is defined as an autonumber column, will be automatically updated by Jet.
	If we had included the autonumber column in the auto accessor, the OLE DB
	Provider for Jet 3.51 would have used whatever value we had assigned to
	m_ProductID when it updated the column and not used an autoincrement value.
	
	MORE INFORMATION
	================
	
	To retrieve the values for the autoincrement column in the second accessor, an
	explicit call to GetData() is required specifying the accessor containing the
	autoincrement column:
	
	     rs.MoveNext(); //Move to next record retrieving values for auto accessor
	     rs.GetData(1); //Retrieve values for accessor 1
	
	When changing data via SetData(), the accessor containing the columns you want
	updated (that is, not the autoincrement column) should be specified; otherwise,
	SetData() will loop though each accessor, including the accessor that contains
	the autonumber column.
	
	     rs.UnitsInStock--;  // Decrement units in stock
	     rs.SetData(0);      // Update columns in accessor 0
	
	NOTE: Jet 4.0 provider will not have this limitation. To use autoincrement
	columns with it, you need to use COLUMN_ENTRY_STATUS(1, m_id, m_id_status) and
	set rs.m_id_status = DBSTATUS_S_IGNORE; before calling Insert().
	
	REFERENCES
	==========
	
	Microsoft OLE DB Provider for Jet 3.51 that ships with Visual C++ 6.0 has
	version 3.52 for msjtor35.dll.
	
	Additional query words: identity
	
	======================================================================
	Keywords          : kbDatabase kbJET kbProvider kbVC600 kbATL300 kbConsumer kbGrpDSVCDB kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
