---
layout: page
title: "Q131121: Combo Box with RowSourceType of SQL Must Result in Cursor"
permalink: /kb/131/Q131121/
---

## Q131121: Combo Box with RowSourceType of SQL Must Result in Cursor

{% raw %}

	Article: Q131121
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the RowSourceType property of a combo box is set to SQL-Statement, the actual
	SQL statement in the RowSource property must result in a cursor, not an array.
	For example, if the RowSourceType property of a combo box is SQL-Statement, and
	the RowSource property contains this command:
	
	     SELECT DISTINCT REGION FROM CUSTOMER INTO CURSOR TEMP
	
	the unique regions from the customer table are displayed in the combo box and a
	cursor named TEMP is created
	
	If the SELECT statement creates an array instead of a cursor, the combo box
	displays data from the first field of the currently selected table. If no table
	is currently selected, a syntax error displays.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
