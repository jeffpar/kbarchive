---
layout: page
title: "Q198660: DOC: Additional Jet Database Record Size Information"
permalink: /kb/198/Q198660/
---

## Q198660: DOC: Additional Jet Database Record Size Information

{% raw %}

	Article: Q198660
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0,7.0,97
	Operating System(s): 
	Keyword(s): kbdocfix kbAccess kbDatabase kbJET kbODBC kbVBp400 kbVBp500 kbVBp600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because Microsoft Jet allows for variable length fields, you may occasionally
	receive DAO error 3047:
	
	  "Record Too Large"
	
	This occurs if the physical storage requirements of a record exceeds the amount
	of free space available in a data page (about 2000 bytes).
	
	Appendix A of the Microsoft Jet Database Engine Programmer's Guide provides a
	list of factors you must take into account when estimating the size of a record
	in a Microsoft Jet database (MDB file). The book omits some information
	regarding MEMO and OLE fields.
	
	MORE INFORMATION
	================
	
	The Microsoft Jet Database Engine Programmer's Guide, Appendix A, documents that
	Microsoft Jet stores MEMO and OLE fields on separate pages (Long Value pages)
	from the rest of the record. And that for every non-NULL MEMO or OLE field,
	there is a 12-byte overhead in the main record that points to the location of
	the start of the Long Value page chain.
	
	Appendix A, however, does not document that Microsoft Jet 3.5 and earlier will
	attempt to store the MEMO or OLE value in the main record if the size of the
	data is less than or equal to 32 bytes. This results in faster lookup of these
	values and does not incur an additional 2K storage overhead, but does retain the
	12-byte overhead. If the record is very large, (approaching 2000 bytes for
	example, the maximum record size), the MEMO and OLE fields will be stored in a
	Long Value page even if 32 bytes or less.
	
	For Jet 4.0 (VB6.1, Office 2000), this limit is increased to 64 bytes (not 64
	characters).
	
	Also for Jet 4.0, the page size is increased from 2K to 4K and the maximum record
	size has increased to approximately 4000 bytes.
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Malcolm Stewart, Microsoft Corporation
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbAccess kbDatabase kbJET kbODBC kbVBp400 kbVBp500 kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbAccess97 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbAccess97Search kbAccess95Search kbVB400Search kbVB400 kbZNotKeyword3 kbAccess700
	Version           : WINDOWS:4.0,5.0,6.0,7.0,97
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
