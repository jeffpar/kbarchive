---
layout: page
title: "Q92359: INFO: Using the FoxPro LOOKUP() Function"
permalink: /kb/092/Q92359/
---

## Q92359: INFO: Using the FoxPro LOOKUP() Function

{% raw %}

	Article: Q92359
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The LOOKUP() function searches a database for the first occurrence of a
	specified expression. If FoxPro finds the expression, it moves the record
	pointer to the record that corresponds to the expression and returns the
	contents of the specified field in the record. If no matching record is found,
	the function returns the NULL string and leaves the record pointer at the end of
	the file.
	
	The LOOKUP() function can be used either to search for a specific expression in a
	database or to search for the first occurrence of a matching field in a second
	database.
	
	MORE INFORMATION
	================
	
	The syntax of the LOOKUP() function is as follows
	
	  LOOKUP(<field1>,<expr>,<field2>[,<expC>])
	
	where:
	
	  <field1> is the field to return.
	  <expr>   is the string to search for.
	  <field2> is the field to search.
	  <expC>   is the compact index tag to use in the search (optional).
	
	Examples
	--------
	
	The following code searches the CUSTOMER.DBF file for the first occurrence of
	"Mark Cummings" in the CONTACT field. If LOOKUP() finds a matching record, it
	returns the contents of the COMPANY field.
	
	  USE CUSTOMER
	  ?LOOKUP(COMPANY,"Mark Cummings",CONTACT)
	
	The following code uses both the CUSTOMER.DBF and INVOICES.DBF files. LOOKUP()
	moves the record pointer through the CUSTOMER database until it finds a record
	that matches the current CNO field in INVOICES. LOOKUP() returns the contents of
	the COMPANY field in the CUSTOMER database.
	
	  SELECT A
	  USE INVOICES
	  SELECT B
	  USE CUSTOMER
	  ?LOOKUP(COMPANY,INVOICES.CNO,CNO)
	
	If LOOKUP() includes the name of a compact index tag in the optional character
	expression <expC>, the search expression should match the index expression
	for the compact index tag. You can search the database for the contents of one
	field or a combination of fields by including the name of a compact index tag.
	The following code adds the CONTACT tag to the first example above:
	
	  ?LOOKUP(COMPANY,"Mark Cummings",CONTACT,"CONTACT")
	
	When the LOOKUP() expression does not specify a tag and the database is indexed,
	FoxPro searches the primary index for the expression. If no index is available,
	the LOCATE command is used to search the database.
	
	NOTE: The Rushmore query-optimization system cannot optimize a LOOKUP() call.
	
	Additional query words: VFoxWin FoxDos FoxWin 2.50 2.50a 2.50b 2.60 2.60a lookup look up
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbVFP300 kbVFP500 kbVFP600
	Version           : MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
