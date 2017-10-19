---
layout: page
title: "Q132366: PRB: Unexpected SelStart Property Behavior in Grid's Textbox"
permalink: /kb/132/Q132366/
---

## Q132366: PRB: Unexpected SelStart Property Behavior in Grid's Textbox

	Article: Q132366
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
	
	When you press the TAB key to move into a grid's text box, the insertion point
	is placed at the beginning of the field instead of at the end of the field even
	though the Grid1.Column1.SelectOnEntry property is set to false (.F.), and the
	Grid1.Column1.Text1.GotFocus event contains this code:
	
	     THIS.SelStart = LEN(ALLTRIM(THIS.Value))
	
	CAUSE
	=====
	
	The insertion point is always placed at the beginning of the text in row one,
	column one (R1C1) of the grid when you move to the grid from another object.
	This is by design.
	
	The text box in the grid column handles resetting the selection or
	select-on-entry in its default GotFocus method. The grid column tells the text
	box about its SelectOnEntry property.
	
	WORKAROUND
	==========
	
	Add the code shown in the "Example Workaround" section of this article.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Issue the following commands in the Command window:
	
	     USE SYS(2004)+"samples\data\customer"
	     CREATE FORM test
	
	2. Add a text box to the form.
	
	3. Add a grid to the form, and set the following properties:
	
	     ColumnCount = 2
	     Column1.SelectOnEntry = .F.
	
	4. In the Grid1.Column1.Text1.GotFocus event, type this code:
	
	     THIS.SelStart = LEN(ALLTRIM(THIS.Value))
	
	5. Save and run the form.
	
	6. Press the TAB key to move from the text box to the grid.
	
	The insertion point is placed at the beginning of the text in row one, column one
	(R1C1) of the grid.
	
	Example Workaround
	------------------
	
	To place the insertion point at the end of the text, do the following:
	
	1. Issue this command:
	
	     MODIFY FORM test
	
	2. In Grid1.Column1.Text1.GotFocus event, type these commands:
	
	     Textbox::GotFocus
	     NODEFAULT
	     THIS.SelStart = LEN(ALLTRIM(THIS.Value))
	
	3. Save and run the form.
	
	4. Press the TAB key to move from the text box object to the grid object. The
	  insertion point is placed at the end of the text in R1C1 of the grid.
	
	Additional query words: VFoxWin selection
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
