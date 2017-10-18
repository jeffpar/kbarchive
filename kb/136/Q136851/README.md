---
layout: page
title: "Q136851: Cases Where Failed ALTER TABLE Doesn't Revert"
permalink: kb/136/Q136851/
---

## Q136851: Cases Where Failed ALTER TABLE Doesn't Revert

	Article: Q136851
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes circumstances that change the table structure even if the
	ALTER TABLE command fails.
	
	MORE INFORMATION
	================
	
	In general, any failure reported by either the ALTER TABLE command or the MODIFY
	STRUCTURE dialog box should result in the source table remaining unchanged from
	its state prior to the action.
	
	One exception to this is when a new primary key is created or an existing key is
	promoted to being a primary key. An error message is displayed if the key
	creation fails because Visual FoxPro detects a duplicate key. However, all other
	changes to the table remain intact.
	
	The SET SAFETY ON/OFF command also affects some of the validation performed by
	the ALTER TABLE and MODIFY STRUCTURE operations. The following information
	applies to the table validation rules, table validation text, field validation
	rules, field validation text, and field default values.
	
	Regardless of the setting of safety, the syntax of the information entered is
	validated. However, if SAFETY is ON, then the information is also evaluated
	before any attempt is made to alter the table. Therefore, setting SAFETY ON
	provides an extra level of validation that can occur even if the the NOVALIDATE
	clause is used to avoid a lenthgy rule verification phase.
	
	Example: For a field rule for FIELD1 where MEMVAR1 is not in scope:
	
	     ALTER TABLE Table1 ALTER Field1 CHECK Field1 !=memvar1 NOVALIDATE
	
	This succeeds if SAFETY is OFF, but fails evaluation because MEMVAR1 is not in
	scope.
	
	NOTE: If a user-defined function (UDF) is recognized during the validation phase,
	the function is not called and the validation passes.
	
	Additional query words: VFoxWin sql
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
