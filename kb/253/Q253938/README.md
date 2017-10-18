---
layout: page
title: "Q253938: BUG: Application Error When Accessing Cursors/Tables in Loop"
permalink: kb/253/Q253938/
---

## Q253938: BUG: Application Error When Accessing Cursors/Tables in Loop

	Article: Q253938
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300 kbvfp300bBUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug K
	Last Modified: 13-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are creating cursors and changing the cursor names in a loop, after
	about 32,160 cursor name changes, Visual FoxPro generates an error message and
	shuts down. The error message can be:
	
	  Fatal Error: Exception code=C00000005
	
	  -or-
	
	  Alias '' is not found.
	
	This is followed by the error message:
	
	  Fatal Error.
	
	CAUSE
	=====
	
	The use of macro expansion/variable substitution, in conjunction with the use of
	macro expansion/variable substitution to access the table, causes this problem.
	For example:
	
	  lcAlias = "A" + ALLTRIM(STR(x))
	  CREATE CURSOR (lcAlias) (fld1 c(10))
	  cValue = &lcAlias..fld1  
	
	  -or-
	
	  lcAlias = SYS(2015)
	  USE Table1 ALIAS &lcAlias
	  cValue = &lcAlias..fld1
	
	The more instances of macro expansion/variable substitution, the sooner the
	problem occurs. However, the problem only occurs when a table/cursor is
	USEd/CREATEd with macro substitution/variable substitution.
	
	RESOLUTION
	==========
	
	Use constant alias names. Do not change the name of the alias each time it is
	created. For example, when you create a cursor in a loop, use the same name each
	time instead of using a unique name.
	
	  LOCAL lcAlias, x
	  CLEAR
	  @ 2,1 SAY "Starting User Object Memory Use"
	  @ 3,1 SAY SYS(1016)       && User Object Memory Use
	  @ 4,1 SAY "Current User Object Memory Use"
	
	  FOR x = 1 TO 100000
	  	lcAlias = "ABCDEF"
	  	CREATE CURSOR (lcAlias) (fld1 c(10))
	  	cValue = &lcAlias..fld1
	  	USE IN (lcAlias)
	  	@ 1,1 SAY lcAlias
	  	@ 5,1 SAY SYS(1016)  && User Object Memory Use
	  ENDFOR
	  RETURN
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The sample program fails at approximately 32,160 iterations. The problem is
	exacerbated when you use additional variables, arrays, cursors, and tables
	created in this manner. Then the error occurs at a fraction of the 32,160
	iterations. If you modify the reproduction code to have three different aliases,
	then the problem occurs at one third (1/3) of 32,160 iterations. So, this
	problem may occur sooner or later in an application depending on how many macro
	expansion/variable substitutions variables are used.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the following code to a program (.prg) file and save it as "MemTest"
	  (without the quotation marks):
	
	  LOCAL lcAlias, x
	  CLEAR
	  @ 2,1 SAY "Starting User Object Memory Use"
	  @ 3,1 SAY SYS(1016)       && User Object Memory Use
	  @ 4,1 SAY "Current User Object Memory Use"
	
	  FOR x = 1 TO 100000
	  	lcAlias = "A" + ALLTRIM(STR(x))
	  	CREATE CURSOR (lcAlias) (fld1 c(10))
	  	cValue = &lcAlias..fld1
	  	USE IN (lcAlias)
	  	@ 1,1 SAY lcAlias
	  	@ 5,1 SAY SYS(1016)  && User Object Memory Use
	  ENDFOR
	  RETURN
	
	2. Exit FoxPro.
	
	3. Start Visual FoxPro.
	
	4. Run the .prg file MemTest.
	
	5. Watch the User Object Memory Use climb. It should cause an error at
	  approximately 32,160 iterations through the loop.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp300 kbvfp300bBUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
