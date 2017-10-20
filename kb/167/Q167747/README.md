---
layout: page
title: "Q167747: WD97: IPF Linking Custom Document Property to Empty"
permalink: /kb/167/Q167747/
---

## Q167747: WD97: IPF Linking Custom Document Property to Empty

{% raw %}

	Article: Q167747
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create a custom document property and use the "Link to content" option,
	the following error message may appear if your document contains an empty form
	field drop-down or text box:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	Clicking the Details button shows:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- Add something to the drop-down or text box so that it is not empty.
	
	  -or-
	
	- Clear the "Link to content" check box when creating custom document
	  properties.
	
	MORE INFORMATION
	================
	
	To find the "Link to content" check box, click Properties on the File menu, and
	click the Custom tab.
	
	
	REFERENCES
	==========
	
	For more information about the "Link to content" feature, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q134897 WD: Link to Content Option Not Available in Open Dialog Box
	
	For more information about file properties, click the Office Assistant, type
	"custom file properties," click Search, and then click "Use file properties to
	locate files."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: ipf word97
	
	======================================================================
	Keywords          : kbusage kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
