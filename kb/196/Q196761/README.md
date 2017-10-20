---
layout: page
title: "Q196761: WD97: AutoRecover Turned Off for Master Documents"
permalink: /kb/196/Q196761/
---

## Q196761: WD97: AutoRecover Turned Off for Master Documents

{% raw %}

	Article: Q196761
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The AutoRecover feature does not work in master documents.
	
	CAUSE
	=====
	
	By design, Word 97 does not recover master documents automatically, because the
	AutoRecover file format is not compatible with the master document file format.
	
	
	WORKAROUND
	==========
	
	To work around this problem, turn on the Always Create Backup Copy option. With
	this option, Word saves the previous version of the document as a backup copy
	every time you save the document.
	
	To locate the Always Create Backup Copy option, on the Tools menu, click Options,
	and select the Save tab.
	
	NOTE: This workaround does not automatically save your master document, so you
	should save your document frequently.
	
	Additional query words: auto automatic save every
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
