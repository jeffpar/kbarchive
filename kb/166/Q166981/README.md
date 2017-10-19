---
layout: page
title: "Q166981: WD97: Back Button Not Available After Viewing HTML Source"
permalink: /kb/166/Q166981/
---

## Q166981: WD97: Back Button Not Available After Viewing HTML Source

	Article: Q166981
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you follow a hyperlink to an HTML document, the Back button on the Web
	toolbar will be available, allowing you to navigate to the previous document.
	If, however, you view the HTML source and then exit the HTML source, the Back
	button will become unavailable (dimmed).
	
	CAUSE
	=====
	
	The View HTML feature works by closing and reopening the document. The traversal
	list (the forward/back information) is lost in this process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To view the HTML source, open an HTML document, and on the View menu, click View
	HTML source.
	
	To exit the HTML source, click the Exit HTML Source toolbar button. Or, on the
	View menu, click Exit HTML source.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
