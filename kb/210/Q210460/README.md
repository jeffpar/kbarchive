---
layout: page
title: "Q210460: PRB: Data Truncated Error With CRecordset"
permalink: /kb/210/Q210460/
---

## Q210460: PRB: Data Truncated Error With CRecordset

{% raw %}

	Article: Q210460
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbOracle kbSQLServ kbVC
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to move to record in a wizard-generated recordset, the following
	error can occur:
	
	  Data truncated.
	
	You may also see the following TRACE message in the debug output window:
	
	  Error: field data truncated during data fetch.
	
	CAUSE
	=====
	
	This error occurs when you are trying to access data in a text field that
	contains more than 255 characters. If you use the AppWizard or ClassWizard to
	generate your recordset class, the wizard creates a call to the function
	RFX_Text to transfer data between the database and your member variable. The
	fourth parameter of this function specifies the maximum allowed length of the
	data being transferred and the default value of this parameter is 255.
	
	RESOLUTION
	==========
	
	For each call to RFX_Text where the field can contain more than 255 characters,
	add a fourth parameter that is equal to the maximum length of that field.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Use the AppWizard to create a new MFC project with database support. Use an ODBC
	data source that contains one or more text fields with data longer than 255
	characters.
	
	NOTE: When you build the project and run it, you may see the above error when you
	try to move to a record that contains long data in the text field. You can see
	it as soon as the recordset opens, if the first record meets this criteria.
	
	REFERENCES
	==========
	
	See the documentation for RFX_Text for more information on this function.
	
	Additional query words: kbDSupport truncation rfxtext
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbOracle kbSQLServ kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
