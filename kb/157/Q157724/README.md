---
layout: page
title: "Q157724: BUG: Import Wizard Incorrectly Treats Consecutive Delimiters"
permalink: /kb/157/Q157724/
---

## Q157724: BUG: Import Wizard Incorrectly Treats Consecutive Delimiters

	Article: Q157724
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Import Wizard does not properly import a file containing consecutive
	delimiters. First, the Import Wizard does not treat consecutive delimiter
	characters as one field. The Import Wizard creates an extra column in the data
	table (.dbf). Second, the Import Wizard may truncate data that appears in the
	text file. This happens with files delimited with tabs or commas.
	
	WORKAROUND
	==========
	
	Create a table with the desired structure. Then write a program using low- level
	file functions to parse the text file and place the data into the newly created
	table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The steps below illustrate the behavior of the Import Wizard.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Test.txt file that contains the following sample data:
	
	     hello1,goodbye1,goodbye3,goodbye4
	     hello2,,goodbye2,goodbye2,goodbye2
	     hello3,,goodbye3,,goodbye3,,goodbye3
	
	2. Start the Import Wizard, click "Text file" as File Type, and click Test.txt
	  as the Source File and Testtxt.dbf as Destination File (New table). Click
	  Next.
	
	3. Change Data Format to "Delimited," and click Next.
	
	4. In step 2a of the wizard, select "Comma" as the field delimiter and select
	  the "Treat consecutive delimiters as one" check box. Finally, in the "Text
	  Delimiter" list select "None" and click Finish.
	
	5. Type "BROWSE" (without the quotation marks) in the Command window. The table
	  has seven columns instead of four. Note that the column4 field of record 2 is
	  empty. Additionally, three fields in record 3, column2, column3, and colum4,
	  are also blank. This data was truncated.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          : kb3rdparty kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
