---
layout: page
title: "Q132357: How to Implement CTRL+G Functionality to &quot;Find Again&quot;"
permalink: /kb/132/Q132357/
---

## Q132357: How to Implement CTRL+G Functionality to &quot;Find Again&quot;

{% raw %}

	Article: Q132357
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to find another occurrence of a string in a
	file (Find Again) when the CTRL+G key combination is pressed.
	
	MORE INFORMATION
	================
	
	In FoxPro version 2.x, the Find dialog is activated by pressing CTRL+F. To find
	another occurrence of a string in a text file, you can press CTRL+G key, and a
	new search is performed.
	
	Visual FoxPro uses a Find dialog common to Windows-based applications on a
	specific platform. With this dialog, pressing CTRL+G no longer performs a "Find
	Again" operation. You can, however, program this functionality by explicitly
	calling the Find window when CTRL+G is pressed.
	
	Step-by-Step Example
	--------------------
	
	The following example code illustrates this method. To execute the sample code,
	follow these steps:
	
	1. Copy and paste the code into a program (.PRG) file named FINDAGN.
	
	2. Run the program by typing "DO FINDAGN" (without the quotation marks) in the
	  Command window.
	
	3. Open a text file, and press CTRL+F. The Find dialog is activated. Type a
	  string that reoccurs in the text file.
	
	4. Press CTRL+G to find the string again.
	
	Code Sample
	-----------
	
	  * : Find Again for Visual FoxPro using Ctrl+G.
	  *  Parameter List....: tlFindMode
	
	  *-- To execute Find Again, press {Ctrl+G}.
	
	  LPARAMETERS tlFindMode
	  LOCAL lcDoCommand
	
	  *-- If not find mode, initialize {Ctrl+G}.
	  IF NOT tlFindMode
	    lcDoCommand='DO '+SYS(16)+' WITH .T.'
	    ON KEY LABEL Ctrl+G &lcDoCommand
	    RETURN
	  ENDIF
	
	  *-- If Find dialog is not active, stuff keyboard with {Ctrl+F} and
	  *   stuff {ENTER} in keyboard to execute Find.
	  IF NOT WEXIST('Find')
	    KEYBOARD '{Ctrl+F}{ENTER}' PLAIN
	    RETURN
	  ENDIF
	
	  *-- Activate Find dialog window and stuff {ENTER} in keyboard to
	  *   execute Find.
	  ACTIVATE WINDOW Find
	  KEYBOARD '{ENTER}' PLAIN
	
	  RETURN
	
	Additional query words: COMMDLG VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
