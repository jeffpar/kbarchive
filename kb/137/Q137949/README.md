---
layout: page
title: "Q137949: FIX: Microsoft Excel Worksheets w/ Formulas Import Incorrectly"
permalink: /kb/137/Q137949/
---

## Q137949: FIX: Microsoft Excel Worksheets w/ Formulas Import Incorrectly

	Article: Q137949
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbMDAC250kbbuglist kbfixlist
	Last Modified: 08-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Microsoft Excel spreadsheet's cells contain formulas, the Import function
	in Visual FoxPro will not import the data correctly. All or part of the data may
	be invalid when it is imported to the .dbf file.
	
	RESOLUTION
	==========
	
	There are two ways to work around this problem. Both correctly resolve the cells
	containing formulas. However, the first is the easiest and recommended method to
	use.
	
	- In Microsoft Excel, save the file as as a .dbf file. Then open the .dbf file
	  in Visual FoxPro with the USE <dbf name> command.
	
	- Use an ODBC connection to the Microsoft Excel file. Create a remote view or
	  cursor that can be then copied to a ,dbf file with the COPY TO <new table
	  name> command. The actual steps in creating the ODBC connection are beyond
	  the scope of this article due to the varying factors which weigh in the
	  process. For more information about ODBC, please see the following articles
	  in the Microsoft Knowledge Base:
	
	  Q130732 How To Create a Data Source to Access Microsoft Excel Files
	
	  Q130137 How to Use ODBC to Run SQL SELECT on Microsoft Excel Data
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In Microsoft Excel, create a new worksheet with the following values in the
	  respective cells:
	
	  Cell   Content
	  --------------
	  A1     Field1
	  B1     Field2
	  A2     25
	  B2     =A2 * 3
	
	  NOTE: Cell B2 displays the number 75 when you move off of it by pressing the
	  TAB key.
	
	2. Save the worksheet as xl2dbf.
	
	3. Close the worksheet.
	
	4. Switch to Visual FoxPro, and on the File menu, click Import.
	
	5. In the Import dialog box, select .xls as the Type and xl2dbf.xls saved in
	  step 2 as the specific worksheet to import.
	
	6. Click OK. An xl2dbf.dbf file will be created.
	
	7. Browse the imported table, and note that the value in Field2 will be a random
	  date, or other invalid value, rather than the correct value of 75.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00 missing incorrect blank zero xcel
	
	======================================================================
	Keywords          : kbMDAC250 kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
