---
layout: page
title: "Q191593: BUG: ALTER TABLE Causes Memo File is Missing or Invalid Err"
permalink: kb/191/Q191593/
---

## Q191593: BUG: ALTER TABLE Causes Memo File is Missing or Invalid Err

	Article: Q191593
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
	
	Using the Alter Table command to add a column to a FoxBASE+ table with a memo
	field causes the following error message:
	
	  Memo file is missing or invalid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program (.prg) file and add the following code to the .prg file:
	
	        CREATE CURSOR DummyTable (Code C (5), MemoField M)
	        FOR i = 1 to 10
	           APPEND BLANK
	        ENDFOR
	
	        COPY TO Foxold TYPE FOXPLUS
	        USE Foxold EXCLUSIVE
	        ALTER TABLE Foxold ADD COLUMN Descr C(80)
	
	2. Save and run the .prg file.
	
	NOTE: The program errors out with the error message shown in the SYMPTOMS
	section.
	
	Additional query words: kbVFp300bbug kbVFp500abug kbVFp600bug KbDBFDBC kbDatabase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
