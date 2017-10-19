---
layout: page
title: "Q259000: PRB: Space in CREATE FROM Field Name Causes Error"
permalink: /kb/259/Q259000/
---

## Q259000: PRB: Space in CREATE FROM Field Name Causes Error

	Article: Q259000
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase KbDBFDBC kbGrpDSFox k
	Last Modified: 27-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you accidentally add a space to a field name in a table created with the COPY
	STRUCTURE EXTENDED command, after creating the table with the CREATE FROM
	command, any immediate attempt to access that field (such as with a BROWSE
	statement) fails with the following error:
	
	  The data source for this object must be a variable reference.
	
	If the table is in a database, any later attempt will fail with the same error.
	If it's a free table, closing the table and re-opening it causes Visual FoxPro
	to replace the space in the field name with an underscore.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code in the Command window:
	
	  * Start of Code
	  USE HOME() + "labels"
	
	  COPY STRUCTURE EXTENDED TO tableFrom
	  USE tableFrom EXCLUSIVE
	  ZAP
	  INSERT INTO tableFrom ;
	      (field_name, field_type, field_len) ;
	      VALUES ;
	      ("a a", "C", 10)
	
	  CREATE DATABASE dbcTo
	
	  *!* VFP 3 creates the table in the open database.
	  *!* CREATE tableTo FROM tableFrom 
	  *!* VFP 5 and 6 allow you to specify the database 
	  *!* when creating a table.
	  CREATE tableTo DATABASE dbcTo FROM tableFrom 
	
	  *!* Note: if you run the VFP 3 code in VFP 5/6 and
	  *!* then use the ADD TABLE command, the error you 
	  *!* will get on BROWSE is :
	  *!* "The fields in table 'c:\temp\tableTo.dbf' 
	  *!* did not match the entries in the database."
	  SELECT tableTo
	  BROWSE
	  *End Of Code
	
	REFERENCES
	==========
	
	For more information about the CREATE FROM and COPY STRUCTURE EXTENDED commands,
	please see the Help files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
