---
layout: page
title: "Q123698: WD97: Err Msg: &quot;Word Could Not Re-Establish a DDE Connection...&quot;"
permalink: kb/123/Q123698/
---

## Q123698: WD97: Err Msg: &quot;Word Could Not Re-Establish a DDE Connection...&quot;

	Article: Q123698
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbinterop kbualink97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert a Microsoft Access database using DDE, you may receive the
	following error message:
	
	  Word could not re-establish a DDE connection to Microsoft Access to complete
	  the current task.
	
	CAUSE
	=====
	
	This error may occur for one of the following reasons:
	
	Case 1: Query or Table Name Contains Quotation Marks
	----------------------------------------------------
	
	When you try to insert a Microsoft Access Query or Table whose name contains
	quotation marks, Word will add a second set of quotation marks around the name.
	Because this action returns the incorrect information to Microsoft Access,
	Microsoft Access cannot locate the Query or Table and returns the error.
	
	Case 2: You Select a Memo or Picture Field
	------------------------------------------
	
	If you select a memo or picture field from a Microsoft Access version 1.0 table
	as a sort field in a Word document, the above error message will be returned.
	Both memo and picture fields are automatically filtered out of the Sort menu
	when a Microsoft Access version 1.1 table is used as the data source. Word
	cannot remove the memo or picture field names from the sort dialog box for
	Microsoft Access 1.0. The field types, as part of the data table file
	information, are not supplied by Microsoft Access 1.0.
	
	Case 3: The Database Is Opened Exclusively
	------------------------------------------
	
	The Microsoft Access database is opened "exclusively" by another user.
	
	STATUS
	======
	
	Case 1:
	-------
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Case 2:
	-------
	
	Microsoft has confirmed this to be a problem in Microsoft Access version 1.0.
	This problem was corrected in version 1.1.
	
	WORKAROUND
	==========
	
	Case 1: Query or Table Name Contains Quotation Marks
	----------------------------------------------------
	
	Rename the table in Microsoft Access to contain single quotation marks (') as the
	marker.
	
	  -or-
	
	Use the Microsoft Access ODBC driver instead of DDE.
	
	Case 2: You Select a Memo or Picture Field
	------------------------------------------
	
	To avoid this error message, do not attempt to sort Microsoft Access 1.0 data
	tables using the memo or picture fields.
	
	Case 3: The Database Is Opened Exclusively
	------------------------------------------
	
	To allow shared access to the Microsoft Access database, clear the Exclusive
	check box (located in the Open Database dialog box).
	
	  -and-
	
	Change the Default Open Mode for Databases to Shared. (To locate this option in
	Access 2.0, click Options on the View menu, and select the Multiuser/ODBC in the
	Category list. To locate this option in Access 7.0 or Access 97, click Options
	on the Tools menu, click the Advanced tab, and then select the Shared option.)
	
	
	
	Additional query words: word97
	
	======================================================================
	Keywords          : kbinterop kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	
	=============================================================================
	
