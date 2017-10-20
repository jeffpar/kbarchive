---
layout: page
title: "Q155775: WD97: Date Field Changes to Text Using Letter Wizard"
permalink: /kb/155/Q155775/
---

## Q155775: WD97: Date Field Changes to Text Using Letter Wizard

{% raw %}

	Article: Q155775
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbtemplate word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Case 1
	------
	
	When you run the Letter Wizard and select a date on the Letter Format tab, the
	date is inserted as text instead of as a date field.
	
	Case 2
	------
	
	When you insert a date field in your document formatted with the Date style and
	then run the Letter Wizard, when you select a new date format on the Letter
	Format tab, the new date format will replace the original date field as text.
	
	CAUSE
	=====
	
	This functionality is by design. The Letter Wizard will not insert a new/changed
	date as a field and will inserted it as regular text.
	
	WORKAROUND
	==========
	
	To work around this problem, choose the appropriate method for your situation:
	
	Method 1: Use the Date Format Displayed in Letter Wizard
	--------------------------------------------------------
	
	If you inserted a date field before you ran the Letter Wizard, use the date
	format that is displayed in the Date Line box on the Letter Format tab.
	
	NOTE: If you change to another date format and then change back to the original
	format that is displayed in this box, Word will insert the date as text instead
	of as a field.
	
	Method 2: Replace Date Field After Running Letter Wizard
	--------------------------------------------------------
	
	If you selected a new date format on the Letter Format tab in the Letter Wizard,
	click the Finish button. Then, select the date text, and replace it with the
	date field you want to use.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbualink97 kbtemplate word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
