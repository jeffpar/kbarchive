---
layout: page
title: "Q150551: INFO: Duplicate Fields Naming Differs in Local and Remote View"
permalink: /kb/150/Q150551/
---

## Q150551: INFO: Duplicate Fields Naming Differs in Local and Remote View

	Article: Q150551
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp300 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you're using the local or remote view designers to create views with
	multiple tables, note that duplicate field names in the output fields list are
	not the same in a local view versus a remote view.
	
	MORE INFORMATION
	================
	
	In a local view, when you add duplicate field names to the output field list,
	the fields are renamed by adding the underscore character (_) followed by a
	sequential alpha character.
	
	For example, if a field named Cust_ID is added to the output fields list of a
	local view more than once, the first occurrence of this field is renamed to
	Cust_ID_a, and the second occurrence is renamed to Cust_ID_b.
	
	In a remote view, the duplicate fields are renamed by adding a sequential number
	to the second and all subsequent occurrences of the field name. For example, if
	a field named Cust_ID is added to the output fields list of a remote view more
	than once, the first occurrence of this field is named Cust_ID, and the second
	occurrence is renamed to Cust_ID1.
	
	This is the default behavior of the local and remote view designers and cannot be
	changed by the user. The only way to control the renaming of duplicate fields in
	a view is to create the view programmatically using the CREATE SQL VIEW command.
	When you create the views programmatically, the fields can be renamed using the
	AS clause of the SQL SELECT command.
	
	The following example creates a remote view named View1 on two tables named TBL1
	and TBL2. Both tables contain a field named Cust_ID. This remote view renames
	the duplicate fields to Cust_ID_a and Cust_ID_b.
	
	     CREATE SQL VIEW View1 REMOTE CONNECTION MyConnection AS SELECT ;
	            TBL1.Cust_ID AS Cust_ID_a, TBL2.Cust_ID AS Cust_ID_b    ;
	            FROM TBL1, TBL2
	
	NOTE: If this remote view is later modified by using the remote view designer and
	then saved, the fields are renamed to the remote view designer's defaults of
	Cust_ID and Cust_ID1.
	
	Additional query words: VFoxWin ODBC
	
	======================================================================
	Keywords          : kbvfp300 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b
	Version           : WINDOWS:2.5,3.0,3.0b
	Issue type        : kbinfo
	
	=============================================================================
	
