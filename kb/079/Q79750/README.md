---
layout: page
title: "Q79750: WD97: Using Bookmarks in a Table of Contents"
permalink: kb/079/Q79750/
---

## Q79750: WD97: Using Bookmarks in a Table of Contents

	Article: Q79750
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Word for Windows, you can use a bookmark as the text argument in a
	table of contents entry (TC) field; this causes the bookmark to become part of
	the table of contents.
	
	MORE INFORMATION
	================
	
	NOTE: You cannot insert the bookmark field by pressing CTRL+F9 in the Field Code
	box of the Insert Field command; therefore, the following procedure is more
	efficient than using the Insert Field command for entering a table of contents
	entry that references a bookmark.
	
	To display a bookmark in a table of contents, follow these steps:
	
	1. Press CTRL+F9 to insert field braces at the location in the document where
	  you want the table of contents entry to appear.
	
	  NOTE: If the bookmark is in the header or footer of the document, the TC field
	  must be entered in the main body of the document.
	
	2. Type "TC " (without the quotation marks). Be sure to press the SPACEBAR to
	  create a space after TC.
	
	3. Press CTRL+F9 to insert a second set of field braces, and then type the
	  bookmark name. The resulting TC field should appear as follows:
	
	  {TC {bookmark_name} }
	
	4. Add any additional TC field switches or instructions after the bookmark
	  field.
	
	Additional query words: TOC
	
	======================================================================
	Keywords          : kbdta kbfield winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
