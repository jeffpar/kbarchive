---
layout: page
title: "Q192068: WD97: Documents Will Not Print Until Macro Ends"
permalink: kb/192/Q192068/
---

## Q192068: WD97: Documents Will Not Print Until Macro Ends

	Article: Q192068
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a Visual Basic for Applications macro to print a document, the
	document will not start printing until the macro ends.
	
	CAUSE
	=====
	
	Background printing is turned on. The default value for the Background printing
	method is True.
	
	RESOLUTION
	==========
	
	You must set the Background printing option to False in your code. To do this,
	use the following macro:
	
	     Sub PrintDoc()
	        ActiveDocument.PrintOut Background:=False
	     End Sub
	
	MORE INFORMATION
	================
	
	The following macro will give the command to print; however, the document will
	not actually print until you click OK in the message box.
	
	     Sub PrintDoc()
	        ActiveDocument.PrintOut Background:=True
	        Msgbox "Test"
	     End Sub
	
	The following macro will print the document before you click OK:
	
	     Sub PrintDoc()
	        ActiveDocument.PrintOut Background:=False
	        Msgbox "Test"
	     End Sub
	
	NOTE: If you do not specify a Background argument, it automatically assumes a
	True value.
	
	
	Additional query words: kbimu
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
