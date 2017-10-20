---
layout: page
title: "Q141972: How to Use the SYS(1270) Function"
permalink: /kb/141/Q141972/
---

## Q141972: How to Use the SYS(1270) Function

{% raw %}

	Article: Q141972
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 02-JUL-1999
	
	3.00b
	WINDOWS
	kbdocerr kbhowto
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro Help file states that the SYS(1270) function returns a
	reference for an object at the specified point, but it does not give an example
	of how to use it.
	
	MORE INFORMATION
	================
	
	The return type for the SYS(1270) function is either an Object or Logical.
	Because it could return an Object, you may receive a Data Type Mismatch error if
	you type the following a in the Command window:
	
	  ? SYS(1270)
	
	If you don't include any coordinates when you issue a SYS(1270), it will use the
	Mouse Pointer for the coordinates. The SYS(1270) function always returns a
	Logical False if no object is under the mouse pointer or located at the
	coordinates specified.
	
	The following example uses a timer to call the SYS(1270) function and then
	increment a counter any time the mouse pointer isn't over the FoxPro Screen
	Object. (The Screen Object is the main Visual FoxPro Window. For more
	information search for _Screen in the Help file.)
	
	**************** Begin Code ******************* PUBLIC oMyScreen
	
	oMyScreen = CREATEOBJECT('Form') oMyScreen.AddObject('Text1','TextBox')
	oMyScreen.Text1.Top = 5 oMyScreen.Text1.Left = 5 oMyScreen.Text1.value = 1
	oMyScreen.Text1.Visible = .T. oMyScreen.AddObject('Timer1','MyTimer')
	oMyScreen.Show
	
	DEFINE CLASS MyTimer AS Timer
	
	  Interval = 1000  && Calls the Timer event every second.
	  PROCEDURE Timer Event
	
	  x=sys(1270) DO CASE CASE TYPE('x')='O' IF x.name != 'Screen' ** Increments
	  the value by 1 if your mouse is over ** an Object that is not the FoxPro
	  Desktop Thisform.Text1.Value = Thisform.Text1.Value + 1 ENDIF CASE TYPE('x')
	  = 'L' ** Increments the value by 1 if your mouse is not over ** an Object
	  Thisform.Text1.Value = Thisform.Text1.Value + 1 ENDCASE
	
	  ENDPROC
	
	**************** End Code *******************
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : WINDOWS:3.0b
	
	=============================================================================
	

{% endraw %}
