---
layout: page
title: "Q101018: How to Copy Memo or General Fields to New Records"
permalink: /kb/101/Q101018/
---

## Q101018: How to Copy Memo or General Fields to New Records

{% raw %}

	Article: Q101018
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 3.00| 2.00 2.50 2.50a
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	According to page C3-723 in the FoxPro 2.0 "Commands & Functions" manual
	and page L3-886 of the FoxPro 2.5 "Language Reference" manual, SET CARRY ON
	will "bring all fields from the current record to a new record." This
	statement is incorrect. SET CARRY ON will not bring forward memo or general
	fields. (Using SET CARRY TO and specifying the memo or general field also
	will not bring the memo or general field forward.)
	
	To copy the contents of a memo field to a new record, use the REPLACE
	command. For example:
	
	     temp = db.memfield
	     APPEND BLANK
	     REPLACE db.memfield WITH temp
	
	NOTE: The following methods require that the system menu bars and
	appropriate shortcut keys be available for _MED_COPY and _MED_PASTE, and
	that the menu be active and available (SET SYSMENU ON or SET SYSMENU
	AUTOMATIC).
	
	To copy a general field, use the following code:
	
	     USE table1
	     SELECT 0
	     USE table2
	     SELECT table1
	     SKIP 1
	     KEYBOARD "{ctrl+c} {ctrl+w}"
	     MODIFY GENERAL table1.genfield
	     SELECT table2
	     APPEND BLANK
	     KEYBOARD "{ctrl+v} {ctrl+w}"
	     MODIFY GENERAL table2.genfield
	
	
	
	To carry all information from all fields, except for general fields, into a
	new record, use one of the following methods:
	
	Method 1
	--------
	
	     SCATTER MEMVAR MEMO
	     APPEND BLANK
	     GATHER MEMVAR MEMO
	
	Method 2
	--------
	
	     SET CARRY ON
	     BROWSE NOWAIT
	     KEYBOARD "{CTRL+N}"
	
	Additional query words: VFoxWin FoxDos FoxWin docerr
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : 2.50 2.50a 3.00| 2.00 2.50 2.50a
	
	=============================================================================
	

{% endraw %}
