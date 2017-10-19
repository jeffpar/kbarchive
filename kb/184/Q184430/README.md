---
layout: page
title: "Q184430: WD97: Displaying Modeless Dialog Box in Binder Activates Word"
permalink: /kb/184/Q184430/
---

## Q184430: WD97: Displaying Modeless Dialog Box in Binder Activates Word

	Article: Q184430
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbusage kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you activate a modeless dialog box, such as the Find dialog box (click Find
	on the Edit menu) in a Microsoft Word document opened in Microsoft Binder, the
	dialog box appears in Microsoft Word rather than Microsoft Binder.
	
	NOTE: A modeless dialog box is one that you can activate and switch away from by
	clicking another active window. For example, you can click your document to
	switch away from this type of dialog box and continue editing your document.
	
	CAUSE
	=====
	
	Microsoft Word is opened in the background, and the same modeless dialog box is
	being displayed in that session of Word.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- Close the dialog box in Word before opening Microsoft Binder.
	
	  -or-
	
	- Minimize Word before you open Microsoft Binder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	The Office Binder is an application supplied with Office that you can use to
	group documents you create with Office applications. To create an Office Binder
	file containing a Word document, follow these steps:
	
	1. On the Windows Start menu, point to Programs, and click Microsoft Binder.
	
	2. On the Section menu, click Add From File.
	
	3. Select a Word document, and click Add.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbusage kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
