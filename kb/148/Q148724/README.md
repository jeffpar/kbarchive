---
layout: page
title: "Q148724: How to Fill Second List with Values from Multiselect List Box"
permalink: /kb/148/Q148724/
---

## Q148724: How to Fill Second List with Values from Multiselect List Box

{% raw %}

	Article: Q148724
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using multiple page pageframes, you may find it useful to populate a list
	box on a following page with the values selected from a multiple- select list
	box on a previous page.
	
	This article demonstrates how to fill the first multiple-select list box from an
	array created by an SQL SELECT statement and then take the user's selections
	from this list box to fill the second list box on another page of the
	pageframe.
	
	The form has a command button that resets the multiple-select list so that the
	user can start making selections on a clean unselected list. Initially, this
	button is disabled; it becomes enabled when at least one selection is made in
	the multiple-select list box. When the user clicks the button to reset the list,
	the command button again becomes disabled.
	
	The form also checks whether a selection was made on the first list. If no items
	are chosen in the first list, the display value of the second list shows "No
	Selection Made" in the list. This feature is optional.
	
	MORE INFORMATION
	================
	
	NOTE: To select multiple items from a multiple-select list, hold down the CTRL
	key while clicking with the mouse. To select a contiguous range of items, click
	first item in the range, and then hold down the SHIFT key as you click the last
	item.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form.
	
	2. In the form designer, choose New Property from the Form menu. Enter the
	  following array in the name box. Then click OK:
	
	     aSelected(1)
	
	  Again choose New Property from the Form menu. Enter the variable that will be
	  used to count the selected items in the name box. Then click OK:
	
	     nCount
	
	3. Right-click the form, and select Data Environment. Then right-click the Data
	  Environment window, and click Add. Click the Other button, and add the
	  Employee table from the \VFP\Samples\Data directory.
	
	4. Add a page frame to the form by selecting the PageFrame control from the Form
	  Controls toolbar and clicking the form. Resize the page frame if needed.
	
	5. Right-click the page frame, and select Edit. A hatched border is drawn around
	  the page frame.
	
	6. Right-click Page1 and select Properties. Select the All tab from the
	  Properties sheet, and add the following code to the listed events for Page1
	  of the page frame:
	
	     Activate event:
	
	     Thisform.nCount=0                 && Reset nCount when page is selected
	     Thisform.aSelected=" "            && Reinitialize array to empty string
	     DIMENSION Thisform.aSelected(1)   && Redimension array to one element
	
	     FOR i=1 TO This.List1.ListCount   && Loop through number items in List
	        IF This.List1.Selected=.T.     && If an item is selected in List,
	           This.List1.Selected=.F.     && the Selected property is .T.
	        ENDIF
	     ENDFOR
	
	     This.List1.ListIndex=0            && Reset the index number of List box
	     This.List1.RowSource=This.List1.RowSource
	     This.Refresh                      && Force List and Form to refresh
	
	     Deactivate event:
	
	     This.Command1.Enabled=.F.
	     LOCAL narraycnt
	     narraycnt=1
	
	     FOR i=1 TO This.List1.ListCount    && Loop through Selected array, if
	        IF This.List1.Selected(i)=.T.   && true, increment nCount variable.
	           Thisform.nCount=Thisform.nCount+1
	        ENDIF
	     ENDFOR
	
	     IF Thisform.nCount=0               && No selection made, set nCount=1
	        Thisform.nCount=1
	        Thisform.aSelected(Thisform.nCount)="No Selection Made!"
	     ENDIF
	
	     DIMENSION Thisform.aSelected(Thisform.nCount)  && Dimension array
	
	     FOR i=1 TO This.List1.Listcount     && Loop through items in List,
	        IF This.List1.Selected(i)=.T.    && if Selected-look at List property
	           Thisform.aSelected(narraycnt)=This.List1.List(i)
	           narraycnt=narraycnt+1
	        ENDIF
	     ENDFOR
	
	7. With the pageframe still in edit mode, add a list box to Page1 of the page
	  frame by selecting the ListBox control from the Form Controls toolbar and
	  clicking Page1.
	
	8. Right-click the list box and select Properties, or click the Properties
	  window if it is already available. Select the All tab from the Properties
	  sheet, and modify the following properties and events:
	
	     RowSource - Enter the following on one, single line:
	
	     SELECT DISTINCT Employee.Title from Testdata!Employee ORDER BY
	        Employee.Title INTO CURSOR mlist WHERE NOT EMPTY(Employee.Title)
	
	     RowSourceType: 3 - SQL Statement
	
	     MultiSelect: .T.
	
	     Click Event:
	
	     This.Parent.Command1.Enabled=.T.           &&  Enable 'RESET' button
	
	9. Add a command button to page 1 while the page frame is in edit mode.
	  Configure the command button with the following properties and events:
	
	     Caption: Reset List
	
	     Click Event:
	
	     This.Parent.List1.ListIndex=0            &&  Reset ListIndex property
	     This.Parent.List1.RowSource=This.Parent.List1.RowSource
	     This.Parent.Refresh                      &&  Refresh List and Page
	     This.Enabled=.F.                         &&  Disable 'RESET' button
	     This.Parent.List1.Setfocus               && Put focus on list
	
	10. With the page frame in edit mode, click the Page2 tab on the page frame. Add
	  the following events to Page2 of the pageframe:
	
	      Activate event:
	
	      This.List1.Requery             && Issue Requery to display/refresh
	
	11. Add a list box to Page2 with the following properties:
	
	      RowSource: Thisform.aSelected
	
	      RowSourceType: 5 - Array
	
	Additional query words: VFoxWin listbox multiselect listcount selected list
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : 3.00 3.00b
	
	=============================================================================
	

{% endraw %}
