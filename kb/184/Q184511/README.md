---
layout: page
title: "Q184511: DOC: Append Instructions for DAO TableDef Incorrect"
permalink: kb/184/Q184511/
---

## Q184511: DOC: Append Instructions for DAO TableDef Incorrect

	Article: Q184511
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerrkbfaq
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC) 
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the "DAO TableDef: Using TableDefs" section appearing under
	
	  Visual C++ Books
	   MFC 4.0
	    Programming with MFC Encyclopedia
	     DAO TableDef
	
	of the Visual C++ 4.0 documentation, the following set of instructions are given
	on how to create a TableDef:
	
	  To create a tabledef.
	
	1. Construct a CDaoTableDef object, supplying a pointer to the CDaoDatabase
	  object to which the tabledef will belong.
	
	2. Call the tabledef object's Create member function.
	
	3. Set any of the tabledef object's properties that you want. Call the
	  SetAttributes, SetConnect, SetName, SetSourceTableName, SetValidationRule, or
	  SetValidationText member functions.
	
	4. Call the tabledef object's Append member function to save the tabledef in the
	  database's TableDefs collection. You can append before or after creating
	  fields, as described in the next step.
	
	5. Add fields to the tabledef by calling its CreateField member function for
	  each field. (You can not modify the schema of an attached table, so this step
	  applies only to local base tables and tables in external data sources that
	  you open directly.)
	
	6. Optionally add indexes to the tabledef by calling its CreateIndex member
	  function for each index.
	
	The fourth step is out of sequence and contains incorrect information.
	
	MORE INFORMATION
	================
	
	Step 4 above states that "You can append before or after creating fields, as
	described in the next step." This is incorrect. Also, the TableDef's Append
	member should be called after the procedures mentioned in steps 5 and 6.
	
	The above instructions should read as follows:
	
	  To create a tabledef.
	
	1. Construct a CDaoTableDef object, supplying a pointer to the CDaoDatabase
	  object to which the tabledef will belong.
	
	2. Call the tabledef object's Create member function.
	
	3. Set any of the tabledef object's properties that you want. Call the
	  SetAttributes, SetConnect, SetName, SetSourceTableName, SetValidationRule, or
	  SetValidationText member functions.
	
	4. Add fields to the TableDef by calling its CreateField member function for
	  each field. (You can not modify the schema of an attached table, so this step
	  applies only to local base tables and tables in external data sources that
	  you can open directly).
	
	5. Optionally add indexes to the tabledef by calling its CreateIndex member
	  function for each index.
	
	6. Call the TableDef object's Append member function to save the TableDef in the
	  database's TableDefs collection.
	
	NOTE: This documentation error is fixed in the Visual C++ 5.0 documentation.
	
	Additional query words: VC++
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbfaq
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbMFC
	Version           : WINNT:4.0
	Hardware          : x86
	Issue type        : kbhowto
	Solution Type     : kbnofix
	
	=============================================================================
	
