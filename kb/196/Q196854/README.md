---
layout: page
title: "Q196854: WD97: Mark All Button Unavailable in Mark Index Entry Dialog Box"
permalink: /kb/196/Q196854/
---

## Q196854: WD97: Mark All Button Unavailable in Mark Index Entry Dialog Box

{% raw %}

	Article: Q196854
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Mark All button in the Mark Index Entry dialog box is unavailable.
	
	CAUSE
	=====
	
	The Mark All button is not available when either of the following conditions is
	true:
	
	- You did not select any text in the document before you opened the Mark Index
	  Entry dialog box.
	
	  -or-
	
	- You typed a word or phrase in the Main Entry text box.
	
	If you select text before you open the Mark Index Entry dialog box, the selection
	automatically appears in the Main Entry text box and you can click Mark All to
	mark the entire document. When you do not select text before you open this
	dialog box, Word does not search the entire document and marks only the current
	position of the insertion point with the index entry when you click Mark.
	
	RESOLUTION
	==========
	
	To make the Mark All button available, open the Mark Index Entry dialog box, and
	then select the text while the dialog box is open. To do this, follow these
	steps.
	
	NOTE: The Mark Index Entry dialog box is a modeless dialog box, which means that
	while the dialog is on the screen, you can click in the text area and continue
	editing.
	
	1. On the Insert menu, click Index and Tables, and then click Mark Entry. The
	  selection appears in the Main Entry dialog box.
	
	2. Click Mark All.
	
	Additional query words: tc {tc} field dim dimmed grey greyed gray grayed out not available can't cannot 8.0 8.00
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
