---
layout: page
title: "Q162808: WD97: Commands on Web Toolbar Cannot be Recorded in a Macro"
permalink: /kb/162/Q162808/
---

## Q162808: WD97: Commands on Web Toolbar Cannot be Recorded in a Macro

	Article: Q162808
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprogramming kbdta word8 kbwordvba word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to record a macro that selects commands from the Go menu on the
	Web toolbar, the commands are not recorded.
	
	CAUSE
	=====
	
	The following Web commands are not a part of the Visual Basic for Applications
	language and cannot be recorded:
	
	- Back
	
	- Forward
	
	- Start Page
	
	- Search the Web
	
	- Set Start Page
	
	- Set Search Page
	
	WORKAROUND
	==========
	
	Open the macro in the Visual Basic Editor and add an equivalent WordBasic
	command in place of the Web commands listed in the "Cause" section.
	
	  Web Function        Equivalent Wordbasic Command
	  ------------        ----------------------------
	
	  Back                WordBasic.WebGoBack
	
	  Forward             WordBasic.WebGoForward
	
	  Start Page          WordBasic.WebOpenStartPage
	
	  Search the Web      WordBasic.WebOpenSearchPage
	
	There are no corresponding WordBasic commands for the following two Web
	commands:
	
	- Set Start Page
	
	- Set Search Page
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vba vbe vb
	
	======================================================================
	Keywords          : kbprogramming kbdta word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
