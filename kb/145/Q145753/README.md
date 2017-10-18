---
layout: page
title: "Q145753: MS VISUAL FOXPRO 3 FOR WIN SBS Corrections and Comments"
permalink: kb/145/Q145753/
---

## Q145753: MS VISUAL FOXPRO 3 FOR WIN SBS Corrections and Comments

	Article: Q145753
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Visual FoxPro 3 for Windows Step by Step 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Microsoft Visual FoxPro 3 for Windows Step
	by Step."
	
	Contents:
	
	- Page 24-28: Various corrections
	
	- Page 26: Steps don't match book and cause error
	
	- Page 116: CustFind form can't run- Error loading file
	
	- Page 165: glOldTalk variable misspelled in Figure.
	
	- Page 231: Duplicate code to verify existence of tables.
	
	- Page 272: Practice Files work on more than just Windows 95.
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, this document might also
	including Correction and Comments sections. the Correction section is worded for
	correcting the book and does not necessarily address the problem introduced by
	the book error. The Comments section contains specific information for working
	around the problem.
	
	Page 24-27:  Various Corrections
	--------------------------------
	
	The following corrections should be made to the first printing of this book.
	Please note that there have also been corrections made to the practice files for
	Lesson 3. The corrected files are required to perform the steps for this lesson
	in addition to the corrections noted below.
	
	Correction:
	
	Page 24: Step 5, change "Custdata" to "Custfind".
	
	Page 24: Paragraph 1, Sentence 1, Change "Customer Find" to "Find Customer".
	
	Page 25: Step 5, change "Customer List." to "Customer List, then click the
	Continue button."
	
	Page 27: Step 4, change "Select product #1002." to "Type the number 10002 in the
	Product Code field, then press Enter."
	
	Page 27: Step 1 under the heading "Take a customer survey", change "If the Ask
	Survey checkbox is selected, select the Quit button to access the survey
	screen." To "Select the Ask Survey checkbox, then select the Close button to
	access the survey screen."
	
	
	Page 28: Paragraph 1, change "Check the yes or no box based" to "Type Y or N
	based"
	
	Page  26:  Steps don't match book and cause error
	-------------------------------------------------
	
	Following the steps on pages 26 and 27 does not give results that match those
	described in the book. You might encounter the following error when performing
	Step 3 on page 25:
	
	  File 'C:\VFP\CUSTMORE.SCX' does not exist.
	
	Furthermore, clicking the Save Order button as instructed on page 27 will cause
	the following error when you try to exit Microsoft Visual FoxPro 3:
	
	  Table buffer for alias "orders" contains uncommitted changes.
	
	Other error messages might also occur.
	
	Correction:
	
	Microsoft Press is developing a corrected set of practice files for Lesson 3 and
	a small portion of Lesson 9, and will post new information in this article when
	the files become available.
	
	
	Until the correction files are available, Microsoft Press recommends that you
	read through Lesson 3 but do not open the Proj_03 files.
	
	Comments:
	
	Once the Save Order button is pressed, you can properly exit Visual FoxPro by
	following the steps below:
	
	1. Return to the Order Form if you are not already there. (Follow the steps on
	  pages 24-26 if necessary.)
	
	2. Press CTRL+F2 to open the Command Window, then type:
	
	  " =TABLEREVERT (.T.)" (without the quotation marks)
	
	If Step 2 produces an error, cancel and then reopen the Order Form and repeat
	step 2. You should now be able to close Microsoft Visual FoxPro
	
	1. If the error
	
	  Data session #1 cannot be released with open transaction(s).
	
	  appears, return to the Command window and enter the command: ROLLBACK
	
	Additional error messages might be encountered. Ignore these messages and close
	Visual FoxPro by using the steps outlined above. These error messages include:
	
	  Variable ORDERNUM not found.
	  Function requires row or table buffering mode.
	
	The following correction label has been applied to the disk envelope on the
	inside back cover of the first printing of this book:
	
	
	-----Begin Correction Label-----
	
	IMPORTANT!
	Do not perform the steps in Lesson 3. Corrected files for Lesson 3 are available
	at http://www.microsoft.com/support/ (on the World Wide Web) in the Free
	Software section.
	
	The Lesson 3 practice files provided with this book contain errors that can cause
	Microsoft Visual FoxPro 3 not to close properly. Please read Lesson 3, but do
	not open the Proj_03 project.
	
	Lesson 3 is a preview of what you will learn in Part 2, so these practice files
	are not essential for working through the other lessons.
	
	Closing Visual FoxPro 3 after using Proj_03 files: Information about closing
	Visual FoxPro after using the Proj_3 files is located in the Microsoft Knowledge
	Base. To access this information, connect to the FoxPro section of the Microsoft
	Knowledge Base via
	
	- the Internet at http://www.microsoft.com/support/ in the Knowledge Base
	  section.
	
	- MSN, CompuServe, GEnie, or other online services.
	
	Enter the query "foxpro and bookbug" without quotes. We apologize for any
	inconvenience this issue might cause.
	
	-----End Correction Label-----
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	  http://www.microsoft.com/
	
	Page 116:  CustFind form can't run- Error loading file
	------------------------------------------------------
	
	When trying to run the CustFind form, the following errors occur:
	
	  Error loading file
	  Error instantiating the object
	
	These errors occur when the form tries to access the Customer table, which is not
	currently open. To correct the problem, the Customer table should be added to
	the data environment of the form.
	
	For steps to modify the data environment, refer to Lesson 6.
	
	Page 165:  glOldTalk variable misspelled in Figure
	--------------------------------------------------
	
	The following correction is under investigation by TLR, Inc. and will be verified
	or modified in this article.
	
	Page 165: In the Menu Designer screen capture, change the code line after ELSE
	from "lgOldTalk = .f." to "glOldTalk = .f."
	
	Page 231:  Duplicate code to verify existence of tables
	-------------------------------------------------------
	
	There is duplicate code in sections 6 and 7 of the listing on page 231. The
	following duplicate code sections located after the comment "*-- one of the
	index files is missing" can be removed but do not cause a problem if left as
	shown:
	
	- verify the existence of the relevant tables
	
	...
	
	- the one of the tables is missing
	
	...
	
	Page 272:  Practice Files work on more than just Windows 95
	-----------------------------------------------------------
	
	The last paper page of this book describes the Step by Step Practice Files disk.
	However, it incorrectly states in the second sentence that the practice files
	require the Windows 95 operating system.
	
	Visual FoxPro 3.0 requires the Microsoft Windows 3.1 or later operating system.
	
	Correction:
	
	Page 272 ("Step by Step Practice Files Disk" page), sentence 2: Change "the
	Windows 95 operating system." to "the Microsoft Windows 3.1 or later operating
	system and Microsoft Visual FoxPro 3."
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug foxpro sbs ISBN 1-55615-846-7
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	
