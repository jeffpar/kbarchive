---
layout: page
title: "Q186084: HOWTO: Use the _arraylib Class from _utility Class Library"
permalink: /kb/186/Q186084/
---

## Q186084: HOWTO: Use the _arraylib Class from _utility Class Library

	Article: Q186084
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Inserting data into or removing data from an array can become a rather tedious
	programming task. Visual FoxPro 6.0 provides the _arraylib class in the
	_utility.vcx class library to facilitate inserting data into and removing data
	elements from arrays. The purpose of this article is to demonstrate use of the
	_arraylib class.
	
	MORE INFORMATION
	================
	
	The _arraylib class, included in the _utility.vcx class library, provides two
	functions for inserting data into and removing data from arrays. The insaitem
	method allows insertion of data into an array while the delaitem method allows
	deletion of an element from an array. In both cases, the name of the array is
	passed, by reference, to the method. The exact syntax is dependent on the method
	being called and how the method is used.
	
	You can use the delaitem method to delete a single array element or an entire row
	from a multi-dimensional array. The parameters accepted by the delaitem method
	are:
	
	  aArray    - The name of the array.
	  wziRow    - Parameter for the row to be deleted from the array.
	
	The name of the array and the row to delete are required parameters.
	
	Calls to the delaitem method use the following syntax:
	
	  THISFORM._arraylib1.delaitem(@array_name,array_row)
	
	You use the insaitem method to insert data elements into an array. The parameters
	accepted by the insaitem method are:
	
	  aArray    - The name of the array.
	  sContents - Contents to insert into the array.
	  iRow      - Optional parameter for the row to insert into.
	  lSetAll   - Optional parameter for propagating the contents passed in
	              sContents to all columns of the newly inserted row of the
	              array.
	
	The name of the array and the value to insert are required parameters. You may
	pass an optional numeric value in the parameter list indicating in which row to
	insert the array element. The insaitem method also accepts an optional logical
	parameter indicating whether or not the value passed in sContents is in all row
	elements of a multi-dimensional array. Calls to the insaitem method use the
	following syntax:
	
	  THISFORM._arraylib1.insaitem(@array_name,array_element[,[irow], [lsetall]])
	
	The code sample below illustrates use of the _arraylib class.
	
	1. Create a program file called Arraylib.prg using the following code:
	
	        CLOSE ALL
	        SET CLASSLIB TO HOME()+"FFC\_UTILITY.VCX"
	        outilobject=CREATEOBJECT('array_form')
	        outilobject.SHOW
	        READ EVENTS
	
	        DEFINE CLASS array_form AS FORM
	           TOP = 0
	           LEFT = 0
	           HEIGHT = 180
	           WIDTH = 220
	           DOCREATE = .T.
	           CAPTION = "_Utilities Demonstration"
	           NAME = "ARRAY_FORM"
	           AUTOCENTER=.T.
	
	           ADD OBJECT list1 AS LISTBOX WITH ;
	              HEIGHT = 125, ;
	              LEFT=05, ;
	              TOP = 10, ;
	              WIDTH = 100, ;
	              ROWSOURCETYPE=5, ;
	              ROWSOURCE="arraya"
	
	           ADD OBJECT list2 AS LISTBOX WITH ;
	              HEIGHT = 125, ;
	              LEFT=115, ;
	              TOP = 10, ;
	              WIDTH = 100, ;
	              ROWSOURCETYPE=5, ;
	              ROWSOURCE="arrayb"
	
	           ADD OBJECT command2 AS COMMANDBUTTON WITH ;
	              LEFT=10, ;
	              HEIGHT=25, ;
	              CAPTION="Close Form", ;
	              TOP=150, ;
	              WIDTH=200, ;
	              NAME = "Command2"
	
	           ADD OBJECT _arraylib1 AS _arraylib
	
	           PROCEDURE LOAD
	              PUBLIC arraya, arrayb
	              DECLARE arraya[4]
	              arraya[1]="Apple"
	              arraya[2]="Banana"
	              arraya[3]="Orange"
	              arraya[4]="Pear"
	              DECLARE arrayb[4]
	              arrayb[1]="Blueberry"
	              arrayb[2]="Cherry"
	              arrayb[3]="Grapefruit"
	              arrayb[4]="Strawberry"
	           ENDPROC
	
	           PROCEDURE list1.CLICK
	              LOCAL thisval
	              thisval=THISFORM.list1.VALUE
	              stringval=arraya[thisval]
	              FOR i=1 TO ALEN(arraya,1)
	                 THISFORM.list1.REMOVEITEM(1)
	              ENDFOR
	              THISFORM._arraylib1.insaitem(@arrayb,stringval,thisval-1)
	              THISFORM._arraylib1.delaitem(@arraya,thisval)
	              FOR i=1 TO ALEN(arraya,1)
	                 THISFORM.list1.ADDITEM(arraya[i])
	              NEXT
	              THISFORM.list2.NUMBEROFELEMENTS=ALEN(arrayb,1)
	              THISFORM.REFRESH
	           ENDPROC
	
	           PROCEDURE list2.CLICK
	              LOCAL thisval
	              thisval=THISFORM.list2.VALUE
	              FOR i=1 TO ALEN(arrayb,1)
	                 THISFORM.list2.REMOVEITEM(1)
	              ENDFOR
	              stringval=arrayb(thisval)
	              THISFORM._arraylib1.insaitem(@arraya,stringval)
	              THISFORM._arraylib1.delaitem(@arrayb,thisval)
	              FOR i=1 TO ALEN(arrayb,1)
	                 THISFORM.list2.ADDITEM(arrayb[i])
	              NEXT
	              THISFORM.list1.NUMBEROFELEMENTS=ALEN(arraya,1)
	              THISFORM.REFRESH
	           ENDPROC
	
	           PROCEDURE command2.CLICK
	              CLEAR EVENTS
	           ENDPROC
	
	        ENDDEFINE
	
	2. In the Command window enter the following:
	
	  " DO ARRAYLIB" (without the quotation marks)
	
	3. Click Apple in the first list box and notice that Apple is inserted the first
	  position of the second list box. Click Pear in the first list box and notice
	  that Pear is inserted into the third position of the second list box.
	
	  This occurs because the numeric position of the array element from arraya
	  passes to the _arraylib1.insaitem with the following syntax:
	
	  THISFORM._arraylib1.insaitem(@arrayb,stringval,thisval-1)
	
	  Consequently, the array element from arraya is inserted into arrayb at the
	  same row it had in arraya.
	
	4. Click Blueberry in the second list box noting that Blueberry is inserted at
	  the bottom of the first list box.
	
	  This occurs because the numeric position of the array element from arrayb is
	  not passing to the _arraylib1.insaitem method using the following syntax:
	
	  THISFORM._arraylib1.insaitem(@arraya,stringval)
	
	  Consequently, the array element from arrayb is inserted into the last row of
	  arraya.
	
	Additional query words: kbCodeSam kbVFp600 FxprgClassoop
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
