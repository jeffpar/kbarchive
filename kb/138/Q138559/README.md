---
layout: page
title: "Q138559: How to Append Records to a Grid"
permalink: /kb/138/Q138559/
---

## Q138559: How to Append Records to a Grid

	Article: Q138559
	Product(s): Microsoft FoxPro
	Version(s): 3.00 | 3.00b
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp600
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are times when a user may want to append a record when they get to the
	last record in a grid. This can be accomplished programmatically by using the
	BeforeRowColChange and the AfterRowColChange events as shown by example in this
	article.
	
	MORE INFORMATION
	================
	
	One important piece of the example is setting the buffer mode of the form to
	either optimistic or pessimistic. This allows the GETFLDSTATE() function to
	perform correctly. In addition, this sample code uses no index order on the
	data.
	
	Step-by-Step Example
	--------------------
	
	1. Open the Forms Designer, and drop a grid on it.
	
	2. Create a new property of the form called nLastRec.
	
	3. In the Init event of the grid, place this code:
	
	     GO BOTTOM
	     ThisForm.nLastRec = RECNO()
	     GO TOP
	
	4. Place the following code in the BeforeRowColChange event.
	
	     LPARAMETERS nColIndex   && This line is added automatically by FoxPro
	                             && nColIndex is current column the cursor is in
	     IF nColIndex = This.ColumnCount AND RECNO() = ThisForm.nLastRec ;
	       AND LASTKEY() = 9
	        APPEND BLANK
	        ThisForm.nLastRec = RECNO()
	        This.SetFocus
	     ENDIF
	
	  This code appends a record only if you press the TAB key to move through the
	  fields. Code would have to be added for conditionally appending records based
	  on different navigation through the fields.
	
	5. Place the following code in the AfterRowColChange event:
	
	     IF "3"$GETFLDSTATE(-1)
	        This.ActivateCell(This.ActiveRow, nColIndex)
	     ENDIF
	
	6. Add code similar to the following to commit the changes to the table. This
	  code can go into the Click event of a command button or in the Destroy event
	  of the form.
	
	     IF <condition to save>
	        =TableUpdate(.T.)
	     ELSE
	        =TableRevert(.T.)
	     ENDIF
	
	Additional query words: VFoxMac VFoxWin
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP600
	Version           : 3.00 | 3.00b
	
	=============================================================================
	
