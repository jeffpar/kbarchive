---
layout: page
title: "Q189864: BUG: Data Written to Table Despite Textbox Returning False"
permalink: kb/189/Q189864/
---

## Q189864: BUG: Data Written to Table Despite Textbox Returning False

	Article: Q189864
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
	
	Visual FoxPro writes data to a table, even though a text box within a grid
	returns false (.f.).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This behavior also occurs when you use visual development tools instead of code
	to create the form and grid.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code:
	
	        CREATE TABLE TestTable (Field1 c(1))
	        APPEND BLANK
	
	        PUBLIC oForm1
	        oForm1 = CREAT('Form')
	        oForm1.SHOW
	
	        oForm1.ADDOBJECT('Grid1','GridClass')
	        oForm1.Grid1.VISIBLE = .T.
	
	        DEFINE CLASS GridClass AS GRID
	           ADD OBJECT column1 AS ColumnClass
	           RECORDSOURCE = 'TestTable'
	           RECORDSOURCETYPE = 1
	        ENDDEFINE
	
	        DEFINE CLASS TextClass AS TEXTBOX
	           PROC VALID
	           RETURN .F.
	        ENDDEFINE
	
	        DEFINE CLASS ColumnClass AS COLUMN
	           ADD OBJECT text1 AS TextClass
	        ENDDEFINE
	
	2. Run the program and type a letter in the text box of the first column of the
	  grid. A wait window appears informing you of the invalid input. Clear the
	  wait window and close the form. Another wait window appears when you close
	  the form. Ignore it.
	
	3. Type the following in the Command window:
	
	  " BROWSE" (without the quotation marks)
	
	RESULT: The letter you typed in step 2 appears in the table even though the
	textbox object returned false.
	
	If the text box simply resides on the form instead of within a grid and its Valid
	event returns false, the form does not close. You would be in an endless loop
	and unable to close Visual FoxPro.
	
	Additional query words: corruption corrupt extra data kbVFp300bug kbVFp300bbug kbVFp500abug kbVFp500bug kbVFp600bug kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
