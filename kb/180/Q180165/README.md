---
layout: page
title: "Q180165: WD: AutoCorrect Feature Limitations"
permalink: kb/180/Q180165/
---

## Q180165: WD: AutoCorrect Feature Limitations

	Article: Q180165
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbautotext winword word97
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Word 2000 
	- Microsoft Word 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you enter a large number of AutoCorrect entries (for example, 7000 entries),
	you may receive an "Out of Memory" or other memory error.
	
	CAUSE
	=====
	
	AutoCorrect entries are stored in an index file attached to the Normal.dot file,
	and use a minimum of 4 bytes per entry. Because the AutoCorrect feature uses the
	64K local memory heap allocated to Word, inserting large numbers of AutoCorrect
	entries may result in an "Out of memory" error message. For example, when you
	create 7000 AutoCorrect entries, you use approximately 28K of memory--almost
	half the available local memory. This could also result in other memory-related
	error messages because the local memory is used by several other operations.
	
	MORE INFORMATION
	================
	
	The AutoCorrect feature automatically corrects common typing mistakes as you
	work. For example, if you type "adn," AutoCorrect replaces it with "and" as soon
	as you press the SPACEBAR.
	
	You can also use AutoCorrect to quickly insert words or phrases that are long or
	difficult to type. For example, use AutoCorrect to automatically replace "FYI"
	with "For Your Information." AutoCorrect entries are stored in the Ms097.acl
	file.
	
	The operating limits of the AutoCorrect feature for Microsoft Word are listed in
	the following table.
	
	  Feature                                  Limit
	  ---------------------------------------------------------
	
	  Maximum number of AutoCorrect entries    Limited to
	                                           memory/hard disk
	                                           space
	
	  Maximum number of characters as a        255
	  plain text entry
	
	  Maximum number of characters as a        Unlimited
	  formatted entry
	
	  Maximum number of characters stored as   31
	  Replace text
	
	NOTE: In Protected Mode, AutoCorrect entries which are plain text are available
	for selection. However, AutoCorrect entries which are formatted text will not
	work in Protected Mode (for example, form fields).
	
	Additional query words: limits 8.0 wd97 wd2000 wd2002
	
	======================================================================
	Keywords          : kbdta kbautotext winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
