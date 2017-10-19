---
layout: page
title: "Q234971: Running Microsoft Access 2000 Comments and Corrections"
permalink: /kb/234/Q234971/
---

## Q234971: Running Microsoft Access 2000 Comments and Corrections

	Article: Q234971
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 07-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Running Microsoft Access 2000 ISBN 1-57231-934-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Running Microsoft Access 2000, ISBN
	1-57231-934-8.
	
	The following topics are covered:
	
	- Page 50: Incorrect Instructions
	
	- Page 507: Information In Note Is Incorrect
	
	- Page 538-541: qryXmplContracts Results In An Error In The Many-To-One Form
	
	- Page 647: URL Is No Longer Valid
	
	- Page 987: Paragraph Is Incorrect
	
	- ShortFN Folder Contains A Long Filename
	
	MORE INFORMATION
	================
	
	Page 50: Incorrect Instructions
	-------------------------------
	
	On page 50 change:
	"Click the Query View button on the toolbar...."
	
	To:
	"Click the Query Run button on the toolbar...."
	
	
	Page 507: Information In Note Is Incorrect
	------------------------------------------
	
	Due to changes in the product, the Note on page 507 is no longer correct. Please
	disregard it. The following TIP information is correct:
	
	"If you want to move one or more controls only horizontally or only vertically,
	hold down the Shift key as you select the control (or the last control in a
	group) that you want to move, and then drag either horizontally or vertically.
	When Access detects movement either horizontally or vertically, it 'locks' the
	movement and won't let the objects stray in the other axis. If you inadvertently
	start to drag horizontally when you mean to move vertically (or vice versa),
	click the Undo button and try again."
	
	
	Page 538-541: qryXmplContracts Results In An Error In The Many-To-One Form
	--------------------------------------------------------------------------
	
	On pages 538-541, under the section titled Designing a Many-to-One Form, if you
	use the qryXmplContracts sample query discussed on pages 537-538, the form will
	contain fields that display an error, and your computer screen will not match
	Figure 15-4 on page 540.
	
	If you have a form based on a query, and the query contains multiple fields with
	the same name (such as PostalCode from Table1 and PostalCode from Table2), the
	control(s) on the form that are bound to that field name will be blank or may
	display the "#Name?" error.
	
	Because the same field name appears multiple times in the qryXmplContracts query,
	Microsoft Access does not know which field to link to the control(s). Therefore,
	instead of making an assumption about which field to bind to, it leaves the
	control(s) linked to duplicate field names blank or displays the "#Name?" error
	in the control.
	
	To correct this behavior, rename the fields in the query so that there are no
	duplicates.
	
	
	Page 647: URL Is No Longer Valid
	--------------------------------
	
	The web address in the note on page 647 is no longer valid. Please change:
	http://backoffice.microsoft.com/downtrial/optionpack.asp
	(http://backoffice.microsoft.com/downtrial/optionpack.asp)
	
	To:
	http://www.microsoft.com/Windows/ie/pws/default.htm
	(http://www.microsoft.com/Windows/ie/pws/default.htm)
	
	
	Page 987: Paragraph Is Incorrect
	--------------------------------
	
	The first paragraph on page 987 should read as follows:
	
	"You shouldn't normally need to change any of the options shown on the second
	dialog box. If you want to be able to work directly with the sample BooksSQL
	database, you must leave the options set as shown in Figure A-6. If you plan to
	move your databases to a full version of SQL Server later, you should check with
	your database administrator to verify that the options you choose match those on
	the production server. If the options are different, you will have to import
	your database to the new server rather than simply attach it.
	
	
	ShortFN Folder Contains A Long Filename
	---------------------------------------
	
	The "ShortFN" folder contains a copy of all of the sample files included in the
	"Running Access 2000 Samples" folder. The files in the ShortFN folder have 8.3
	filenames so that users with older, 16bit CD-ROM drives or drivers can view all
	files on the CD.
	
	The folder \Documents, within the ShortFN folder, retains its long file name.
	Note that any files located beneath this folder have shortened, 8.3 filenames.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 1-57231-934-8 eubook eurun acc2000 viescas
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
