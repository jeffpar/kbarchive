---
layout: page
title: "Q134366: FIX:GENDBC Error: Command contains unrecognized phrase/keyword"
permalink: /kb/134/Q134366/
---

## Q134366: FIX:GENDBC Error: Command contains unrecognized phrase/keyword

	Article: Q134366
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs on DBSETPROP() when a program created by GENDBC.PRG
	is run:
	
	  Command contains unrecognized phrase/keyword
	
	CAUSE
	=====
	
	A comment for a field in a table contains a Carriage Return.
	
	WORKAROUND
	==========
	
	Use the following steps to modify GENDBC.PRG located in the Visual FoxPro
	TOOLS\GENDBC directory so that it adds the CHR(13) as a character in the Comment
	field.
	
	1. Type the following command in the Command window to open the GENDBC program:
	
	     MODIFY COMMAND SYS(2004)+"TOOLS\GENDBC\GENDBC.PRG"
	
	2. Choose Find from the Edit menu and type the following in the Look For box
	  including the quotation marks:
	
	  " "comment"" (without the quotation marks)
	
	3. Add a new line to the program below the following line of code, which is two
	  lines below the line that was found:
	
	     cTemp = STRTRAN( cTemp, ["], ['] )
	
	4. Type the following command on the new line created in Step 3:
	
	     cTemp = STRTRAN( cTemp, CHR(13), ["+CHR(13)+"] )
	
	5. Save and close the program file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	GENDBC.PRG is located in the Visual FoxPro TOOLS\GENDBC directory. This tool
	generates a program that can re-create a database. It can be used to:
	
	- Generate code you can analyze to learn how a database is created via program
	  code.
	
	- Generate code that can be placed in your program code to eliminate the need
	  to ship your databases with your application.
	
	- Generate code that can be placed in your program code to re-create the
	  database if a customer's data is corrupt.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Type the following commands in the Command window:
	
	     OPEN DATABASE SYS(2004)+"samples\data\testdata"
	     USE customer
	     MODIFY STRUCTURE
	
	2. Type the following lines in the comment "Field Comment" box, pressing ENTER
	  between each line.
	
	  This is the customer's id.
	  This field should be unique.
	
	3. Click OK in the Table Designer dialog box. Click Yes when prompted to save
	  the structure changes.
	
	4. To ensure that none of the sample files are overwritten, make sure that your
	  Default directory is not the Visual FoxPro SAMPLES\DATA directory. This can
	  be verified by choosing Options from the Tools menu, and then selecting the
	  File Location tab. "Default Directory" is the first option in the list.
	
	5. Type the following command in the Command window to create a program that
	  will re-create the TESTDATA database and its tables.
	
	     DO SYS(2004)+'tools\gendbc\gendbc' WITH 'testdata.prg'
	
	6. Now type the following command to run the program that was created in Step 4,
	  and display the error message:
	
	     DO testdata.prg
	
	REFERENCES
	==========
	
	Visual FoxPro Help File, Topic "GENDBC.PRG."
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
