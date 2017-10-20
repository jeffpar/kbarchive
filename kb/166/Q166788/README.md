---
layout: page
title: "Q166788: WD97: Can't Save with Embedded Control and Missing Reference"
permalink: /kb/166/Q166788/
---

## Q166788: WD97: Can't Save with Embedded Control and Missing Reference

{% raw %}

	Article: Q166788
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbprogramming kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to save a document containing an embedded control, such as a
	CommandButton, and a Visual Basic for Applications Reference has been added but
	is now missing, the following error is displayed:
	
	  The disk is full. Free some space on this drive, or save the document on
	  another disk.
	
	
	WORKAROUND
	==========
	
	To save your document, remove the missing reference.
	
	To remove the missing reference:
	
	1. In the Visual Basic Editor, click References on the Tools menu to display the
	  References dialog box.
	
	  The References dialog box displays all object libraries and projects that are
	  registered with the operating system.
	
	2. Scroll through the list for the library that is indicated as missing.
	
	3. Click to clear the check box for the reference in the Available References
	  list and click OK.
	
	4. On the File menu, click "Close and Return to Microsoft Word."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: wordcon
	
	======================================================================
	Keywords          : kberrmsg kbprogramming kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug kbhowto
	
	=============================================================================
	

{% endraw %}
