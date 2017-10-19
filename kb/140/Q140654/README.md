---
layout: page
title: "Q140654: PRB: ODBC Error: Column &lt;xxx&gt; in Table &lt;yyy&gt; May Not Be Null"
permalink: /kb/140/Q140654/
---

## Q140654: PRB: ODBC Error: Column &lt;xxx&gt; in Table &lt;yyy&gt; May Not Be Null

	Article: Q140654
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp600 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When committing a new record to a remote view, you may receive this error:
	
	  Connectivity error: [Microsoft][ODBC SQL Server Driver][SQL Server]
	  The column <xxx> in table <yyy> may not be null.
	
	Where <xxx> is the name of the remote data's field and <yyy> is the
	name of the table to which the record is being added.
	
	CAUSE
	=====
	
	This error can occur for two reasons:
	
	- When you add a record to a remote table, all fields in the view must be
	  marked as updatable. Usually the key field is not marked as updatable by
	  default, which will cause this error to occur with <xxx> being the name
	  of the key field.
	
	-or-
	
	- The new record is not completely entered with data and one of the fields is
	  updated as .NULL. instead of being given a valid value for the data type. For
	  example a SQL Server bit data type cannot accept .NULL. values; it requires a
	  logical True (.T.) or False (.F.) to be in the Visual FoxPro remote view. If
	  it isn't, <xxx> will be the name of the field that requires a non-null
	  value.
	
	RESOLUTION
	==========
	
	Mark the key field as updatable or fill the field that can't support null values
	with valid data.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using View Designer, create a remote view to the Authors table in the SQL
	  Server Pubs database. Select all fields in the table by double- clicking the
	  asterisk (*) in the table window. Click the Update Criteria tab and make the
	  Au_id field the key field. Click Update All. Make sure there is no check mark
	  in the Update and Pencil columns of the field name list.
	
	2. Click Send SQL Updates.
	
	3. Run the View. Press CTRL+Y to add a record. Add data to the first three
	  fields of the record.
	
	4. Use the keyboard or mouse to select another record. The error will occur.
	
	5. Use =TABLEREVERT() to reverse the change.
	
	6. Type USE in the Command window to close the cursor.
	
	7. Go back to View Designer. Make the key field updatable.
	
	8. Follow the steps again. Notice the error is the same, but now it is pointing
	  to the Contract field. This field cannot except a null value. It must be
	  either true or false. Once this value has been entered, you can leave the
	  record without error.
	
	Additional query words: 3.0b VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP600
	Version           : WINDOWS:2.5,3.0,3.0b,6.0
	Issue type        : kbprb
	
	=============================================================================
	
