---
layout: page
title: "Q130244: PRB: All New Field Values Set to .NULL. When You Modify Table"
permalink: /kb/130/Q130244/
---

## Q130244: PRB: All New Field Values Set to .NULL. When You Modify Table

{% raw %}

	Article: Q130244
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After executing the ALTER TABLE command to add a new field to a table or after
	modifying a table manually, all of the field values for a new field are set to
	.NULL. for each record in the table.
	
	CAUSE
	=====
	
	This behavior occurs if NULL is set ON by using the SET NULL command.
	
	RESOLUTION
	==========
	
	Issue the SET NULL OFF command before executing an ALTER TABLE command or before
	modifying a table manually when using the Database Container.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the Command window, issue the following commands:
	
	     SET NULL ON
	     CREATE DATABASE mydata
	     CREATE TABLE mytable (cFld1 C(20))
	     APPEND BLANK
	     REPLACE cFld1 WITH "Hello"
	     BROWSE
	
	2. Browse the table to view the first record, and note the table structure. Then
	  modify the table with an ALTER TABLE command:
	
	     ALTER TABLE mytable ADD COLUMN cNewfld C(20)
	     BROWSE
	
	Now the field value for cNewfld holds the value .NULL..
	
	NOTE: Placing NOT NULL at the end of the ALTER TABLE command doesn't work if SET
	NULL is ON. Instead, the error message "Field NEWFLD does not accept null
	values" is displayed, and the field is not added.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
