---
layout: page
title: "Q160977: WD97: IPF Error Message When You Edit LISTNUM Field in Table"
permalink: /kb/160/Q160977/
---

## Q160977: WD97: IPF Error Message When You Edit LISTNUM Field in Table

	Article: Q160977
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta word8 kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you edit the starting number of a LISTNUM field in a table, Word may
	generate the following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  WINWORD caused an invalid page fault in WINWORD.EXE at 0137:address.
	
	NOTE: The actual memory address may vary.
	
	WORKAROUND
	==========
	
	Use the SEQ (Sequence) field in the table instead of the LISTNUM field.
	
	For more information about sequence fields, click "Contents and Index" on the
	Help menu, click the Index tab in Microsoft Word Help, type the following text
	
	  seq
	
	and then double-click the selected text to go to the "Seq (Sequence) field"
	topic. If you are unable to find the information you need, ask the Office
	Assistant.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	MORE INFORMATION
	================
	
	Microsoft Word 97 for Windows has a new LISTNUM field available. The LISTNUM
	field inserts a set of numbers anywhere in a paragraph. LISTNUM fields can be
	incorporated into numbering from a simple or outline-numbered list.
	
	For more information about LISTNUM fields, click "Contents and Index" on the Help
	menu, click the Index tab in Microsoft Word Help, type the following text
	
	  listnum
	
	and then double-click the selected text to go to the "ListNum field" topic. If
	you are unable to find the information you need, ask the Office Assistant.
	
	
	Additional query words: list numbering IPF invalid page fault
	
	======================================================================
	Keywords          : kbualink97 kbdta word8 kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
