---
layout: page
title: "Q179256: WD97: Word Mail Merge Hangs Using Access Parameter Query"
permalink: /kb/179/Q179256/
---

## Q179256: WD97: Word Mail Merge Hangs Using Access Parameter Query

{% raw %}

	Article: Q179256
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Word may appear to stop responding when you do a mail merge using a Microsoft
	Access parameter query.
	
	NOTE: A Microsoft Access parameter query prompts you to enter certain criteria
	each time the query runs.
	
	CAUSE
	=====
	
	This behavior occurs because Word is waiting for you to type information into
	the Microsoft Access parameter query input box.
	
	WORKAROUND
	==========
	
	Press ALT+TAB to switch to the Microsoft Access parameter query input box, type
	the required text, and then click OK.
	
	NOTE: If you save your mail merge main document as a template, and then create a
	new document based on the template, the Microsoft Access parameter query will
	prompt you without requiring you to press ALT+TAB.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q155487 WD: Mail Merge Using a Microsoft Access Parameter Query
	
	  Q110653 WD: Queries Tab Not Available When Using Access via ODBC
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
