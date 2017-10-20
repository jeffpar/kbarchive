---
layout: page
title: "Q136641: PRB: Spell Checking Edit Box Contents Does Not Work"
permalink: /kb/136/Q136641/
---

## Q136641: PRB: Spell Checking Edit Box Contents Does Not Work

{% raw %}

	Article: Q136641
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error appears if you place an edit box on a form, set its
	ControlSource property to a memo field from a table, and then try to run the
	FoxPro Spell Checker on that memo field:
	
	  Window on top is not a text editing window.
	
	CAUSE
	=====
	
	The FoxPro Spell Checker works in a text-editing window only. Examples of
	text-editing windows are the windows opened by the MODIFY COMMAND command and
	the editing window opened from a memo field in a Browse window.
	
	An EditBox control is not a text-editing window. Consequently, the Spell Checker
	will not run. You can test for the window on top by opening the Debug window and
	entering "wontop()" as the condition to test for while a form is running and an
	edit box is the current control. The debug window will show that the form is the
	current window.
	
	WORKAROUND
	==========
	
	To use the Spell Checker to spell check a memo in a form, first open a text-
	editing window. To do this, use the MODIFY MEMO command.
	
	Create a form and place an EditBox control on it, and set its ControlSource
	property to a memo field in your table. Use the following code to run the MODIFY
	MEMO command:
	
	1. In the DblClick event procedure of the EditBox, enter this code:
	
	     MODIFY MEMO NOTES NOWAIT
	     * opens a text editing window that displays the memo field
	     * assuming the memo field is called "notes"
	     * the "nowait" clause allows execution to continue
	
	     DO (_SPELLCHK)
	     * the _spellchk system variable references the spell checker that
	     * will be executed by FoxPro
	
	     CLOSE MEMO NOTES
	     * this closes the text editing window after the user exits the
	     * spell checker
	
	2. Alternatively, add a command button to the form, and enter the same commands
	  in the Click event procedure for the button.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For more information about the Spell Checker, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q117212 How to Use the FoxPro Spelling Checker (SPELLCHK.APP)
	
	NOTE: the Spell Checker is provided by a third-party vendor. It cannot be
	distributed without that vendor's permission.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
