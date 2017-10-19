---
layout: page
title: "Q140348: How to Indent Outline Items Without Using the Indent Property"
permalink: /kb/140/Q140348/
---

## Q140348: How to Indent Outline Items Without Using the Indent Property

	Article: Q140348
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a method that illustrates how to build an outline control
	and indent the elements in it without using the Indent property. The example
	code builds a list of program names displayed by extension.
	
	MORE INFORMATION
	================
	
	The sample program included in this article uses two tables and an array. The
	first table (MSCodeType) stores file categories (extensions) such as .prg, .exe,
	or .app. The second table (MSCodeExamples) lists file names by category. The
	array has two dimensions; it records the program categories and the number of
	items with this category.
	
	The Technique Used by the Code Sample
	-------------------------------------
	
	The code sample uses the following technique.
	
	1. Build a list of types. The code first builds the list of files from the
	  MSCodeType table. It scans the MSCodeType table and places the elements in
	  the outline control and in the laNumAdded array.
	
	2. Add an item. To add an item to the list, the code uses the AddItem method.
	  Only one parameter, the string to add to the list, is passed to the Additem
	  method. Because no index number is specified, the new item is added as a
	  subordinate item, at the end of the list of subordinates for the element
	  selected. The ListIndex property is called to select an item in the list
	  before inserting a new item.
	
	3. Select an item in the list. The sample code scans the MSCodeExamples table.
	  It locates the program type in the array and increments the number of
	  programs with this type. It also selects the parent of the item to insert.
	  The ListIndex property is not absolute for an element; it varies as elements
	  are inserted into the list, so it is necessary to calculate the position of
	  the item in the list each time an element is added. The code loops from the
	  current element in the array to the first element in the array, summing the
	  number of files to estimate the position of the current element to select.
	  The number of file categories (the parent in the outline control) is then
	  summed to calculate the list position of the current element. For example, if
	  you want to add a .prg type file name in the outline control, PRG is stored
	  in the third row in the array, so the array appears as follows:
	
	  Row   Program_type  Number_of_Files
	  -----------------------------------
	  1       EXE             2
	  2       HLP             3
	  3       PRG             4
	
	  The Outline looks like this:
	
	       EXE
	         Exe1
	         Exe2
	         Exe3
	       HLP
	         Hlp1
	         Hlp2
	         Hlp3
	       PRG
	         Prg1
	         Prg2
	         Prg3
	
	  The item to select is the PRG category type. The ListIndex of the item to
	  select is:
	
	     3+ 2 = 5 (go through the array in descending order, and calculate the
	              number of files above).
	
	     5+ 3-1 = 7 (adds the number of categories).
	
	Code Sample
	-----------
	
	Follow the step-by-step procedure to run this program
	
	1. Create the data. Copy and paste the following code in a program to create a
	  database and two tables.
	
	     CLOSE ALL
	     CREATE DATABASE mscodedbc
	
	     CREATE TABLE MSCODETYPE (code_description C(3))  && Adds table to mydbc1
	     INSERT INTO mscodetype values ('PRG')
	     INSERT INTO mscodetype values ('HLP')
	     INSERT INTO mscodetype values ('APP')
	     CREATE TABLE MSCodeExamples (program_type C(3), Program_name M)
	     INSERT INTO mscodeExamples VALUES ('PRG', 'prgProgram1')
	     INSERT INTO mscodeExamples VALUES ('APP', 'appTest1')
	     INSERT INTO mscodeExamples VALUES ('HLP','hlpHelp1')
	     INSERT INTO msCodeExamples VALUES ('PRG', 'prgProgram2')
	     INSERT INTO msCodeExamples VALUES ('HLP','hlpHelp2')
	
	2. Create a form.
	
	3. Open the data environment of the form, and add the MSCodeType and the
	  MSCodeexamples tables to the Data Environment.
	
	4. Select the OleContainer from the Form Controls toolbar. Click Select control,
	  then click Outline Control. An outline control is placed on the form.
	
	5. Copy the following code and paste it into the Init event of the outline
	  control.
	
	     SELECT MSCodeType
	     DIMENSION laNumAdded(RECCOUNT(),2)
	
	     SCAN
	     * Build the code types- the first indent of the outline
	       This.AddItem(MSCodeType.Code_Description)
	       laNumAdded(RECNO(),1) = 0
	       laNumAdded(RECNO(),2) = MSCodeType.Code_Description
	     ENDSCAN
	     * The table that contains file names
	     SELECT MSCodeExamples
	     SCAN
	       nIsTypeInArray=ASCAN(lanumadded,MSCodeExamples.Program_type)
	       nRow=ASUBSCRIPT(lanumadded,nIsTypeInArray,1)
	     * Find the position of the category in the array
	       laNumAdded(nRow,1) =laNumAdded(nrow,1) + 1
	       This.ListIndex = 0  && No item selected
	     * Loop through the array
	       FOR I = nrow-1 TO 1 STEP - 1
	         IF MSCodeExamples.Program_Type=lanumadded(1,2)
	         *aNumAdded(MSCodeExamples.Program_Type,2) = 0
	           This.ListIndex = 0
	           EXIT
	           ELSE
	     * Increment the index
	            This.ListIndex = This.ListIndex + laNumAdded(i,1)
	
	         ENDIF
	       ENDFOR
	     * Add the number of file categories to the ListIndex
	       This.ListIndex = This.ListIndex +nrow-1
	
	       lcProgram_Name = MLINE(MSCodeExamples.Program_Name,1)
	     * Add the item to the outline. It is added to the end of the subitems of
	     * the item currently selected.
	       This.AddItem(lcProgram_Name)
	       This.PictureType(This.ListIndex + ;
	          laNumAdded(MSCodeExamples.Program_Type,1)) = 2
	     ENDSCAN
	
	     This.ListIndex = 0
	     This.Parent.ReFresh
	
	Additional query words: VFoxWin OCX
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
