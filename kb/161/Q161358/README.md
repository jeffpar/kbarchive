---
layout: page
title: "Q161358: PRB: Cannot Add Rows to Updateable Outer Join"
permalink: kb/161/Q161358/
---

## Q161358: PRB: Cannot Add Rows to Updateable Outer Join

	Article: Q161358
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp300 kbvfp500 kbvfp600
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a local view performing a Right Outer Join executes, the result set in the
	view's Browse shows .NULL. in all of the left-side table's fields where there is
	an unmatched row in the right-side table. If the view is defined with an
	updateable left-side table when data is entered into the primary key field of
	that table and the record pointer is moved, an information message box shows the
	error "Update conflict" with the "OK," "Revert," and "Help" options.
	
	If data is entered into any of the other fields, you receive a "Syntax error"
	message.
	
	RESOLUTION
	==========
	
	You can remove this by issuing the following command:
	
	     =TableRevert(.T.)
	
	If you modify only the primary key field and the "Update error" message appears,
	and if you click Revert, the row again shows .NULL. for all the fields in the
	left table portion of that row.
	
	If you click OK, the command " = TableUpdate(0,.T.)" (without the quotes) is
	issued and that row in the view is marked as deleted.
	
	If, then, the command "SET DELETED ON" is issued, the row disappears from the
	view. It reappears with the command "SET DELETED OFF."
	
	MORE INFORMATION
	================
	
	The NULL row in the view is a "virtual row" with no correspondent in the base
	left-side table. If a forced update based only on the Primary Key fails, it
	indicates that the base-table row is inaccessible (as is the virtual row in the
	view). In this case Visual FoxPro deletes the conflicting row from the view.
	Because of the soft delete mechanism in Visual FoxPro, the user can control the
	visibility of deleted rows via the command SET DELETED ON /OFF.
	
	Attempting to fill in the fields in the view from the left-side base table would
	require performing an INSERT... SQL for the full corresponding row in the
	left-side table.
	
	REFERENCES
	==========
	
	For more information about creating Outer Joins, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q124589 How To Create a Left-right Outer Join in FoxPro for Windows
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Issue type        : kbprb
	
	=============================================================================
	
