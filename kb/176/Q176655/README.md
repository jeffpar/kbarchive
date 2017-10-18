---
layout: page
title: "Q176655: HOWTO: Convert a Word Table to a FoxPro Table"
permalink: kb/176/Q176655/
---

## Q176655: HOWTO: Convert a Word Table to a FoxPro Table

	Article: Q176655
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbHWMAC kbvfp300 kbvfp500 kbvfp600 kbvfp260
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes, you may need to convert a Word table object into a FoxPro or Visual
	FoxPro table (.dbf) file. The Word table object is not really a .dbf file and
	FoxPro cannot directly read the data contained in the Word table. This article
	provides three methods of converting a Word table into a .dbf file.
	
	MORE INFORMATION
	================
	
	The first two methods utilize the functionality of Microsoft Word. The third
	method uses FoxPro's low-level file functions to read a text file and place data
	from each of the "fields" in the Word table into the corresponding field of a
	FoxPro table.
	
	For demonstration purposes, the code examples use a Word table containing five
	columns and eight rows. The sample data for the table appears below:
	
	  First Name       Last Name    State      DOB       Terms
	  George           Washington    VA     2/22/1732      2
	  John             Adams         MA     10/30/1735     2
	  Thomas           Jefferson     VA     04/13/1743     2
	  James            Madison       VA     03/16/1751     2
	  James            Monroe        VA     04/28/1758     2
	  John             Adams         MA     04/11/1767     1
	  Andrew           Jackson       SC     03/15/1767     3
	
	Method One
	----------
	
	1. Create the table described above in Word. Select the entire table and then
	  click Copy from the Edit menu.
	
	2. Start Microsoft Excel and open an empty worksheet.
	
	3. Place the cursor in the first cell of the worksheet and click Paste from the
	  Edit menu. The contents of the table should appear in the spreadsheet.
	
	4. On the File menu, click Save As, and then select DBF 3 (dBase III) from the
	  "Save File as Type" list. Next, click Save. This saves the table as a .dbf
	  file. Close Microsoft Excel.
	
	5. Open the table in FoxPro with the USE command. If FoxPro prompts for a code
	  page, choose 1252 - Windows ANSI.
	
	This method converts the contents of the first row of the Word table to the field
	names of the .dbf file.
	
	Method Two
	----------
	
	1. Using Word, create and save the table described in the More Information
	  section. On the Table menu, click Select Table.
	
	2. Click the Table menu again and select "Convert Table to Text."
	
	3. In the "Convert Table to Text" dialog box, select commas in the "Separate
	  Text With" section and click OK.
	
	4. On the File menu, click "Save As", and then select MS-DOS Text from the "Save
	  as File Type." Name the file Test.txt and click Save.
	
	5. Create a table in FoxPro with the same structure as the Word table.
	
	6. In the FoxPro Command window, issue the following command:
	
	        APPEND FROM <filename> TYPE DELIMITED
	
	  The APPEND FROM places one record in the table for each row in the text file.
	
	If the Word table contains headings for each column, the first record of the new
	.dbf file now contains this data. Use the FoxPro DELETE command to remove this
	record.
	
	Method Three
	------------
	
	1. Using Word, create the table described in the More Information section.
	  Select the table in Word and then copy and paste the table to a new Word
	  Document.
	
	2. On the File menu, click Save As and save the file as an MS-DOS Text file.
	
	3. Create a .dbf file in FoxPro that contains the same fields as the Word table.
	  The size of each field should be large enough to accommodate all the data
	  from the contents of the largest field. Save the table as ztable1.dbf.
	
	4. Copy the following code into a program file in FoxPro and then execute the
	  code:
	
	        PARAMETERS nrows
	
	        USE ztable1.DBF
	
	        =AFIELDS(atbldata,"ztable1")
	        x=1
	        fname=""
	        STORE FOPEN('test.txt') TO hTextFile  && Open the file.
	        STORE FSEEK(hTextFile, 0, 2) TO FileEnd     && Move pointer to EOF.
	        STORE FSEEK(hTextFile, 0) TO FileTop        && Move pointer to BOF.
	        IF FileEnd <= 0                             && Is file empty?
	        WAIT WINDOW 'This file is empty!' NOWAIT
	        ELSE
	        FSIZE=FSEEK(hTextFile,0,2)               && Determine file size.
	        =FSEEK(hTextFile,0,0)                    && Go to the top of file.
	        DO WHILE x <= nrows
	        APPEND BLANK
	        FOR i= 1 TO ALEN(atbldata,1)   && Loop for each field in Array.
	        FieldData = FGETS(hTextFile, FileEnd)  && Store contents in
	                                               && a variable.
	        fname=ALLTRIM(atbldata(i,1))     && Trims blanks from data.
	        REPLACE (fname) WITH FieldData   && Places data in .dbf
	                                                && file field.
	        ENDFOR
	        x=x+1                       && Increment counter for next field.
	        ENDDO
	        ENDIF
	        = FCLOSE(hTextFile)                          && Close the file.
	
	To use this program with the data provided above, use the following syntax:
	
	  DO Tbltodbf.prg with 7
	
	NOTE: The number 7 in the above command indicates the number of rows in the Word
	table. This code makes the following assumptions:
	
	- A FoxPro table named ztable.dbf exists with the same structure as the Word
	  table.
	
	- The Word table is saved to an MS-DOS text file called Test.txt.
	
	- All the fields in the Word table will be treated as character field types.
	
	- The number of rows to import from the Word table is known and passed to the
	  program.
	
	- The first row in the Word table is treated like a record in the FoxPro table.
	
	- The Word table contains no fields longer than 254 characters.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbHWMAC kbvfp300 kbvfp500 kbvfp600 kbvfp260 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbFoxPro260 kbFoxPro260a kbVFP300bMac kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
