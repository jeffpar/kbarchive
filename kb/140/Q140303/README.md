---
layout: page
title: "Q140303: FIX: DBSETPROP() for DataType Gives Incorrect Results"
permalink: kb/140/Q140303/
---

## Q140303: FIX: DBSETPROP() for DataType Gives Incorrect Results

	Article: Q140303
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the DBSETPROP command to change the datatype property of a field for a
	remote view gives incorrect results for the number(N) and float(F) fields.
	Attempting to change the number of decimal positions for type float(F) results
	in asterisks appearing in the field. Changing the number of decimal positions
	displayed for a numeric field changes only the results in the active cell in a
	Browse window. You can change the numbers of positions displayed in Double (B)
	fields, and the Browse window will reflect the correct number of positions
	displayed for active and inactive cells. Currency (Y) fields always display four
	decimal places. Attempts to change this result in the following error message
	when the BROWSE command is issued:
	
	  Datatype property for field 'fieldname' is invalid
	
	WORKAROUND
	==========
	
	Float fields and numeric fields behave the same way. Use N instead of F when
	trying to change the number of displayed positions for a float field. However,
	the new number of decimal positions displayed only effects the active cell in a
	browse.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Type the following commands in the Command window:
	
	     CREATE DATABASE decimal
	     CREATE TABLE decimal (afloat f(10,5), anumeric n(10,5), ;
	        adouble b(5), acurrency y(10,4))
	
	2. Use the Upsizing Wizard to upsize the table to SQL Server.
	
	3. Type the following command in the Command window:
	
	     SET DECIMALS to 3
	
	4. Create a remote view of the table called rem_dec.
	
	  Notice all fields come in with three decimals except currency, which comes in
	  with four decimals.
	
	5. For each of the following DBSETPROP() function calls, close the view, issue
	  the function call, and then browse the view.
	
	     =DBSETPROP("rem_dec.anumeric","field","datatype","N(10,2)")
	     * The number of decimal positions displayed is still three. If the
	     * insertion point is placed on that field, the record highlighted will
	     * show two decimal positions.
	
	     =DBSETPROP("rem_dec.adouble","field","datatype","B(10,2)")
	     * The number of decimal positions displayed changes to two.
	
	     =DBSETPROP("rem_dec.acurrency","field","datatype","Y(10,2)")
	     * Trying to browse the view will produce the error message "Datatype
	     * property for field 'acurrency' is invalid." Resetting the number of
	     * decimals to four will allow the view to be browsed again.
	
	     =DBSETPROP("rem_dec.afloat","field","datatype","F(10,2)")
	     * The field displays asterics. Using N instead of F allows the field
	     * to be viewed, but the results will be the same as they were for the
	     * numeric field.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
