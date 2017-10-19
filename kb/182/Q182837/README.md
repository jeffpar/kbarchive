---
layout: page
title: "Q182837: WD97: Unsaved Information Lost Printing from OS Shell"
permalink: /kb/182/Q182837/
---

## Q182837: WD97: Unsaved Information Lost Printing from OS Shell

	Article: Q182837
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbprint kbdta word8 word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you print an open document from the operating system shell rather than from
	within Microsoft Word, you may lose unsaved information. Examples of printing a
	document from the operating system shell include the following cases.
	
	Case 1
	------
	
	When you drag a document icon from Windows Explorer to a printer shortcut icon.
	
	Case 2
	------
	
	When you right-click a document icon and then click Print.
	
	CAUSE
	=====
	
	Printing from the operating system shell invokes a series of Dynamic Data
	Exchange (DDE) commands from the registry. These DDE commands instruct Word to
	open the document, print the document, and then close the document without
	saving changes.
	
	WORKAROUND
	==========
	
	To avoid this problem, print from within the Word program (click Print on the
	File menu in Word), or save the document before you print it from the operating
	system shell.
	
	Or you can change this DDE behavior by modifying the registry entries that tell
	Word to close the document without saving changes. If the document has unsaved
	changes, the following workarounds make Word prompt you before it closes the
	document.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Displaying a Prompt When You Right-Click the Document Icon and Click Print
	--------------------------------------------------------------------------
	
	To change the registry entry so that Word prompts you to save changes when
	printing from the document icon shortcut menu, follow these steps:
	
	1. Quit Word 97.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "RegEdit" (without the quotation marks) and then click
	  OK.
	
	4. Locate the following registry subkey:
	
	  HKEY_CLASSES_ROOT\Word.Document.8\shell\print\ddeexec
	
	  NOTE: This key contains the series of DDE commands that are used when printing
	  a document from the operating system shell.
	
	5. In the pane on the right, click Default.
	
	6. On the Edit menu, click Modify.
	
	7. Replace the value data with the following and click OK:
	
	  [REM _DDE_Minimize][FileOpen(\"%1\")][t=IsDocumentDirty()] [FilePrint
	  0][SetDocumentDirty t][DocClose]
	
	  NOTE: Enter the new value on a single line.
	
	Now when you print a document from the operating system shell, you are prompted
	to save changes if the document contains unsaved changes.
	
	Displaying a Prompt When You Drag a Document to the Printer Icon
	----------------------------------------------------------------
	
	To change the registry entry so that Word prompts you to save changes when you
	drag the document icon onto a printer icon, follow these steps:
	
	1. Quit Word 97.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "RegEdit" (without the quotation marks) and then click
	  OK.
	
	4. Locate the following subkey in the registry:
	
	  HKEY_CLASSES_ROOT\Word.Document.8\shell\printto\ddeexec
	
	  NOTE: This key contains the series of DDE commands that are used when printing
	  a document from the operating system shell.
	
	5. In the pane on the right, click Default.
	
	6. On the Edit menu, click Modify.
	
	7. Replace the value data with the following information and click OK:
	
	  [REM _DDE_Minimize][FileOpen(\"%1\")][t=IsDocumentDirty()] [FilePrint
	  0][SetDocumentDirty t][DocClose]
	
	  NOTE: Enter the new value on a single line.
	
	Now when you print a document from the operating system shell, you are prompted
	to save changes if the document contains unsaved changes.
	
	STATUS
	======
	
	Case 1
	------
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Case 2
	------
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	
	MORE INFORMATION
	================
	
	Several fields are updated when the document is printed, including date fields
	and page number fields. If you modify the registry as described in this article,
	you are prompted to save any document containing dates and page numbers when you
	print it from the operating system shell.
	
	Additional query words: regedit
	
	======================================================================
	Keywords          : kbenv kbinterop kbprint kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
