---
layout: page
title: "Q195140: WD97: Border Lost from Linked Microsoft Excel Spreadsheet"
permalink: /kb/195/Q195140/
---

## Q195140: WD97: Border Lost from Linked Microsoft Excel Spreadsheet

{% raw %}

	Article: Q195140
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbole kbualink97 kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you insert a link into a Microsoft Word 97 document from a Microsoft Excel
	spreadsheet as "Formatted Text(RTF)," and then apply a border to the linked
	table, the border can be lost when the link is updated.
	
	CAUSE
	=====
	
	Updating the link causes the original spreadsheet format to overwrite the
	bordered object. The "\* MERGEFORMAT" switch does not preserve the borders.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Apply the border you want to the Microsoft Excel worksheet before you copy it
	  to the clipboard.
	
	  -or-
	
	- If a link to a Microsoft Excel worksheet has already been inserted in the
	  Word document, follow these steps:
	  1. Apply the border you want to the area that is referenced in the link using
	     Microsoft Excel, and then save the workbook.
	
	  2. To update the field, place the insertion point into the field and then
	     press F9.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	Additional query words: disappear grid gridline line lose MACWord NTWord remove table
	
	======================================================================
	Keywords          : kbole kbualink97 kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
