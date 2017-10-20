---
layout: page
title: "Q95294: Creating Modifiable Cursor in FoxPro with SQL SELECT"
permalink: /kb/095/Q95294/
---

## Q95294: Creating Modifiable Cursor in FoxPro with SQL SELECT

{% raw %}

	Article: Q95294
	Product(s): Microsoft FoxPro
	Version(s): 2.00 2.50 2.50a | 2.50 2.50a 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	Issuing a SQL SELECT command with the INTO CURSOR clause creates a
	read-only cursor. To create a modifiable cursor, use one of the
	following workarounds:
	
	- Use the SQL SELECT command with the INTO TABLE or INTO DBF clause. This
	  command creates a new permanent database that can be deleted when it is no
	  longer needed.
	
	- Use the following code (which uses the FoxPro 2.x CUSTOMER table):
	
	        USE c:\foxpro2\tutorial\customer.dbf
	          * USE the database that is being queried.
	        =AFIELDS(struct_arr)
	          * The array struct_arr contains the database structure.
	        CREATE CURSOR temp FROM ARRAY struct_arr
	          * temp has the structure of CUSTOMER.DBF.
	        SELECT * FROM customer INTO ARRAY data_arr
	          * data_arr contains the result of the query.
	        SELECT temp
	        APPEND FROM ARRAY data_arr
	          * temp now contains the result of the query
	          * and is not read-only.
	
	  NOTE: This example works only if the SQL SELECT command is from a single
	  database and all fields are being selected. If this is not the case, you can
	  modify struct_arr to reflect the structure of the fields being selected, or
	  use the CREATE CURSOR command to create a temporary table with the
	  appropriate structure.
	
	
	REFERENCES
	==========
	
	"Commands & Functions," version 2.0, pages C3-701 to C3-705
	
	Additional query words: VFoxWin FoxDos FoxWin 2.x kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : 2.00 2.50 2.50a | 2.50 2.50a 3.0
	
	=============================================================================
	

{% endraw %}
