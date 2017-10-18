---
layout: page
title: "Q125046: INFO: Macro Subst, Name Expr, and EVALUATE() RunTime Evaluation"
permalink: kb/125/Q125046/
---

## Q125046: INFO: Macro Subst, Name Expr, and EVALUATE() RunTime Evaluation

	Article: Q125046
	Product(s): Microsoft FoxPro
	Version(s): 2.6a,3.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbGrpDSFox kbDSupport
	Last Modified: 24-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes and explains the differences in behavior between the
	three Runtime Evaluation tools provided by the FoxPro language: "&" (macro
	substitution), "()" (name expression), and the "EVALUATE()" function.
	
	MORE INFORMATION
	================
	
	The "Language Reference" guide specifies that EVALUATE() and name expressions
	should be used instead of macro substitution because they run faster. However,
	it does not explain why this is so.
	
	Macro Substitution
	------------------
	
	Macro substitution is just what it is called. A run-time "macro" is built into
	the tokenized code to evaluate the expression at runtime. The compiler inserts
	some compiling-linking code into the application, and when the code is run,
	on-the-fly compilation and linking takes place to tokenize the expression before
	executing it. This is highly inefficient for two reasons:
	
	- It increases the size of applications because the mini-compiler code has to
	  be built for each expression to evaluate.
	
	- It decreases execution speed because of the overhead incurred by the
	  on-the-fly compilation.
	
	Macro substitution is still supported for backwards compatibility purposes, and
	because it is still popular with many xBase developers. The only situation where
	macro substitution is still required is when the expression to evaluate contains
	the command to be executed, in whole or in part, as in the following code
	examples:
	
	  cClauses=" * FROM CUSTOMER WHERE cno='A'"
	     SELECT &cClauses
	
	  -or-
	
	  cResetMenu="SET SYSMENU TO DEFAULT"
	     &cResetMenu
	
	Name Expression
	---------------
	
	This is the preferred method for referencing FoxPro components that can be named,
	like windows, menus, popups, and files (including screens, menus, and reports)
	in the commands that run them, as in the following examples:
	
	  cWindowName="test"
	     DEFINE WINDOW (cWindowName) FROM 1,1 TO 20,50 SYSTEM
	
	  cScreen="Myscreen.spr"
	     DO (cScreen)
	
	  cReport="Myreport.frx"
	     REPORT FORM (cReport) PREVIEW ENVIRONMENT
	
	Name expression compilation is optimized and does not require the creation of any
	"lookup" code, which makes it much more efficient than macro substitution.
	However, the limited scope of name expressions (they can only be used to
	evaluate variables used to name FoxPro components) required that another tool be
	used for evaluation of variables under other circumstances.
	
	EVALUATE()
	----------
	
	This function is, like every FoxPro function and command, built into the language
	library and therefore more efficient than macro substitutions because there is
	no need for on-the-fly compilation. EVALUATE() can be used to return the values
	of expressions anywhere in the code, except when name expressions are required
	(see above). Typically, this function is used to retrieve sorting, filtering, or
	querying information from the user at runtime, as the following example
	illustrates:
	
	     cCondition="CNO='A'"
	     @ 2,2 SAY "Type filter condition for appending records or hit <ENTER>:";
	        GET cCondition VALID CHECK()
	     READ
	     USE customer
	     APPEND FROM customer FOR EVALUATE(cCondition)
	
	     FUNCTION CHECK
	     * Validation code for expressions typed
	     RETURN .t. && or .f.
	
	Special Considerations
	----------------------
	
	EVALUATE() VS. MACRO SUBSTITUTION IN LOOPING CONDITION:
	
	Consider the following syntax:
	
	     USE customer
	     cCondition = "CNO='A'"
	     SCAN FOR <condition>
	        * Processing code here>
	     ENDSCAN
	
	In the above example, if &cCondition is used as the condition, the loop will
	process one record only, because the condition is evaluated only when the
	mini-compiler executes on-the-fly. Instead, the condition should be
	"EVALUATE(cCondition)" (without the quotation marks), because EVALUATE() can be
	called repeatedly because it is a native FoxPro function.
	
	CODE OPTIMIZATION:
	
	To speed up run-time execution, developers usually reduce the number of lines in
	their code, thinking that if the size in memory is reduced, the application will
	execute faster. For example, the following would be a valid optimization:
	
	     * Original code
	     ...
	     IF CHECK() == .t.
	        WAIT WINDOW "This is the customer we're looking for"
	     ENDIF
	
	     FUNCTION CHECK
	     PRIVATE lRetVal
	
	     IF cno == 'A1592'
	        lRetval = .t.
	     ELSE
	        lRetVal = .f.
	     ENDIF
	
	     RETURN lRetVal
	
	     * Optimized code
	     IF CHECK()
	        WAIT WINDOW "This is the customer we're looking for"
	     ENDIF
	
	     FUNCTION CHECK
	     RETURN (cno=='A1592')
	
	While it is true that reducing the size of the code in memory generally helps
	speed up the code at runtime, it is not always true that reducing the number of
	lines reduces the size of the application in memory, especially when using macro
	substitution, because of the extra code that is built in by the compiler. Also,
	even if the application size in memory is reduced, the overhead incurred during
	macro evaluation slows the execution down anyway. The following example
	illustrates this:
	
	     * Original code
	     * Parameter is numeric, determines which order to use
	     FUNCTION CustSort
	     PARAMETERS nSortType
	
	     DO CASE
	     CASE nSortType == 1
	        SELECT * FROM customer ORDER BY cno
	     CASE nSortType == 2
	        SELECT * FROM customer ORDER BY contact
	     CASE nSortType == 3
	        SELECT * FROM customer ORDER BY company
	     OTHERWISE
	        SELECT * FROM customer
	     END CASE
	
	     RETURN .t.
	
	     * Optimized code (but it will most likely not run faster)
	     * Parameter is character string, contains 'order by' clause
	     FUNCTION CustSort
	     PARAMETERS cOrderBy
	
	     IF !EMPTY(cOrderBy)
	        SELECT * FROM customer &cOrderBy
	     ELSE
	        SELECT * FROM customer
	     ENDIF
	
	     RETURN .t.
	
	Note that these optimization concepts are fairly irrelevant with simplistic
	examples like these. In a real-world application, the speed difference will be
	more noticeable. OVERLAPPING OF USAGE: In some instances, EVALUATE() and name
	expressions can be interchanged. In this case, there is no preferred method,
	although it would help the developer to use name expressions whenever possible
	for consistency's sake. Here is a situation where either method is acceptable:
	
	     cProc="Myproc.prg"
	     DO (cProc)   && or DO EVALUATE("cProc")
	
	Although macro substitution could also be used here, its use is not demonstrated
	because of the reasons explained previously: speed, efficiency, and consistency.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300
	Version           : :2.6a,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
