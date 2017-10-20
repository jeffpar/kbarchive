---
layout: page
title: "Q150753: How to Create a &quot;Windows-type&quot; Incremental Search Box in VFP"
permalink: /kb/150/Q150753/
---

## Q150753: How to Create a &quot;Windows-type&quot; Incremental Search Box in VFP

{% raw %}

	Article: Q150753
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although the default List Box control has basic incremental search capabilities,
	the list box must have focus for the function to work. Its functionality differs
	from the implementation found in other Windows applications, such as the Search
	option of Help, where the string to be searched for is entered into a text box
	above a list box that displays the first matching item as each character is
	entered.
	
	This article describes how to create a technique that allows a list box to
	searched incrementally, regardless of its RowSource type.
	
	MORE INFORMATION
	================
	
	1. Create a new form in Form Designer.
	
	2. In the Data Environment, add Samples\Data\Customer.DBF.
	
	3. In the form, add a text box, and below it, add a list box.
	
	4. Set the list box RowSource Type as 6-Fields, RowSource as Company.
	
	5. In the InteractiveChange event of the text box, enter the following:
	
	     LOCAL nIndex, oList      && prevent conflict with other variables
	     oList = thisform.List1   && create object reference to list box
	
	     FOR nIndex = 1 TO oList.ListCount   && loop through each item
	
	        * compare the item in the list with the string entered
	        IF UPPER( oList.ListItem(nIndex) ) = UPPER( ALLTRIM( this.Value ) )
	           oList.ListIndex = nIndex   && select this item if matched
	           EXIT               && drop out of loop
	        ENDIF
	
	     ENDFOR
	
	     oList.Refresh       && update the display to show selected item
	
	Make corrections by backspacing over the incorrect characters, or by positioning
	the pointer in front of the character to be edited with the mouse. The list box
	then displays the item that contains the remaining characters within the text
	box.
	
	NOTE: Performance is effected by the number of records and the position of the
	item to be found within the list. Performance is improved by dividing the list
	into portions and substituting variables in the FOR statement which lowers the
	number of items to compare the text string with. In this example, the list is
	divided into quarters:
	
	     LOCAL cVal, cLen, c1st, c2nd, c3rd, n1st, n2nd, n3rd, nTop, nEnd, ;
	           nMax, oList
	     oList = Thisform.List1
	     * 1st = 1 to n2nd-1
	     nMax = oList.ListCount
	     n1st = INT( nMax * .25 ) && 1st quarter
	     n2nd = INT( nMax * .50 ) && 2nd quarter
	     n3rd = INT( nMax * .75 ) && 3rd quarter
	     c1st = UPPER( oList.ListItem[ n1st ] )   && avoids case sensitivity
	     c2nd = UPPER( oList.ListItem[ n2nd ] )   &&   when list contains
	     c3rd = UPPER( oList.ListItem[ n3rd ] )   &&   mixed case entries
	     cVal = ALLTRIM( UPPER( this.Value ) )    && first character caps
	     cLen = LEN( cVal )
	
	     DO CASE
	       CASE cVal <= LEFT( c1st, cLen )
	         nTop = 1
	         nEnd = n1st
	       CASE cVal <= LEFT( c2nd, cLen )
	         nTop = n1st + 1
	         nEnd = n2nd
	       CASE cVal <= LEFT( c3rd, cLen )
	         nTop = n2nd + 1
	         nEnd = n3rd
	       OTHERWISE
	         nTop = n3rd + 1
	         nEnd = nMax
	     ENDCASE
	
	     FOR nIndex = nTop TO nEnd   && loop through each item within range
	        IF UPPER( oList.ListItem[ nIndex ] ) = cVal
	           oList.ListIndex = nIndex   && select this item if matched
	           EXIT                  && drop out of loop
	        ENDIF
	     ENDFOR
	
	     oList.Refresh               && update the display to show selected item
	
	If the list is extensive and requires a large number of divisions, create an
	array as a property of the form, and assign the character and numeric division
	boundaries once in the Init event of the form instead of each time in the
	InteractiveChange event of the form. In the following example, the list is
	divided into sections:
	
	  Create the following two new Form properties: cLimit[9] and nLimit[9]
	  In the Init event of the form, enter:
	
	        LOCAL nDx, nMax
	        oLst = this.List1  && object reference to this form''''''''s list box
	        nMax = oLst.ListCount     && divide into tenths
	
	     FOR nDx = 1 TO 9
	
	        * assign number at each tenth boundary (used as index into list)
	        this.nLimit[ nDx ] = INT( nMax * ( .10 * nDx ) )
	
	        * assign list item found at this position in the list
	        this.cLimit[ nDx ] = UPPER( oLst.ListItem[ this.nLimit[ nDx ] ] )
	
	     ENDFOR
	
	  In the InteractiveChange event of the text box, enter:
	
	     LOCAL cVal, cLen, nTop, nEnd, nIdx, nDex, oLst
	     oLst = thisform.list1
	     cVal = ALLTRIM( UPPER( this.Value ) )
	     cLen = LEN( cVal )
	
	     * if not found in the sections checked, default to the last section
	     nTop = thisform.nLimit[ 9 ] + 1  && i.e., one past the end of the 9th
	     nEnd = oLst.ListCount            &&    section to the end of the list
	
	     IF cVal <= LEFT( thisform.cLimit[ 1 ], cLen ) && compare to 1st element
	        nTop = 1
	        nEnd = thisform.nLimit[1]
	     ELSE
	        FOR nIdx = 2 TO 9  && loop through the remaining section limits
	           IF cVal <= LEFT( thisform.cLimit[ nIdx ], cLen )
	              nTop = thisform.nLimit[ nIdx - 1 ] + 1 && previous end plus 1
	              nEnd = thisform.nLimit[ nIdx ]  && limit of current section
	              EXIT      && drop out of loop since section is found
	           ENDIF
	        ENDFOR
	     ENDIF
	
	     * the remaining code is the same structure as in the previous example
	     FOR nDex = nTop TO nEnd   && loop through each item with range
	
	        IF UPPER( oLst.ListItem[ nDex ] ) = cVal
	           oLst.ListIndex = nDex
	           EXIT
	        ENDIF
	     ENDFOR
	
	     oLst.Refresh
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : WINDOWS:3.0,3.0b,6.0
	
	=============================================================================
	

{% endraw %}
