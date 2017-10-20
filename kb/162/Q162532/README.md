---
layout: page
title: "Q162532: WD97: Numbering Continues in Pasted/Linked Table"
permalink: /kb/162/Q162532/
---

## Q162532: WD97: Numbering Continues in Pasted/Linked Table

{% raw %}

	Article: Q162532
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you paste or link a table from one place in a document to another, the
	numbers in the pasted or linked table are updated to the next numbers in the
	sequence.
	
	CAUSE
	=====
	
	The functionality of numbering in Word has changed from previous versions of
	Word. Word determines how to number lists based on an items relationship to
	other numbered items in the document. No two items can have the same number.
	
	NOTE: This functionality is different from previous versions of Word.
	
	WORKAROUND
	==========
	
	Method 1
	--------
	
	Use manual numbering in the table. Do not use the numbering feature. Type the
	numbering as you would the other text in the table.
	
	MORE INFORMATION
	================
	
	To link a table to another part of your document, use the following steps:
	
	1. Select the table by placing the insertion point anywhere in the table. On the
	  Table menu, click Select Table.
	
	2. On the Edit menu, click Copy.
	
	3. Move the insertion point to where you want the table to linked. On the Edit
	  menu, click Paste Special.
	
	4. In the Paste Special dialog box, click Paste Link. Under As, click Formatted
	  Text (RTF), and then click OK.
	
	For additional information if you use the listnum field, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q160977 Error Msg: Listnum Field In Table Causes Invalid Page Fault
	
	Additional query words: 97 8.0 word8 word97
	
	======================================================================
	Keywords          : kbualink97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
