---
layout: page
title: "Q130456: Comparing Visual FoxPro to Other Programming Languages"
permalink: /kb/130/Q130456/
---

## Q130456: Comparing Visual FoxPro to Other Programming Languages

{% raw %}

	Article: Q130456
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Most programming languages have similar features. If you are familiar with one
	programming language, you can easily translate this knowledge to another
	language. This article compares how BASIC, C/C++, Pascal and Visual FoxPro
	implement the basic programming constructs in the following areas:
	
	- Dealing with case sensitivity.
	
	- Declarating variables.
	
	- Adding comments.
	
	- Storing values to variables (assignment statements).
	
	- Structuring IF, CASE, FOR and WHILE statements.
	
	- Passing parameters by value and by reference.
	
	MORE INFORMATION
	================
	
	Dealing with Case Sensitivity
	-----------------------------
	
	Only C/C++ is a case-sensitive programming language.
	
	- BASIC          not case sensitive
	- C/C++          case sensitive
	- Pascal         not case sensitive
	- Visual FoxPro  not case sensitive
	
	Declaring Variables
	-------------------
	
	When you assign a value to a variable (other than an array) that does not exist,
	Visual FoxPro implicitly declares it. (Arrays must be declared using the
	DIMENSION command). Languages that require explicit declaration of variables
	return an error.
	
	- BASIC          Variables can be implicitly declared
	- C/C++          Variables must be explicitly declared
	- Pascal         Variables must be explicitly declared
	- Visual FoxPro  Variables are implicitly declared
	
	Adding Comments
	---------------
	
	Each language has its own format for adding comments to programs. Visual FoxPro
	has different formats for whole line comments and for comments on partial
	lines.
	
	- BASIC          ' comment
	- C/C++          // comment
	                 /* comment block */ 
	- Pascal         { comment block }
	- Visual FoxPro  * full-line comment
	- Visual FoxPro  && partial-line comment
	
	Storing Values to Variables (Assignment Statements)
	---------------------------------------------------
	
	Pascal requires a colon in the assignment statement.
	
	- BASIC          nVal = 7
	- C/C++          nVal = 7
	- Pascal         nVal := 7
	- Visual FoxPro  nVal = 7
	                 STORE 7 TO nVal
	
	NOTE: In Visual FoxPro, you can also assign values to fields in a table by using
	the REPLACE command.
	
	Structuring IF Statements
	-------------------------
	
	Each language offers equivalent IF functionality.
	
	- BASIC          If nCnt < nMax Then
	                    nTot = nTot * nCnt
	                    nCnt = nCnt + 1
	                 End If
	
	- C/C++          if(nCnt < nMax) {
	                    nTot *= nCnt;
	                    nCnt++;
	                 }
	
	- Pascal         if nCnt < nMax then
	                    begin
	                    nTot:=nTot * nCnt;
	                    nCnt:=nCnt   + 1;
	                 end
	
	- Visual FoxPro  IF nCnt < nMax
	                    nTot = nTot * nCnt
	                    nCnt = nCnt + 1
	                 ENDIF
	
	Structuring CASE Statements
	---------------------------
	
	Only Pascal does not offer ranges in CASE statements.
	
	- BASIC          Select Case n
	                    Case 0
	                       Print 'Zero'
	                    Case Is > 0
	                       Print 'Pos'
	                    Case Else
	                       Print 'Neg'
	                 End Select
	
	- C/C++          switch(n) {
	                    case 0:
	                       printf("Zero\n");
	                       break;
	                    case 1:
	                       printf("One\n");
	                       break;
	                    default:
	                       printf("?\n");}
	
	- Pascal         case n of
	                    0: writeln("Zero");
	                    1: writeln("One");
	                 end
	
	- Visual FoxPro  DO CASE
	                    CASE n = 0
	                       ? 'Zero'
	                    CASE n > 0
	                       ? 'Pos'
	                    OTHERWISE
	                       ? 'Neg'
	                  ENDCASE
	
	Structuring FOR Loops
	---------------------
	
	Each language offers a FOR statement. C/C++ has the most flexibility for
	expressions.
	
	- BASIC          For n = 1 to 10
	                    Print n
	                 Next n
	
	- C/C++          for(n=1; n<11; n++)
	                    printf("%d\n",n);
	
	- Pascal         for n := 1 to 10 do
	                    writeln(n);
	
	- Visual FoxPro  FOR n = 1 TO 10
	                    ? n
	                 ENDFOR | NEXT
	
	Structuring WHILE Loops
	-----------------------
	
	Each language offers equivalent WHILE loop functionality.
	
	- BASIC          While n < 100
	                    n = n + n
	                 Wend
	
	- C/C++          while(n < 100)
	                    n += n;
	
	- Pascal         while n < 100 do
	                    n := n + n;
	
	- Visual FoxPro  DO WHILE n < 100
	                    n = n + n
	                 ENDDO
	
	Passing Parameters by Value
	---------------------------
	
	Each language permits passing parameters by value.
	
	- BASIC          ABC ByVal X
	- C/C++          ABC(X);
	- Pascal         procedure ABC (x:integer);
	- Visual FoxPro  =ABC(X)
	
	Passing Arguments by Reference
	------------------------------
	
	You can pass parameters by reference two ways in Visual FoxPro.
	
	- BASIC            ABC X
	
	- C/C++            ABC(&VAR);
	
	- Pascal           procedure ABC
	                   var x:integer);
	
	- Visual FoxPro    =ABC(@X)
	                   DO ABC WITH X
	
	NOTE: By default, Visual FoxPro passes variables by value. However, you may use
	the SET UDFPARMS command to specify whether FoxPro passes parameters by value or
	by reference.
	
	Syntax: SET UDFPARMS TO <VALUE> or <REFERENCE>
	
	For more information on the SET UDFPARMS command, please see the "SET UDFPARMS"
	topic in Visual FoxPro Help file.
	
	For more programming language comparisons, please see the "Visual FoxPro and
	Other Programming Lauguages" topic in the Visual FoxPro Help file.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	
	=============================================================================
	

{% endraw %}
