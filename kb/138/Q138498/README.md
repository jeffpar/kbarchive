---
layout: page
title: "Q138498: How to Use Additem and AddListItem and How They Are Different"
permalink: kb/138/Q138498/
---

## Q138498: How to Use Additem and AddListItem and How They Are Different

	Article: Q138498
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Both the AddItem and AddListItem methods add items to combo boxes or list boxes.
	This article highlights their functionality and the differences between the two
	methods. In particular, this article demonstrates why the AddListitem method
	might be a better way to populate a multiple-column combo box.
	
	MORE INFORMATION
	================
	
	The Additem and AddlistItem methods add items to a list and accept two optional
	parameters. The differences between the two methods are mirrored in the
	differences between their first parameter; AddItem accepts nListIndex as its
	first parameter, and AddListItem accepts nListItemId as its first parameter.
	
	There are two ways to identify an item in a list:
	
	- Its relative position, which represents the order in which the items are
	  displayed in the list. If an item is added to the list, the relative position
	  of other items might change. This is similar to the index order of a table.
	  The integer that holds this value is referred as nIndex.
	
	- Its absolute position, which represents the order in which the item is added
	  to the list. This value is not dependent on the way items are displayed in
	  the list, and it does not change as the number of items in the list are
	  modified. This concept is similar to the RECNO() function, which is used to
	  identify records in a table. The integer that holds this value is referred as
	  nItemId.
	
	These two numbers can be identical, but they are different when the list is
	sorted, or when items are added or removed from the list.
	
	The Additem method inserts an item based on its relative position in the list.
	The syntax is:
	
	  Control.AddItem(cItem [, nIndex] [, nColumn])
	
	The AddListItem method allows you to create a unique id for the item, and uses
	nItemId. If the item already exists, the prompt is replaced. The syntax is:
	
	  Control.AddListItem(cItem [, nItemID] [, nColumn])
	
	The following example illustrates how to use the Additem and AddListItem methods.
	To run the example, copy and paste the code in a program file.
	
	Sample Code
	-----------
	
	  Omyform=CREATE('myform')
	  Omyform.Show()
	  READ EVENTS
	
	  DEFINE Class myform AS Form
	     ADD OBJECT list1 AS mylist
	     ADD OBJECT list2 AS mylist2
	     ADD OBJECT cmd1 AS cmdquit
	  ENDDEFINE
	
	  DEFINE Class cmdquit AS CommandButton
	     Top=105
	     Left = 55
	     Caption="Quit"
	     PROCEDURE Click
	        CLEAR EVENTS
	        RELEASE Thisform
	     ENDPROC
	  ENDDEFINE
	
	  DEFINE Class mylist AS ListBox && Defines a list filled with Additem
	     Top = 3
	     Left=5
	     Width=90
	     Height=90
	     RowSourceType=0
	     PROCEDURE Init
	        This.AddItem('Apples',1)
	        This.AddItem('Oranges',2)
	        This.AddItem('Lemons',2)  && Element inserted before 'Oranges'
	     ENDPROC
	  ENDDEFINE
	
	  DEFINE Class mylist2 AS ListBox &&Defines a list filled with AddListitem
	     Top = 3
	     Left=100
	     Width=90
	     Height=90
	     RowSourceType=0
	
	     PROCEDURE Init
	        This.AddListItem('Apples',1)
	        This.AddListItem('Oranges',2)
	        This.AddListItem('Lemons',2) && Prompt overwrites 'Oranges'
	     ENDPROC
	  ENDDEFINE
	
	Multiple-Column List Boxes
	--------------------------
	
	The AddItem method might not yield expected results when it is used to populate a
	multiple-column list box. The following step-by-step example illustrates how the
	elements of a multiple-column list box are displayed when the AddItem method is
	used.
	
	1. Create a form.
	
	2. Place a list box on the form.
	
	3. Change the following properties of the list box:
	
	     ColumnCount : 2
	     ColumnWidths: 80,80
	
	4. Save the form as TestForm, and run it.
	
	5. In the Command window, type:
	
	     TestForm.List1.AddItem("One",1,1)
	     TestForm.List1.AddItem("Two",1,2)
	     TestForm.List1.AddItem("Three",2,1)
	     TestForm.List1.AddItem("Four",2,2)
	
	The resulting list looks as follows:
	
	   ---------------------
	   |         |   Two    |
	   |         |   Four   |
	   | Three   |          |
	   | One     |          |
	   ---------------------
	
	This occurs because the AddItem inserts each item at the relative position
	specified by the nIndex integer.
	
	Use the ListItemId to populate a multiple-column combo box and add items on the
	same row. By using the example above and replacing AddItem with AddListItem, the
	list looks like this:
	
	  ------------------------
	  | One       | Two      |
	  | Three     | Four     |
	  ------------------------
	
	For more information about the AddItem and AddListItem methods, search for
	"AddItem" or "AddListItem" in the Visual FoxPro Help file.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
