---
layout: page
title: "Q126119: MS FOXPRO FOR DOS SBS: Corrections and Comments"
permalink: /kb/126/Q126119/
---

## Q126119: MS FOXPRO FOR DOS SBS: Corrections and Comments

{% raw %}

	Article: Q126119
	Product(s): Microsoft Press
	Version(s): 2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft FoxPro for MS-DOS Step by Step ISBN 1-55615-541-7, version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Microsoft FoxPro for MS- DOS Step by
	Step," version 2.5.
	
	The following topics are covered:
	
	- Page 209: Show Code Snippet Is Missing from LSNS09B.SCX
	
	- Page 252 Incorrectly Describes Origin of ABOUTBOX.SPR
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, this document might also
	include sections labeled "Correction" and "Comments." Please note that the
	"Correction" section is worded for correcting the book and does not necessarily
	address the problem introduced by the book error. The "Comments" section
	contains specific information for working around problems.
	
	Page 209: Show Code Snippet Is Missing from LSNS09B.SCX
	-------------------------------------------------------
	
	The Show code snippet is missing from the practice file LSNS09B.SCX. This
	omission effectively disables the error-checking function described on page
	209.
	
	Correction:
	
	Show snippet needs to be added to LSNS09B.SCX.
	
	Definitions of m_top and m_bottom need to be added to bottom of Setup snippet.
	
	Comments:
	
	To provide the error-checking function described in the first paragraph on page
	209, you must add the following FoxPro code snippet. This code snippet prevents
	errors caused if you attempt to view a record previous to the top of the record
	stack or if you attempt to view a record after the bottom of the record stack.
	
	To add a code snippet to the Show action, do the following:
	
	1. Open LSNS09B.SCX by following the instructions on page 208.
	
	2. From the Screen menu, choose Screen Layout.
	
	3. Under READ Clauses, select the Show check box.
	
	  A text box will appear, allowing you to enter a code snippet associated with
	  the Show command.
	
	4. Enter the following code snippet. Then, click OK to exit the Code Snippet
	  dialog box.
	
	        if (recno() = m_top)
	           show get m_prev disable
	        else
	             show get m_prev enable
	        endif
	        if (recno() = m_bottom)
	           show get m_next disable
	        else
	           show get m_next enable
	        endif
	
	5. Click OK to exit the Screen Layout dialog box.
	
	The following code must be added to the Setup code snippet to define the m_top
	and m_bottom variables. To access the Setup code snippet, follow these steps:
	
	1. From the Screen menu, choose Open All Snippets.
	
	2. Minimize or close all code snippet windows until you find the LSNS09B- Setup
	  snippet.
	
	3. Replace the goto top line with the following information at the end of the
	  Setup code snippet:
	
	        go bottom
	        store recno() to m_bottom
	        go top
	        store recno() to m_top
	
	After you make both of these modifications, save LSNS09B.SCX, and overwrite the
	original version. After you generate the screen program, these changes will
	support the statements in the first paragraph of page 209.
	
	Page 252 Incorrectly Describes Origin of ABOUTBOX.SPR
	-----------------------------------------------------
	
	The first paragraph on page 252 describes the origin of the ABOUTBOX.SPR file as
	follows:
	
	  The screen program for the About window is already provided on your exercise
	  disk and was copied to the PRACTICE subdirectory.
	
	However, ABOUTBOX.SPR is not present on the practice disk, nor is it in the
	PRACTICE directory.
	
	Correction:
	
	The last sentence of the first paragraph on page 252 should read:
	
	  FoxPro generates the screen program for the About window the first time you
	  generate the project.
	
	Comments:
	
	Although the description of the ABOUTBOX.SPR file origin is incorrect, the steps
	in the lesson are still valid. No changes are necessary to successfully complete
	the lessons involving this file.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug sbs
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :2.5
	
	=============================================================================
	

{% endraw %}
