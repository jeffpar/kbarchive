---
layout: page
title: "Q164831: WD97: Using CTRL+DELETE with Track Changes Deletes Two Words"
permalink: /kb/164/Q164831/
---

## Q164831: WD97: Using CTRL+DELETE with Track Changes Deletes Two Words

	Article: Q164831
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Track Changes is turned on, if you use CTRL+DELETE to delete one word to
	the right of the insertion point, two words may be deleted.
	
	CAUSE
	=====
	
	This problem occurs when the Deleted Text option is set to ^, #, or Hidden. (To
	set the Deleted Text option, click Options on the Tools menu, and click the
	Track Changes tab.)
	
	NOTE: This problem does not occur when Deleted Text is set to Strikethrough.
	
	WORKAROUND
	==========
	
	Use the CTRL+SHIFT+RIGHT ARROW key combination, and then press DELETE. Do not
	use the CTRL+DELETE key combination.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	In Microsoft Word, there are shortcut keys for performing different functions
	quickly. The CTRL+DELETE key combination deletes the next word to the right of
	the insertion point. The CTRL+SHIFT+RIGHT ARROW key combination selects from the
	insertion point to the end of the next word.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q157935 Keyboard Shortcuts for Word 97
	
	To Change the Track Changes Options
	-----------------------------------
	
	1. On the Tools menu, point to Track Changes, and then click Highlight Changes.
	
	  If you are using Track Changes, the following options are usually selected on
	  the Highlight Changes dialog box:
	   - Track changes while editing.
	
	     -and-
	
	   - Highlight changes on screen.
	
	     -and-
	
	   - Highlight changes in printed document.
	
	2. In the Highlight Changes dialog box, click Options.
	
	3. On the Track Changes tab, select the options you want.
	
	Additional query words: remove erase revisions caret
	
	======================================================================
	Keywords          : kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
