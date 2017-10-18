---
layout: page
title: "Q119354: How to Group Child Records in a Report Detail Band"
permalink: kb/119/Q119354/
---

## Q119354: How to Group Child Records in a Report Detail Band

	Article: Q119354
	Product(s): Microsoft FoxPro
	Version(s): 2.5x 2.60 3.00| 2.00 2.5x 2.60 |
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you have a parent table that has two or more child tables, and when you
	create a report from these tables, you want to create a data grouping on a key
	field in the parent table, and within the Detail band you want to print first
	all of the related records from the first child table, followed by all the
	related records from the second child table (followed by all records from
	subsequent child tables in turn), follow one of the procedures below.
	
	MORE INFORMATION
	================
	
	Example 1
	---------
	
	This example assumes that there are three tables:
	
	- A parent table, PARENT.DBF, with two fields:
	
	   - CODE: A character field of width 2
	
	   - DESRIPT: A character field of width 2
	
	- Two child tables, CHILD1.DBF and CHILD2.DBF, with identical structures:
	
	   - CODE: A character field of width 2
	
	   - SALES: A numeric field of width 10 with two decimal places
	
	The example also assumes that the values for CODE are unique in the PARENT table,
	and that there are some records in both CHILD1 and CHILD2 that have values in
	the CODE field that also exist in the PARENT table. All three tables are indexed
	on the CODE field, and ORDER is set to that index. This example will produce the
	desired results regardless of whether a RELATION is set from PARENT to either of
	the child tables, and regardless of the SET SKIP (one-to-many) condition.
	
	1. Create a program (CHLDLST.PRG) with the following code:
	
	        PARAMETERS parentkey, childalias, string_exp
	        *parentkey is the field that all tables are indexed on.
	        *string_exp is the field in the child, must be a character expression
	        STORE "" TO ret_val
	        STORE ALIAS() TO was_alias  &&parent table
	        m_exact=SET("EXACT")
	        SET EXACT ON                 &&this is necessary for INLIST
	        one2many=INLIST(UPPER(childalias),UPPER(SET("SKIP")))
	        SELECT (childalias)
	        IF NOT one2many
	           SEEK EVALUATE(was_alias + "." + parentkey)
	        ENDIF
	        IF FOUND()                    && are there related child records?
	           SCAN WHILE EVALUATE(childalias + "." + parentkey) = ;
	           EVALUATE(was_alias + "." + parentkey)
	        * get the data from the current record in the child
	               STORE ret_val + EVALUATE(string_exp) ;
	                  + CHR(13) + CHR(10) TO ret_val
	        * add carriage return & linefeed
	           ENDSCAN
	       ENDIF
	       SELECT (was_alias)
	       SET EXACT &m_exact
	       * ret_val is now a concatenation of child records, separated by CR/LF
	       RETURN ret_val
	
	2. With the three tables open, and PARENT being the selected table, create a new
	  report that has a data grouping on the CODE field from the PARENT table. In
	  the group header band, place the two fields from the PARENT table. In the
	  Detail band, create two fields with an empty line separating them. The
	  expression for the first field is:
	
	        IIF(is_newkey=1,chldlst("code","child1","str(sales,10,2)"),"")
	
	  The expression for the second field is:
	
	        IIF(is_newkey=1,chldlst("code","child2","str(sales,10,2)"),"")
	
	  For both fields, do one of the following:
	
	   - On the Windows and Macintosh platforms, open the Report Expression dialog
	     box, choose the Top -- Field Can Stretch radio button under Position
	     Relative To, select the Print When check box, and select the Remove Line
	     If Blank check box.
	
	     -or-
	
	   - On the MS-DOS platform, open the Report Expression dialog box, and select
	     the Stretch Vertically and Float As Band Stretches check boxes. From the
	     Report menu, choose Page Layout, choose the Options button, and select the
	     Suppress Blank Lines check box.
	
	3. Create two report variables in the following order:
	
	  NOTE: It is critical that these variables appear in the correct order in the
	  list of report variables.
	
	   - Variable Name : is_newkey
	     Value to Store: iif(curr_key=parent.code,0,1)
	     Initial Value : 1
	
	   - Variable Name : curr_key
	     Value to Store: parent.code
	     Initial Value : ' '
	
	     With these report variables defined, is_newkey = 1 only when the key field
	     (CODE) in the PARENT table changes.
	
	4. Make sure the program CHLDLST.PRG is in the same subdirectory as the report
	  or in a subdirectory that is in the FoxPro path. Also make sure that the
	  parent table is in the active work area.
	
	This program can be customized to include (for example) subtotals for each child
	table, draw dividing lines between the children, and so on.
	
	Example 2
	---------
	
	You can also use the SELECT-SQL statement with the UNION ALL clause to obtain a
	table combining the records from both the parent and child tables.
	
	Use the following code to set up tables for this example:
	
	     USE customer IN 1
	     USE invoices IN 2
	     COPY TO inv2
	     USE inv2 IN 3
	
	The following SELECT-SQL statement could be used to join these tables into a
	cursor file that could then be used in a report. The resulting cursor will have
	all the related records for the first child, followed by the related records for
	the second child for each parent record. In this example, a character field is
	used to indicate from which child table the data comes and to further illustrate
	the point.
	
	     SELECT customer.cno, customer.contact, "child#1", invoices.ino, ;
	        invoices.idate ;
	        FROM customer, invoices ;
	        WHERE customer.cno=invoices.cno ;
	        UNION ALL ;
	        SELECT customer.cno, customer.contact, "child#2", inv2.ino, ;
	           inv2.idate ;
	           FROM customer, inv2 ;
	           WHERE customer.cno=inv2.cno ;
	           ORDER BY 1
	
	REFERENCES
	==========
	
	Information for this article was provided by Alan Schwartz of Micromega Systems.
	
	Additional query words: VFoxMac VFoxWin FoxMac FoxDos FoxWin 2.50 2.50a multiple
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250cMac kbFoxPro200DOS kbFoxPro260DOS kbFoxPro260 kbVFP300bMac kbVFP300
	Version           : 2.5x 2.60 3.00| 2.00 2.5x 2.60 |
	
	=============================================================================
	
