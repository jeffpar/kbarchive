---
layout: page
title: "Q142283: PRB: Uniqueness of Index Violated When Creating Primary Index"
permalink: /kb/142/Q142283/
---

## Q142283: PRB: Uniqueness of Index Violated When Creating Primary Index

	Article: Q142283
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a Primary Index for a table that is populated with records and
	choose to make the structure changes permanent, the following error message
	appears:
	
	  Uniqueness of index <name> is violated.
	
	CAUSE
	=====
	
	More than one record, including any deleted records, contain the same value
	within the field being used for the Primary Index. This also applies to the
	existence of more than one blank record, whether marked for deletion or not.
	
	RESOLUTION
	==========
	
	Eliminate any use of the same value within multiple records. There are many
	methods you could use, but perhaps the easiest is to use a query. The following
	example query will generate a cursor that contains a list of the values that
	occur in more than one record of a table:
	
	     SELECT <field name> FROM <table name>;
	        GROUP BY <field name>;
	        HAVING COUNT(<field name>) > 1
	
	If duplicate records have been marked for deletion and you prefer that the table
	not be packed to eliminate them, the Primary Index must contain the following
	filter to ignore the deleted records:
	
	     !DELETED()
	
	For more information about reusing deleted primary key values, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q139756 Cannot Reuse Deleted Primary Key Values in Visual FoxPro
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The intent of a primary index is to never permit duplicate values on the
	specified fields. For more information about primary indexes, search for
	"primary index" in the Visual FoxPro Help file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new table that has two fields. In this case, the table is called
	  States and the fields are Fullname (Character, 15) and Abbrev (Character, 2).
	
	2. Add the following records to the table:
	
	  Fullname     Abbrev
	  -------------------
	  Alabama      AL
	  Alaska       AK
	  Arizona      AZ
	  Arkansas     AR
	
	3. Add two blank records to the table, and mark them for deletion, but do not
	  pack the table.
	
	4. On the Window menu, click View Window, and if the States table isn't open,
	  click Open. Then select it.
	
	5. Click the Properties button, and from the Work Area Properties window, click
	  the Modify button.
	
	6. Click the Index tab in the Table Designer, and enter state for the Name, set
	  Primary as the Type, and Fullname for the Expression.
	
	7. Click OK. Within the message box asking to make structure changes permanent,
	  click Yes. At this point, the following error appears:
	
	  Uniqueness of index state is violated.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbprb
	
	=============================================================================
	
