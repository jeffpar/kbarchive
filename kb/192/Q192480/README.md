---
layout: page
title: "Q192480: WD97: Frequently Asked Questions About &quot;Allow Fast Saves&quot;"
permalink: /kb/192/Q192480/
---

## Q192480: WD97: Frequently Asked Questions About &quot;Allow Fast Saves&quot;

	Article: Q192480
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article answers some of the most frequently asked questions about the Allow
	Fast Saves option in Microsoft Word 97 for Windows.
	
	MORE INFORMATION
	================
	
	1. Q: What is the difference between a fast saved file and a full saved file?
	
	  A: A fast saved file is a Word document in which the physical order of
	  characters stored in the file does not match the logical order of characters
	  in the document that the file represents. In other words, changes to the file
	  are appended to the end of the file.
	
	  A full saved file is a Word document in which the physical order of characters
	  stored in the file is identical to the logical order of characters in the
	  document that the file represents. In other words, changes to the file are
	  incorporated into the contents of the file in the specific location where the
	  change was made.
	
	2. Q: When will Word perform a fast save?
	
	  A: When the Allow Fast Saves option is selected, Word may perform a fast save
	  when you save changes to your document. When you click Save (or on the File
	  menu, click Save), Word may perform a fast save or a full save of your
	  document.
	
	3. Q: When will Word perform a full save?
	
	  A: Word will perform a full save of a document when any of the following
	  events occur:
	
	   - On the fifteenth (15th) fast save of a document. Word will normally
	     perform fourteen (14) fast save operations before it performs a full save.
	
	  -or-
	
	   - When you click Save and there are many edits performed in the document.
	
	     NOTE: There is no way to determine or change the number of edits in a
	     document. As changes are appended to the end of the physical document
	     file, it will reach a point where the physical document needs to be
	     re-written so that once again the changes to the file can be incorporated
	     back into the contents of the file in the specific location where the
	     changes were made.
	
	  -or-
	
	   - When you click Save and the Allow Fast Saves option is disabled (turned
	     off).
	
	  -or-
	
	   - When you save the document in another format such as Rich Text Format
	     (RTF).
	
	4. Q: Why should I let Word do a fast save?
	
	  A: If you select the Allow Fast Saves option, Word saves only the changes to
	  the document. The Allow Fast Save option takes less time to than a full save
	  of the document. When you are working on a very large document, you may want
	  to select the Allow Fast Saves option.
	
	5. Q: When should I not use the Allow Fast Saves option?
	
	  A: If you are going to be sharing a document containing sensitive information
	  that has been deleted. You should "force" Word to do a full save of your
	  document. To "force" Word to do a full save, turn the Allow Fast Saves option
	  off, and then click Save.
	
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q190733 WD97: Opening Word Document in Text Editor Displays Deleted Text
	
	6. Q: When I am working on a document from a network location, why does Word
	  seem to take the same amount of time to save the document, regardless of how
	  I have the Allow Fast Saves option set?
	
	  A: This functionality is by design. Fast saves cannot be performed over a
	  network. If the Allow Fast Saves option is turned on, Word will ignore this
	  option when you save a document over a network.
	
	7. Q: How do I change the setting of the Allow Fast Saves option?
	
	  A: On the Tools menu, click Options. Then, on the Save tab, click to select or
	  clear the Allow Fast Saves check box, and then click OK.
	
	  NOTE: The Allow Fast Saves option is selected (turned on) by default in
	  Microsoft Word 97 for Windows; however, this option is disabled (turned off)
	  by default in Microsoft Word 97 for Windows, Service Release 1 (SR-1) and
	  Service Release 2 (SR-2).
	
	8. Q: When I select the "Always create backup copy" option, why is the Allow
	  Fast Saves option turned off?
	
	  A: A backup copy of a document cannot be saved (created) when Word fast saves
	  a document. When you click to select the "Always create backup copy" option,
	  Word automatically disables (turns off) the Allow Fast Saves option.
	  Consequently, when you select Allow Fast Saves, Word will automatically
	  disable the "Always create backup copy" if it is selected.
	
	9. Q: What is the "Allow background saves" option?
	
	  A: This option saves documents in the background, so you can continue working
	  in Word while you save (full save or fast save) a document. A pulsing disk
	  icon appears in the status bar when Word is performing either a full save or
	  a fast save in the background.
	
	  NOTE: The Allow Background Saves option is selected (turned on) by default in
	  Microsoft Word 97 for Windows, Service Release 1 (SR-1) and Service Release 2
	  (SR-2); however, this option is disabled (turned off) by default in Microsoft
	  Word 97 for Windows.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q71999 WD97: How to Disable the Fast Save Option in Word for Windows
	
	  Q108456 WD: Word Displays Error Message or Hangs When Formatting Table
	
	  Q111277 WD: Change in Document File Size Is More or Less Than Expected
	
	  Q170406 WD97: Allow Fast Save Option Not Selected by Default
	
	  Q173683 WD97: Error Message: "Word Cannot Give a Document the Same Name"
	
	  Q174162 WD97: Windows NT 4.0: Saving the AutoRecovery File Is Postponed
	
	  Q176284 WD: Word Does Not "Fast Save" Document
	
	Additional query words: fastsave fast-save append
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
