---
layout: page
title: "Q146118: PRB: Duplicate Column Appears in Combo or List Box"
permalink: kb/146/Q146118/
---

## Q146118: PRB: Duplicate Column Appears in Combo or List Box

	Article: Q146118
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the RowSourceType of a combo box or list box to 6-Fields or 2-Alias and
	then either concatenating the first two fields together or using a function,
	such as UPPER(), on the first field causes the object to duplicate the data from
	the first column into the second column.
	
	WORKAROUND
	==========
	
	Use an SQL-ELECT statement to select the data before placing it in the object
	when you want to concatenate fields or use functions with data. For example, the
	following SQL-SELECT statement places the city and phone fields into the first
	column and the postalcode field into the second column:
	
	     SELECT city+phone,postalcode FROM customer INTO CURSOR TEMP
	
	You need to type this SQL-SELECT statement into the RowSource property, and
	change the RowSourceType to 3-SQL Statement.
	
	You can also place certain functions (such as UPPER, LTRIM, and RTRIM) in a
	SQL-SELECT statement. However, other functions, like SUBSTR(), give an error
	when placed in a SQL-SELECT statement.
	
	Another option is to use an array or the AddItem method to populate the combo box
	or list box. For more information about populating an object by using the
	AddItem method, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q137183 How to Add Items to a Multiple-Column Combo Box
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form called test.
	
	2. Add the Customer table from the TestData database located in the Samples\Data
	  subdirectory under Visual FoxPro to the Data Environment.
	
	3. Place a combo box on the form.
	
	4. In the properties sheet of the Combo box, set the following properties:
	
	  BoundColumn = 2
	  ColumnCount = 2
	  ColumnWidths = 150,150
	  RowSource = city+phone,postalcode
	  RowSourceType = Fields
	
	5. Run the form. The combo box duplicates the data from the first column to the
	  second column in every row. The second field does not appear.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
