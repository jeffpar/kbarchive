---
layout: page
title: "Q133024: PRB: Error Loading File w/Combo Box RowSourceType = 6 (Fields)"
permalink: /kb/133/Q133024/
---

## Q133024: PRB: Error Loading File w/Combo Box RowSourceType = 6 (Fields)

	Article: Q133024
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Executing a form containing a combo box or list box with the RowSourceType
	property set to 6 (Fields), returns this error:
	
	  Error Loading File - RowSource - Record <n> "field" phrase not found.
	
	CAUSE
	=====
	
	This is caused by incorrect syntax in the list of fields in the RowSource
	property. The documentation and online Help imply that the correct way to list
	fields in this property is:
	
	  Table1.field1, Table1.field2, Table1.field3, ...
	
	This is incorrect. The correct syntax is:
	
	  Table1.field1, field2, field3, ...
	
	Any deviation from this syntax (using an expression instead of a field name,
	trying to use fields from multiple or related tables, and so on) results in the
	same error message.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	"Developer's Guide," Chapter 11, p. 283
	
	Additional query words: VFoxWin listbox combobox
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	
	=============================================================================
	
