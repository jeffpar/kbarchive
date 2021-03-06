---
layout: page
title: "Q170129: PRB: Update Conflict When Updating Oracle Varchar Data Types"
permalink: /kb/170/Q170129/
---

## Q170129: PRB: Update Conflict When Updating Oracle Varchar Data Types

{% raw %}

	Article: Q170129
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 07-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When updating a remote view based on an Oracle table that contains fields of
	type "varchar," you may receive an Update Conflict error.
	
	CAUSE
	=====
	
	When a remote view retrieves data from the Oracle backend, all varchar fields
	are converted to character fields. Visual FoxPro pads the character fields with
	spaces to accommodate the overall length of the varchar field.
	
	The Update Conflict occurs as a result of a mismatch in the SQL WHERE clause
	criteria due to the padded spaces. For example: if an Oracle table has a
	varchar(5) field with a value of "aaa". the actual value that the remote view
	uses in the SQL WHERE clause is "aaa ". The Update Conflict occurs because
	"aaa"<>"aaa ".
	
	NOTE: This occurs when the varchar field size is less than the default set in the
	'Use Memo Fields for Fields <=:' setting in Tools/Options/Remote Data. Any
	Oracle varchar field with a size greater than this setting will be viewed as a
	memo field.
	
	RESOLUTION
	==========
	
	Here are two possible methods you can use to avoid the Update Conflict:
	
	- Set the SQL WHERE clause option in the Update Criteria such that no varchar
	  fields are included in the SQL WHERE clause. In other words, select the
	  option button choice, "Key fields only".
	
	  NOTE: The following documentation is in the Visual FoxPro Help topic, "Update
	  Criteria Tab, View Designer" as follows:
	
	  SQL WHERE Clause Includes
	
	  Controls which fields are added to the WHERE clause to detect update conflicts
	  on the server when the changes to the view are sent to the original tables.
	
	  A conflict is based on a comparison between the old values in the view,
	  OLDVAL( ), and the current values in the original table, CURVAL( ). If the
	  values are equal, the original table is considered unchanged and no conflict
	  exists. If they are not equal, a conflict exists and the data source returns
	  an error.
	
	  The error returned for a conflict between the old value and the current value
	  is Error 1585 "Record has been modified by another" or Error 1494 "Update
	  conflict. Use TABLEUPDATE() to force the update or TABLEREVERT() to
	  rollback".
	
	  Key Fields Only: Sets the WHERE clause to detect a conflict if a key field has
	  been changed in the original table. Changes made by another user to any other
	  field in the original record of the table are not compared.
	
	  Key and Updatable Fields: Sets the WHERE clause to detect a conflict if
	  another user changed any of the fields that were updatable.
	
	  Key and Modified Fields: Sets the WHERE clause to detect a conflict if the key
	  field or one of the modified fields in the record in the original table has
	  changed since the view was first retrieved (default).
	
	  Key and Timestamp: Sets the WHERE clause to detect a conflict if the timestamp
	  of the record on the original table has changed since it was first retrieved.
	  This option is only available if the remote table has a timestamp column.
	
	  -or-
	
	- Change the data type of all the varchar fields to Memo. You can do this by
	  clicking the Properties button on the Fields tab of the Remote View Designer.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an Oracle table that contains at least one varchar field.
	
	2. Create a remote view based on the Oracle table created in step 1.
	
	3. Make the varchar field updateable and set the SQL WHERE clause option to "Key
	  and modified."
	
	4. Browse the view, and make a change to the varchar field.
	
	5. Close the view.
	
	NOTE: The Update Conflict error occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
