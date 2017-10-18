---
layout: page
title: "Q190111: FIX: In Grid, 2nd Character Overwrites 1st If Old Value Is NULL"
permalink: kb/190/Q190111/
---

## Q190111: FIX: In Grid, 2nd Character Overwrites 1st If Old Value Is NULL

	Article: Q190111
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Typing numeric data greater than one digit in length into a grid's textbox where
	the original value of the column's ControlSource is NULL and the column.Sparse =
	.F., causes the second character to overwrite the first character.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available. This
	bug is fixed in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	        PUBLIC oform1
	        CREA TABLE nulltest (f1 N(10,2) NULL)
	        FOR lni = 1 TO 5
	           INSERT INTO nulltest VALUES (.NULL.)
	        ENDFOR
	        USE nulltest
	
	        oform1=CREATEOBJECT("form1")
	        oform1.SHOW
	        RETURN
	
	        DEFINE CLASS form1 AS FORM
	
	           TOP = 0
	           LEFT = 0
	           HEIGHT = 268
	           WIDTH = 378
	           CAPTION = "Form1"
	           NAME = "Form1"
	
	           ADD OBJECT grd1 AS GRID WITH ;
	              COLUMNCOUNT = 1, ;
	              LEFT = 33, ;
	              RECORDSOURCE = "nulltest", ;
	              RECORDSOURCETYPE = 1, ;
	              TOP = 28, ;
	              NAME = "grd1", ;
	              Column1.SPARSE = .F., ;
	              Column1.NAME = "Column1"
	        ENDDEFINE
	
	2. Type in 25, then press the DOWN ARROW key.
	
	RESULTS: The 2 appears, then is overwritten by the 5, and the text box value is
	5.00 after you press the DOWN ARROW key. This does not happen if the grid Sparse
	property is .T. rather than .F., or if the field value is not NULL.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbDSupport KBDSE kbVFp500abug kbVFp300bbug kbVFp600fix kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
