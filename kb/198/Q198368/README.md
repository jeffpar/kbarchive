---
layout: page
title: "Q198368: WD97: Text Boxes/Drawing Objects Not Merged with Track Changes"
permalink: /kb/198/Q198368/
---

## Q198368: WD97: Text Boxes/Drawing Objects Not Merged with Track Changes

{% raw %}

	Article: Q198368
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you merge documents (on the Tools menu, click Merge Documents), the text
	box or drawing object and its contents are not merged when both of the following
	are true:
	
	- The document you choose to merge has been set to track changes.
	
	  -and-
	
	- The document you choose to merge contains a text box or drawing object that
	  has had text added as a tracked change.
	
	CAUSE
	=====
	
	The Merge Documents feature only recognizes text in the text layer of a
	document. Because text box and drawing object text reside in the drawing layer
	of a document, the text and/or tracked changes are not merged.
	
	MORE INFORMATION
	================
	
	For more information about troubleshooting tracked changes, click the Office
	Assistant, type "Troubleshoot tracked changes" (without the quotation marks),
	click Search, and then click the "Troubleshoot tracked changes" topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
