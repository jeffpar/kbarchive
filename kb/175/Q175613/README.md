---
layout: page
title: "Q175613: FIX: Combo Box ItemTips Prevents Selection and DisplayValue"
permalink: kb/175/Q175613/
---

## Q175613: FIX: Combo Box ItemTips Prevents Selection and DisplayValue

	Article: Q175613
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500bug kbvfp600fix
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a combo box that has a narrow column width and ItemTips property is set to
	true (.T.), the ItemTips window prevents the selection of a choice from the list
	of values in the combo box.
	
	RESOLUTION
	==========
	
	To work around this problem, do not use the ItemTips by retaining its default
	setting of False (.F.) or by using the Alt+DownArrow key on the keyboard to
	select a choice from the combo box list.
	
	You will notice that the ItemTips do not display if you use the keyboard to
	select a choice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	version 6.0
	
	MORE INFORMATION
	================
	
	ItemTips is a new property in Visual FoxPro version 5.0 that applies to combo
	box and list box objects. An item tip is a small window that displays an entire
	combo box or list box item when the mouse pointer is positioned over the item.
	Whenever items in a combo box or list box control are longer than the width of
	the control, setting the ItemTips property to true (.T.) displays the entire
	text of the item, similar to ToolTips in a toolbar.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add any table to the Data Environment of the form.
	
	3. Add a ComboBox object as Combo1.
	
	4. Set the RowSourceType property to 6 - Fields.
	
	5. Set the RowSource property to any table field.
	
	6. Set the ColumnCount property to 2.
	
	7. Set the ColumnWidths property to 10,10.
	
	8. Select the InteractiveChange event, and double-click to open a code window.
	  Enter the following code into the Combo1.InteractiveChange window:
	
	        This.DisplayValue=This.Value
	        This.Refresh
	
	9. Set the ItemTips property to .T. - True.
	
	10. Run the form. Notice that the choices in the drop-down list are displayed in
	  a very narrow column, and that when you place your mouse pointer over a
	  choice that the Item Tips displays the complete text of the choice; however,
	  when you select a choice nothing is displayed in the combo box. In order to
	  see the problem, be sure to wait until the item tip is displayed before
	  clicking the mouse to make a choice.
	
	To prove that the ItemTips property prevents the item chosen in the drop- down
	list box from showing as the display value, just modify the form and set the
	Combo1.ItemTips property to .F. - False (Default) and re-run the form. Notice
	that the full text of the choice cannot be seen; however, the selection chosen
	appears in the combo box.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Perry
	Newton, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500bug kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
