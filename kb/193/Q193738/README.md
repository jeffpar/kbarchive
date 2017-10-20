---
layout: page
title: "Q193738: WD97: Add Button Unavailable in the Spelling Dialog Box"
permalink: /kb/193/Q193738/
---

## Q193738: WD97: Add Button Unavailable in the Spelling Dialog Box

{% raw %}

	Article: Q193738
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
	
	The Add button in the Spelling dialog box is unavailable (dimmed).
	
	CAUSE
	=====
	
	The problem described in this article may occur due to one of the following
	causes:
	
	- The custom dictionary check box is not selected.
	
	- The custom dictionary currently being used is read-only or in a read-only
	  directory.
	
	- The custom dictionary is set for a different language than the document.
	
	- The custom dictionary is currently open.
	
	  -or-
	
	- The custom dictionary does not exist.
	
	RESOLUTION
	==========
	
	Resolution 1: The Custom Dictionary Check Box is Not Selected.
	--------------------------------------------------------------
	
	To correct this problem, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the Spelling & Grammar tab.
	
	3. Click Dictionaries.
	
	4. Under Custom Dictionaries, select the CUSTOM.DIC check box.
	
	Resolution 2: Custom Dictionary is Read-Only Or in a Read-Only Directory.
	-------------------------------------------------------------------------
	
	The default name and location of the custom dictionary are as follows:
	
	  C:\Program Files\Common Files\Microsoft Shared\Proof\Custom.dic
	
	If the Custom.dic file is read-only or if the Proof subfolder is set to
	read-only, you cannot add new words to the custom dictionary. Clear the
	read-only attributes for the file and its subfolder.
	
	Resolution 3: Custom Dictionary is Set For A Different Language.
	----------------------------------------------------------------
	
	To correct this problem, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the Spelling & Grammar tab.
	
	3. Click Dictionaries.
	
	4. On the Language line under Custom Dictionaries, select the language that the
	  document is set for. The default for this setting is <None>. The
	  language of the document is set by selecting the document and clicking
	  Language on the Tools menu.
	
	Resolution 4: The Custom Dictionary is Currently Open.
	------------------------------------------------------
	
	The Custom.dic file might be open for editing. Word does not allow you to add
	words to the custom dictionary while it is open. To resolve this issue, close
	the Custom.dic file.
	
	Resolution 5: The Custom Dictionary Does Not Exist.
	---------------------------------------------------
	
	If the Custom.dic file had been deleted during the session of Word, then Add
	would not be available in the Spelling dialog box. Either re-create the
	Custom.dic file (saved as a text file) in the proper location or restart Word.
	If Word is restarted, it will detect that there is no Custom.dic file and will
	prompt you to create one when you attempt to add a word to the Custom.dic file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
