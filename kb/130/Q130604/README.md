---
layout: page
title: "Q130604: How to Retrieve Table Properties in a Program"
permalink: kb/130/Q130604/
---

## Q130604: How to Retrieve Table Properties in a Program

	Article: Q130604
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro introduces new table properties (triggers, validation rules, and
	comments) that are available to fields in tables that belong to databases. This
	article describes how to look up these table properties by using a program.
	
	MORE INFORMATION
	================
	
	The new properties are available only if the table belongs to a database. You
	can use the DISPLAY DATABASE and LIST DATABASE commands to view, list to a file,
	or print all the table properties. The following examples apply only to the case
	where you want a program to retrieve the table properties to store in variables
	or for some other purpose.
	
	Validation Rule
	---------------
	
	Use the AFIELDS() or DBGETPROP() function to obtain the value of the Validation
	Rule table property.
	
	AFIELDS() places information about the table structure into an array. The syntax
	for AFIELDS() is:
	
	     cResult=AFIELDS(ArrayName[,TableName | WorkArea])
	
	Parameters:
	
	- ArrayName specifies a pre-existing array or a new array.
	
	- TableName or WorkArea is optional. if a table name or work area is not
	  provided, Visual FoxPro populates the array with data from the current work
	  area.
	
	AFIELDS() creates a multi-dimensional array, the Validation Rule is stored in
	column 10. The following example retrieves the Validation Rule from a table
	named MYDATA.DBF:
	
	     cResult=AFIELDS(myarray,mydata)
	     ?myarray(1,10)
	
	DBGETPROP() retrieves several table properties. The following example shows how
	to return the Validation Rule of a table by using the DBGETPROP() function:
	
	     cResult=DBGETPROP('mydata', 'TABLE', 'RuleExpression')
	
	In this example:
	
	- mydata is the table name.
	
	- TABLE specifies that the property you want is a table property.
	
	- RuleExpression is the property you want.
	
	Validation Text
	---------------
	
	Use the AFIELDS() or DBGETPROP() function to obtain the value for the Validation
	Text table property.
	
	AFIELDS() creates a multi-dimensional array, the Validation Text is stored in
	column 11. The following example retrieves the Validation Text for a table named
	MYDATA.DBF:
	
	     cResult=AFIELDS(myarray,mydata)
	     ?myarray(1,11)
	
	The following example shows how to return the Validation Text of a table by using
	the DBGETPROP() function:
	
	     cResult=DBGETPROP('mydata', 'TABLE', 'RuleText')
	
	Insert Trigger
	--------------
	
	Use the DBGETPROP() function to obtain the Insert Trigger, as in this example:
	
	     cResult=DBGETPROP('mydata', 'TABLE', 'InsertTrigger')
	
	Update Trigger
	--------------
	
	Use the DBGETPROP() function to obtain the Update Trigger, as in this example:
	
	     cResult=DBGETPROP('mydata', 'TABLE', 'UpdateTrigger')
	
	Delete Trigger
	--------------
	
	Use the DBGETPROP() function to obtain the Delete Trigger, as in this example:
	
	     cResult=DBGETPROP('mydata', 'TABLE', 'DeleteTrigger')
	
	Table Comments
	--------------
	
	Use the DBGETPROP() function to obtain the Table Comments:
	
	     cResult=DBGETPROP('mydata', 'TABLE', 'Comment')
	
	Primary Key
	-----------
	
	Use the DBGETPROP() function to obtain the tag name of a Primary key, as in this
	example:
	
	     cResult=DBGETPROP('mydata', 'TABLE', 'PrimaryKey')
	
	Path
	----
	
	Use the DBGETPROP() or DBF() function to obtain the path to the table. The
	following example shows how to return the path of a table by using the
	DBGETPROP() function:
	
	     cResult=DBGETPROP('mydata', 'TABLE', 'Path')
	
	To obtain the path to a table by using the DBF() function, SET FULLPATH must be
	used, as in this example:
	
	     SET FULLPATH ON
	     cResult=DBF('mydata')
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
