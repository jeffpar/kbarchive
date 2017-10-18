---
layout: page
title: "Q116037: How to Perform REPLACE for Two Databases w/ Common Field"
permalink: kb/116/Q116037/
---

## Q116037: How to Perform REPLACE for Two Databases w/ Common Field

	Article: Q116037
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; MS-DOS:2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To update more than one record in a database from another, similar database, you
	may need to check for an end-of-file (EOF) marker during each iteration of the
	REPLACE operation. This is best accomplished with a DO ... WHILE loop, as
	demonstrated below.
	
	NOTE: In order for this process to work, the two databases must have a common key
	field.
	
	MORE INFORMATION
	================
	
	To demonstrate this process, we'll use the CUSTOMER database in the FoxPro
	TUTORIAL subdirectory. First, we'll copy CUSTOMER to a new database called
	NEWCUST, then we'll delete the contents of the COMPANY field, and then we'll
	restore the contents of the COMPANY field using the COMPANY field information in
	CUSTOMER.
	
	1. Set the default directory to the location of CUSTOMER.DBF. For example, in
	  FoxPro 2.x, issue the following command in the Command window:
	
	        SET DEFAULT TO C:\<FoxPro_directory>\TUTORIAL.
	
	  In Visual FoxPro, Issue the following:
	
	        SET DEFAULT TO C:\<FoxPro_directory>\SAMPLES\DATA
	
	  NOTE: In Visual FoxPro, you will also need to change all references below from
	  from CNO to CUST_ID.
	
	2. In the Command window, issue the following commands:
	
	        USE customer
	        COPY TO newcust
	        SELECT 0
	        USE newcust
	        ** the following command has no spaces between the quotation marks
	        REPLACE ALL company WITH ""
	        ** BROWSE the table with the empty COMPANY field contents
	        BROWSE
	        CLEAR ALL
	        CLOSE ALL
	        ** open a new program file called TEST
	        ** if a program called TEST already exists, choose another name
	        MODIFY COMMAND test
	
	3. In the edit window for the TEST program, type the following commands:
	
	        SELECT 0
	        USE customer
	        SELECT 0
	        USE newcust
	
	        SELECT customer
	
	        ** while not at end of file of CUSTOMER, do some actions
	        DO WHILE !EOF()
	           ** select the destination table
	           SELECT newcust
	           ** replace the empty COMPANY field with data from CUSTOMER where
	           **   the common key field is the same
	           REPLACE newcust.company WITH customer.company;
	              FOR newcust.cno = customer.cno
	           ** select the source table again to go to next record
	           SELECT customer
	           SKIP
	        ENDDO
	        SELECT newcust
	        ** BROWSE the table with the newly filled COMPANY data
	        BROWSE
	
	  NOTE: If the first database (that is, CUSTOMER) is indexed on the common key
	  field between the two tables, replace the commands in step 3 with the
	  following:
	
	        SELECT 0
	        USE customer ORDER TAG cno
	        SELECT 0
	        USE newcust
	        REPLACE ALL newcust.company WITH customer.company FOR ;
	           seek(cno,"customer")
	
	4. Save TEST.PRG and then run it.
	
	REFERENCES
	==========
	
	"Language Reference," (Windows and MS-DOS) pages L3-312, L3-470, L3-480, L3-
	816, L3-861, L3-1040, L3-1108
	
	"Language Reference," (Macintosh) pages 271, 396, 404, 651, 685, 827, 884
	
	Additional query words: FoxMac FoxDos FoxWin VFoxWin 2.50 2.50a 2.50b 2.50c 2.60
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbVFP300
	Version           : MACINTOSH:2.5x,2.6a; MS-DOS:2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
