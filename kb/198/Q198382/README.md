---
layout: page
title: "Q198382: WD97: Word Does Not &quot;Fast Save&quot; Document"
permalink: /kb/198/Q198382/
---

## Q198382: WD97: Word Does Not &quot;Fast Save&quot; Document

	Article: Q198382
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
	
	Word will not do a fast save of your document, even when the Allow Fast Saves
	option is selected.
	
	CAUSE
	=====
	
	The following are some reasons why Word will not perform a fast save of your
	document:
	
	- When you save a document for the first time, Word performs a full (normal)
	  save to write the file to the drive.
	
	- When your document is located on a network server or remote volume, the Allow
	  Fast Saves option is ignored, because Word only performs a fast save to a
	  local volume, such as your local hard disk or a floppy disk.
	
	- When you click Save As and save the document under a new name, in a different
	  location, or in a different file format.
	
	- Word has reached the limit of how much information it can save using the
	  Allow Fast Saves option. In this case, Word performs a full (normal) save,
	  and the Allow Fast Saves option is ignored. The Allow Fast Saves option is
	  again available the next time you save the document following a full save.
	
	- When you select the Make Backup option in the Save As dialog box, Word must
	  do a full (normal) save, so the Fast Save option is ignored.
	
	- The Allow Fast Saves option is unavailable (not selected).
	
	MORE INFORMATION
	================
	
	When you select the Allow Fast Saves check box, Word appends only the changes to
	the document. This takes less time than a full save, in which Word saves the
	complete, revised document.
	
	When Should You Do a Full Save?
	-------------------------------
	
	- Before you share a document with other people.
	
	- When you finish working on a document and save it for the last time.
	
	- Before you begin a task that uses a lot of memory, such as searching for text
	  or compiling an index.
	
	- Before you transfer the document text to another program.
	
	- Before you convert the document to a different file format.
	
	To Set (or Clear) the Allow Fast Saves Option
	---------------------------------------------
	
	On the Tools menu, click Options. On the Save tab, click to select (or clear) the
	Allow Fast Saves check box.
	
	For more information about fast saves, click Contents And Index on the Help menu,
	click the Index tab in Microsoft Word Help, type the following text
	
	  fast save
	
	and then double-click the selected text to go to the "The difference between a
	fast save and a full save" topic. If you are unable to find the information you
	need, ask the Office Assistant.
	
	Additional query words: grey gray dimmed grayed greyed
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
