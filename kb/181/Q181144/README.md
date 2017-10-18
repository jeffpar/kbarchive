---
layout: page
title: "Q181144: FIX: &quot;Too Many Names Used&quot; Error With Requeries or USE AGAIN"
permalink: kb/181/Q181144/
---

## Q181144: FIX: &quot;Too Many Names Used&quot; Error With Requeries or USE AGAIN

	Article: Q181144
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you requery a view multiple times or when you use a table multiple times
	under a different alias the following error message appears:
	
	  Too many names used.
	
	CAUSE
	=====
	
	The Visual FoxPro name table has overflowed.
	
	RESOLUTION
	==========
	
	The workaround varies depending on the scenario in which the error message is
	received.
	
	Two scenarios are outlined in the Steps to Reproduce Behavior section.
	
	The workaround for the first scenario is to issue the CLOSE TABLES ALL command
	and reopen the tables and/or views. The sample code illustrates this method.
	
	One possible workaround for the second scenario would be not to use a view and
	SELECT <fields> FROM <table> INTO CURSOR <cursorname>.
	However, this would not be updateable like a view.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	The error number for the error message "Too many names used" is error number
	1201.
	
	The Visual FoxPro Online help file describes the error as follows:
	
	  As a program was being loaded or a table was being opened, the Visual FoxPro
	  name table overflowed. Divide the program into smaller modules.
	
	This error can also be received when requerying a view many times or when using a
	table again multiple times with a different alias each time. The Steps to
	Reproduce Behavior section below shows two situations that can cause the error
	to occur.
	
	When a variable is declared in Visual FoxPro or a table is opened an entry is
	made in the Name Table Index for the variable or table field's names. This name
	table index has a limit of approximately 65,000 entries. This is also the limit
	on the number of variables, arrays, and array elements that can be used in
	Visual FoxPro.
	
	The name table index can be packed (by Visual FoxPro internally, not users of
	Visual FoxPro) to eliminate variables and other information that is no longer
	being used, but this is set to happen only when Visual FoxPro is low on memory,
	not when the maximum number of entries in the table is being approached.
	Consequently, the error message occurs when a large number of requeries or when
	a table is opened multiple times with a different alias each time. Each requery
	or use of a table is making additional entries in the name table index.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following are two different scenarios that can cause the error message. These
	programs have been optimized and set up to handle the error. In actual practice,
	Visual FoxPro may become unresponsive or even crash when the error is
	encountered.
	
	Scenario 1 - Using a Table Multiple Times With a Different Alias
	----------------------------------------------------------------
	
	Place the following code into a program file and run the program. The program
	creates a database and table named "test" and a view named "test_view". The
	numbers that are output to the Visual FoxPro screen (10000, 20000, 30000, and so
	forth) are the count of the number of times that the program has gone through
	the loop. They are shown only at 10,000 increments to speed up the program. When
	the error is encountered, an ON ERROR routine outputs the number of times the
	table has been used again, the error number and the error message.
	
	At the end of the ON ERROR routine, there are two blocks of code. The first,
	which is remarked out at present, allows the program to continue after receiving
	the error. The program closes all tables, which packs the name table index, and
	then reopens it and goes back into the loop. The second block of code just ends
	the program after setting SAFETY back to its original state.
	
	This code should take about five minutes or less to run, depending on the speed
	of the computer. Outputting additional information to the screen or turning TALK
	on slows it down considerably.
	
	     ***Start of program***
	     CLEAR
	     SET TALK OFF
	     lcSafe=SET("SAFETY")
	     SET SAFETY OFF
	     ON ERROR DO endprog WITH view_count, ERROR(), MESSAGE()
	
	     CLOSE DATABASES ALL
	     CREATE DATABASE 'Test.dbc'
	
	     ***** Table setup for TEST *****
	     CREATE TABLE 'Test.dbf' NAME 'TEST' (TESTF1 C(10) NOT NULL)
	
	     ***************** View setup for TEST_VIEW ***************
	     CREATE SQL VIEW "TEST_VIEW" ;
	        AS SELECT * FROM test!test
	
	     ****
	        =DBSetProp( 'TEST_VIEW', 'View', 'UpdateType', 1 )
	        =DBSetProp( 'TEST_VIEW', 'View', 'WhereType', 3 )
	        =DBSetProp( 'TEST_VIEW', 'View', 'FetchMemo', .T. )
	        =DBSetProp( 'TEST_VIEW', 'View', 'SendUpdates', .F. )
	        =DBSetProp( 'TEST_VIEW', 'View', 'UseMemoSize', 255 )
	        =DBSetProp( 'TEST_VIEW', 'View', 'FetchSize', 100 )
	        =DBSetProp( 'TEST_VIEW', 'View', 'MaxRecords', -1 )
	        =DBSetProp( 'TEST_VIEW', 'View', 'Tables', 'test!test' )
	
	     *! Field Level Properties for TEST_VIEW.
	     * Props for the TEST_VIEW.testf1 field.
	        =DBSetProp( 'TEST_VIEW.testf1', 'Field', 'KeyField', .F. )
	        =DBSetProp( 'TEST_VIEW.testf1', 'Field', 'Updatable', .T. )
	        =DBSetProp( 'TEST_VIEW.testf1', 'Field', 'UpdateName', ;
	           'test!test.testf1' )
	
	     CLOSE DATABASES ALL
	     OPEN DATABASE Test.dbc
	     USE test SHARED
	
	     INSERT INTO test (testf1) VALUES ("abc")
	     INSERT INTO test (testf1) VALUES ("def")
	     INSERT INTO test (testf1) VALUES ("hij")
	     INSERT INTO test (testf1) VALUES ("xyz")
	
	     view_count = 0
	
	     DO WHILE view_count<100000
	        view_count = view_count + 1
	        view_name = "tempviewname" + ALLTRIM(STR( view_count ))
	
	     IF MOD(view_count,10000)=0
	           ? view_count
	     ENDIF
	
	     SELECT 0
	     USE test AGAIN ALIAS ( view_name )
	     SELECT ( view_name )
	     USE
	     ENDDO
	
	     PROCEDURE endprog
	     PARAMETERS view_count, errnum, errmsg
	     ? "The view_count variable's value is " + LTRIM(STR(view_count))
	     ? "Error number: " + LTRIM(STR(errnum))
	     ? "Error message: " + errmsg
	
	     **Use this code to get past the error.
	     *CLOSE TABLES ALL
	     *USE test
	     *RETRY
	
	     **Use this code to end the program after the error.
	     CLOSE DATABASES ALL
	     SET SAFETY &lcSafe
	     ON ERROR
	     CANCEL
	     ***End of program***
	
	Scenario 2 - Requerying a View Multiple Times
	---------------------------------------------
	
	If you are using Visual FoxPro 5.x, place the code below into a program file and
	run the program. This program uses the Testdata database found in the
	\Samples\Data folder. The program does not specify any paths so SET DEFAULT TO
	this directory and save the program there before running the program.
	
	The code creates a local view on the employee table from Testdata. It then
	requeries the view repeatedly in a loop. When the error is finally encountered
	an ON ERROR routine is invoked. The output is similar to the program in Scenario
	one.
	
	This program also takes a good deal longer to run than the one in Scenario one.
	The program does not fail until over 100,000 requeries. Usually it fails in the
	105,000 to 110,000 range.
	
	The sample program below behaves so badly in Visual FoxPro 3.x for Windows that
	it is probably not even worth running the program.
	
	In Visual FoxPro for Macintosh, the following program encounters additional
	problems. First, the memory allocated to Visual FoxPro should be increased to
	10,000. When the code is run, instead of getting the "Too many names used"
	error, error 43 "There is not enough memory to complete this operation" is
	returned by the ON ERROR routine. Prior to the ON ERROR routine reporting the
	error though, the informational message "Memory is low, so streaming output
	updating has been disabled" displays. If the memory allocated to Visual FoxPro
	for Macintosh is not increased and the default 6,000 is used, the ON ERROR
	routine may not have enough memory to even display the error. All this fails
	after just over 20,000 times through the loop.
	
	     ***Start of program***
	     CLEAR
	     CLOSE DATABASES ALL
	     SET TALK OFF
	     SET SAFETY OFF
	     OPEN DATABASE testdata
	
	     ***************** View setup for EMPVIEW ***************
	
	     CREATE SQL VIEW "EMPVIEW" ;
	      AS SELECT Employee.emp_id, Employee.last_name, ;
	        Employee.first_name,  Employee.title, Employee.city FROM ;
	        testdata!employee
	
	     ****
	        =DBSetProp( 'EMPVIEW', 'View', 'UpdateType', 1 )
	        =DBSetProp( 'EMPVIEW', 'View', 'WhereType', 3 )
	        =DBSetProp( 'EMPVIEW', 'View', 'FetchMemo', .T. )
	        =DBSetProp( 'EMPVIEW', 'View', 'SendUpdates', .F. )
	        =DBSetProp( 'EMPVIEW', 'View', 'UseMemoSize', 255 )
	        =DBSetProp( 'EMPVIEW', 'View', 'FetchSize', 100 )
	        =DBSetProp( 'EMPVIEW', 'View', 'MaxRecords', -1 )
	        =DBSetProp( 'EMPVIEW', 'View', 'Tables', '' )
	
	     *! Field Level Properties for EMPVIEW
	     * Props for the EMPVIEW.emp_id field.
	        =DBSetProp( 'EMPVIEW.emp_id', 'Field', 'KeyField', .F. )
	        =DBSetProp( 'EMPVIEW.emp_id', 'Field', 'Updatable', .F. )
	        =DBSetProp( 'EMPVIEW.emp_id', 'Field', 'UpdateName', ;
	           'testdata!employee.emp_id' )
	
	     * Props for the EMPVIEW.last_name field.
	        =DBSetProp( 'EMPVIEW.last_name', 'Field', 'KeyField', .F. )
	        =DBSetProp( 'EMPVIEW.last_name', 'Field', 'Updatable', .F. )
	        =DBSetProp( 'EMPVIEW.last_name', 'Field', 'UpdateName', ;
	           'testdata!employee.last_name' )
	
	     * Props for the EMPVIEW.first_name field.
	        =DBSetProp( 'EMPVIEW.first_name', 'Field', 'KeyField', .F. )
	        =DBSetProp( 'EMPVIEW.first_name', 'Field', 'Updatable', .F. )
	        =DBSetProp( 'EMPVIEW.first_name', 'Field', 'UpdateName', ;
	           'testdata!employee.first_name' )
	
	     * Props for the EMPVIEW.title field.
	        =DBSetProp( 'EMPVIEW.title', 'Field', 'KeyField', .F. )
	        =DBSetProp( 'EMPVIEW.title', 'Field', 'Updatable', .F. )
	        =DBSetProp( 'EMPVIEW.title', 'Field', 'UpdateName', ;
	           'testdata!employee.title' )
	
	     * Props for the EMPVIEW.city field.
	        =DBSetProp( 'EMPVIEW.city', 'Field', 'KeyField', .F. )
	        =DBSetProp( 'EMPVIEW.city', 'Field', 'Updatable', .F. )
	        =DBSetProp( 'EMPVIEW.city', 'Field', 'UpdateName', ;
	           'testdata!employee.city' )
	
	     CLOSE TABLES ALL
	     USE employee
	
	     lncount = 0
	     llworking = .T.
	
	     ON ERROR DO reporterr WITH lncount, ERROR(), MESSAGE()
	
	     USE EmpView IN 0
	     DO WHILE llworking
	        lncount = lncount + 1
	        =REQUERY( 'EmpView')
	
	        IF MOD(lncount,10000)=0
	           ? lncount
	        ENDIF
	     ENDDO
	
	     PROCEDURE reporterr
	        PARAMETERS lncount, errnum, errmsg
	        ? "The value of the lncount variable is "+LTRIM(STR(lncount))
	        ? "The error number is: "+LTRIM(STR(errnum))
	        ? "The error message is: "+errmsg
	        llworking = .F.
	        ON ERROR
	        SET SAFETY ON
	        CANCEL
	     ENDPROC
	     ***End of program***
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix kbpending
	
	=============================================================================
	
