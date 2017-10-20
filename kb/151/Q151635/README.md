---
layout: page
title: "Q151635: Using SET ANSI &amp; SET EXACT with String Comparison Operator &quot;=&quot;"
permalink: /kb/151/Q151635/
---

## Q151635: Using SET ANSI &amp; SET EXACT with String Comparison Operator &quot;=&quot;

{% raw %}

	Article: Q151635
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the logical operator "=" (equal to) is used for character string
	comparisons, the results may not be exactly as expected. If two strings being
	compared are of different lengths, the outcome varies depending on the ON/OFF
	states of two environment settings: (1) SET EXACT specifies the rules Visual
	FoxPro uses when comparing two strings of different lengths in a non-SQL query
	environment; (2) SET ANSI determines whether the shorter of two strings is
	padded with blanks when a SQL-string comparison is made. Although these two
	environment settings have subtly different effects on the = operator, their
	distinctions in functionality are often misunderstood by developers because they
	both affect the comparison outcome of two strings of different lengths.
	
	MORE INFORMATION
	================
	
	The = operator is often used in Visual FoxPro to perform character string
	comparisons. When two strings of different lengths are compared, the results may
	vary depending on the ON/OFF states of two environment settings such as SET
	EXACT and SET ANSI. In contrast, neither setting has an effect if both strings
	are of the same length.
	
	SET EXACT ON | OFF
	------------------
	
	SET EXACT determines the rules Visual FoxPro uses when comparing two strings of
	different lengths in a non-SQL query environment. The ON state specifies that
	the shorter of the two expressions is first padded on the right with blanks to
	match the length of the longer expression, and then the two expressions are
	matched character-for-character to be equivalent. In contrast, the default OFF
	state concludes that two expressions are equivalent if the expression on the
	left side is matched character-for- character until the end of the expression on
	the right side is reached.
	
	It is important to emphasize that the left-to-right order of the two strings in a
	comparison is RELEVANT. Switching a string from one side of the = operator to
	the other affects the result of the comparison. Furthermore, the ON/OFF states
	of the setting's SET ANSI has no effect in comparing two strings of different
	lengths in a non-SQL query environment. The following examples further
	illustrate the point:
	
	Comparison:       EXACT OFF      EXACT OFF      EXACT ON      EXACT ON
	                 ANSI OFF       ANSI ON        ANSI OFF      ANSI ON
	---------------------------------------------------------------------------
	
	? "a_" = "a"        .T.            .T.            .T.           .T.
	? "a" = "a_"        .F.            .F.            .T.           .T.
	? "ab" = "a"        .T.            .T.            .F.           .F.
	? "a" = "ab"        .F.            .F.            .F.           .F.
	
	SET EXACT is scoped to the current data session.
	
	SET ANSI ON | OFF
	-----------------
	
	SET ANSI specifies how comparisons between strings of different lengths are made
	with the = operator in SQL Commands. When the setting is ON, Visual FoxPro first
	pads the shorter expression on the right with blanks to match the length of the
	longer expression. The two strings are then compared character-for-character for
	their entire lengths to be equivalent. However, when the setting is OFF, the
	shorter expression is not padded with blanks. The two strings are simply
	compared character-for-character until the end of the shorter string is
	reached.
	
	Visual FoxPro builds a SELECT - SQL Command in the Query Designer when you create
	a query. If you choose the Equal option when creating join and filter
	conditions, the = operator is included in the generated SELECT. The SET ANSI
	setting can effect the results of queries you create and perform in the Query
	Designer, whereas the state of SET EXACT has no effect on the outcome of SQL
	string comparisons.
	
	In SQL commands, the left-to-right order of the two strings in a comparison is
	IRREVELANT. Switching a string from one side of the = operator to the other does
	not effect the result of the comparison.
	
	The following example demonstrates the precise effect of SET ANSI setting:
	
	1. Create a free table, SAMPLE, with one column named Field1 as char(20). Input
	  the following records:
	
	  " B
	  Be
	  Bet
	  Between " (without the quotation marks)
	
	2. Create a new query, test.qpr, to contain the following SELECT-SQL command:
	
	        SELECT SAMPLE.field1;
	           FROM SAMPLE;
	           WHERE (SAMPLE.field1="B")
	
	3. Create a new program, test.prg, containing the following code:
	
	        SET ANSI ON
	        USE sample
	        DO test.qpr
	        CLOSE ALL
	
	4. Run test.prg. Query returns the following records:
	
	        B
	
	5. Copy test.prg to test2.prg. Change the state of SET ANSI so test2.prg
	  contains the following code:
	
	        SET ANSI OFF
	        USE sample
	        DO test.qpr
	        CLOSE ALL
	
	6. Run test2.prg. Query returns the following records:
	
	  " B Be Bet Between " (without the quotation marks)
	
	7. If query test.qpr is modified to contain the following SELECT-SQL command:
	
	        SELECT SAMPLE.field1;
	           FROM SAMPLE;
	           WHERE ("B"=SAMPLE.field1)
	
	  Step 4 and Step 6 produce the same results.
	
	SET ANSI is also scoped to the current data session.
	
	Additional query words: VFoxWin FoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260aDOS kbVFP300 kbVFP300b
	Version           : MS-DOS:2.0,2.5,2.5a,2.5b,2.6,2.6a; WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
