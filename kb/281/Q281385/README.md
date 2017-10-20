---
layout: page
title: "Q281385: PRB: VFP May Not Display All Fields of a dBASE Table"
permalink: /kb/281/Q281385/
---

## Q281385: PRB: VFP May Not Display All Fields of a dBASE Table

{% raw %}

	Article: Q281385
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Visual dBase table in Visual FoxPro, and you browse or list the
	structure of the table, some of the fields may not be available when the data is
	accessed. You do not receive an error message.
	
	CAUSE
	=====
	
	Visual FoxPro cannot read a Visual dBase field whose name begins with a digit.
	
	RESOLUTION
	==========
	
	When you create the structure of the Visual dBase table, make sure that the name
	of every field starts with a character. Numeric or other values can follow the
	first character in the name, but the first character must be either a letter or
	an underscore.
	
	MORE INFORMATION
	================
	
	When Visual FoxPro attempts to read a Visual dBase field name that begins with a
	digit, it does not give an error; however, it does not display any fields after
	that field. For example, if the Visual dBase table has ten fields in its
	structure and the name of the fifth field starts with a digit, you see only the
	first four fields in the table. Visual FoxPro reads all of the records, but only
	displays the first four fields of each record.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual dBase, create a table, and add six fields to the structure of the
	  table. Name the fields Fld1, Fld2, Fld3, 1fld4, Fld5, and Fld6.
	
	2. Add a few records to the table, and close the table.
	
	3. In Visual FoxPro, open the table. . When you browse or list the structure of
	  the table, only the first three fields appear.
	
	REFERENCES
	==========
	
	For more information, see "Creating Visual FoxPro Names" in Visual FoxPro 6.0
	Help.
	
	Additional query words: truncate d-base cut off drop eliminate
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
