---
layout: page
title: "Q138602: ListBox Scroll Behavior Depends on Physical Dimensions"
permalink: kb/138/Q138602/
---

## Q138602: ListBox Scroll Behavior Depends on Physical Dimensions

	Article: Q138602
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the contents of a list box exceed what the list box can display without
	scrolling, you can only scroll to the last item in the list. If the contents of
	the list box display entirely in the list box, scrolling down and past the last
	item cycles the highlight bar back up to the first item in the list.
	
	MORE INFORMATION
	================
	
	The scrolling behavior of a list box depends on the physical dimensions of the
	listbox. The following program demonstrates this behavior:
	
	  *-- Instantiate a form based on custom form class, TestForm.
	  frmMyForm = CREATEOBJECT("TestForm")
	  frmMyForm.show
	
	  READ EVENTS
	
	  *-- Define a custom class based on the FORM baseclass.
	  DEFINE CLASS TestForm AS FORM
	       CAPTION     = "List Test"
	       AUTOCENTER  = .T.
	       HEIGHT      = 190
	       WIDTH       = 300
	
	  *-- Add list box to the form.
	       ADD OBJECT List1 AS LISTBOX ;
	            WITH ;
	            TOP            = 24, ;
	            LEFT           = 24, ;
	            HEIGHT         = 110, ;
	            WIDTH          = 130, ;
	            CAPTION        = "Next"
	
	  *-- Add command button to exit the program (form).
	       ADD OBJECT cmdQuit AS COMMANDBUTTON ;
	            WITH ;
	            TOP            = 60, ;
	            LEFT           = 180, ;
	            HEIGHT         = 29, ;
	            WIDTH          = 100, ;
	            CAPTION        = "Quit"
	
	  *-- Add custom code to the Init event of the form.
	       PROCEDURE Init
	            THIS.LIST1.AddItem('One')
	            THIS.LIST1.AddItem('Two')
	            THIS.LIST1.AddItem('Three')
	            THIS.LIST1.AddItem('Four')
	            THIS.LIST1.AddItem('Five')
	            THIS.LIST1.AddItem('Six')
	       ENDPROC
	
	  *-- Add custom code to the Click event of cmdQuit.
	       PROCEDURE cmdQuit.click
	            THISFORM.Release
	            CLEAR EVENTS
	       ENDPROC
	
	  ENDDEFINE
	  *-- End custom class definition.
	  *-- End program.
	
	Run this program. With the current Height property of the list box set to 110,
	there is not enough room in the list box to display the entire contents of the
	list box. Therefore, when you scroll down to the last item in the list box, the
	highlight bar stops on the last item.
	
	To demonstrate the cyclical scrolling behavior, edit the program and change the
	Height property of the list box to 120. Then Rerun the program. Scroll down in
	the list box and notice that when you reach the last item in the list, the
	highlight bar cycles back up to the first item and starts scrolling down again.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
