---
layout: page
title: "Q125022: MS EXCEL 5 FOR WINDOWS STEP BY STEP: 3rd Edition Corrections"
permalink: /kb/125/Q125022/
---

## Q125022: MS EXCEL 5 FOR WINDOWS STEP BY STEP: 3rd Edition Corrections

{% raw %}

	Article: Q125022
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Excel 5 for Windows Step by Step ISBN 1-55615-587-5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Microsoft Excel 5 for Windows Step by
	Step."
	
	The following topics are covered:
	
	- Page 209: P3REVIEW.XLS Contains Invalid PivotTable
	
	- Page 117: Page Break Unavailable Due to Fit To Page Setting
	
	- Page 136: Lesson 7 Causes Confusion Due to Opening 2 files
	
	- Page 137: Awkward Page Split Between Steps (Mouse Operation)
	
	- Page 117: Subtotals Added to Individual Products on Page 177
	
	- Page 251: Step 3; unclear step to find PRACTICE directory.
	
	- Page 260: 1994 Referenced Instead of 1995 in Step 3
	
	- Page 309: Transition tab missing from "Changing Other Options"
	
	- Page 66: Part 1 Review Step 4 Cell Reference Typo
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, this document might also
	include sections labeled "Correction" and "Comments." Please note that the
	"Correction" section is worded for correcting the book and does not necessarily
	address the problem introduced by the book error. The "Comments" section
	contains specific information for working around problems.
	
	Page 209: P3REVIEW.XLS Contains Invalid PivotTable
	--------------------------------------------------
	
	The PivotTable contained in P3REVIEW.XLS has an invalid range. The existing range
	is:
	
	  'P:\EXCEL5.SBS\PRACDISK\[P3REVIEW.XLS]Copier Data'!$C$7:$J$37
	
	The existing range causes the following error message:
	
	  PivotTable is not valid.
	
	Correction:
	
	The correct range should be:
	
	  'Copier Data'!$C$7:$J$37
	
	Comments:
	
	To fix this PivotTable, follow these steps:
	
	1. Open P3REVIEW.XLS and select the Copier Pivot tab.
	
	2. Select any cell on the PivotTable (For example, select Cell C13).
	
	3. From the Data menu, choose PivotTable. The following error will appear:
	
	  PivotTable is not valid.
	
	4. Choose OK in response to the error message that appears.
	
	5. In the PivotTable Wizard Step 2 of 4 that follows the error message, change
	  the Range to 'Copier Data'!$C$7:$J$37.
	
	6. To accept this change, choose the Finish button .
	
	7. Save P3REVIEW.XLS.
	
	After you correct the PivotTable range in P3REVIEW.XLS, the review will behave as
	described in the book. You will need to restart the review exercise on page 207
	after making this correction.
	
	
	Page 117: Page Break Unavailable Due to Fit To Page Setting
	-----------------------------------------------------------
	
	Step 2 on page 117 will not break the page as described. This is because the Fit
	To option has been set from the previous steps (pages 112-113) and has not been
	turned off.
	
	Correction:
	
	A step must be inserted prior to page 117 that resets the page setup to Adjust
	To.
	
	Comments:
	
	Before you try to insert the page break using the steps on page 117, do the
	following steps:
	
	1. From the File menu, choose Page Setup.
	
	2. In the Page Setup dialog box, click the Page tab.
	
	3. Under Scaling, select the Adjust To option.
	
	  This disables the Fit To option.
	
	4. Click OK.
	
	After disabling the Fit To option, the steps on page 117 will operate as
	described in the book.
	
	Page 136: Lesson 7 Causes Confusion Due to Opening 2 Files
	----------------------------------------------------------
	
	The steps on page 136 may be confusing. This is the first lesson where two files
	are open at the same time. The confusion arises when the distinction between
	07LESSN.XLS and 07LESSNA.XLS is not noticed.
	
	Correction:
	
	A note or a margin text should point out that although these two files have
	similar names, they are two different files, and they both need to be opened to
	perform the steps in the lesson.
	
	Comments:
	
	Make sure both 07LESSN.XLS and 07LESSNA.XLS are loaded as instructed by the
	lesson steps.
	
	Page 137: Awkward Page Split Between Steps (Mouse Operation)
	------------------------------------------------------------
	
	The steps at the end of page 137 suggest that you hold down the CTRL key and
	click the left mouse button. However, you must turn to page 138 before letting
	go of the CTRL key and the mouse button. This is an awkward split of steps.
	
	Correction:
	
	The first line of step 3 should appear on page 137 with the other two steps. The
	explanation of step 3 can be left on page 138.
	
	Page 117: Subtotals Added to Individual Products on Page 177
	------------------------------------------------------------
	
	The Inventory report on page 177 shows a consolidated summary of several sheets.
	However, the summary cost for the divisions (Personal Copier, Personal Plus
	Copier, and Business Copier) are incorrect.
	
	These prices are a sum of the individual products plus the subtotal of these
	products as calculated on page 173. This means that the individual products are
	counted twice.
	
	Correction:
	
	To avoid counting the individual titles twice, the Fax Inventory sheet needs to
	be free of subtotals.
	
	Microsoft Press is researching this problem and will place further information in
	this article when available.
	
	Comments:
	
	One way to correctly summarize the data in the Fax Inventory is to delete the
	subtotal rows before consolidating data in the Inventory Report. The following
	steps demonstrate this workaround:
	
	1. Select the Fax Inventory Sheet.
	
	2. Clear each row containing a bolded title in column E (rows 11, 14, 17, 20,
	  and 21). To clear each row, select the row and press the DEL key.
	
	  This will leave a blank row where the subtotal was.
	
	Now when the consolidation is run as stated on page 176, the correct totals will
	be shown in the Inventory Report sheet.
	
	Page 251: Step 3; unclear step to find PRACTICE directory.
	----------------------------------------------------------
	
	Step 3 on page 251 instructs the reader to open 13LESSON.DOC in the PRACTICE
	directory. However, the intended PRACTICE directory will not be immediately
	available from Microsoft Word 6.
	
	Correction:
	
	Change "open the file 13LESSON.DOC in your PRACTICE directory," to "open the file
	13LESSON.DOC in your Excel PRACTICE directory,"
	
	Comments:
	
	This book assumes you only have one PRACTICE directory, and that this directory
	is located in the EXCEL directory. When Microsoft Word 6 for Windows looks for
	files to open, the default directory is WINWORD, not EXCEL.
	
	To locate the Excel PRACTICE directory from WinWord, double-click the previous
	directory folder (C:\ or MSOFFICE, depending on your software configuration),
	then locate and double-click the EXCEL folder. From the EXCEL directory,
	double-click on the PRACTICE folder and 13LESSON.DOC should be one of two
	documents available to be opened.
	
	Note: If the practice files for the Microsoft Press book "Word 6 for Windows Step
	by Step" are also loaded on the same computer, a PRACTICE directory will be
	located in the WINWORD directory. This is not the correct directory for the
	Excel lessons, and it will not contain 13LESSON.DOC.
	
	Page 260: 1994 Referenced Instead of 1995 in Step 3
	---------------------------------------------------
	
	Page 260, step 3 describes the task of creating scenarios to show changes in each
	product marketer's sales for 1994. However, the steps following this paragraph
	only affect the numbers for 1995.
	
	Correction:
	
	On page 260, step 3, end of paragraph 1, change "...marketer's sales for 1994" to
	"...marketer's sales for 1995."
	
	Comments:
	
	Only the 1995 forecast numbers are created using formulas. 1994 figures in this
	worksheet are already reported, and are represented as values, rather than
	formulas. Therefore, any alterations in the formula via a scenario will only
	affect 1995.
	
	Page 309: Transition tab missing from "Changing Other Options"
	--------------------------------------------------------------
	
	On Page 308-310 there are illustrations of the screen showing the default
	settings for the various options in Excel 5. However, the Transition tab is
	missing from this list. There are a few options in the Transition tab that can
	significantly alter the behavior of Excel 5.
	
	Correction:
	
	Add an illustration of the screen containing default options set in the
	Transition tab of the Options dialog box.
	
	Comments:
	
	The default settings are as follows:
	Microsoft Excel menu or Help key: /
	Microsoft Excel Menus (Radio button set)
	
	All other Check boxes should be blank.
	
	If the Transition Navigation Keys box is checked, Excel will behave like Lotus
	123. This will cause most of the steps in this book to not work properly until
	the Transition Navigation Keys box is unchecked.
	
	Page 66: Part 1 Review Step 4 Cell Reference Typo
	-------------------------------------------------
	
	On page 66, part 1 review, step 4 says for you to type your name in cell C2.
	However, the diagram on page 67 shows the name typed in cell C3. Cell C3 is the
	correct location for you to type your name.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug sbs
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}
