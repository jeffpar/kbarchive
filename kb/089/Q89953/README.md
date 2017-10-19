---
layout: page
title: "Q89953: WD97: Fields Updated When Document Repaginated"
permalink: /kb/089/Q89953/
---

## Q89953: WD97: Fields Updated When Document Repaginated

	Article: Q89953
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage kbdta kbfield
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Word for Windows, certain actions may update fields in the header
	or footer of a document, but these same actions will not update the fields in
	the main body of the document.
	
	Automatic updates are not retained until you save the document.
	
	MORE INFORMATION
	================
	
	The following sections describe field update behavior.
	
	Opening the Document
	--------------------
	
	Does not update fields in the main body of document.
	
	Updates all fields in Header/Footer of document.
	
	NOTE: You can manually update the fields in the main body of the document by
	pressing F9 from within the field.
	
	Opening a Document While in Page Layout View
	--------------------------------------------
	
	Automatically repaginates document, so all fields that update at repagination are
	updated when you open the document while in Page Layout View.
	
	Updates Time and Date fields in main body of document.
	
	Updates all fields in Header/Footer of document, including FILLIN and ASK
	fields.
	
	Switching to Page Layout View or Print Preview
	----------------------------------------------
	
	Updates Time and Date fields in main body of document (unless you previously
	unlinked these fields by pressing CTRL+SHIFT+F9).
	
	Updates all fields in Header/Footer of document, including FILLIN and ASK
	fields.
	
	Automatically repaginates document, so all fields that are updated at
	repagination are updated when you open the document while in page layout view.
	
	Paginating (or re-paginating)
	-----------------------------
	
	Updates Date, Time, Page, PageRef, and FtnRef fields in main body of document.
	
	Updates all fields in header/footer of document, including FILLIN and ASK
	fields.
	
	Printing the Document
	---------------------
	
	When you print, Word for Windows paginates the document, so all fields in the
	header/footer and all fields that update at pagination are updated.
	
	NOTE: To update ALL fields when you print the document, select the Update Fields
	option in the Print dialog box.
	
	Additional query words: word97
	
	======================================================================
	Keywords          : kbualink97 kbusage kbdta kbfield 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
