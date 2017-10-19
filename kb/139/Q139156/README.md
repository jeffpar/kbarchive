---
layout: page
title: "Q139156: PRB: DO WHILE Loop Does Not See Changes Made to Macro Variable"
permalink: /kb/139/Q139156/
---

## Q139156: PRB: DO WHILE Loop Does Not See Changes Made to Macro Variable

	Article: Q139156
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you assign a field name to a variable and use a DO WHILE command on the
	variable with macro substitution, the DO WHILE command doesn't recognize any
	changes made to the variable while in the DO WHILE loop. For example, if the
	variable x has been assigned a field name, then using DO WHILE &x will
	evaluate the contents of the field. But if the contents of the variable changes
	to another field name inside the DO WHILE loop, the new field name in the
	variable is not recognized when the DO WHILE command is looped through again.
	This could cause the DO WHILE loop to cycle indefinitely.
	
	CAUSE
	=====
	
	The behavior of DO WHILE loops with macro substitution is controlled by the SET
	COMPATIBLE setting. With the syntax SET COMPATIBLE OFF, Visual FoxPro only
	evaluates the macro substitution the first time it goes through the loop. This
	is significantly faster than evaluating it each time through the loop. With SET
	COMPATIBLE ON, Visual FoxPro evaluates the macro substitution each time through
	the loop.
	
	RESOLUTION
	==========
	
	Use the following code instead. This code will stop when the variable x is
	assigned a different field because the DO WHILE command is evaluating the actual
	variable y instead of a macro substituted variable.
	
	     CREATE TABLE test ;
	            (fld1 C(10), fld2 C(5))
	     INSERT INTO test ;
	            (fld1, fld2) VALUES ("abcdef", "abcde")
	     x = "fld1"
	     y = &x
	     DO WHILE y = "abcdef"
	        WAIT WINDOW y
	        x = "FLD2"
	        y = &x
	     ENDDO
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following program:
	
	     CREATE TABLE test ;
	         (fld1 C(10), fld2 C(5))
	
	     INSERT INTO test ;
	         (fld1, fld2) VALUES ("abcdef", "abcde")
	
	     x = "fld1"
	     DO WHILE &x = "abcdef"
	        WAIT WINDOW &x
	        * Note that the Wait Window shows the correct contents each time.
	        x = "fld2"
	     ENDDO
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
