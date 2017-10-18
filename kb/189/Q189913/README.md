---
layout: page
title: "Q189913: BUG: Inconsistent Firing of ListBox Click Event Using Keyboard"
permalink: kb/189/Q189913/
---

## Q189913: BUG: Inconsistent Firing of ListBox Click Event Using Keyboard

	Article: Q189913
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When navigating through a list box using the keyboard, you will see different
	behavior with the firing of the Click event depending on your method of
	navigation.
	
	For example, using the Up/Down arrow keys will fire the Click event, while using
	the PageUp/PageDown keys will not cause the Click event to fire.
	
	RESOLUTION
	==========
	
	For more consistent results navigating in a list box with the keyboard, it is
	recommended that you use the list box's InterActiveChange event rather than the
	Click event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code:
	
	        PUBLIC ox
	        ox = CreateObject("test")
	        ox.show
	
	        DEFINE CLASS test AS form
	           Top = 0
	           Left = 0
	           Height = 231
	           Width = 249
	           DoCreate = .T.
	           Caption = "Form1"
	           Name = "Form1"
	           ADD OBJECT list1 AS listbox WITH ;
	              RowSourceType = 1, ;
	              RowSource = "One,Two,Three,Four,Five,Six,Seven,Eight", ;
	              Height = 193, ;
	              Left = 24, ;
	              Top = 12, ;
	              Width = 205, ;
	              Name = "List1"
	           PROCEDURE list1.Click
	              WAIT WINDOW NOWAIT this.value
	           ENDPROC
	        ENDDEFINE
	
	2. Use the Up/Down arrow keys.
	
	  NOTE: The Click event fires, bringing up the WAIT WINDOW.
	
	3. Use the PageUp/PageDown keys.
	
	NOTE: The Click event never fires.
	
	Additional query words: kbVFp600bug kbVFp500abug kbXBase
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
