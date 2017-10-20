---
layout: page
title: "Q234146: BUG: ATL Consumer Wizard truncates SQL Server Field to TCHAR"
permalink: /kb/234/Q234146/
---

## Q234146: BUG: ATL Consumer Wizard truncates SQL Server Field to TCHAR

{% raw %}

	Article: Q234146
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbwizard kbATL210bug kbDatabase kbSQL kbATL300bug kbGrpDSVCDB kbSQLProg
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ATL consumer wizard maps DBTYPE_STR fields, such as SQL Server's text
	fields, to TCHAR arrays of 1024 bytes instead of an ISequentialStream pointer.
	The data for the columns is truncated to 1024 bytes.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	If data larger than 1024 is expected, you can increase the size of the array in
	your accessor class. For example, by default your code may look like the
	following:
	
	  TCHAR m_TextColumn[1024];
	  ...
	  COLUMN_ENTRY(3, m_TextColumn);
	
	Change the 1024 to the desired maximum length of the data.
	
	Another alternative is to use ISequentialStream to retrieve and set the data.
	ISequentialStream allows an application to read and write pieces at a time and a
	predefined maximum buffer size is not required. You would change the code above
	to:
	
	  ISequentialStream * m_TextColumn;
	  ...
	  BLOB_ENTRY(3, IID_ISequentialStream, STGM_READ,m_TextColumn);
	
	REFERENCES
	==========
	
	See Q190958 AOTBLOB for example of how to read and update using an
	ISequentialStream pointer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbATL210bug kbDatabase kbSQL kbATL300bug kbGrpDSVCDB kbSQLProg 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
