---
layout: page
title: "Q173820: WD97: Double-Clicking Document Icon Does Not Open Document"
permalink: kb/173/Q173820/
---

## Q173820: WD97: Double-Clicking Document Icon Does Not Open Document

	Article: Q173820
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows Explorer, when you double-click the icon for a document created in
	any one of the following versions of Word
	
	  Microsoft Word 6.0 for the Macintosh
	  Microsoft Word 6.0 for Windows
	  Microsoft Word for Windows 95, version 7.0
	
	any of the following problems may occur:
	
	- The document is opened in another program (the opened document may be
	  unreadable).
	
	  -or-
	
	- Another program is started and that program returns an error message because
	  it cannot open the document.
	
	  -or-
	
	- Double-clicking the icon doesn't have any effect (the document is not
	  opened).
	
	NOTE: This problem is more likely to occur if the only version of Word on your
	computer is Word 97 for Windows.
	
	CAUSE
	=====
	
	The file is not recognized as a valid Word file. This problem occurs in the
	following cases.
	
	Case 1: The File Name Extension Is Associated with Another Program
	------------------------------------------------------------------
	
	If the file name extension is something other than .doc and it is associated with
	another program, the file will be recognized as belonging to that program. For
	example, if you double-click a Word document named Test.txt, Notepad attempts to
	open the document because the .txt extension is associated with Notepad.
	
	Case 2: The File Name Extension Is Unregistered
	-----------------------------------------------
	
	To check registered file types and extensions, do the following:
	
	1. On the Windows desktop, double-click the My Computer icon.
	
	2. On the View menu, click Options.
	
	3. Click the File Types tab.
	
	Case 3: The File Does Not Have a File Name Extension
	----------------------------------------------------
	
	This problem is most likely to occur with files created on the Macintosh.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Open the Document from Within Word
	--------------------------------------------
	
	1. On the File menu, click Open.
	
	2. Under Look In, select the drive and then open the folder where your document
	  is located.
	
	3. In the Files Of Type list, select All Files (*.*).
	
	4. Click to select your document, and then click Open.
	
	Method 2: Give the Document a .doc File Name Extension
	------------------------------------------------------
	
	1. Click Start, point to Programs, and then click Windows Explorer (Windows 95)
	  or Windows NT Explorer (Windows NT 4.0).
	
	2. On the View menu, click Options.
	
	3. Click the View tab.
	
	4. Click to clear the check mark from "Hide MS-DOS file extensions for file
	  types that are registered" (Windows 95) or "Hide file extensions for known
	  file types" (Windows NT 4.0).
	
	5. Click OK.
	
	6. Locate your document. Right-click the document, and then click Rename on the
	  shortcut menu.
	
	7. If the document does not have a file name extension, add .doc to the end of
	  the file name (for example, rename "Mydoc" to "Mydoc.doc"). Otherwise, change
	  the file name extension to .doc (for example, rename Mydoc.abc to
	  Mydoc.doc).
	
	  NOTE: The icon changes to a Microsoft Word document icon.
	
	8. Double-click the document icon to open the document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about opening documents, click the Office Assistant, type
	"how to open a document," click Search, and then click to view the "Open a
	document" topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Word Help is not installed on your computer,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 8.00
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
