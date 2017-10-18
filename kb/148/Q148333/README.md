---
layout: page
title: "Q148333: How to Create a Multiple-Select Mover List Box Using Code"
permalink: kb/148/Q148333/
---

## Q148333: How to Create a Multiple-Select Mover List Box Using Code

	Article: Q148333
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In many examples and documentation showing the List Control in Visual FoxPro,
	you may see a mover list or multiple-select mover list shown. To see the code
	for a mover list box, type the following command in the Command window, and
	select Sample.vcx in the open dialog window:
	
	  MODIFY CLASS ? OF C:\Vfp\Samples\Controls\Samples.vcx
	
	Then select Moverlist under Classname. Code can be used from the Samples.VCX to
	create your own mover list box. The code in this article illustrates this.
	
	MORE INFORMATION
	================
	
	The following code creates a mover list box that stores the field names of a
	table in a list box. The values can then be moved into a second list box. A
	BROWSE FIELDS statement is then issued based on the contents of the second list
	box.
	
	Step-by-Step Example
	--------------------
	
	1. Create a new form, and add a table to the Data Environment.
	
	2. Set the AutoOpenTables and the AutoCloseTables properties values in the Data
	  Environment to false (.F.).
	
	3. Place the following code in the Init event of the form:
	
	     PUBLIC blist        && variable used in the Browse Button
	     blist=''
	     USE <tablename>
	     FOR gnCount = 1 TO FCOUNT( )   && Loop for number of fields
	        THISform.list1.ADDITEM(Field(gnCount))
	     NEXT
	
	4. Place the following code in the Doubleclick event of the List1 box:
	
	     Thisform.Lockscreen=.T.
	     nCnt = 1
	     DO WHILE nCnt <= Thisform.List1.ListCount
	        IF Thisform.List1.Selected(nCnt)
	           Thisform.List2.AddItem(Thisform.List1.List(nCnt))
	           Thisform.List1.RemoveItem(nCnt)
	        ELSE
	           nCnt = nCnt + 1
	        ENDIF
	     ENDDO
	     Thisform.Lockscreen=.F.
	
	5. Place the following code in the Doubleclick event of the List2 box:
	
	     Thisform.Lockscreen=.T.
	     nCnt = 1
	     DO WHILE nCnt <= thisform.list2.ListCount
	        IF Thisform.List2.Selected(nCnt)
	           Thisform.List1.AddItem(Thisform.List2.List(nCnt))
	           Thisform.List2.RemoveItem(nCnt)
	        ELSE
	           nCnt = nCnt + 1
	        ENDIF
	     ENDDO
	     Thisform.Lockscreen=.F.
	
	6. Place the following code in the Click event of a command button to move a
	  selection from List1 to List2 ( > ):
	
	     Thisform.Lockscreen=.T.
	     cnt=Thisform.List1.Listindex
	     IF Thisform.List1.Selected(cnt) = .T.
	       nCnt = 1
	       DO WHILE nCnt <= Thisform.List1.ListCount
	        IF Thisform.List1.Selected(nCnt)
	          Thisform.List2.AddItem(Thisform.List1.List(nCnt))
	          Thisform.List1.RemoveItem(nCnt)
	        ELSE
	          nCnt = nCnt + 1
	        ENDIF
	       ENDDO
	     ELSE
	       =MESSAGEBOX('Please Highlight Your Choice')
	     ENDIF
	
	     Thisform.Lockscreen=.F.
	
	7. Place the following code in the Click event of a command button to move all
	  the values from the List1 to List2 ( >> ):
	
	     Thisform.LockScreen = .T.
	     FOR i = 1 to Thisform.List1.ListCount
	        Thisform.List2.AddItem(Thisform.List1.List(i))
	     ENDFOR
	     Thisform.list1.Clear
	     Thisform.LockScreen = .F.
	
	8. Place the following code in the Click event of a command button to move a
	  selection from List2 to List1 ( < ):
	
	     Thisform.Lockscreen=.T.
	     cnt=Thisform.List2.Listindex
	     IF Thisform.List2.Selected(cnt) = .T.
	        nCnt = 1
	     DO WHILE nCnt <= Thisform.List2.ListCount
	      IF Thisform.List2.Selected(nCnt)
	       Thisform.List1.AddItem(Thisform.List2.List(nCnt))
	       Thisform.List2.RemoveItem(nCnt)
	      ELSE
	       nCnt = nCnt + 1
	      ENDIF
	     ENDDO
	     ELSE
	     =MESSAGEBOX('Please Highlight Your Choice')
	     ENDIF
	     Thisform.Lockscreen=.F.
	
	9. Place the following code in the Click event of a command button to move all
	  the values from List2 to List1 ( << ):
	
	     Thisform.LockScreen = .T.
	     FOR i = 1 to thisform.list2.ListCount
	       Thisform.List1.AddItem(Thisform.List2.List(i))
	     ENDFOR
	     Thisform.List2.Clear
	     Thisform.LockScreen = .F.
	
	10. Place The Following Code In The Click event of a Browse button:
	
	      blist=''
	      bval=''
	      Thisform.LockScreen = .T.
	      FOR x = 1 to Thisform.List2.Listcount
	        IF x=1
	           blist=Thisform.List2.List(x)
	        ELSE
	           blist=','+Thisform.List2.List(x)
	        ENDIF
	           bval=bval+blist
	      ENDFOR
	      Thisform.LockScreen = .F.
	      BROWSE FIELDS &bval
	
	11. Place the following code in the click event of an Exit button: USE
	  Thisform.Release
	
	12. Run the form.
	
	REFERENCES
	==========
	
	For more information about mover list boxes, please see the following article in
	theMicrosoft Knowledge Base:
	
	  Q142190 How to Create Mover List Boxes in Visual FoxPro
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
