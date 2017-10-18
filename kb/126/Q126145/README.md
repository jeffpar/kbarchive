---
layout: page
title: "Q126145: MS EXCEL VB APPLIC SBS MAC ED: Corrections and Comments"
permalink: kb/126/Q126145/
---

## Q126145: MS EXCEL VB APPLIC SBS MAC ED: Corrections and Comments

	Article: Q126145
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Excel Visual Basic for Applications Step by Step, version 5 for the Macintosh ISBN 1-55615-662 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Microsoft Excel Visual Basic for
	Applications Step by Step," version 5 for the Macintosh.
	
	The following topic is covered:
	
	- Page 103: Unable to Connect to ODBC Database
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, this document might also
	include sections labeled "Correction" and "Comments." Please note that the
	"Correction" section is worded for correcting the book and does not necessarily
	address the problem introduced by the book error. The "Comments" section
	contains specific information for working around problems.
	
	Page 103: Unable to Connect to ODBC Database
	--------------------------------------------
	
	When you try to run the module connected to the Enterprise Information System
	(EIS) map buttons, the ODBC drive displays an error message instead of
	responding as described in the book. The error message will be similar to (but
	may vary from) the following:
	
	  Path MACINTOSH HD not found
	
	  -or-
	
	  Driver is not found
	
	Correction:
	
	On page 101, an additional sentence should be added to the margin note to the
	left of step 5:
	
	  In the Database Directory text box, use the name of your hard disk, if it is
	  not Macintosh HD.
	
	If the error "Path Macintosh HD:Excel VBA not found" occurs, check to make sure
	the Microsoft Excel Visual Basic for Applications folder is installed on the
	root level of your hard disk (not as a subfolder in the Microsoft Excel
	folder).
	
	On page 103, add a margin note to the left of step 1:
	
	  If your hard disk is not named Macintosh HD, switch to the Module1 tab and
	  use Edit Replace to change Macintosh HD to the name of your hard drive.
	
	  NOTE: The wording of the margin text for these pages is not final and is
	  subject to possible improvement.
	
	Comments:
	
	This error is caused by either of the following conditions:
	
	- The practice files are not located in a folder named Microsoft Excel Visual
	  Basic for Applications, located at the root level of your hard disk.
	
	-or-
	
	- The hard disk does not have the default Macintosh drive name Macintosh HD.
	
	This book assumes that the hard disk has the default name Macintosh HD, and that
	the Microsoft Excel Visual Basic for Applications files are installed at the
	root level of your hard disk, as per page xvi. Lesson 5 needs minor
	modifications in order to work with a hard disk of a different name or a folder
	different from Microsoft Excel Visual Basic for Applications. Other lessons
	might be similarly affected.
	
	If the Microsoft Excel Visual Basic for Applications folder is located in the
	Microsoft Excel folder or somewhere other than the root level of your hard disk,
	you need to drag the Microsoft Excel Visual Basic for Applications folder to the
	hard disk icon on the desktop.
	
	If your hard drive has a name other than Macintosh HD, or if you have a different
	Microsoft Excel Visual Basic for Applications path, the following procedures
	should help you work around these problems.
	
	The ODBC driver setup for "Miller Textiles" needs to contain the proper database
	directory. For example, MAC 234:Excel Visual Basic for Applications is the
	proper database directory name if the Macintosh hard disk drive name is MAC 234.
	See page 101, step 5 for details on setting the database directory. Also include
	the complete path to Microsoft Excel Visual Basic for Applications, if it is not
	located at the root level of your hard drive.
	
	In LESSON5.XLS, Module 1 contains one reference to the Macintosh HD path. To
	change this reference, do the following:
	
	1. Open LESSON5.XLS.
	
	2. Select the Module1 sheet tab to view the code in the module.
	
	3. From the Edit menu, choose Replace.
	
	4. Under Find What, type "Macintosh HD" (without the quotation marks). Follow
	  this by ":Excel VBA" (without the quotation marks) if you want to change the
	  path.
	
	5. Under Replace With, type the correct hard disk drive name (in the above
	  example, type "MAC 234" (without the quotation marks)), and type the full
	  path to the Excel VBA folder if you are changing the path.
	
	6. Choose Find Next.
	
	  Microsoft Excel will find and highlight the Macintosh HD reference.
	
	7. Choose Replace to correct this hard drive reference.
	
	  The "No other references were found" message should appear. This message means
	  that all references to Macintosh HD have been replaced.
	
	8. Choose OK to remove this message.
	
	9. In the Replace window, choose Close, then select the EIS sheet tab to return
	  to the map.
	
	Once you modify these two references to the hard drive and default Microsoft
	Excel Visual Basic for Applications folder, the EIS worksheet works as described
	in the book.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug sbs 5.0 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	
