---
layout: page
title: "Q106030: How to Print Multiple Copies of the Same Label"
permalink: /kb/106/Q106030/
---

## Q106030: How to Print Multiple Copies of the Same Label

{% raw %}

	Article: Q106030
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can print multiple copies of the same label programmatically, as explained
	below.
	
	MORE INFORMATION
	================
	
	There are two methods you can use to print multiple copies of the same label.
	The choice of which method to use depends on how the labels should be ordered.
	
	Method 1: Issuing the LABEL FORM Command Multiple Times
	-------------------------------------------------------
	
	The simplest way to print multiple copies of a label is to issue the LABEL FORM
	command multiple times in sequence. The disadvantage of this method is that the
	copies of each label can be scattered over many pages in the printed labels.
	
	Method 2: Creating a Temporary Cursor to Contain the Label Information
	----------------------------------------------------------------------
	
	The second method requires building a temporary database, or an SQL cursor, that
	contains multiple copies of the label information. The program below
	demonstrates one method of building the temporary database. A Cartesian join is
	used to create the output cursor.
	
	When two databases are used in an SQL SELECT command, and one database contains
	blank key fields, each blank record is joined with every record in the other
	database. This process is referred to as a Cartesian join. If database 1
	contains 5 blank records, and database 2 contains 10 valid records, the
	resulting output cursor would contain 50 records--each of the 10 valid records
	joined with each of the 5 blank records. Normally, this would be undesirable
	behavior and blank key fields would be eliminated prior to the join, but this
	feature can be used to handle the multiple label problem easily.
	
	The disadvantage of this method is that the cursor can be quite large, leading to
	memory and disk space problems.
	
	     CLEAR
	     * Create a memory variable to hold the desired number of copies
	     * and prompt for input.
	
	     numcopies=1
	     @ 2,10 SAY "How many copies?  " ;
	        GET numcopies
	     READ
	
	     * Create a cursor with one field that will remain blank.
	     CREATE CURSOR mycopies ;
	        (cno C(5))
	
	     * Create one record in the cursor for each label copy desired.
	     FOR i = 1 TO numcopies
	        INSERT INTO mycopies (cno) VALUES (" ")
	     ENDFOR
	
	     * Perform an SQL join on the cursor and the live database.
	     * A WHERE clause can be used to limit the records selected.
	     SELECT customer.company, ;
	        customer.address, customer.city, ;
	        customer.state, customer.zip, mycopies.cno ;
	        FROM customer, mycopies ;
	        INTO cursor lablinfo
	
	     * Print the existing label form.
	     SELECT lablinfo
	     LABEL FORM mylabel TO PRINT
	
	     * Clean up afterwards.
	     SELECT lablinfo
	     USE
	     SELECT mycopies
	     USE
	
	Additional query words: VFoxWin FoxDos FoxWin FoxMac 2.50 2.50a 2.50b 2.50c 2.60 set sequential order adjacent
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbVFP300
	Version           : MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	

{% endraw %}
