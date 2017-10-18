---
layout: page
title: "Q130081: KeyPress Event in Check Box Allows Y or N"
permalink: kb/130/Q130081/
---

## Q130081: KeyPress Event in Check Box Allows Y or N

	Article: Q130081
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A check box object can accept a key press of Y or N to toggle the state of that
	object in the KeyPress event.
	
	MORE INFORMATION
	================
	
	Place the following code in the KeyPress event of the check box, so that a user
	could press the Y or N key when the check box has the focus:
	
	     LPARAMETERS nKeyCode, nShiftAltCtrl
	     DO CASE
	        CASE nKeyCode = 121 OR nKeyCode = 89  && y or Y
	           This.Value = .T.
	        CASE nKeyCode = 110 OR nKeyCode = 78  && n OR N
	           This.Value = .F.
	     ENDCASE
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
