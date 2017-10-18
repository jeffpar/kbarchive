---
layout: page
title: "Q140296: How to Use a KeyPress Event in Lieu of ON KEY LABEL"
permalink: kb/140/Q140296/
---

## Q140296: How to Use a KeyPress Event in Lieu of ON KEY LABEL

	Article: Q140296
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many developers use ON KEY LABEL to assign programs or procedures within
	programs that are to be executed upon pressing a specific key (usually a
	function key). However, if the ON KEY LABEL assignment is to be specific to a
	control within a form, a better alternative would be to use the KeyPress event
	of that control.
	
	MORE INFORMATION
	================
	
	The KeyPress event is available for the following form controls:
	
	  CheckBox, ComboBox, CommandButton, EditBox, Form, ListBox, OptionButton,
	  Spinner, TextBox
	
	It is possible to use this event to check for the press of a specific key. When
	using the KeyPress event to perform an action based on a function key, the
	function key's value should be used as shown in this table:
	
	  Key     Alone   Shift    Ctrl    Alt
	  ------------------------------------
	  F1        28      84      94     104
	  F2        -1      85      95     105
	  F3        -2      86      96     106
	  F4        -3      87      97     107
	  F5        -4      88      98     108
	  F6        -5      89      99     109
	  F7        -6      90     100     110
	  F8        -7      91     101     111
	  F9        -8      92     102     112
	  F10       -9      93     103     113
	  F11      133     135     137     139
	  F12      134     136     138     140
	
	
	
	For more information on key values, refer to the INKEY() function in Visual
	FoxPro Help file.
	
	Step-by-Step Example
	--------------------
	
	The following steps show how to use the KeyPress event.
	
	1. Create a form, and place a text box on it.
	
	2. In the ControlSource property of the text box, type mykey (or any other
	  variable that you might prefer).
	
	3. Place the following code in the KeyPress event of the text box:
	
	     LPARAMETERS nKeyCode, nShiftAltCtrl
	     *: The previous line of code is already contained in the KeyPress event
	     *: by default.
	     DO CASE
	
	        CASE nKeyCode = 28
	           WAIT WINDOW "The F1 Key has been pressed" NOWAIT
	           mykey = "F1 Key"
	           ThisForm.Refresh
	
	        CASE nKeyCode = -4
	           WAIT WINDOW "The F5 Key has been pressed" NOWAIT
	           mykey = "F5 Key"
	           ThisForm.Refresh
	
	     ENDCASE
	
	4. Place the following code in the Load event of the form:
	
	     CLEAR MACROS
	     SET HELP OFF
	     *: This will disable FoxPro's default function key assignments.
	
	5. Place the following code in the Destroy event of the form:
	
	     RESTORE MACROS
	     SET HELP ON
	     *: This will restore FoxPro's default function key assignments.
	
	6. Place a command button on the form, and place the following code in its click
	  event:
	
	     ThisForm.Release
	
	7. Save and run the form. If either the F1 or F5 key is pressed, the appropriate
	  WAIT WINDOW messages should appear, and the text box should be updated.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
