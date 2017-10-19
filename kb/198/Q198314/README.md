---
layout: page
title: "Q198314: WD97: VBA Editor Takes Longer to Start Than Word Basic Editor"
permalink: /kb/198/Q198314/
---

## Q198314: WD97: VBA Editor Takes Longer to Start Than Word Basic Editor

	Article: Q198314
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
	
	In versions of Word that use Visual Basic for Applications, you may have to wait
	a few seconds before you can start typing macro code in the Visual Basic Editor.
	By contrast, in earlier versions of Word, you can start typing macro code almost
	instantaneously.
	
	CAUSE
	=====
	
	In versions of Word earlier than Word 97 for Windows, you create macros in the
	WordBasic macro-editing window. This editing window does not need to be
	initialized.
	
	In versions of Word that use Visual Basic for Applications, you create macros in
	the Visual Basic Editor. When you invoke the Visual Basic Editor, it must first
	be initialized, and Visual Basic for Applications projects must be created (if
	they have not been initialized or created previously). This initialization
	process takes a few seconds.
	
	MORE INFORMATION
	================
	
	To create a new macro in Word, follow these steps:
	
	1. On the Tools menu, point to Macros, and then click Macro.
	
	2. In the Macro Name box, type a name for your macro.
	
	3. Click Create.
	
	Additional query words: OFF98
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
