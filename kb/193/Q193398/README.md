---
layout: page
title: "Q193398: BUG: Table Designer Record Length Wrong if Field(s) Allow Nulls"
permalink: /kb/193/Q193398/
---

## Q193398: BUG: Table Designer Record Length Wrong if Field(s) Allow Nulls

	Article: Q193398
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a table that contains a field or fields, which allow NULL values,
	when you view the Statistics in the Table Designer's Table page, the record
	length is under reported by 1 byte.
	
	RESOLUTION
	==========
	
	Use the RECSIZE() function to find the correct record length.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        CREATE TABLE Testtab (F1 C(10) NULL, F2 N(10) NULL, F3 L)
	        LIST STRUCTURE
	        ?RECSIZE()
	        MODIFY STRUCTURE
	
	2. Select the Table tab in Table Designer.
	
	3. The Length value in the Table Designer is 22, while the RECSIZE() function
	  returns 23.
	
	If there are no fields that allow NULL values, the two numbers agree. If there
	are any fields that allow NULL values, the Length listed in the Table Designer
	is 1 less than the correct value.
	
	The record length is the sum of all the field lengths plus 1 byte for the delete
	mark and 1 byte for the NULL field information, if any fields allow NULL values.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp300bbug kbVFp500abug kbVFp600bug kbDesigner kbDatabase KbDBFDBC
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
