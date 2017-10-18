---
layout: page
title: "Q136671: DOCERR: &quot;Refreshing One-to-Many Display&quot; Help Topic Incomplete"
permalink: kb/136/Q136671/
---

## Q136671: DOCERR: &quot;Refreshing One-to-Many Display&quot; Help Topic Incomplete

	Article: Q136671
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
	
	The "Refreshing a One-To-Many Display Based on a List Value" Help file topic is
	incomplete. The directions given work correctly if the many display is a grid
	but cause sporadic behavior or errors if the many display is a list box.
	
	MORE INFORMATION
	================
	
	If a list box is used for the child (many) display, upon making a selection from
	the parent (one), the list box will not reflect the child (many) records unless
	it gets the focus. To give the list box the focus, you need to click it with the
	mouse or press the TAB key to move to it.
	
	Once the list box has received the initial focus, any subsequent parent
	selections cause the list box to display the appropriate child records.
	
	If a "ThisForm.Refresh" is added to the parent object InterActive Change method,
	a "Record is Out of Range" error occurs after making a few parent object
	selections.
	
	To have the child object behave correctly, the second list box must be requeried
	in order to properly display the new information.
	
	In Step 5 of the Help topic, after the REQUERY command, add this line:
	
	     ThisForm.{ListBox2 name}.Requery
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
