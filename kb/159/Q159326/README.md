---
layout: page
title: "Q159326: WD97: Macros Not Listed After Creating New Document in Explorer"
permalink: /kb/159/Q159326/
---

## Q159326: WD97: Macros Not Listed After Creating New Document in Explorer

	Article: Q159326
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbdta kbdtacode kbmacroexample word8 kbwordvba word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Windows Explorer to create a new document based on a Word 97
	document that contains macros, the macros do not appear in the macro name list,
	even though they are still stored in the document. (To locate the macro name
	list, on the Tools menu, point to Macro, and then click Macros.)
	
	NOTE: If you have macro virus protection turned on and you click the Disable
	Macros button in the warning dialog box, your macros are disabled and they will
	not appear in the macro name list.
	
	CAUSE
	=====
	
	The table that contains the list of macros is not copied to the new document.
	
	WORKAROUND
	==========
	
	To view the list of macros, use either of the following methods:
	
	Method 1: Create a copy of the document using Word
	--------------------------------------------------
	
	Create a copy of the document using Word instead of Windows Explorer.
	
	1. Start Word.
	
	2. Open the original document.
	
	3. On the File menu, click Save As.
	
	4. Select the folder you want to save the file in, type a file name for the new
	  document, and then click OK.
	
	Method 2: Create a new macro in the new document to rebuild macro table
	-----------------------------------------------------------------------
	
	If you used Explorer to create the document, create a macro in the new document.
	This will rebuild the macro table that contains the list of macros stored in the
	document.
	
	1. On the Tools menu, point to Macro, and then click Macros.
	
	2. In the Macro Name box, type a name, such as "Test" (without the quotation
	  marks), and then click Create.
	
	  If you are prompted to replace an existing macro, click No and type a new
	  name.
	
	3. On the File menu, click Close and Return to Microsoft Word.
	
	  You do not need to type any commands into the macro.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article.
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q181058 OFF98: How to Run Sample Code from Knowledge Base Articles
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vba vbe vb blank missing empty none null nul nil gone vanished vanishing vanish vanishes disappears disappear disappeared disappearing lose lost loses drops
	
	======================================================================
	Keywords          : kbusage kbdta kbdtacode kbmacroexample word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
