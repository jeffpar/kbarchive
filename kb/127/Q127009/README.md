---
layout: page
title: "Q127009: How to Position the Insertion Point in a Field on a Form"
permalink: kb/127/Q127009/
---

## Q127009: How to Position the Insertion Point in a Field on a Form

	Article: Q127009
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This articles describes how to control the order in which objects are selected
	on a form.
	
	MORE INFORMATION
	================
	
	When a form is displayed, the first object added to the form is by default the
	first one accessed. When users tab through the form, the highlight moves by
	default according to the order that the objects were added. It is possible to
	control navigation in a form through the use of the TABINDEX property or the
	SETFOCUS method.
	
	Using the TABINDEX Property
	---------------------------
	
	This property specifies the Tab order of form objects in a Form. For example, say
	you have a form with two command buttons (CmdButton1 and CmdButton2). You can
	use the TabIndex property if you want to access CmdButton2 before CmdButton1 as
	users press the TAB key. To achieve this, in the Form Designer, select the
	TabIndex property in the Property Sheet and modify its value. You can also
	modify the value of the TabIndex property under program control. For example:
	
	     frmtest.CmdButton1.tabindex=2
	
	The TabIndex property will be ignored if the TabStop property is set to .F. for
	that control.
	
	
	Using the SETFOCUS Method
	-------------------------
	
	The SetFocus method assigns the focus to a control. Use this method to move the
	focus from one control in the form to another conditionally. For example, if
	there are three command buttons on a form and you want to shift the focus from
	CmdButton1 to CmdButton3 when the user clicks the CmdButton1 button, include the
	following code in the Click event handler:
	
	     Thisform.CmdButton3.SetFocus
	
	Focus is set to CmdButton3 as the SetFocus method is invoked.
	
	For more information about the TabIndex property and the SetFocus method, search
	for TabIndex and SetFocus using the FoxPro Help system.
	
	Additional query words: VFoxWin curobj select highlight
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
