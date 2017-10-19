---
layout: page
title: "Q156178: PRB: @...GET...NAME Object References Change with Read Level"
permalink: /kb/156/Q156178/
---

## Q156178: PRB: @...GET...NAME Object References Change with Read Level

	Article: Q156178
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may see the following error when referencing objects created using READ-
	type code with the NAME keyword (DEFINE WINDOW...NAME and @...GET...NAME):
	
	  "Unknown member <objectname>"
	
	This occurs in situations with multiple READ levels.
	
	CAUSE
	=====
	
	When objects are created using the NAME keyword, each one is added to a page
	within a PageFrame control. The page number corresponds to the READ level.
	
	WORKAROUND
	==========
	
	Reference objects in the following manner:
	
	  <FormName>.Pageframe1.Page<rdlevel()>.<ObjectName>.Property
	
	See the MORE INFORMATION section below for details.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The NAME keyword creates an object reference for controls created with the
	DEFINE WINDOW, @ ... GET, and @ ... EDIT commands, allowing you to manipulate
	these objects' properties, events, and methods.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.prg) file:
	
	     * Start of code example
	     *
	     DEFINE WINDOW Wind1 AT 0, 0 SIZE 15, 50 TITLE "1st Screen" ;
	        SYSTEM FLOAT NAME oForm1
	     ACTIVATE WINDOW Wind1
	     @ 1, 10 SAY "Press Enter to go to 2nd screen"
	     @ 3, 11 SAY "1st screen get " GET lcGet1 SIZE 1, 17 ;
	        DEFAULT " " WHEN when1() VALID valid1() NAME loGet1
	     READ
	
	     RELEASE WINDOW Wind1
	
	     FUNCTION when1
	        oForm1.Pageframe1.Page1.loGet1.Value = "123"
	     ENDFUNC
	
	     FUNCTION valid1
	        DO Screen2
	     ENDFUNC
	
	     FUNCTION Screen2
	
	        DEFINE WINDOW Wind2 AT 0, 0 SIZE 10,55 TITLE "2nd Screen ";
	           SYSTEM FLOAT NAME oForm2
	        ACTIVATE WINDOW Wind2
	        @ 3, 6  SAY "2nd screen get " GET lcGet2 SIZE 1, 17 ;
	           DEFAULT " " WHEN When2() NAME loGet2
	        READ
	
	        RELEASE WINDOW Wind2
	        CLEAR READ ALL
	     ENDFUNC
	
	     FUNCTION When2
	        oForm2.Pageframe1.Page1.lo_Get2.Value = "123"
	     ENDFUNC
	     *
	     * End of code example
	
	2. Note that code in the When1 function successfully references the Value
	  property of the @...GET command in the first screen. Press enter from 1st
	  Screen to go to the second Screen.
	
	3. The error "Unknown member LO_GET2" occurs as 2nd Screen appears. The
	  following code refers to a nonexistant member since the object loGet2 is
	  actually contained in oForm2.Pageframe1.Page2:
	
	        oForm2.Pageframe1.Page1.loGet2.Value = "123"
	
	A generic workaround for this behavior is to use the following code to determine
	the current READ level and insert the current READ level into the object
	reference with Macro Substitution. For example, change the code for the function
	When2 in the code sample above to read as follows:
	
	     * Start of code example
	     *
	     FUNCTION When2
	        LOCAL lcPageNumber
	        lcPageNumber=ALLTR(STR(RDLEVEL()))
	        oForm2.Pageframe1.Page&lcPageNumber..loGet2.Value = "456"
	     ENDFUNC
	     *
	     * End of code example
	
	This stores the current READ level to lcPageNumber and substitutes it back into
	the object reference. This allows the object loGet2 to be referenced regardless
	of READ level.
	
	REFERENCES
	==========
	
	For more information about using the NAME keyword with the DEFINE WINDOW and @
	GET commands, please see the following article in the Microsoft Knowledge Base:
	
	  Q138780 How to Use the Name Argument of an @...GET in Visual FoxPro
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
