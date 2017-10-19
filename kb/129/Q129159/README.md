---
layout: page
title: "Q129159: How to Fill an Array Used as the Rowsource of a Combo Box"
permalink: /kb/129/Q129159/
---

## Q129159: How to Fill an Array Used as the Rowsource of a Combo Box

	Article: Q129159
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you define a list or combo box from an array, you should first declare the
	array as a property of the form. This causes the array to be visible to the form
	object, so the list or combo box can access it. You can then populate the array
	within one of the methods of the form. This article describes two techniques
	that can be used to populate the array and view its elements in a list box or a
	combo box.
	
	MORE INFORMATION
	================
	
	In the Form Designer, you can declare an array as a property of a form by
	choosing Form New Property from the System Menu. For more information about
	declaring and referencing the array declared as a member of a form, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q128737 How to Declare Arrays on Forms
	
	When a list box or combo box is initialized, it lists its elements from the
	source specified with the RowSource and RowSourceType properties. The number of
	elements displayed in the list is evaluated at definition time. If the
	RowSourceType is 5-Array, and if the array is not dimensioned at the time the
	list is defined, only one element will show. The number of elements displayed in
	the list is not automatically evaluated when a change is made to the array.
	Therefore, if the array is populated after the control is initialized, the
	number of elements in the list has to be reevaluated.
	
	Following are two methods you can use to populate an array used as the rowsource
	of a list box. They ensure that all of the elements of the array are visible,
	even when it is populated after the list box control has been initialized.
	
	Method One: Fill the Array in the Load Event Handler
	----------------------------------------------------
	
	The Load event of a form is executed before the objects are initialized. When the
	list or combo box controls are initialized, the array contains elements and the
	NUMBEROFELEMENTS property of the list box is calculated to accommodate all of
	the elements of the list. Here's an example:
	
	1. Declare the array atest(5) from the Form, New Property menu.
	
	2. In the method for the LOAD event of the form, type:
	
	     SELECT Cust_ID FROM SYS(2004)+"SAMPLES\DATA\CUSTOMER";
	        INTO ARRAY thisform.atest
	
	3. Place a Combo box on the form, and modify the following properties:
	
	     RowSourceType=5-Array
	     Rowsource='Thisform.atest'
	
	4. Save and run the Form. The list displays 90 elements.
	
	Method Two: Populate the Array in the Init Event Handler
	--------------------------------------------------------
	
	It is possible to place the code that initializes the array in the Init event
	handler of the control or the Init of the Form. However, in both cases, the
	array is filled after the number of elements for the list has been set. Because
	it is not dynamically evaluated, it is necessary to reevaluate the number of
	elements of the list to size it appropriately.
	
	Use the REQUERY method to re-query the source of the combo box. It will adjust
	the number of elements displayed in the list. You can also manually set the
	number of elements of the list by setting the NumberOfElements property of the
	list. The following example illustrates this behavior. To run the example, copy
	and paste the code in a program file. When the form is displayed, the list shows
	only one element. Click the Fill the list button to view the elements of the
	array in the list.
	
	     ofrm1 = CREATEOBJECT('frm1')
	     ofrm1.show
	     READ EVENTS
	
	  ***********************
	  ** Class definitions **
	  ***********************
	
	     DEFINE CLASS frm1 AS form
	     DIMENSION ATEST(1)
	     ADD OBJECT lsttest AS lstarray
	     ADD OBJECT cmdtest AS cmdquit
	     ADD OBJECT cmdquery AS cmdrequery
	     Caption = "Press the Button to See Elements in List"
	      PROCEDURE INIT
	      * Fills the array that is the source of the list box
	      DIMENSION this.atest(4)
	      THIS.ATEST(1)="Apples"
	      THIS.ATEST(2)="Oranges"
	      THIS.ATEST(3)="Peach"
	      THIS.ATEST(4)="Kiwi"
	     ENDPROC
	     ENDDEFINE
	
	     DEFINE CLASS lstarray AS listbox
	
	     Height = 85
	     Left = 84
	     Top = 60
	     * Defines the list as a list from an array
	     PROCEDURE INIT
	       This.RowSource = 'THIS.PARENT.Atest'
	       This.RowSourceType =5
	     ENDPROC
	     ENDDEFINE
	
	     DEFINE CLASS cmdquit AS Commandbutton
	     Top=150
	     Left=49
	     Caption= "Quit"
	
	     PROCEDURE click
	     RELEASE Thisform
	     CLEAR EVENTS
	     ENDDEFINE
	
	     DEFINE CLASS cmdrequery as COMMANDBUTTON
	     Top=150
	     Left=144
	     Caption= "Fill the list"
	     * The Click method goes through the controls of the form and refreshes
	     * the list.
	
	     PROCEDURE Click
	     NumberofControls=This.parent.controlcount
	     FOR I=1 to numberofcontrols
	      IF this.parent.controls(i).BaseClass="Listbox"
	        THIS.PARENT.controls(i).Requery
	      ENDIF
	      ENDFOR
	     THISFORM.REFRESH
	
	     ENDPROC
	     ENDDEFINE
	
	NOTE: You can use the REQUERY method to refresh a list or a combo box when the
	underlying data source is modified.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
