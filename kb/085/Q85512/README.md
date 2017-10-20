---
layout: page
title: "Q85512: BUG: CodeView Executes Entire Single Statement Loop"
permalink: /kb/085/Q85512/
---

## Q85512: BUG: CodeView Executes Entire Single Statement Loop

{% raw %}

	Article: Q85512
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kbCodeView kbDebug kbVC _IK
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances CodeView will execute an entire for, while, or
	do-while loop containing a single line of source code. CodeView may appear to
	hang if the loop does many iterations, but that is not the case.
	
	RESOLUTION
	==========
	
	A detailed resolution follows. In the case of while and for loops, use braces in
	the loop body and do not have the closing brace on the same line as the
	single-line statement. In the case of do-while loops, do not have the while on
	the same line as the single-line statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following forms of for, while, and do-while loops execute completely while
	trying to single step under CodeView:
	
	     for( initialize ; test ; action )
	        statement1, statement2, ..., statementn;
	
	     for( initialize ; test ; action )
	     {  statement1, statement2, ..., statementn; }
	
	     for( initialize ; test ; action ) {
	        statement1, statement2, ..., statementn; }
	
	     for( initialize ; test ; action )
	     {
	        statement1, statement2, ..., statementn; }
	
	     while( condition )
	        statement1, statement2, ..., statementn;
	
	     while( condition )
	     {  statement1, statement2, ..., statementn; }
	
	     while( condition ) {
	        statement1, statement2, ..., statementn; }
	
	     while( condition )
	     {
	        statement1, statement2, ..., statementn; }
	
	     do statement1, statement2, ..., statementn; while( condition );
	
	     do
	        statement1, statement2, ..., statementn; while( condition );
	
	     do { statement1, statement2, ..., statementn; } while( condition );
	
	     do
	     {  statement1, statement2, ..., statementn; } while( condition );
	
	The following forms of for, while, and do-while loops execute as expected when
	single stepping under CodeView:
	
	       for( initialize ; test ; action )
	     {
	        statement1, statement2, ..., statementn;
	     }
	
	     for( initialize ; test ; action ) {
	        statement1, statement2, ..., statementn;
	     }
	
	     while( condition ) {
	        statement1, statement2, ..., statementn;
	     }
	
	     while( condition )
	     {
	        statement1, statement2, ..., statementn;
	     }
	
	     do statement1, statement2, ..., statementn;
	     while( condition );
	
	     do
	        statement1, statement2, ..., statementn;
	     while( condition );
	
	     do { statement1, statement2, ..., statementn; }
	     while( condition );
	
	     do
	     {   statement1, statement2, ..., statementn; }
	     while( condition );
	
	The for, while, and do-while loops also execute correctly if multiple statement
	lines are broken up into separate lines. The following source code appears to
	hang when tracing into or stepping over with CodeView. The following code does
	not demonstrate every case, but the behavior is the same for all of the cases
	above.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Zi /Od
	  */ 
	
	  #define SIZE 500
	
	  int array[SIZE];
	
	  int main(void)
	  {
	     int index = 0, flag = 0;
	
	     for( index = 0; index < SIZE ; index++)
	        array[index] = index;  /* CodeView appears to hang
	                                  here. Wait and the loop
	                                  will execute completely.
	                               */ 
	     index = 0;
	
	     while( index < SIZE )
	     array[index] = index, flag = index++; /* CodeView appears to hang
	                                              here. Wait and the loop
	                                              will execute completely.
	                                           */ 
	     return ( 1 );
	  }
	
	Additional query words: 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kbCodeView kbDebug kbVC _IK 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	
	=============================================================================
	

{% endraw %}
