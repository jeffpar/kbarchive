---
layout: page
title: "Q148721: PRB: ODBC - Call Failed Error When Appending Record in Access"
permalink: /kb/148/Q148721/
---

## Q148721: PRB: ODBC - Call Failed Error When Appending Record in Access

{% raw %}

	Article: Q148721
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attach a FoxPro table to a Microsoft Access version 7.0 database, and do
	not fill all the fields in a new record, the following errors are displayed when
	you move off the record:
	
	  ODBC- Call Fail
	
	  Field <field_name> does not accept NULL values
	
	CAUSE
	=====
	
	Moving the record pointer commits the data to the table. The data contains NULL
	values. However, the structure of the Visual FoxPro table does not allow NULL
	values, and changes cannot be saved to the Visual FoxPro table.
	
	The "AllowZero Length" property of a field in an Access table controls the
	default value of fields. When it is set to No, the default in Access version
	7.0, fields are initialized to NULL. Therefore, if you append a new record and
	do not fill all of the fields, some fields will have a NULL value. This is
	causing the error message because the linked table does not allow NULL values.
	
	WORKAROUND
	==========
	
	You can ensure that the fields in the Visual FoxPro table accept NULL values by
	checking the NULL setting in the Visual FoxPro Table Designer. Use the following
	step-by-step procedure to achieve this:
	
	1. Start Visual FoxPro and open the database that contains the table.
	
	2. Right click the table and select Modify.
	
	3. When the Table Designer is opened, select the NULL check box for every field.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using the Microsoft Visual FoxPro ODBC driver, set a datasource to the
	  Tastrade database located in the Samples\Mainsamp directory off the main
	  Visual FoxPro directory.
	
	2. Start Microsoft Access version 7.0.
	
	3. Right click and select "Link Tables" from the shortcut menu.
	
	4. Select ODBC Databases.
	
	5. Click the Data source to Tastrade.dbc.
	
	6. Open the Category table.
	
	7. In the Datasheet view, position the cursor to the empty record.
	
	8. Enter information in the fields, but do not enter anything in the OLE Object
	  field.
	
	9. Move the cursor off the record. The ODBC-Call Failed error message is
	  displayed, followed by the error "Field PICTURE_FILE does not accept null
	  values (#581)."
	
	Additional query words: 1.00 vfoxwin 3.00 3.00b driver
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
