---
layout: page
title: "Q130240: How to Use the Caption Field Property"
permalink: kb/130/Q130240/
---

## Q130240: How to Use the Caption Field Property

	Article: Q130240
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can specify a caption property for a field when creating or altering a table
	using the Visual FoxPro database container, or a program can do it by using the
	CREATE TABLE and ALTER TABLE commands. This article describes how and where the
	caption property is used within Visual FoxPro.
	
	MORE INFORMATION
	================
	
	A caption property is used to customize the display of a field on Browse
	windows, Forms, and Reports within a Visual FoxPro application. The caption is
	typically a text string that describes the field. For example, if a field name
	in a table is SSN, you might want to give the field a caption of "Social
	Security Number."
	
	The caption property for a field can be used in these scenarios:
	
	- In a Browse window as the column header.
	
	- By the Form Wizard to describe a field.
	
	- By the Report Wizard to describe a field or as a column header.
	
	- By the Label Wizard to describe a field.
	
	NOTE: The caption property is not used by the Visual FoxPro builders and is not
	used by the Query Wizard.
	
	Using the above example, if you browse the table containing the SSN field, the
	column header for SSN will read Social Security Number. If you used the same
	table to create a form by using the Form Wizard, the SSN field would be preceded
	with the description of Social Security Number.
	
	To reference a field's caption in a program, use the DBGETPROP() function. For
	example, if the SSN field is stored in a table named Customer, you could use the
	following code to assign the caption to the variable cGetCap:
	
	     cGetCap = DBGETPROP('customer.ssn', 'FIELD', 'CAPTION')
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
