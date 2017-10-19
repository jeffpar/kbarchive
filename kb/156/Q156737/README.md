---
layout: page
title: "Q156737: BUG: Disabled Listbox Items Enabled Using Arrow Keys"
permalink: /kb/156/Q156737/
---

## Q156737: BUG: Disabled Listbox Items Enabled Using Arrow Keys

	Article: Q156737
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500aBUGkbbuglist
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Windows, Professional Edition, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An item in a ListBox control can be disabled by placing a backslash (\) before
	the item. The item will be grayed out and cannot be selected by using the mouse.
	
	WORKAROUND
	==========
	
	You can select the disabled item using the keyboard arrow keys, and the Value
	and ControlSource properties of the list box will reflect the value of the
	selected disabled item.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add an array property to the form and name it aListItems1[9].
	
	3. In the Load event of the form, add the following code:
	
	     DIMENSION ThisForm.aListItems1[9]
	     ThisForm.aListItems1[1]="First"
	     ThisForm.aListItems1[2]="Second"
	     ThisForm.aListItems1[3]="\Third"
	     ThisForm.aListItems1[4]="Fourth"
	     ThisForm.aListItems1[5]="Fifth"
	     ThisForm.aListItems1[6]="Sixth"
	     ThisForm.aListItems1[7]="Seventh"
	     ThisForm.aListItems1[8]="\Eighth"
	     ThisForm.aListItems1[9]="Ninth"
	
	4. Add a TextBox to the form.
	
	5. Add a ListBox to the form, and set the properties as follows:
	
	     ControlSource = ThisForm.Text1.Value
	     RowSourceType = 5 - Array
	     RowSource = ThisForm.aListItems1
	
	6. Save and run the form.
	
	7. Using the keyboard arrows to move up and down in the ListBox, try to select
	  the disabled items. Note that the disabled item gets selected and the value
	  is displayed in the TextBox.
	
	Additional query words: kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500aBUG kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	
