---
layout: page
title: "Q186725: WD97: Leading Spaces and Tabs Removed with Inserted Database"
permalink: kb/186/Q186725/
---

## Q186725: WD97: Leading Spaces and Tabs Removed with Inserted Database

	Article: Q186725
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Word removes leading spaces and leading tabs from your data records
	when you insert or merge an external database. In contrast, Word does not remove
	leading spaces when the data source is created in Word.
	
	CAUSE
	=====
	
	By design, Word removes leading spaces and leading tabs from external
	databases.
	
	
	WORKAROUND
	==========
	
	Use either of the following methods to add the missing spaces to your merge
	document.
	
	Method 1: Insert Extra Spaces
	-----------------------------
	
	Insert extra spaces in the main document. These extra spaces should immediately
	precede the appropriate merge field.
	
	Method 2: Create a Conditional Merge Field
	------------------------------------------
	
	Create a conditional merge field to include spaces. The following merge field
	example will insert five spaces if {mergefield name} equals John.
	
	     {If {mergefield name} = "John" "     "}
	
	The following merge field will insert five spaces and the result of the
	{mergefield name} in your document:
	
	     {If {mergefield name} = "John" "     {mergefield name}"}
	
	Additional query words: merge database datasource data source records leading spaces blank
	
	======================================================================
	Keywords          : kbdta word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
