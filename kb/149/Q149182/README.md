---
layout: page
title: "Q149182: DOCERR: NewIndex Property of Lists Doesn't Work as Documented"
permalink: /kb/149/Q149182/
---

## Q149182: DOCERR: NewIndex Property of Lists Doesn't Work as Documented

{% raw %}

	Article: Q149182
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Help file describes the NewIndex property of the ListBox and ComboBox
	controls thus:
	
	  Specifies the index of the item most recently added to a ComboBox or ListBox
	  control.
	
	Then, later in the same topic, it continues:
	
	  The NewIndex property is especially useful when adding items to a sorted
	  list.
	
	The NewIndex property does not work this way when new items are added to a sorted
	list. If a list is not sorted, the property simply returns the number of the
	last item in the list because it will always be the index of the last item
	added.
	
	MORE INFORMATION
	================
	
	If you need to use a sorted list, you can use the ItemIdtoIndex with in
	conjunction with the NewItemID property, which does work as expected.
	
	According to Help, if you add an item to a sorted list or combo box, NewIndex
	returns the number of the most recently added item. But this is not the case.
	Instead, it returns the number of the last item in the list, regardless of
	whether the list is sorted or not.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form, and place a combo box on the form.
	
	2. Type the following in the Init event of the combo box:
	
	       THIS.Sorted = .T.    && you can try it with Sorted either .T. or .F.
	     SET STEP ON          && to bring up the Trace window, allow stepping.
	     THIS.AddItem('AAA')  && Adds 'AAA' to the list
	     THIS.AddItem('BBB')  && Adds 'BBB' to the list
	     THIS.AddItem('CCC')  && Adds 'CCC' to the list
	     THIS.AddItem('ABC')  && If Sorted = .T., it should insert 'ABC' into
	                           * the list between item 'AAA' and item 'BBB' and
	                           * NewIndex should be 2.
	                           * If Sorted = .F., it should append 'ABC' to
	                           * the list and NewIndex should be 4.
	     THIS.AddItem('DDD')  && Adds 'DDD' to the list
	     THIS.AddItem('EEE')  && Adds 'EEE' to the list
	
	3. Place a command button on the form, and place the following code in its Click
	  event:
	
	     THISFORM.Combo1.AddItem('BCD')
	     * If Sorted = .T, it should insert 'BCD' into the list between item
	     * 'BBB' and item 'CCC'. NewIndex should be 4.
	     ? THISFORM.Combo1.ItemIdtoIndex(THISFORM.combo1.NewItemID)
	
	4. On the Program menu, click Debug, and enter the following lines into the
	  Debug window:
	
	     THISFORM.Combo1.NewIndex
	     _SCREEN.ActiveForm.Combo1.NewIndex
	
	5. Run the form, and use the Step menu item in the Trace window to step through
	  each of the commands as you watch the value of THISFORM.Combo1.NewIndex
	  change.
	
	6. Click the button on the form. Notice that the value displayed on the form is
	  4 if the Sorted property is true (.T.) while the Value displayed in the Debug
	  Window for NewIndex is 7.
	
	NOTE: If you have THIS.Sorted set to true (.T.), NewIndex does not so indicate
	when item 'ABC' is inserted into position 2 of the list.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
