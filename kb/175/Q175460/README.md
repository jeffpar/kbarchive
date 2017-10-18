---
layout: page
title: "Q175460: Inside Visual C++, 4th Ed. Corrections and Comments"
permalink: kb/175/Q175460/
---

## Q175460: Inside Visual C++, 4th Ed. Corrections and Comments

	Article: Q175460
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside Visual C++, Fourth Edition ISBN 1-57231-565-2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Inside Visual C++, Fourth Edition," ISBN
	1-57231-565-2.
	
	Contents:
	
	- Correspondence Intended For The Author
	
	- Page 119: Typographical Error
	
	- Page 221: Code Correction
	
	- Page 332: Text Correction
	
	- Page 340: Figure Mislabeled
	
	- Pages 795-809: Various Corrections
	
	- Page 813: First paragraph should read build EX28C not EX23C
	
	- EX08C: Errors On Running Executable
	
	- EX29A: Can't Save A Document
	
	MORE INFORMATION
	================
	
	Correspondence Intended For The Author
	--------------------------------------
	
	With great regret, Microsoft Press must report that Mr. David Kruglinski died on
	April 17, 1997, shortly after completing the fourth edition of this book. A
	special two-page section devoted to Mr. Kruglinski is on pages 988- 989 after
	the book index.
	
	If you have comments, questions, or ideas regarding this book or the companion
	disc, please send them to Microsoft Press using the following postal mail or
	e-mail:
	
	  Microsoft Press
	  Attn: Inside Visual C++ Editor
	  One Microsoft Way
	  Redmond, WA 98052-6399
	
	  E-mail: MSPINPUT@MICROSOFT.COM
	
	
	Page 119: Typographical Error
	-----------------------------
	
	Page 119, paragraph 3, sentence 2:
	Change: "beginning on page xx"
	To: "beginning on page 125" (without the quotation marks)
	
	
	Page 221: Code Correction
	-------------------------
	
	Page 221, step 3, code fragment:
	Change: CSize m_SizeSource, m_sizeDest;
	To: "CSize m_sizeSource, m_sizeDest; ' note capitalization change" (without the
	quotation marks)
	
	
	Page 332: Text Correction
	-------------------------
	
	Sentence "You can use the persistent view class..." should be "You can use the
	persistent frame class..." (without the quotation marks)
	
	
	Page 340: Figure Mislabeled
	---------------------------
	
	Caption for Figure 14-1 should be "The CPersistentFrame class listing"
	
	
	Pages 795-809: Various Corrections
	----------------------------------
	
	Page 795-796: Move step 1 to immediately follow step 3.
	
	Page 798: Delete "<m>" from step 9.
	
	Page 799, line 13:
	Delete: pDC->TextOut(pText.x+5000, pText.y, m_pSet->m_CourseID);
	
	Page 805, step 1:
	Change: "Run AppWizard to produce \vcpp32\ex28b\ex28b."
	
	To: "Run AppWizard to produce \vcpp32\ex28b." (without the quotation marks)
	
	Page 805, step 1, sentence 2:
	Change sentence to the following:
	"In the Step 2 dialog box, also click the Data Source button and choose the ODBC
	datasource named Student Registration. Choose Dynaset as the Recordset Type,
	then select the Instructor table. Finally,..." (without the quotation marks)
	
	Page 808, step 7:
	Screen the entire procedure. The first two lines on page 808 and the last line on
	page 809 are not screened. At the end of step 7, add the following:
	
	  " "Also, add the declaration for this overridden function to the ex28bView.h
	  header file." " (without the quotation marks)
	
	Page 809, step 8:
	3rd line from the bottom: Remove the "//" from the beginning of the line.
	
	
	Page 813: First paragraph should read build EX28C not EX23C
	-----------------------------------------------------------
	
	Page 813, first paragraph, first sentence:
	
	Change:
	"Build the EX23C project, and test the application."
	
	To:
	"Build the EX28C project, and test the application." (without the quotation
	marks)
	
	
	EX08C: Errors On Running Executable
	-----------------------------------
	
	When running the Ex08C.exe application, using either the executable file in the
	\Release directory or the compiled source code, you may receive an error similar
	to the following:
	
	  Invalid page fault in module MFC42.dll at 013f:5f405038
	
	CAUSE
	=====
	
	The program attempts to write the URL of the homepage to the Registry. If this
	URL does not match the URL of the homepage registered by Microsoft Internet
	Explorer, the program will crash.
	
	RESOLUTION
	==========
	
	Use ' marks to comment out the following lines of code:
	
	  In Ex08cView.cpp, in the CEx08cView::OnCreate event handler:
	
	     pDoc->mstrURLBrowse = AFXGetApp()->GetProfileString
	       (CEx08Doc::sprofileInternet,
	       CEx08cDoc::sprofileURLBRowse, "");
	
	
	EX29A: Can't Save A Document
	----------------------------
	
	In Example 29A, the Save and Save As commands are unavailable. It is not possible
	to save a query or the results of the query using this example application.
	
	This behavior is by design. The example application does not include the
	functionality to save either a SQL query or the results of a SQL query. To
	eliminate any confusion, you can remove the File/Open, File/Save, and File/Save
	As commands from the application menu.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of the book, it may already
	contain the above corrections.
	
	Additional query words: press ms_press
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
